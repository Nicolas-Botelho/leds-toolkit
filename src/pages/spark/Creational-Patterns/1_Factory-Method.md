---
sidebar_position: 1
title: Creational Patterns
---

# Factory Method Pattern in the Project Structure

We used the **Factory Method design pattern** to organize and structure the generation of different parts of the system. The main idea was to create a **modular and reusable** way to generate files based on a common model, keeping the code organized, flexible, and easy to understand.

---

## Structure I Implemented

The structure is composed of 4 main parts:

### 1. Abstract Class: `AbstractGeneratorFactory`

I created a base class called `AbstractDocumentationGeneratorFactory`, which defines a method `generate()`. This method:

- Creates the folder where the files will be generated.
- Calls an abstract method called `createGenerators()` — which is the **actual factory method**.
- Then, executes the `generate()` method of each returned generator.

This `generate()` method controls the **common generation flow**, and I didn’t have to repeat this logic for each generator type.

---

### 2. Factory Method: `createGenerators()`

This method is abstract and implemented by the subclasses.  
Each subclass represents a specific "factory", such as:

- `StandardDocumentationGeneratorFactory` – responsible for generating documentation files.
- In other parts of the project, I have factories that generate entities or webservices as well.

Each factory knows **which concrete generators** it needs to instantiate.

---

### 3. Common Interface: `IJavaGenerator`

All my concrete generators implement the `IJavaGenerator` interface, which requires them to have a `generate(model, targetFolder)` method. This ensures that any generator, regardless of what it produces, can be used interchangeably.

---

### 4. Concrete Generators

I have several concrete classes that handle the actual file generation.  
One example is `DocumentationGenerator`, which creates files like `README.md` and `.gitlab-ci.yml`.  
But I also have generators like `EntityGenerator`, `ControllerGenerator`, among others.