# VS Code Extension – `leds-tools-made`

## Purpose

Core plugin that lets users define projects and agile data through a custom DSL (`.made` files). It interprets those files, manages data via modular applications, and can generate documentation via integration with `made-lib`.

## Main Components

### Applications

Located in `application/`. Each handles a domain like Project, Team, TimeBox, Backlog, etc.

### Langium DSL Integration

Found in `language/`, defining the grammar for `.made` files, scope resolution, and linking.

### Report Generation

Integrated with `made-lib` to output markdown, charts, and documentation.

## Key Directories

```
application/       # Project, Team, TimeBox, Issue, Backlog, etc.
language/          # Langium grammar and generated parser
static/            # Monaco Editor UI files
example/           # Sample .made files
```
