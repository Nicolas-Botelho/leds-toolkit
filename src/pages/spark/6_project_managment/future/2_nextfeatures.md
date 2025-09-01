---
sidebar_position: 2
title: Suggestion of Next Features
layout: '~/layouts/MarkdownLayout.astro'
---


### **Task 1: Generate Standard Descriptions for Functions**

**Objective:** Improve the quality and documentation of the generated code. The task consists of making `SparkLib` automatically add documentation comments (XML-docs for C#, Javadoc for Java, etc.) to all CRUD functions it creates.

**Example (C#):**

```csharp  
/// <summary>
/// Creates a new instance of 'Product'.
/// </summary>
/// <param name="productDto">The data object to create the Product.</param>
/// <returns>The newly created Product.</returns>
public async Task<Product> Create(ProductDTO productDto)
{
    // ... generated code
}
```


**Suggested Action Plan:**

1. **Locate the CRUD Method Generators:**  
   * Go to the generator folder you're working with (e.g., `src/backend/csharp-generator/cleanArchitecture-generator/`).  
   * Find the files responsible for each CRUD operation. For example, in `Application/UseCase/Case/`, you'll probably find files like `CreateCase/generate.ts`, `UpdateCase/generate.ts`, etc.  

2. **Create Comment Templates:**  
   * Within each of these files, before generating the method code, create a *template string* for the comment block.  
   * Use information from the entity's AST node and method to dynamically fill the template.

3. **Inject the Comment into the Final Code:**  
   * Connect the generated comment block with the function code and return the complete string.

**Tip:** Create a helper function in `src/util/generator-utils.ts` to generate these comment blocks, avoiding code duplication.

---

### **Task 2: Generate Unit Tests for CRUD**

**Objective:** Make `SparkLib` generate basic unit tests for CRUD *Use Cases* or *Services*. Since CRUD functions don't have complex business rules, their tests are quite standardized and ideal for automation.

**Suggested Action Plan:**

1. **Investigate the Test Structure:**  
   * Look for folders like `DomainTest` or `InfraTest` within the C# generators (e.g., `src/backend/csharp-generator/cleanArchitecture-generator/DomainTest/`).  

   * Analyze the `modeltest-generator.ts` file. It should already give clues about how test generation is structured. The goal is to create something similar for *Use Cases*. 

2. **Create a New Test Generator for Use Cases:**  
   * Create a new folder and file structure to generate tests for the Application/Use Cases layer. 

   * For each generated `UseCase` (e.g., `CreateProductUseCase`), you should generate a corresponding test class (e.g., `CreateProductUseCaseTests`).  

3. **Implement Test Generation Logic:**  
   * **Arrange:** Generate code that creates mocks for dependency interfaces (mainly `IRepository`). Create an instance of the *Use Case* being tested, injecting the mocks.  

   * **Act:** Generate the call to the method being tested (e.g., `_useCase.Handle(request, CancellationToken.None)`).  

   * **Assert:** Generate assertions. For a `Create` test, you can verify that the repository's `AddAsync` method was called once. For `GetById`, verify that the result is not null.