#!/bin/bash
set -o pipefail  # Make pipes return exit code of first failing command

# Portable ralph.sh - reads configuration from environment variables
# Used by: npx @okam/ai ralph [iterations]
#
# Environment variables (set by ralph.ts):
#   RALPH_MODEL    - Claude model to use (default: claude-sonnet-4-20250514)
#   RALPH_CONTEXT  - Path to context directory (default: current working directory)
#   RALPH_PRD      - Path to prd.json file (default: prd.json)
#   RALPH_PROGRESS - Path to progress.txt file (default: progress.txt)

if [ -z "$1" ]; then
  echo "Usage: $0 <iterations>"
  exit 1
fi

# Read configuration from environment variables with defaults
MODEL="${RALPH_MODEL:-claude-sonnet-4-20250514}"
CONTEXT_PATH="${RALPH_CONTEXT:-$(pwd)}"
PRD_PATH="${RALPH_PRD:-prd.json}"
PROGRESS_PATH="${RALPH_PROGRESS:-progress.txt}"

# Get the PRD filename for the prompt (just the filename, not full path)
PRD_FILENAME=$(basename "$PRD_PATH")

consecutive_failures=0
max_failures=$1  # Use iteration count as max consecutive failures

# jq filters for real-time streaming
stream_text='select(.type == "assistant").message.content[]? | select(.type == "text").text // empty | gsub("\n"; "\r\n") | . + "\r\n\n"'
final_result='select(.type == "result").result // empty'

# Build the prompt dynamically using environment variables
PROMPT="@${PRD_PATH} \\
@${CONTEXT_PATH} \\
CONTEXT: \\
- Working directory: ${CONTEXT_PATH} \\
- PRD file: ${PRD_PATH} \\
- Progress file: ${PROGRESS_PATH}

VERIFICATION COMMANDS: \\
- Build all: npx nx run-many -t build \\
- Lint all: npx nx run-many -t lint \\
- Test all: npx nx run-many -t test \\

1. Read ${PRD_FILENAME} and progress.txt. Find ONE task with status: pending to work on.
2. Pick the highest-priority task YOU decide should be handled first.
3. Update the task status to in_progress in ${PRD_FILENAME} before starting. \\
4. Run your tests and type checks. \\
5. Update ${PRD_FILENAME}: set status: completed for the finished task. Add notes if relevant. \\
6. Append your progress to progress.txt. \\
7. Make a git commit with a descriptive message. \\

CRITICAL: Only work on ONE task per iteration. \\
If all tasks in ${PRD_FILENAME} have status: completed, output <promise>COMPLETE</promise>."

for ((i=1; i<=$1; i++)); do
  echo ""
  echo "========================================"
  echo "RALPH ITERATION $i ($(date '+%H:%M:%S'))"
  echo "========================================"

  tmpfile=$(mktemp)
  trap "rm -f $tmpfile" EXIT

  # Run Claude with real-time streaming output
  if ! claude --dangerously-skip-permissions \
    --print \
    --verbose \
    --model "$MODEL" \
    --output-format stream-json \
    "$PROMPT" \
    | grep --line-buffered '^{' \
    | tee "$tmpfile" \
    | jq --unbuffered -rj "$stream_text"; then

    echo ""
    echo "Warning: Claude command failed (iteration $i)"
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
  result=$(jq -r "$final_result" "$tmpfile")

  echo ""
  echo "----------------------------------------"

  # Check for completion signal
  if [[ "$result" == *"<promise>COMPLETE</promise>"* ]]; then
    echo "PRD complete, exiting."
    echo "All tasks complete after $i iterations"
    exit 0
  fi

  # Check prd.json directly for remaining tasks
  pending=$(grep -c '"status": "pending"' "$PRD_PATH" 2>/dev/null || echo "0")
  in_progress=$(grep -c '"status": "in_progress"' "$PRD_PATH" 2>/dev/null || echo "0")
  blocked=$(grep -c '"status": "blocked"' "$PRD_PATH" 2>/dev/null || echo "0")
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
