---
title: GPS Documentation – MADE Management
sidebar_label: Documentation
---

# DISC
> **Purpose:** Record the DISC results of GPS and MADE members.  
> *If something is incorrect, please report it or submit a PR.*

| Name                                 | Dominance | Influence | Steadiness | Conscientiousness |
|--------------------------------------|:---------:|:---------:|:----------:|:-----------------:|
| Mafe Mattos                          |           |    ✔️     |            |                   |
| Lucas Lopes                          |           |           |            |                   |
| Marlon Silva                         |           |           |            |                   |
| Breno Ricardo Ferreira Antunes       |    ✔️     |           |            |                   |
| Luiz Zottich                         |           |           |            |                   |
| Josias Neves                         |           |           |    ✔️      |                   |
| Breno Amâncio Affonso                |           |           |    ✔️      |                   |
| Rafael Barros Leão Borges            |           |    ✔️     |            |                   |
| Paulo Sousa Sanches Lopes            |           |           |    ✔️      |                   |
| Jonathan Castro Silva                |           |           |    ✔️      |                   |
| Breno Scalzer                        |    ✔️     |           |            |                   |
| Nathan                               |           |           |    ✔️      |                   |

---

# Team Topology
This team diagram outlines roles, objectives, and communication flow:

| Team Type         | Team Name   | Members                                                                                                          | Objective                                                                      | Main Interaction                     |
|-------------------|-------------|------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------|--------------------------------------|
| **Stream-aligned**| GPS Team    | Mafe, Lucas, Marlon, Breno R. Antunes, Luiz                                                                      | Manage adoption, governance, and evolution of MADE in Project X                | ↔ MADE Team (feedback & support)     |
| **Platform Team** | MADE Team   | Josias N., Breno A. Affonso, Rafael B. Leão Borges, Paulo S. S. Lopes, Josias N. Borba, Jonathan C. Silva        | Develop, maintain, and evolve the MADE platform (DSL, APIs, dashboards)        | ↔ GPS Team (requirements & usage)    |
| **Enabling Team** | Agile Coaches | — (external consultants)                                                                                        | Enable teams in agile methods and in using the MADE DSL                         | ↔ GPS & MADE                         |

**Interaction Flow**  
- **GPS Team → MADE Team:** requests for new features, operational support, and improvement suggestions.  
- **MADE Team → GPS Team:** platform releases, fixes, technical documentation, and training.  
- **Agile Coaches → GPS/MADE:** workshops, coaching sessions, and practice reviews.

---

# Backlog
GPS Team backlog for MADE management, prioritized by impact on success and adoption.

| ID      | Type  | Title                                   | Description                                                                                          | Priority |
|---------|-------|-----------------------------------------|------------------------------------------------------------------------------------------------------|:--------:|
| EPIC-01 | Epic  | MADE Governance & Support               | Structure roles, processes, and communication for effective MADE governance                          | High     |
| US-01   | Story | Define Roles & Responsibilities         | Document and publish on Docusaurus the usage, support, and evolution roles for MADE                  | High     |
| US-02   | Story | Create DSL Usage Guide                  | Create section “Modeling EPICs, User Stories, Sprints, and Releases” in the docs                     | High     |
| US-03   | Story | Configure Discord Support Channel       | Create server and specific channels for MADE questions, support, and announcements                   | Medium   |
| US-04   | Story | Establish CI/CD Alerts                  | Set up build/test/release notifications on Discord and WhatsApp                                      | Medium   |
| US-05   | Story | Develop Metrics Dashboards              | Validate and present burndown, velocity, and sprint status on the site and Discord                   | Medium   |
| TASK-01 | Task  | Workshop “How to Manage MADE”           | Conduct internal training with Agile Coaches via Discord                                             | High     |
| TASK-02 | Task  | Publish Initial Documentation on Docusaurus | Deploy docs on Docusaurus site and validate access                                               | High     |
| TASK-03 | Task  | Monitor Adoption & Gather Feedback      | Collect usage data and feedback in #feedback-made and adjust backlog as needed                       | Medium   |

---

# Communication Plan
Defines channels, frequency, and responsible parties to keep everyone aligned.

| From              | To                    | Channel                        | Frequency          | Format                           | Responsible                 |
|-------------------|-----------------------|--------------------------------|--------------------|----------------------------------|-----------------------------|
| GPS Team          | GPS Team              | Discord (#daily-standup)       | Daily (09:00)      | Daily Stand-up (voice + text)    | Marlon Silva               |
| GPS Team          | MADE Team             | Discord (📹 video call)         | Weekly (Wed 14:00) | Sync Meeting (30 min)            | Lucas Lopes                |
| GPS Team          | Agile Coaches         | Discord (#training)            | Biweekly           | Interactive Workshop             | Mafe Mattos                |
| MADE Team         | GPS Team              | Discord (#releases)            | Each release       | Release Notes + Q&A              | Rafael Barros L. Borges     |
| GPS Team ↔ MADE   | —                     | WhatsApp (“MADE Support” group) | Continuous/urgent | Incident alerts                  | Paulo Sousa S. Lopes        |
| GPS Team          | Course Stakeholders   | Email                           | Biweekly           | Progress Report (PDF)            | Breno R. F. Antunes         |
| GPS & MADE        | GPS & MADE            | Discord (voice)                | Monthly            | Retrospective                    | Marlon Silva               |
