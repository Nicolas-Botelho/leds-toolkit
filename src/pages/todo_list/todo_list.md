---
sidebar_position: 1
title: TodoList - A Complete Pipeline
layout: '~/layouts/MarkdownLayout.astro' 
---

# TodoList - A Complete Pipeline
This section is intended to explain the use of all the tools together through a fictitious project, the ToDo List. You can check the source code [here](https://github.com/chevitareseCodes/LEDS-TOOLS-TodoList_Pipeline/tree/main).

# Explaining the Pipeline and Tools
The pipeline starts by setting up the git workflow, in this particular case the [GitHub workflow](https://docs.github.com/en/actions/how-tos/write-workflows).  
In the root of the project, in the folder `.github/workflows`, there is the file `generate-artifacts.yml`, which is as follows:

```yaml
name: Generate Artifacts

on:
  push:
    branches:
      - main
    paths:
      - 'TodoList.andes'
      - '.github/workflows/generate-artifacts.yml'

jobs:
  generate:
    runs-on: ubuntu-latest
    env:
      GITHUB_TOKEN: ${{ secrets.REPOSITORY_TOKEN }}
      GITHUB_ORG: ${{ github.repository_owner }}
      GITHUB_REPO: ${{ github.event.repository.name }}
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          persist-credentials: true

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm ci
      - name: Setup Github
        run: |
          git config --global user.name 'github-actions[bot]'
          git config --global user.email 'github-actions[bot]@users.noreply.github.com'
          git pull --rebase origin main
      - name: Run Andes CLI
        run: npx andes-cli generate ./TodoList.andes
      - name: Commit and push Andes
        run: |
          git add .
          git diff --cached --quiet || git commit -m "chore: generate artifacts [skip ci]"
          git remote set-url origin https://x-access-token:${{ secrets.REPOSITORY_TOKEN }}@github.com/${{ github.repository }}
          git push

      - name: Run Spark CLI
        run: npx spark-cli generate ./artifacts/ToDoList.spark
      - name: Commit and push Spark
        run: |
          git add .
          git diff --cached --quiet || git commit -m "chore: generate artifacts [skip ci]"
          git remote set-url origin https://x-access-token:${{ secrets.REPOSITORY_TOKEN }}@github.com/${{ github.repository }}
          git push

      - name: Run Made CLI
        run: |
          npx made-cli github ./artifacts/TodoList.made
      - name: Commit and push Made
        run: |
          git add .
          git diff --cached --quiet || git commit -m "chore: generate artifacts [skip ci]"
          git remote set-url origin https://x-access-token:${{ secrets.REPOSITORY_TOKEN }}@github.com/${{ github.repository }}
          git push
```

The purpose of this file is to configure an action to run when a `push` on the `main` branch occurs.  
This action installs the dependencies ([andes-lib](../andes/1_overview.md), [spark-lib](../spark/0_anchor.md), and [made-lib](../made/made_overview.md)) temporarily on a GitHub Ubuntu runner, executes the provided `.andes` file, and from the generated `.spark` and `.made` files, runs [spark-lib](../spark/0_anchor.md) and [made-lib](../made/made_overview.md) respectively.  
As a result, you end up with a repository containing the artifacts (frontend + backend + documentation) and `tasks` in the project repository.

Additionally, there are also files in the repository to install Python dependencies to use [code-wise](../code_wise/code_wise_lib/Overview%20CW-PR.md).  

As for the [oracle](../oraculo/1_overview.md), its usage link is not permanent, so it was not included here.

# System Specification — To-Do List

## 1. General Description
The To-Do List system is an application that allows users to organize their daily tasks.  
Through it, the user can create, view, update, delete, and manage tasks, as well as organize them by categories, set deadlines, and track their status.

## 2. Features
### 2.1. User Registration
- Allow users to create an account in the system.  
- Required data: Name, Email, Password.

### 2.2. User Authentication
- Allow login and logout.  
- Secure authentication with encrypted password.

### 2.3. Task Management
- **Create Task**:  
  - Fields: Title, Description, Due Date, Priority, Status, Category (optional).  
- **Edit Task**:  
  - Allow updating any task information.  
- **Delete Task**:  
  - Allow removing a task from the system.  
- **List Tasks**:  
  - View all registered tasks with filters by: status, due date, priority, and category.  
- **Change Status**:  
  - Possible statuses: Pending, In Progress, Completed, Canceled.

### 2.4. Task Organization
- Create and manage categories (e.g., Work, Study, Personal).  
- Filter tasks by category.

### 2.5. Notifications (Optional)
- Send reminders for tasks close to the due date (via email or in-system notification).

## 3. Functional Requirements
| ID   | Description                                                                |
|------|----------------------------------------------------------------------------|
| RF01 | The system must allow users to register with name, email, and password.    |
| RF02 | The system must allow user authentication.                                 |
| RF03 | The system must allow users to create new tasks.                           |
| RF04 | The system must allow users to edit existing tasks.                        |
| RF05 | The system must allow users to delete tasks.                               |
| RF06 | The system must list the user’s tasks.                                     |
| RF07 | The system must allow changing the status of tasks.                        |
| RF08 | The system must allow users to create and manage categories.               |
| RF09 | The system must allow filtering tasks by status, date, and category.       |
| RF10 | The system may send notifications about pending or upcoming tasks.         |

## 4. Non-Functional Requirements
| ID    | Description                                                               |
|-------|---------------------------------------------------------------------------|
| RNF01 | The system must have secure authentication with password encryption.      |
| RNF02 | It must be a responsive application, working well on desktop and mobile.  |
| RNF03 | The backend must be developed in [e.g., Node.js, Django, Spring Boot].    |
| RNF04 | The frontend must be developed in [e.g., Vue.js, React, Angular].         |
| RNF05 | The system must support at least 100 concurrent users.                    |
| RNF06 | Request response time must not exceed 2 seconds in 95% of cases.          |

## 5. Data Model
**User**  
- id (UUID)  
- name (string)  
- email (string, unique)  
- password (hash)  

**Category**  
- id (UUID)  
- name (string)  
- user_id (UUID, FK)  

**Task**  
- id (UUID)  
- title (string)  
- description (string)  
- due_date (date)  
- priority (enum: low, medium, high)  
- status (enum: pending, in progress, completed, canceled)  
- category_id (UUID, FK, optional)  
- user_id (UUID, FK)  

## 6. Main Flow
The user accesses the system and logs in or registers.  

Once logged in, they see their task dashboard.  

They can create a new task by filling in title, description, date, and initial status.  

They can update the status as progress is made (e.g., pending → in progress → completed).  

They can filter tasks by date, status, or category.  

They can delete tasks that are no longer needed.  

They track their tasks on the dashboard.  

## 7. Technologies (Example)
- Frontend: Vue.js with Tailwind CSS  
- Backend: Django Rest Framework or C#  
- Database: PostgreSQL  
- Hosting: Render, Railway, or Vercel  
