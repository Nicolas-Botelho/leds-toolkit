# GitHub Actions Automation – `leds-tools-made-githubaction`

## Purpose

Automates report generation using the Docker tool and sends notifications via Discord.

## Main Components

### GitHub Workflows

- `made-report.yml`: Generates reports on schedule, push, or manually.
- `discord-notify.yml`: Sends daily updates to Discord.

### Config & Secrets

- `directories.json`: Tells the container which paths to process.
- Secrets: `DISCORD_WEBHOOK`, `GITHUB_TOKEN`

### Data Structure

- `/example/db/`: Holds project JSONs (backlog, issue, roadmap, etc.)
- `/example/*.md`: Generated documentation

## Key Directories

```
.github/workflows/      # Automation workflows
config/                 # directories.json
example/db/             # Source data (JSON)
example/sprints/        # Output markdown reports
```
