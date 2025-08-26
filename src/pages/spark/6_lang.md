---
sidebar_position: 6
title: Understanding the Language
---

Spark's language is composed of the following parts: Configuration, Class Diagram, and Use Cases.

## Configuration

This constructor allows you to define:
- Software Name
- Description about the software
- Language desired to develop the information system
- Database name

```js
   Configuration {
       software_name: "SlaveOne" // Software's name
       about: "Slave One project example" // Description about the software
       language: python // Language and pattern used to develop the software
       database_name: "SlaveOneDB" // Database Name
   }
```
For the `language`, we have the options: `python, java, csharp-minimal-api, csharp-clean-architecture`.

## Class Diagram

Spark allows you to organize a class diagram into Modules. The declaration of a module follows this pattern:

```
module Main {
   // Components of the module go here
}
```

Inside each module, it is possible to define Entities, relations between entities, and Enums.

```
entity Project {
   name: string
   start_date: date
   end_date: date
   budget: decimal
   client: string
   sponsor: string
   goal: string
   project_father OneToMany Project
   time OneToMany Time
   status uses Status
}

enum Status {
   Ativo
   Cancelado
   Entregue
}
```

## Attribute and Relationship Types

Entities have attributes, and the available types are: `string, integer, decimal, datetime, date, boolean, uuid, email, cpf, cnpj, zipcode, currency, mobilePhoneNumber, phoneNumber, file, void`.

Spark allows the following relationships:

- `OneToOne`
- `OneToMany`
- `ManyToOne`
- `ManyToMany`

## Use Cases

Spark provides comprehensive support for modeling use cases, allowing the definition of actors, events, and relationships between use cases.

### Defining Actors

Actors represent entities or roles interacting with the system. An actor can optionally extend another actor and include attributes like `name`.

```langium
actor ProjectManager name: "Project Manager"
actor TeamMember name: "Team Member"
```

### Defining Use Cases

A use case describes a functionality of the system. It can include actors, events, descriptions, and inheritance from other use cases.

```langium
usecase ManageProjects extends BaseUseCase {
    name: "Manage Projects"
    description: "Handles project management functionalities"
    performer: ProjectManager, TeamMember
    event CreateProject {
        name: "Create a Project"
        description: "Allows the creation of a new project"
        action: "Create"
    }
    event AssignTask {
        name: "Assign a Task"
        description: "Assigns tasks to team members"
        action: "Assign"
    }
}
```

### Defining Events

Events are integral components of a use case. They represent actions or operations, with optional dependencies on other events.

```langium
event CreateProject {
    name: "Create a Project"
    description: "Initiates the creation of a project"
    action: "Create"
    depend: AssignTask
}
```

Where:

- **Actors** are the performers of the use case.
- **Use Cases** define the system's functionality.
- **Events** represent discrete operations within a use case.