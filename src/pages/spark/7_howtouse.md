---
sidebar_position: 7
title: How to Use
---
0. (Prerequisite): Ensure that the Leds - Spark - Beta extension is installed in your VSCode editor. This extension is available through the editor's built-in extension marketplace. It is required to leverage Spark's features without the need to import libraries locally into your project. Note that it differs from the Spark - LEDS extension, which is also available in the same marketplace. Unlike the latter, Leds - Spark - Beta relies on an external library that unifies backend and frontend generation with a greater decoupling of responsibilities from Langium. The library, in turn, is responsible for decoupling business logic from the extension’s core repository, enabling reuse without compromising the main generation functionality.
1. Create a file with extension `.spark` (e.g., slave_one.spark)
2. Define the [class diagram](6_lang.md)
3. Save the file `.spark`
4. Click with right botton and chose one option
![Menu com opções de geração ao clicar com botão direito](./img/right-click.png)
5. After that, Spark will generate the software artifacts
![Exemplo de hierarquia de pastas gerada](./img/folders.png)