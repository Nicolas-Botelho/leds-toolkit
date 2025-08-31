---
sidebar_position: 1
title: What it Spark?
---

# What is Spark?

Spark is a tool whose purpose is to automate the generation of web information systems from the specification of the system's domain classes. By creating a ".spark" file, where the domain classes are defined, a compiler interprets and validates the language, generating some computation artifacts.

## Generated Artifacts

- Backend: a pseudo REST API integrated with the SWAGGER tool in the following technologies (to be selected):
    - Django Rest Framework + Python, in the Model View Controller architecture;
    - Spring Boot + Java, in the Model View Controller architecture;
    - .NET + C#, in the Minimal API and Clean Architecture architectures (to be selected).

- Frontend: a pseudo frontend integrated with the Backend using the technologies Node.js + Vue + Tailwind; with Vite as a testing dependency.

In addition, it also generates domain class diagrams using PlantUML along with texts in Markdown and CI/CD structures in GitLab.

## Core Components

Spark uses a Domain-Specific Language (DSL) that consists of:

- **Configuration**: Configuration and metadata;
- **Package**: Package Definition;
- **Etity**: Class Definition;
- **enum**: Enum Classes Definition; and
- **types**: Defines types for classes attributes.

## How It Works
1. Write your project structure in `.spark` files using the DSL; and
2. Use VS Code extension or CLI to process the files.

## Benefits
1. Quicker start on big software projects; and
2. Padronized code structure for backend and frontend code.