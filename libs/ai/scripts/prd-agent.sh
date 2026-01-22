#!/bin/bash
set -o pipefail  # Make pipes return exit code of first failing command

# Portable prd-agent.sh - reads configuration from environment variables
# Used by: npx @okam/ai ralph [iterations]
#
# Environment variables (set by ralph.ts):
#   RALPH_AGENT        - AI agent to use: "claude" or "codex" (default: claude)
#   RALPH_CONTEXT      - Path to context directory (default: current working directory)
#   RALPH_PRD          - Path to prd.json file (default: prd.json)
#   RALPH_PROGRESS     - Path to progress.txt file (default: progress.txt)
#   RALPH_VERIFICATION - Verification command to run after each task (default: Run your tests and type checks.)

if [ -z "$1" ]; then
  echo "Usage: $0 <iterations>"
  echo "  iterations: positive integer (1 or greater)"
  exit 1
fi

# Validate that iterations is a positive integer (1 or greater)
if ! [[ $1 =~ ^[1-9][0-9]*$ ]]; then
  echo "Error: iterations must be a positive integer (1 or greater), got: '$1'"
  exit 1
fi

# Read configuration from environment variables with defaults
AGENT="${RALPH_AGENT:-claude}"
CONTEXT_PATH="${RALPH_CONTEXT:-$(pwd)}"
PRD_PATH="${RALPH_PRD:-prd.json}"
PROGRESS_PATH="${RALPH_PROGRESS:-progress.txt}"
VERIFICATION="${RALPH_VERIFICATION:-Run your tests and type checks.}"

# Get the PRD filename for the prompt (just the filename, not full path)
PRD_FILENAME=$(basename "$PRD_PATH")

consecutive_failures=0
max_failures=$1  # Use iteration count as max consecutive failures

# Build the prompt dynamically using environment variables
PROMPT="@${PRD_PATH} \\
@${CONTEXT_PATH} \\
CONTEXT: \\
- Working directory: ${CONTEXT_PATH} \\
- PRD file: ${PRD_PATH} \\
- Progress file: ${PROGRESS_PATH}

VERIFICATION COMMANDS: \\
${VERIFICATION}

1. Read ${PRD_FILENAME} and progress.txt. Find ONE task with status: pending to work on.
2. Pick the highest-priority task YOU decide should be handled first.
3. Update the task status to in_progress in ${PRD_FILENAME} before starting. \\
4. ${VERIFICATION} \\
5. Update ${PRD_FILENAME}: set status: completed for the finished task. Add notes if relevant. \\
6. Append your progress to progress.txt. \\
7. Make a git commit with a descriptive message. \\

CRITICAL: Only work on ONE task per iteration. \\
If all tasks in ${PRD_FILENAME} have status: completed, output <promise>COMPLETE</promise>."

# Function to run Claude CLI
run_claude() {
  local tmpfile="$1"

  # jq filters for real-time streaming
  local stream_text='select(.type == "assistant").message.content[]? | select(.type == "text").text // empty | gsub("\n"; "\r\n") | . + "\r\n\n"'

  claude --dangerously-skip-permissions \
    --print \
    --verbose \
    --model "claude-sonnet-4-20250514" \
    --output-format stream-json \
    "$PROMPT" \
    | grep --line-buffered '^{' \
    | tee "$tmpfile" \
    | jq --unbuffered -rj "$stream_text"
}

# Function to run Codex CLI
run_codex() {
  local tmpfile="$1"

  # jq filter for codex streaming - extract message text from agent_message items
  local stream_text='select(.item.type == "agent_message").item.content[]?.text // empty | gsub("\n"; "\r\n") | . + "\r\n\n"'

  # Use 'codex exec' for non-interactive mode with --json for JSONL output
  codex exec \
    --dangerously-bypass-approvals-and-sandbox \
    --model "o3" \
    --json \
    "$PROMPT" \
    | tee "$tmpfile" \
    | jq --unbuffered -rj "$stream_text"
}

# Function to extract result from captured JSON based on agent
# Filters to only actual response text, excluding thinking/reasoning blocks
extract_result() {
  local tmpfile="$1"
  local agent="$2"

  if [ "$agent" = "codex" ]; then
    # Codex: extract only from agent_message items (not reasoning items)
    # Filter to agent_message type and extract text content
    jq -rs '[.[] | select(.item.type == "agent_message") | .item.content[]? | select(.type == "text" or .type == "output_text" or has("text")) | .text // empty] | join("")' "$tmpfile"
  else
    # Claude: extract text content from assistant messages, excluding thinking blocks
    # Filter to text blocks only (not thinking blocks which have .type == "thinking")
    jq -rs '[.[] | select(.type == "assistant") | .message.content[]? | select(.type == "text") | .text // empty] | join("")' "$tmpfile"
  fi
}

for ((i=1; i<=$1; i++)); do
  echo ""
  echo "========================================"
  echo "RALPH ITERATION $i ($(date '+%H:%M:%S')) - Agent: $AGENT"
  echo "========================================"

  tmpfile=$(mktemp)
  trap "rm -f $tmpfile" EXIT

  # Run the appropriate CLI based on agent
  run_success=false
  if [ "$AGENT" = "codex" ]; then
    if run_codex "$tmpfile"; then
      run_success=true
    fi
  else
    if run_claude "$tmpfile"; then
      run_success=true
    fi
  fi

  if [ "$run_success" = false ]; then
    echo ""
    echo "Warning: $AGENT command failed (iteration $i)"
    ((consecutive_failures++))

    if [ "$consecutive_failures" -ge "$max_failures" ]; then
      echo "Error: $consecutive_failures consecutive failures (max: $max_failures). Stopping."
      exit 1
    fi

    echo "Consecutive failures: $consecutive_failures/$max_failures"
    echo "Waiting 5 seconds before retry..."
    sleep 5
    continue
  fi

  # Reset consecutive failures on success
  consecutive_failures=0

  # Extract final result from captured JSON
  result=$(extract_result "$tmpfile" "$AGENT")

  echo ""
  echo "----------------------------------------"

  # Check for completion signal
  if [[ "$result" == *"<promise>COMPLETE</promise>"* ]]; then
    echo "PRD complete, exiting."
    echo "All tasks complete after $i iterations"
    exit 0
  fi

  # Check prd.json directly for remaining tasks
  # Note: grep -c outputs count and exits 1 when no matches, so we use || true to suppress exit code
  pending=$(grep -c '"status": "pending"' "$PRD_PATH" 2>/dev/null || true)
  pending=${pending:-0}
  in_progress=$(grep -c '"status": "in_progress"' "$PRD_PATH" 2>/dev/null || true)
  in_progress=${in_progress:-0}
  blocked=$(grep -c '"status": "blocked"' "$PRD_PATH" 2>/dev/null || true)
  blocked=${blocked:-0}
  echo "Tasks: $pending pending, $in_progress in progress, $blocked blocked"

  if [ "$pending" -eq 0 ] && [ "$in_progress" -eq 0 ]; then
    echo "ALL TASKS COMPLETE!"
    if [ "$blocked" -gt 0 ]; then
      echo "Note: $blocked tasks are blocked"
    fi
    echo "All tasks complete after $i iterations"
    exit 0
  fi

  sleep 2
done

echo "Reached max iterations ($1). Check progress.txt for status."
