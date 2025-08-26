# Reporting & Visualization Library – `leds-tools-made-lib`

## Purpose

Generates markdown documentation and SVG diagrams from JSON or `.made`-derived data. This is the core reporting and visualization engine.

## Main Components

### Models (`models.ts`)

Data classes for Project, Sprint, Issue, etc.

### Markdown Services

- `MarkdownService.ts`: Orchestrates documentation generation.
- `MarkdownBacklogService.ts`, `MarkdownTimeBoxService.ts`, `MarkdownRoadmapService.ts`: Generate content for each respective domain.

### Chart Generators

- `CumulativeFlowDiagram.ts`, `ProjectCFD.ts`, `ProjectThroughputGenerator.ts`, etc.

### Dependency Analysis

- `ProjectDependencyAnalyzer.ts`: Outputs Mermaid diagrams.

### Graph Utilities

- `graph.ts`: Builds task-dependency graphs and checks cycles.

## Key Directories

```
markdown/           # MarkdownBacklogService, TimeBoxService, etc.
chart/              # SVG chart generators like CFD, throughput, dependencies
example/            # Generated markdown reports and diagrams
util/               # Common helpers (file paths, formatting)
```
