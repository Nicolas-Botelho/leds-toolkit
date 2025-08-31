---
sidebar_position: 0
title: Anchor
---

This is an Anchor Page. It is used to centralize all links and dependencies.

# Guide Map
The Spark Documentation is very large, and you could get lost in it. Don’t worry, here we will explain how you should read it. First, you need to know which kind of user you are...

- If you want to **USE SPARK**, check [this section](#i-want-to-use-spark);
- If you want to **IMPROVE SPARK CODE**, check [this section](#i-want-to-improve-the-spark-code).

## I Want to Use Spark

### Prerequisites
To use Spark, you must know System Analysis, at least class modeling. You can also see the following links:

- Internet Text Content:
  - [Free Online Course](https://www.tutorialspoint.com/system_analysis_and_design/system_analysis_and_design_overview.htm);
- Books:
  - Systems Analysis and Design (Howard Gould);
- Portuguese Content:
  - [Apostila de Análise de Sistemas](https://www.inf.ufes.br/~vitorsouza/falbo/Notas_Aula_Engenharia_Requisitos_Falbo_2017.pdf);

To understand the Spark-generated architecture, you will need different content for each one...

For MVC-Based Architectures:
- Internet Text Content:
  - [For Django MVC](https://docs.djangoproject.com/pt-br/5.2/faq/general/);
  - [For Spring Boot](https://docs.spring.io/spring-boot/how-to/spring-mvc.html);
- Portuguese Content:
  - [O que é MVC](https://www.devmedia.com.br/introducao-ao-padrao-mvc/29308);

For Clean Architecture-Based Architectures:
- Book:
  - Clean Architecture: A Craftsman's Guide to Software Structure and Design (Robert Martin);
- Portuguese Content:
  - [Clean Architecture com o Macoratti](https://youtube.com/playlist?list=PLJ4k1IC8GhW3GICba2dLmiTZrVPw0SthC&si=Vgn5xPDEmq1eL9mE);

For Minimal API-Based Architectures:
- Video Content:
  - [Learn Minimal API in C# .NET](https://www.youtube.com/watch?v=lFo3Yy8Ro7w);
- Portuguese Content:
  - [Aprendendo a Minimal API em C# .NET](https://youtu.be/86FXD0faF4o?si=jH3IA0o6obpKS2qn);

About the frontend: it will generate a LEDS internal architecture, so it will be properly explained in section [Vue Plus Vuetify](./5_sparklib_advanced/5_frontend/3_generated_arch/2_vuePlusVuetfy.mdx).

If you want to understand what REST APIs are, you can also check:
- PhD Thesis:
  - [Architectural Styles and the Design of Network-based Software Architectures](https://ics.uci.edu/~fielding/pubs/dissertation/fielding_dissertation.pdf);
- Internet Text Content:
  - [An Introduction to REST APIs](https://www.freecodecamp.org/news/what-is-rest-rest-api-definition-for-beginners/).

### Suggested Route
- See [Overview](./1_overview.md) to understand the Spark principles and objectives;
- See [Installation](./2_how_to_use/3_run_and_debug.md) to install and use Spark;
- See [Writing a File](./2_how_to_use/1_writting_a_file.md) to learn how to write your first ".spark"; and
- See [File Examples](./2_how_to_use/2_file_examples/1_conecta_fapes.md) to see example files.

### For Advanced Users
- See [Understanding the Generated Code Architecture](./5_sparklib_advanced/1_OverView.md) to understand the generated code architecture;
    - For Clean Architecture C#, see [Clean Architecture Csharp](./5_sparklib_advanced/4_backend/4_generated_arch/4_Csharp_Clean.md);
    - For MVC Django Rest Framework Architecture in Python, see [Python Architecture](./5_sparklib_advanced/4_backend/4_generated_arch/2_Python.md);
    - For Minimal API C#, see [Minimal API Csharp](./5_sparklib_advanced/4_backend/4_generated_arch/3_Csharp_Minimal-API.md); and
    - For MVC Spring-Boot Architecture in Java, see [Java Architecture](./5_sparklib_advanced/4_backend/4_generated_arch/1_Java.md).

## I Want to Improve the Spark Code
When dealing with Spark, you must know that there are two different source codes. The first is about the grammar specifier, called Spark, and the compiler, called SparkLib. To improve the code, you need to integrate both of them.

### Prerequisites
Here we will specify each major knowledge area you will need to know to improve the code. In each area, there are too many references. You don’t need to get all of them, just choose the ones that work best for you.

For Theoretical Principles, you will need to know about:
- Automata Theory:
  - Internet Text Content:
    - [Wikipedia, a Great Start](https://en.wikipedia.org/wiki/Automata_theory);
    - [State Machines Reference](https://storage.googleapis.com/journals-stmjournals-com-wp-media-to-gcp-offload/2023/09/106a1124-18-24-study-of-finite-state-machines-as-language-recognizer.pdf);
    - [Chomsky Hierarchy](https://www.geeksforgeeks.org/theory-of-computation/chomsky-hierarchy-in-theory-of-computation/);
  - Books:
    - Introduction to Automata Theory, Languages, and Computation, third edition (John E. Hopcroft, Rajeev Motwani, and Jeffrey D. Ullman);
  - Video Content:
    - [A Complete Introduction to Computation Theory](https://www.youtube.com/watch?v=58N2N7zJGrQ&list=PLBlnK6fEyqRgp46KUv4ZY69yXmpwKOIev);
  - Portuguese Content:
    - [Linguagens Formais e Autômatos, playlist](https://www.youtube.com/watch?v=XZUz2qjfZos&list=PLqlIQgAFrQ14oDPZliY1-tyupYs0prBmW);
    - Linguagens Formais e Autômatos, fifth edition (Paulo Blauth Menezes);
    - [Apostila, Linguagens Formais e Autômatos](https://www2.fct.unesp.br/docentes/dmec/olivete/lfa/arquivos/Apostila.pdf);
- Domain-Specific Languages (DSL):
  - Internet Text Content:
    - [Wikipedia, a Great Start](https://en.wikipedia.org/wiki/Domain-specific_language);
    - [State Machines Reference](https://storage.googleapis.com/journals-stmjournals-com-wp-media-to-gcp-offload/2023/09/106a1124-18-24-study-of-finite-state-machines-as-language-recognizer.pdf);
  - Articles and Papers:
    - [Ontology-Driven Development of Domain-Specific Languages](https://pdfs.semanticscholar.org/bf5b/2633e02775f54c1065252c9f5020e090df19.pdf);
- The Abstract Syntax Tree (AST) data structure:
  - [Wikipedia, a Great Start](https://en.wikipedia.org/wiki/Abstract_syntax_tree);
  - [Another Simple Explanation](https://dev.to/balapriya/abstract-syntax-tree-ast-explained-in-plain-english-1h38).

In the Technical Area, you will need:
- Langium:
  - Internet Text Content:
    - [Lib Reference](https://langium.org/docs/learn/workflow/);
- Object-Oriented Programming:
  - Internet Content:
    - [Wikipedia, a Great Start](https://en.wikipedia.org/wiki/Object-oriented_programming);
    - [Advanced Content with Refactoring Guru](https://refactoring.guru/);
  - Video Content:
    - [What is OOP](https://www.youtube.com/watch?v=SiBw7os-_zI);
  - Portuguese Content:
    - [Um bom começo com a Alura](https://www.alura.com.br/artigos/poo-programacao-orientada-a-objetos);
    - [Curso de POO do Gustavo Guanabara](https://www.youtube.com/watch?v=KlIL63MeyMY&list=PLHz_AreHm4dkqe2aR0tQK74m8SFe-aGsY);
- TypeScript:
  - Internet Text Content:
    - [Official Documentation](https://www.typescriptlang.org/docs/);
    - [Official Handbook](https://www.typescriptlang.org/docs/handbook/intro.html);
  - Video Content:
    - [Learn TypeScript in 1 Hour](https://www.youtube.com/watch?v=NjN00cM18Z4);
  - Portuguese Content:
    - [Cursinho de TypeScript](https://www.youtube.com/watch?v=ppDsxbUNtNQ&t=498s).

### Suggested Route
- See [An Advanced Study](./2_how_to_use/4_advanced_study.md) to understand the grammar tokens and their uses;
- See [Metamodel](./4_spark_advanced/1_metamodel.md) to check the grammar metamodel;
- See [Architecture](./4_spark_advanced/3_Architecture/1_overview.mdx) to check the Spark source code architecture;
- See [Library Architecture - Backend](./5_sparklib_advanced/4_backend/1_Explanning.md) to check the library backend scoped architecture;
- See [Library Architecture - Frontend](./5_sparklib_advanced/5_frontend/1_frontend.mdx) to check the library frontend scoped architecture;
