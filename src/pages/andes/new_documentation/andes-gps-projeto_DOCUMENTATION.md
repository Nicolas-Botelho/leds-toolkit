---
sidebar_position: 5
title: Andes GPS Project Architecture
---

# Andes - Documentation

The **Andes GPS Project** is the tool responsible for interpreting the Andes DSL, storing the model elements, and translating them into the **Andes Lib** types.

---

## Grammar Structure

The Andes grammar is defined in `.langium` files. It describes the **tokens and rules** that make up the model.

---

### `andes.langium`
Defines the **high-level elements** of the model:

- **Project**: describes general information (name, description, purpose, mini-world, architecture).
- **Module**: encapsulates local entities, enums, and submodules.
- **AbstractElement**: can be `Module` or `EnumX`.

---

### `entities.langium`
Defines the structure of **entities** and their elements:

- `LocalEntity`: entities defined in the project.
- `ImportedEntity`: imported entities.
- **Attributes**:
    - `Attribute`: primitive attributes (with constraints like `unique`, `max`, `min`).
    - `EnumEntityAtribute`: attributes based on enums.
- **Relationships**:
    - `OneToOne`, `OneToMany`, `ManyToOne`, `ManyToMany`.
- **Functions**:
    - `FunctionEntity`: allows defining operations on entities.

---

### `usecase.langium`
Defines **actors, use cases, and events**:

- `Actor`: links an actor to an entity.
- `UseCase`: a use case containing requirements, events, and actors.
- `Event`: an event with an action, requirements, and dependencies.

---

### `requirements.langium`
Defines **requirements**:

- `FunctionalRequirement`
- `NonFunctionalRequirement`
- `BussinesRule`

Each requirement can have:
- Description
- Priority
- Dependencies on other requirements

---

## Parse and Translation Process

The translation is done in the **`translatorutils.ts`** file, which converts the AST (Abstract Syntax Tree of the Andes grammar) into **Andes Lib** classes.

### Translation Examples:

- **Entities**
    - `translateLocalEntity(entity: LocalEntity): EntityType`
    - Converts grammar entities into `EntityType` objects.

- **Attributes**
    - `translateAttribute(attr: Attribute): AttributeType`

- **Enums**
    - `translateEnumx(enumX: EnumX): EnumEntityType`

- **Relationships**
    - `translateRelation(rel: Relation): RelationType`

- **Use Cases**
    - `translateUseCase(useCase: UseCase): UseCaseClass`
    - Generates a `UseCaseClass` instance with translated requirements and events.

- **Events**
    - `translateEvent(event: Event, ucRef: UseCaseClass): EventType`

- **Requirements**
    - `translateRequirements(req: Requirements): RequirimentAgregationClass`
    - `translateRequirement(req: FunctionalRequirement | NonFunctionalRequirement | BussinesRule): RequirimentsBaseClass`

- **Actors**
    - `translateActor(actor: Actor): ActorType`


Thus, the tool ensures that any model written in the Andes DSL is converted into a **structured and typed representation**, ready for use in documentation generation or analysis.

