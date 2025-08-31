---
sidebar_position: 2
title: Getting started
---

# How to Run Test.AI

### Prerequisites

Before you begin, make sure you have the following software installed:

- [Python](https://www.python.org/) (including `pip` package manager)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/) (recommended)

---

### STEP 1: Install the Python Library

1. Open a terminal.
2. Run the command:

```bash
pip install test-ai-leds
```

3. Make sure the Python Scripts directory is added to your PATH environment variable.

#### 🔹 Windows

- Run:

```bash
pip show test-ai-leds
```

- You will see a path similar to:

```
C:\Users\user\AppData\Local\Packages\PythonSoftwareFoundation.Python.3.12_qbz5n2kfra8p0\LocalCache\local-packages\Python312\site-packages
```

- Replace site-packages with Scripts, for example:

```
C:\Users\user\AppData\Local\Packages\PythonSoftwareFoundation.Python.3.12_qbz5n2kfra8p0\LocalCache\local-packages\Python312\Scripts
```

- Add this path to your system environment variables.

> You can also use virtual environments to avoid global installation.

#### 🔹 Linux

- Create a virtual environment:

```bash
python -m venv <nome-da-venv>
```

- Activate the venv:

```bash
source <caminho-da-venv>/bin/activate
```

- Install the library:

```bash
pip install test-ai-leds
```

- Add the scripts path to .bashrc:

```bash
nano ~/.bashrc
```

Add at the end of the file:

```bash
export PATH=$PATH:/<caminho-da-venv>/bin
```

- Then run:

```bash
source ~/.bashrc
```

---

### STEP 2: Install the Test.AI Extension in VS Code

1. Open Visual Studio Code.
2. Go to the Extensions tab (square icon or shortcut Ctrl + Shift + X).
3. Search for Test.AI.
4. Install the extension.

---

### STEP 3: Configure the .env File

In the root folder of the repository (leds-tools-testai), create a file called .env with the following content:

```env
LLM_MODEL=gemini/gemini-1.5-flash
GEMINI_API_KEY=<Sua Chave>
SWAGGER_PATH=<Caminho para o Swagger>
DTO_SOURCE=<Caminho para a pasta DTO>
```

#### Example:

```env
LLM_MODEL=gemini/gemini-1.5-flash
GEMINI_API_KEY=asduf24385HDSuyad43trfjedsig
SWAGGER_PATH=C:/Users/usuario/OneDrive/Documentos/PS2/leds-tools-testai/dtos/swagger.json
DTO_SOURCE=C:/Users/usuario/OneDrive/Documentos/PS2/leds-tools-testai/dtos
```

---

## Features

### Feature 1: Generate Gherkin Code Files (Features, BDD)

#### Prerequisites

- An .andes file inside the andes folder located in (leds-tools-testai).

#### How to Run

In the terminal, inside the repository (leds-tools-testai), run:

```bash
python src/application/use_cases/crew_gherkin.py
```

- Enter the name of the .andes file (without the extension).
- The .feature file will be automatically generated in the features folder with the name resposta.feature.

---

### Feature 2: Generate Feature Steps (C# with xUnit)

#### Prerequisites

- A .feature file inside the features folder located in (leds-tools-testai).

#### How to Run

In the terminal, inside the repository (leds-tools-testai), run:

```bash
python src/application/use_cases/crew_xUnit.py
```

- Enter the name of the .feature file (without the extension).
- The resposta.cs file will be generated inside the resposta folder located in (leds-tools-testai).

---