# Dockerized Runtime – `leds-tools-made-docker`

## Purpose

Provides a containerized environment to run MADE report generation from JSON or DSL data using the `made-lib`.

## Main Components

### Docker/Compose Setup

- Dockerfile to run the Node.js environment with `made-lib`.
- `docker-compose.yml` for local dev/testing.

### Directory Mapping

- `/app/config`: Configuration files like `directories.json`.
- `/host`: Where `.made` or `.json` data is read.

### Source Code

- `src/index.ts`: Entrypoint CLI logic
- `src/index.test.ts`: Unit tests

### Documentation Assets

- `example_1/sprints/sprint1.md`: Sprint reports
- `02_backlogs.md`, `03_roadmap.md`: Project documentation
