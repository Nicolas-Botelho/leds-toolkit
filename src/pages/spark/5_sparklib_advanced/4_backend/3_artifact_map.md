---
sidebar_position: 3
title: Spark Compiler Artifact Map
layout: '~/layouts/MarkdownLayout.astro'
---

# Spark Compiler Artifact Map

This document presents a mapping of how the Spark compiler translates each language object into code artifacts, based on the structure of the `packages` folder.

## Introduction
The Spark compiler receives models defined in its own language and generates code for different technologies (Java, Python, C#, etc.). Each language object (Entity, Enum, Service, etc.) is converted into specific artifacts, distributed in folders and files according to each generator's architecture.

## Mapping Language Objects to Artifacts

| Language Object     | Generated Artifact (Java) | Generated Artifact (Python) | Generated Artifact (C# Minimal API) | Generated Artifact (C# Clean Architecture) |
|--------------------|---------------------------|-----------------------------|-------------------------------------|--------------------------------------------|
| Entity             | `java-generator/entity/model-generator.ts` (Java class in `Entity/`) | `python-generator/django/back/` (Django Model class) | `csharp-generator/minimal-API-generator/webservice/model-generator.ts` (C# class in `Entities/`) | `csharp-generator/cleanArchitecture-generator/Domain/Entities/` (C# class in `Entities/`) |
| Enum               | `java-generator/entity/enum-generator.ts` (Java enum in `Enums/`) | `python-generator/django/back/` (Python enum) | `csharp-generator/minimal-API-generator/webservice/enum-generator.ts` (C# enum in `Enums/`) | `csharp-generator/cleanArchitecture-generator/Domain/Enums/` (C# enum in `Enums/`) |
| Service            | `java-generator/entity/service-generator.ts` (Java class in `Services/`) | `python-generator/django/back/` (Python Service class) | `csharp-generator/minimal-API-generator/webservice/generator.ts` (C# class in `Services/`) | `csharp-generator/cleanArchitecture-generator/Application/Services/` (C# class in `Services/`) |
| DTO                | `java-generator/entity/dto-generator.ts` (Java class in `DTOs/`) | `python-generator/django/back/` (Python DTO class) | `csharp-generator/minimal-API-generator/webservice/dto-generator.ts` (C# class in `DTOs/`) | `csharp-generator/cleanArchitecture-generator/Application/DTOs/` (C# class in `DTOs/`) |
| Interface          | `java-generator/entity/interface-generator.ts` (Java interface) | `python-generator/django/back/` (Python interface) | `csharp-generator/minimal-API-generator/webservice/interface-generator.ts` (C# interface) | `csharp-generator/cleanArchitecture-generator/Domain/Interfaces/` (C# interface) |
| Validation         | `java-generator/entity/validation-generator.ts` (Java class in `Validation/`) | `python-generator/django/back/` (Python Validation class) | `csharp-generator/minimal-API-generator/webservice/validation-generator.ts` (C# class in `Validation/`) | `csharp-generator/cleanArchitecture-generator/Domain/Validation/` (C# class in `Validation/`) |
| Configuration      | `java-generator/webservice/config-generator.ts` (Configuration file) | `python-generator/django/back/` (Configuration file) | `csharp-generator/minimal-API-generator/webservice/config-generator.ts` (Configuration file) | `csharp-generator/cleanArchitecture-generator/Application/Configuration/` (Configuration file) |

## Examples of Generated Paths
- Java: `packages/java-generator/entity/model-generator.ts` → Generates files in `Entity/`, `Enums/`, `Services/`, etc.
- Python: `packages/python-generator/django/back/` → Generates models, enums, services, etc.
- C# Minimal API: `packages/csharp-generator/minimal-API-generator/webservice/` → Generates entities, enums, services, DTOs, etc.
- C# Clean Architecture: `packages/csharp-generator/cleanArchitecture-generator/Domain/`, `Application/`, etc.

## Notes
- The mapping may vary depending on the target technology and project configuration.
- For specific details, check each generator's files in the `packages` folder.

---

This map serves as a quick reference to understand how each Spark language object is converted into code artifacts in the different architectures supported by the compiler.
