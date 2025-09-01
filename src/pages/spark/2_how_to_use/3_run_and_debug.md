---
sidebar_position: 3
title: Running Locally and Debugging
layout: '~/layouts/MarkdownLayout.astro' 
---

This guide walks you through running and debugging your custom language extension locally. You'll prepare the environment, generate code from the grammar, build the project, and launch a debug session in VS Code to test language features in real time.

## Repository and branch

All steps in this guide are intended to be run inside the LEDs Tools Spark repository on the `developing` branch:

Repository: https://github.com/leds-org/leds-tools-spark/tree/developing

Clone and check out the correct branch:

```powershell
git clone https://github.com/leds-org/leds-tools-spark.git
cd leds-tools-spark
git fetch --all
git checkout developing
```

Then run the following steps from the repository root.

## 1. Install Dependencies

Install the project dependencies defined in `package.json`.

```bash
npm i
```

Note: `npm i` is a shortcut for `npm install`.

## 2. Generate Code from Grammar

Translate your language's grammar (for example, a `.langium` file) into executable TypeScript. This generates the parser and core language server components.

```bash
npm run langium:generate
```

## 3. Compile the Project

Compile the entire TypeScript project (generated files + your custom code) into JavaScript so the extension can run.

```bash
npm run build
```

## 4. Launch the Development Environment

Start a special VS Code instance with your extension loaded.

- Press `F5`

This opens a new window named "Extension Development Host" where your extension is active for testing.

## 5. Test Language Features

In the new VS Code window:

1. Create a new file using your language's file extension ( `example.spark`).
2. Start writing code and verify that features work as expected:
   - Syntax Highlighting: keywords, strings, and comments are colored correctly.
   - Validation: errors and warnings are underlined in the editor.
   - Code Completion: suggestions appear as you type (if implemented).

## 6. Use the Command-Line Interface (CLI)

The project includes a CLI to interact with your language outside VS Code (useful for code generation and batch processing).

- Show available options:

```bash
node ./bin/cli
```

- Generate code from a specific DSL file:

```bash
node ./bin/cli generate <file>
```

Example:

```bash
node ./bin/cli generate src/example.spark
```

---

Tips

- If you're on Windows PowerShell, the above `npm` and `node` commands work the same.
- If generation or build fails, re-run step 2 (grammar generation) before building to ensure generated sources are up to date.
- Use the "Developer: Toggle Developer Tools" command in the Extension Development Host to inspect runtime logs.
