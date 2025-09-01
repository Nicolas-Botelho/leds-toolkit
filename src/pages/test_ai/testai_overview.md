---
sidebar_position: 1
title: Overview
description: Presents the project`s developing planning.
layout: '~/layouts/MarkdownLayout.astro' 
---

Presents the project`s developing planning.

# [Test.AI](https://marketplace.visualstudio.com/items?itemName=GabrieldePaulaBrunetti.test-ai)

### What is Test.AI
**Test.AI** is a software that uses **language models (LLMs)** and artificial intelligence agents to efficiently generate automated test files. It operates in two main stages: **Gherkin File Generatio**n and Step Generation in **C# using xUnit**, based on requirement documents in the **.andes** format, as well as the generation of **IEEE-standard test plans.**

### Key benefits:
- Reduces test writing time.
- Generates consistent and readable test code.
- Produces IEEE-standard test plans.
- Integrates with VS Code and CLI for different usage scenarios.

### How to use in Visual Studio Code:
1. Install the extension from the VS Code extensions tab.
2. Use a **.andes** file or a Gherkin **.feature** file.
3. To use the **feateures**, follow the steps in [Getting Started](./testai_guide.md).

### Technologies Employed
- Python
- CrewAI
- Nodejs

---

## [CrewAI](https://www.crewai.com) + [Python](https://www.python.org)

## Generating Gherkin Tests with CrewAI

 - **CrewAI →** framework for orchestrating agents (writers, reviewers and managers).
 - **Python 3 →** main language.
 - **Dic/List →** static typing.
 - **`.andes` (file) →** main input with the user case (use case to be transformed into test scenarios).
 - **`YAML` →** defines agents, tasks and outputs.

 ### What is the `.andes` file and how/where is it used

 The **`.andes` file** is an input document that contains the use case description that will serve as the basis for generating Gherkin tests.

It is read at the script entrypoint **`(__main__)`** via:

 ```
 with open(f"andes/{file}.andes") as file:
    andes = file.read()
 ```

 The content of **`.andes`** is passed as a parameter to the **`crew_gherkin`** function:

 ```
 resultado = crew_gherkin(andes, strings)
 ```

 In other words, **`.andes`** → feeds the **writer/reviewer agents**, which then generate automated test scenarios.

 ### What is CrewAI and how/where is it used

**CrewAI** is a library for coordinating multiple LLM Agents that interact with each other in a structured execution flow.

In this code, it is the engine for collaborative **Gherkin test generation:**

- Each **Agent** is loaded from YAML definitions (AgentLoader).
    - Eg: **`gherkin_writer`** writes the tests.
    - E.g.: **`gherkin_reviewer`** reviews the tests.
    - E.g.: **`manager_gherkin`** consolidates the final version.

- Each **Task** defines an action to be performed by the agent.
    - Ex.: **`gherkin_code`** generates the initial code.
    - E.g.: **`gherkin_review`** evaluates and adjusts.
    - E.g.: manager_gherkin_task generates the final artifact **(features/resposta.feature)**.

- **Crew** is instantiated and triggers the flow:

```python
crew: Crew = Crew(
    agents=agents+[manager],
    tasks=tasks+[final_task],
    max_rpm=10,
    output_log_file="crew_log.txt",
    manager_llm=llm_low_temp,
    process=Process.sequential,
    verbose=True
)
resultado = crew.kickoff()
```

- It coordinates the sequential execution of agents and tasks until the production of the **`.feature` file.**

This is an automated pipeline for transforming use cases described in **`.andes` files** into Gherkin test scenarios.
The code does this via **CrewAI**, orchestrating a team of agents (writers, reviewers and manager), who collaborate in multiple rounds of writing/revision until generating the final artifact:

**Expected output:** a **.feature** file ready to be used in **BDD test automation.**

## XUnit Test Generation with CrewAI

- **Python 3.x** → main programming language.  
- **CrewAI** → orchestration of agents that write, review, and manage test code.  
- **Custom Loaders (`src.infrastructure.loaders`)**  
  - `AgentLoader` → initializes agents.  
  - `TaskLoader` → loads tasks.  
  - `LLM_Loader` → instantiates language models.  
  - `read_yaml_strings` → loads YAML configuration.  
- **YAML** → defines agents, tasks, and output examples.  
- **External Files**  
  - `features/*.feature` → main input, defines BDD scenarios.  
  - `dtos/` → directory containing request/response classes (DTOs).  
  - `docs/endpoints.txt` → contains API endpoints mapped to features. 

 ### What is the `.feature` File and How/Where it is Used

The **`.feature` file** is the main input containing the **BDD scenario description**.  

- It is read at the script entrypoint (`__main__`):  
  ```python
  with open(f"features/{file}.feature") as file:
      feature = file.read()
- Its content is used in three stages:
    
    1. Agent debate **`(crew_xunit_debate)`** → agents discuss how to implement the test.
    
    2. Info gatherer **`(info_gatherer_crew)`** → automatically locates:
        - DTOs inside the **`dtos/`** folder.
        - Corresponding endpoint in **`docs/endpoints.txt`**.
    3. Code generation **`(crew_xunit_generation)`** → creates, reviews, and refines XUnit code.

The **`.feature`** file acts as the seed that drives the entire test generation process.

### What is CrewAI and How/Where it is Used

**CrewAI** is the core component coordinating collaborative work among LLM agents.
In this script, it is used in four main workflows:

1. **`crew_xunit_debate`**

    - Defines a **`csharp_xunit_writer agent`** to create the initial test proposal.
    - Creates up to 3 discussion agents that debate different solutions.
    - Uses a **`result_analysis_manager` agent** to consolidate the final version.
    - Produces an intermediate output at **`modalidade_bolsa_crew.cs`.**

2. **`info_gatherer_crew`**

    - Defines specialized agents:
        - **API Path Finder** → reads **`endpoints.txt`** and finds the API route for the feature.
        - **File Search Specialist** → searches DTOs in the **`dtos/`** directory.
        - Tasks executed:
            - **`dto_file_find`** → extracts DTO class content.
            - **`api_url_find`** → identifies the corresponding API URL.

        - Outputs are written to:
            - **`dto_code.txt`** → DTO code.
            - **`api_url.txt`** → API URL.

3. **`crew_xunit_generation`**

    - Uses DTOs + API URL to generate XUnit test code.
    - Pipeline:
        1. **Initial proposal `(xunit_code_proposal)`** → generates C# XUnit test code.
        2. **Review `(xunit_review)`** → refines the generated code.
    - Logs results in **`crew_log.txt`**.

4. **`manager_crew`**

    - Consolidates results from three parallel executions of **`crew_xunit_generation`**.

    - Uses the **`result_analysis_manager`** agent to produce the **final consolidated** test in:

```
resposta/VersionarModalidadeStepAI.cs
```

This code implements an **intelligent pipeline for generating automated XUnit tests in C#** from **`.feature`** specifications.

**Expected output:** C# test code generated under **`resposta/*.cs`**, derived from the **`.feature` file**, the actual API endpoint, and corresponding DTOs.