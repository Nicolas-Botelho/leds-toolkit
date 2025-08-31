---
sidebar_position: 4
title: Mini-World
description: Presents the project`s developing planning.
---

Presents the project`s developing planning.

# [Test.AI](https://marketplace.visualstudio.com/items?itemName=GabrieldePaulaBrunetti.test-ai)

# Mini-World

## Context

The **Test.AI** extension for VS Code uses AI to **generate automated tests from code**.  
Now, the team needs to create a new functionality that generates test plans, ensuring that it **meets its requirements** and that the **test artifacts** produced **comply with IEEE standards (829/29119)**.

---

## Test Target System

- **Tool**: Test.AI Extension (VSCode).
- **New**: Generation of complete Test Plans (IEEE 829/29119).
-**Main functions to be validated**:
- **Create IEEE Test Plan** automatically from code + requirements.
- **Generate mandatory sections of the standard (objective, scope, resources, schedule, risks, acceptance criteria, etc.).**
- Export the plan in **Markdown** or **PDF**.
- Ensure consistency between **Test Plans** and **Test Cases** already suggested by Test.AI.

---

## Actors
- **Managers:** **Gabriel**, **Ryan**, **Paulo Vitor**.  
- **Developers:** **Dominic**, **Levi**.  
- **Test.AI (Extension): generates Test Cases + IEEE Test Plans.**
---

## Objectives of the new functionality
- Generate test plans in the IEEE standard

---

## Rules and Restrictions

- Test Plans must follow the IEEE structure (without omissions in critical sections).
- The SmartCart system will be the main benchmark to validate the quality of test plans.
