---
sidebar_position: 5
title: Understanding the Language
layout: '~/layouts/MarkdownLayout.astro'
---

The **Andes grammar** is used to define documentation components like **Projects**, **Requirements**, **Actor** and **Use Cases**. Below is a detailed description of the Andes grammar.

## Project Structure

This constructor allows you to define essential details about the project, including the project's name, a description summarizing its goals and features, its purpose, and a miniworld that provides context for the project.

```js
overview Name // Replace "Name" for what you want to be de ID overview
{
    name: "Cool Project" // project's name
    description: "That's a cool project" // description about the project
    purpose: "This project can make the people be cool" // the purpose of this project.
    miniworld: "You can write as much as you want" // The Context about the project
}
```

## Requirements


Requirements outline the essential aspects of a system, including its name and a brief description of its objectives. They specify functional and non-functional needs, detailing what the system should accomplish, its performance characteristics, and business rules to ensure compliance with policies.


```js
requirements RequirementsID // Replace "RequirementsID" for what you want to be de ID requirements
{
    name: "module requirements" // module's name
    description: "module requirements" // description about the module

    // Here are the functional, non-functional requirements and business rules
}
```

Inside the requirements Model

``` js

    functional_requirement FR01
    {
        description: "This system should be able to manage clients"
        priority: "High" 
        depend: RequirementsID.FR03
    }

    non_functional_requirement NFR01
    {
        description: "The system must ensure that, in each action confirmation, the potential impacts of the action are presented in a clear and understandable way to the user"
        priority: "Medium" 
        depend: RequirementsID.FR01
    }

    bussines_rule BR01
    {
        description: "This system should be link with paypal"
        priority: "Low" 
        depend: RequirementsID.NFR01
    }

```

In this structure, the system can accommodate multiple functional and non-functional requirements, as well as business rules within the same module. To add additional requirements, simply change the identifier (e.g., FR01, NFR01, BR01) accordingly.

## Actors

Actors represent the individuals or entities that interact with the system. Each actor is identified by a unique identifier and includes a name that designates their role. Additionally, an optional description can provide further details about the actor's function or responsibilities within the system, clarifying how they engage with the various components and processes.

``` js
actor ActorID // Replace "ActorID" with the identifier for the actor
{
    name: "Roberto" // Name of the actor
    description: "Description of the actor's role or function" // Optional: detailed description of the actor
}
```

## Use Case

The use case structure defines the interactions between actors and the system to achieve specific goals. It includes essential details such as the use case's identifier, name, description, dependencies, and the actor involved.

``` js
usecase UC01 // Replace "UC01" with the identifier for the use case
{
    name: "Use Case Name" // Name of the use case
    description: "Description of the use case" // Detailed description of the use case
    depend: UC01, UC02 // Optional: list of dependent use cases
    performer: ActorID // The actor(s) involved in the use case
    requirements: RequirementsID.RF01 // The requirement(s) involved in the use case

    // Here are the Events
}
```

Events are defined within the use case to represent specific actions or occurrences that take place. Each event includes its identifier, name, description, dependencies, and an action description if applicable.

``` js
event EventID // Replace "EventID" with the identifier for the event
{
    name: "Event Name" // Name of the event
    description: "Description of the event" // Detailed description of the event
    depend: UC01.EventID // Optional: identifier of the dependent use case and event
    requirements: RequirementsID.RF01 // Optional: The requirement(s) involved in the event
    action: "Action description" // Optional: description of the action performed during the event
}
```
