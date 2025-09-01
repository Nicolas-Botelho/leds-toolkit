---
sidebar_position: 8.1
title: Java Architecture
parent: Architecture
layout: '~/layouts/MarkdownLayout.astro'
---

# Java Spark Architecture

This document describes the backend project structure in **Java Spark**, organized in layers to facilitate maintenance, testability, and component reuse.

---

## Layered Architecture

Backend development in Java was structured in layers, organizing the system in hierarchies, each with its own responsibilities. The division was made as follows:

``` mermaid
%%{init: {'theme': 'neutral'}}%%
flowchart TB
    subgraph "Java Spark Architecture"
        subgraph DataLayer["Data Layer (entity)"]
            Models["models/\nContains entity classes with\nJPA annotations"]
            Repositories["repositories/\nJPA Repository interfaces\nfor database access"]
            SQL["sql/\nSQL scripts for\ndata replication and\ndatabase constraints"]
            Register["register/\nProject metadata"]
            Resources1["resources/\nConfiguration files\n(application.properties)"]
        end

        subgraph ApplicationLayer["Application/API Layer (webservice)"]
            Application["application/\nContains Application.java\n(Spring Boot initialization)"]
            Controllers["controllers/\nREST/GraphQL controllers\nfor API endpoints"]
            Records["records/\nData Transfer Objects\n(DTOs)"]
            ReposWeb["repositories/\nAdapters between\ncontrollers and domain layer"]
            GraphQL["resources/graphql/\nGraphQL schema definitions"]
        end

        %% Relationships between packages
        DataLayer --> ApplicationLayer
        Repositories --> ReposWeb
        Models --> Records
    end

    %% External components
    Frontend["Frontend\n(UI)"]
    APIConsumers["API Consumers"]
    Database["Database"]

    %% External relationships
    Frontend --> Controllers
    APIConsumers --> Controllers
    Repositories --> Database
```

### Data Layer

Responsible for entities and repositories (`entity/` folder).

### Application/API Layer

Includes controllers and exposed services (`webservice/` folder).

This structure facilitated maintenance, testability, and the reuse of components.

---

## Main Folders

### Entity

#### models/

Contains Java classes corresponding to entities defined in the `.spark` file (e.g., `Agricultor`, `Propriedade`). These entities reflect database tables and include JPA annotations.

#### repositories/

Database access interfaces such as `AgricultorRepository.java`, which extend `JpaRepository` and are used for queries.

#### sql/

SQL scripts useful for data replication setup and database constraint creation.

#### register/

Stores project metadata, such as the `morango-register.json` file, which registers information about created modules and entities.

#### resources/

Application configuration files such as `application.properties`, containing Spring Boot configurations.

### Webservice

Service exposure layer of the application. This is where application logic interfaces with the outside world (frontend or API consumers).

#### application/

Contains the `Application.java` class that initializes the Spring Boot project.

#### controllers/

REST/GraphQL controllers generated for each entity. Handle requests and define endpoints.

#### records/

DTOs (Data Transfer Objects), which carry input and output data of the API. Example: `AgricultorInput.java`.

#### repositories/

Serve as adapters between controllers and domain-layer repositories.

#### resources/graphql/

Contains the `schema.graphqls` file, which defines the types, queries, and mutations of the GraphQL API, based on the entities defined in the `.spark` file.

---

## References

- https://www.alura.com.br/artigos/padroes-arquiteturais-arquitetura-software-descomplicada
- https://jeziellago.medium.com/padr%C3%B5es-de-arquitetura-de-software-parte-i-a1d23c323a40

---

## Improvement Points

- **Better naming of web repositories**: `AgricultorRepositoryWeb.java` can be confused with `AgricultorRepository.java`. More specific names like `AgricultorGraphQLAdapter` would prevent such issues we encountered during analysis.
- **Creation of a service layer**: Adding an intermediate layer between controllers and repositories with pure business logic would increase separation of concerns.
