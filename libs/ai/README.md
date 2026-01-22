# @okam/ai

CLI for AI-assisted PRD (Product Requirements Document) task processing.

## Installation

```bash
npx @okam/ai <command>
```

## Commands

### `init`

Initialize a new PRD project with `prd.json` and `progress.txt` templates.

```bash
npx @okam/ai init
npx @okam/ai init --force  # Overwrite existing files
```

Creates a `prd.json` with the following structure:

```json
{
  "project": "",
  "goal": "",
  "config": {
    "agent": "claude",
    "context": "",
    "verification": "Run your tests and type checks."
  },
  "statuses": {
    "pending": "Not started",
    "in_progress": "Currently being worked on",
    "completed": "Done",
    "blocked": "Waiting on external dependency"
  },
  "tasks": [
    { "id": "1", "description": "", "status": "pending", "steps": [] }
  ]
}
```

Also creates a `progress.txt` log with a creation date header.

### `ralph`

Run an AI agent to process PRD tasks iteratively.

```bash
npx @okam/ai ralph              # Run 1 iteration
npx @okam/ai ralph 5            # Run 5 iterations
npx @okam/ai ralph -a codex     # Use Codex CLI instead of Claude
```

Requires either the `claude` CLI (for `--agent claude`) or the `codex` CLI (for `--agent codex`).

**Options:**

| Flag | Description | Default |
|------|-------------|---------|
| `-a, --agent <agent>` | AI agent to use (`claude` or `codex`) | `claude` |
| `-c, --context <path>` | Additional context file or directory | Current working directory |
| `-v, --verification <cmd>` | Verification command after each task | `Run your tests and type checks.` |
| `-p, --prd <path>` | Path to prd.json file | `prd.json` |
| `--progress <path>` | Path to progress.txt file | `progress.txt` |

**Configuration priority:** CLI flags > `prd.json` config > defaults. If `config.context` is a relative path, it is resolved relative to the PRD file.

### `archive`

Archive `prd.json` and `progress.txt` to `archive/` folder with timestamped filenames.

```bash
npx @okam/ai archive
```

Files are renamed to: `{type}_{project-slug}_{YYYY-MM-DD_HH-mm-ss}.{ext}`

Example: `prd_my-project_2026-01-22_11-35-31.json`

## Configuration

Configure defaults in your `prd.json` config section:

```json
{
  "config": {
    "agent": "claude",
    "context": "NX monorepo with React, TypeScript, Tailwind CSS",
    "verification": "npx nx run-many -t build lint test"
  }
}
```

## Development

```bash
nx build ai      # Build the library
nx test ai       # Run unit tests
nx lint ai       # Run linting
```
