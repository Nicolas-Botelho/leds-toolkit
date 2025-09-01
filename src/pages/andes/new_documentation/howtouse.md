---
sidebar_position: 2
title: How to use Andes
layout: '~/layouts/MarkdownLayout.astro'
---

### ANDES VS Code Extension

#### Installation via Marketplace
1.  Open **Visual Studio Code**.
2.  Navigate to the **Extensions** tab on the left sidebar or press `Ctrl+Shift+X`.
3.  In the search field, type "**ANDES**".
4.  Find the extension published by **ledsifes** and click the **Install** button.

---

#### Writing ANDES Code
After installation, the extension will be activated automatically whenever you open or create a file with the `.andes` extension. Create a new file (e.g., `myproject.andes`) and begin describing your requirements and use cases according to the language's syntax.

---

#### Generating Artifacts (Documents and Tests)
With an `.andes` file open in the editor, you can trigger the generation commands by right-clicking inside the text editor. The ANDES generation options will appear in the menu (in some cases, you may need to restart VS Code).

The available commands are:
* **Generate All** 
* **Generate Management Documentation to MADE** 
* **Generate Project Documentation** 
* **Generate Spark Document** 
* **Generate Test Documentation with OpenAI** 

Once you select an option, the corresponding files will be generated in your project.

---

### Command-Line Interface (CLI)

#### Development Environment Setup
1.  **Clone the Repository**: Get the project's source code from GitHub by running `git clone https://github.com/leds-org/leds-tools-andes.git` and then change to the project directory with `cd leds-tools-andes`.
2.  **Install Dependencies**: The project is Node.js-based. Use `npm install` to install all dependencies.
3.  **Compile the Project**: The TypeScript source code needs to be compiled to JavaScript using `npm run build`.

---

#### Syntax and Usage Examples
* **Basic Syntax**: Use `node bin/cli.js generate <source_file.andes>`.
* **Options**: Use `-d, --destination <dir>` to specify the destination directory for the generated files. If omitted, a `generated` directory is created by default.
* **Example**: To generate artifacts from the `requisitos.andes` file and save them to a folder named `documentacao`, run `node bin/cli.js generate/requisitos.andes -d./documentacao`. The tool will process and validate the file, and if there are no errors, it will create the artifacts in the specified destination

