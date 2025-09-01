---
sidebar_position: 8
title: Clean Architecture Csharp
layout: '~/layouts/MarkdownLayout.astro'
---

# Clean Architecture Csharp

This document describes the backend structure of the Moranguinho project, based on Clean Architecture principles. The modular and layered organization promotes separation of concerns, testability, maintainability, and scalability.

---

## Layered Architecture
The project follows Clean Architecture principles, with independent layers that isolate business rules, application logic, infrastructure, and user interface. Each layer only depends on the one below it, enabling low coupling and high cohesion.

---

### Domain Layer — `Moranguinho.Domain`
This layer represents the core domain of the system, containing entities, business rules, and fundamental contracts.

#### `Entities/` — Domain Entities
Contains core entities like `Agricultor`, `Propriedade`, etc. Each entity encapsulates specific business behavior such as CPF validation or property area constraints.

#### `Enums/` — Enumerations
Defines fixed types used in the domain, contains `baseEnum.cs`.

#### `Interfaces/` — Repository/Service Contracts
Defines interfaces like `IAgricultorRepository`, `IValidadorPropriedade`, enabling dependency inversion and isolated testing.

#### `Validation/` — Validation Rules
Contains specific validation rules applied directly to entities or value objects.

#### `Common/` — Abstractions and Utilities
Base classes like `BaseEntity`, can contain abstractions and utilities.

---

### Application Layer — `Moranguinho.Application`
Responsible for orchestrating system use cases and bridging presentation and domain layers.

#### `UseCase/` — Use Cases
Implements application processes like `CriarAgricultor`, `BuscarPropriedadePorId`, etc. Receives DTOs from the API and interacts with the domain and repositories. Example: `BaseCase.cs`.

#### `Services/` — Application Services
Auxiliary services used by use cases, such as productivity calculations or mapping utilities. Example: `BaseService.cs`, `AgricultorService.cs`.

#### `DTOs/` — Data Transfer Objects
Input and output objects for the application. Example folders: `Request/`, `Response/`, and `Common/`. Files: `AgricultorRequest.cs`, `PropriedadeResponse.cs`, etc.

#### `Mappers/` — Object Converters
Converts between domain entities and DTOs. Manual mapping used in files like `AgricultorMapper.cs`, `PropriedadeMapper.cs`.

#### `Interfaces/` — Infrastructure Contracts
Interfaces for services such as email sending, authentication, and repositories. Implemented in the Infrastructure layer.

#### `Security/` — Security Abstractions
Rules and contracts for authentication/authorization.

#### `Configuration/ServiceExtensions.cs`
Registers all application services and configurations in the DI container.

---

### Infrastructure Layer — `Moranguinho.Infrastructure`
Contains concrete implementations of services and repositories, integrating with external systems like databases, security, etc.

#### `Context/AppDbContext.cs`
EF Core DbContext implementation responsible for database access and entity mappings.

#### `EntitiesConfiguration/`
Fluent API configuration for database mapping. Example: `AgricultorConfiguration.cs`, `PropriedadeConfiguration.cs`.

#### `Repositories/`
Implements repositories defined in the domain. Examples: `AgricultorRepository.cs`, `PropriedadeRepository.cs`, and base implementations in `Common/`.

#### `Security/`
Concrete implementations for security concerns, such as `UserRepository.cs`, `RoleRepository.cs` under `Security/Repositories/`.

#### `ServiceExtensions.cs`
Registers infrastructure-level services into the DI container.

---

### Presentation Layer — `Moranguinho.WebAPI`
The system's HTTP entry point, where requests arrive and are translated into application commands.

#### `Controllers/`
Exposes API endpoints like `POST /agricultores`, `GET /propriedades`. Controllers: `AgricultorController.cs`, `PropriedadeController.cs`.

#### `Extensions/`
Configuration for middleware, CORS, Swagger, authentication, etc. Files include `JwtExtension.cs`, `CorsPolicy.cs`, `OData.cs`.

#### `Program.cs`
Application bootstrap file. Initializes the host, configures services, and defines the HTTP pipeline.

#### `appsettings.json`
Configuration file for database connections, JWT keys, CORS, and API settings.

#### `Scripts/`
Utility SQL scripts such as `delete.sql`, `killdatabase.sql` for local development or test resets.

---

### Testing Layer — `Moranguinho.Domain.Test` and `Moranguinho.Infrastructure.Test`
Dedicated layers for automated tests.

#### `Moranguinho.Domain.Test`
Unit tests for domain entities and business rules. Focused on validation, behavior, and isolated logic. Files: `AgricultorTest.cs`, `PropriedadeTest.cs`.

#### `Moranguinho.Infrastructure.Test`
Integration tests for repository behavior using EF InMemory. Files in `Repositories/`: `AgricultorRepositoryTest.cs`, `PropriedadeRepositoryTest.cs`. Includes `appsettings.json` and `xunit.runner.json` for test environment setup.

Testing framework: xUnit.

---

## . References
- [.NET - Usando a Clean Architecture - Jose Carlos Macoratti](http://youtube.com/watch?v=luyGoZa9is4&list=PLJ4k1IC8GhW3GICba2dLmiTZrVPw0SthC&index=7)
- [Github CleanArchitecture - jasontaylordev](https://github.com/jasontaylordev/CleanArchitecture)
- [Github Clean Architecture Template - amantinband](https://github.com/amantinband/clean-architecture)


---

## . Improvement Points

- **Clearer Layer Separation**: Ensure distinct responsibilities for each layer, avoiding overlap of concerns between the Application, Domain, and Infrastructure layers.

- **Use of AutoMapper**: Implement AutoMapper or similar libraries to simplify and automate the mapping between domain entities and DTOs, reducing boilerplate code and improving maintainability.