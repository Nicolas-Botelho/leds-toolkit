---
sidebar_position: 6
title: Andes Lib Architecture
---

## Overview of the Modules

```
src/
├── application/    # High-level applications (builders, creators, parsers)
├── documentation/  # Integration with Docusaurus
├── graph/          # Graph manipulation
├── model/          # Model and type definitions
├── renders/        # Rendering in different formats
```

---

## Modules

### 1. `application/`
Contains the **application logic** that orchestrates the models and generates artifacts.

- **`domain/`** → Main domain construction (e.g., `BuildDomain.ts`).
- **`purpose/`** → Purpose and scope of the modules.
- **`requirements/`** → Requirements parsers (`GraphParser`, `TableParser`, `RequirementsExtractor`).
- **`usecase/`** → Creation and parsing of use cases.
- **`made/`** → Creation of applications based on **defaults** (backlog, epics, stories).
- **Root files** → `ApplicationCreator.ts`, `DocusaurusCreator.ts`, `IO.ts`.

> ⚡ Role: transform the models (in `model/`) into usable/documentable applications.

---

### 2. `documentation/`
Integration with **Docusaurus**, including generation of diagrams and use cases.

- **`docusaurus/`**
  - `ClassDiagram.ts` → Class diagram creation.
  - `ModelUseCases.ts` → Use case documentation.
  - `DocksaurusService.ts` → Central integration service.
  - `application.ts` → Orchestrator.

> ⚡ Role: automatic generation of visual and technical documentation.

---

### 3. `graph/`
- Contains `graph.ts`, responsible for manipulation of graphs used in parsing, requirements analysis, and model generation.

> ⚡ Role: structural support for relationships between entities.

---

### 4. `model/`
Defines the **core structure of the domain**.

- **`andes/`** → Classes and types for analysis, projects, and requirements.
- **`made/`** → Classes related to backlog, roadmap, sprint, tasks, and teams.
- **`spark/`** → Structures for entities, enums, packages, and inheritance.

> ⚡ Role: formally represent the elements modeled by the Andes language.

---

### 5. `renders/`
Layer responsible for **exporting and visualizing** the models in different formats.

- **`dsl/`**
  - `made/` and `spark/` → Renders for DSL elements.
- **`markdown/`**
  - `MermaidRender.ts` → Generation of Mermaid diagrams (flowchart, state machine).
  - `FileRender.ts`, `MarkdownRender.ts` → Markdown file rendering.
- **`plantuml/`**
  - `PlantUmlRender.ts`, `classDiagram.ts` → UML diagram generation.
- **Other renders** → `TableRender.ts`, `SectionRender.ts`, `ParagraphRender.ts`, etc.

> ⚡ Role: transform models into visual and documentary representations.

---

## Architectural Flow

1. **Modeling** → The user defines projects, requirements, use cases, and backlog (in `model/`).
2. **Application** → The `application/` module processes the models, generates representations, and prepares for documentation.
3. **Graph** → Provides structural support in the organization and relationships between entities.
4. **Documentation** → `documentation/` generates structured documents and integrates with Docusaurus.
5. **Rendering** → `renders/` exports in Markdown, UML, Mermaid, and other visual formats.
