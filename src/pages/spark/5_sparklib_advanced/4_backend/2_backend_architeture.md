---
sidebar_position: 2
title: Back-end Architecture
---

# Back-end Architecture

## Overview
The generators, written in TypeScript, create the code, files, and folder structure for back-end applications in different languages.

Each language has a main generator that orchestrates the creation of the folder structure and calls the specific generators for each part of the application.

---

## Generators by Language

### C#
The architecture for **C#** follows the **Clean Architecture** pattern.



```
└── backend/csharp/
    └── clean-architecture-custom/
        ├── project-generator.ts
        ├── Application/
        │   ├── project-generator.ts
        │   └── generate.ts
        ├── Domain/
        │   ├── project-generator.ts
        │   └── generate.ts
        ├── Infrastructure/
        │   ├── project-generator.ts
        │   └── generate.ts
        └── WebAPI/
            ├── project-generator.ts
            └── Controllers/
                └── generate.ts

```

#### Generator Organization
- **Main Generator**: Creates the main solution file (`.sln`) which references the project files for the Domain, Application, Infrastructure, and WebAPI layers.  

- **Domain**: Defines the business rules and entities. The `project-generator.ts` file creates the `.csproj` for the Domain layer. It includes references to NuGet packages such as `EmailValidation`, `Flunt`, and `Serilog`.  

- **Application**: Contains the use cases and services. The `project-generator.ts` generates the `.csproj` for the Application layer. It references the Domain layer and includes packages like `AutoMapper`, `DocsBRValidator`, `MediatR`, and `FluentValidation`.  

- **Infrastructure**: Provides implementation details for services defined in Domain and Application. Its `project-generator.ts` creates the `.csproj` and includes packages such as `Microsoft.EntityFrameworkCore.SqlServer` and `SendGrid`.  

- **WebAPI**: Entry point for the application. The `generate.ts` in the `Controllers` directory generates the C# controllers (CRUD and other use cases).  

---
### Java
The architecture for **Java** uses the **Spring Boot** framework.

```
.
└── backend/
    └── java/
        └── generator.ts
```
#### Generator Organization
- **Main Generator**: The `generator.ts` file is the entry point for Java code generation. It creates the target directory and then calls the specific generator function for Spring Boot to create the project.  

---

### Python
The architecture for **Python** uses the **Django** framework.

```
└── backend/
    └── python/
        └── generator.ts
```

#### Generator Organization
- **Main Generator**: The `generator.ts` file is the entry point for Python code generation. It creates the target directory and then calls the specific generator function for Django to create the project.  
