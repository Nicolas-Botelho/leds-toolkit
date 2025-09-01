---
sidebar_position: 5
title: Improvement Suggestions
layout: '~/layouts/MarkdownLayout.astro'
---

### Suggestion 1: Support for Local AI Models via Ollama

### Concept
Allow CodeWise to use language models (LLMs) running locally on the developer's machine through Ollama, instead of exclusively depending on the Google Gemini API.

Justification
Security and Data Privacy: Companies with strict intellectual property policies could use the tool with the guarantee that their source code will never leave their machines.

Cost Reduction: We had issues with restrictions depending on the number of characters last semester, which limits the tool. We believe this can remove the need for paid API keys and the costs associated with Gemini API consumption, making the tool more efficient.

Offline Use: Developers could use the tool to analyze their code even without an internet connection.

Flexibility: It allows users to choose the model that best suits their hardware and needs (we find these relevant: Llama 3, Mistral, CodeLlama).

Some ideas/risks we find relevant:

-Hardware: Using local models requires more RAM and ideally a GPU, which can be a barrier for some users.
-Depending on the model, the quality of the analysis may vary and could be lower than that of the Gemini API models.
-It adds an extra setup step for the user (installing and managing Ollama).

### Suggestion 2: "Code Mentor" Agent with Educational Suggestions

### Concept
We found the idea discussed with the professor to be interesting: adding a new AI agent to the team that, based on the analyses of S.O.L.I.D., architecture, and "code smells", acts as a mentor, suggesting articles, courses, or videos to help the developer improve in areas where they are struggling.

Justification
It transforms the tool from a simple "code reviewer" into a platform for professional growth and continuous learning.
Instead of just pointing out an error (e.g., "Violation of the Single Responsibility Principle"), the tool also offers a path to the solution and learning.
It would be extremely valuable for junior developers, who would receive personalized and contextualized guidance directly in their workflow.
The tool could identify recurring knowledge gaps in a team, providing valuable insights for technical leadership.

Here is an idea we suggest:

Create a New Agent (config/agents.yaml):

Define a code_mentor_agent with the goal of "analyzing the detected code problems and providing high-quality educational resources (links to articles, videos, or documentation) that help to understand and fix the root cause of the problem."

Create a New Task (config/tasks.yaml):

Define a mentoring_task that receives the consolidated output of the other analysis agents as its context.

The task would instruct the agent to identify the main concept behind the errors (e.g., "SOLID", "Clean Code", "Design Patterns") and to find 1 or 2 relevant links for each concept.

Execute the New Task (codewise_lib/cw_runner.py):

After the main analysis_crew finishes, its output (task.output) would be used as input/context for a new Crew containing only the code_mentor_agent.

The output of the Mentor Agent would then be added to a new section in the Pull Request comment, with the title "Learning Suggestions".

An idea would be to have a JSON file storing the history of errors after the analysis is done. In the same way the program creates a new folder in the user's repository to store the analyses with .md files, something similar could be done for the errors made in the repo.

Risks and Considerations
Quality of Resources: The agent needs to be well-instructed to search for links from reliable sources to avoid suggesting poor-quality content.