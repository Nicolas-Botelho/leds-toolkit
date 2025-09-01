---
sidebar_position: 2
title: Installation Guide
layout: '~/layouts/MarkdownLayout.astro'
---

## Installation Guide 
Follow these steps to install and configure CodeWise in any of your repositories.

---
Lib: https://pypi.org/project/codewise-lib

### Step 1: Prerequisites
Before you start, ensure you have the following tools installed on your system:

1.  **Python** (version 3.11 or higher).
2.  **Git**.
3.  **GitHub CLI (`gh`)**: After installing from (https://cli.github.com), log in with your GitHub account by running `gh auth login` in your terminal (you only need to do this once per PC).
---

### Step 2: Setting Up Your Repository

**For each new repository where you want to use CodeWise, follow the steps below.**
 
"*It's always a good idea to create a virtual environment in the root folder of the new repository to avoid dependency conflicts.*"

---
#### 2.1 Create and Use a Virtual Environment

To avoid conflicts with other Python projects, use a virtual environment (`venv`).

* **To Create the Environment:**

    * This command creates a `.venv` folder with a clean Python installation. Do this only once per repository.
    *Remember that ".venv" is the name of the created folder; you can choose any other name for it.*
 

(**inside the repository root where the .git folder is**)

    ```bash
    # On Windows
    py -m venv .venv
    
    # On Linux/WSL
    python3 -m venv .venv
    ```

* **To Activate the Environment:**

    * Whenever you work on the project, you need to activate the environment.

    * **Tip for Windows/PowerShell:** If the activation command gives an execution policy error, run this command first: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`

    ```bash
    # On Windows (PowerShell)
    .\.venv\Scripts\activate
    
    # On Linux/WSL
    source .venv/bin/activate
    ```
    *You'll know it worked because the name `(.venv)` will appear at the beginning of your terminal line.*
---
#### 2.2 Install the CodeWise Tool
With the virtual environment active, install the library with `pip`.

```bash
pip install codewise-lib
```
**It may take a while to install all dependencies the first time.**

*After installing the library, you can confirm everything is working with the command `codewise-help`*

---

#### 2.3 Configure the API Key (.env)
For the AI to work, you need to configure your Google Gemini API key.

1. **In the root of your project**, create a file called `.env`. You can use the following commands in the terminal:

    * **Windows**
        ```bash
        notepad .env
        ```
    * **Linux/WSL**
        ```bash
        touch .env && nano .env
        ```

2. Inside the `.env` file, paste the following content, add your key, and save:
    ```
    GEMINI_API_KEY=YOUR_KEY_HERE
    MODEL_NAME=gemini-2.0-flash
    ```
⚠️ **Important:** Remember to add the `.env` file to your `.gitignore` so you don’t push your secret key to GitHub, and make sure it’s an actual "ENV file" and not `.txt` or something similar.

---

## Important Note: The CodeWise tool expects your remotes to follow the standard GitHub convention:

**origin:** Should point to your personal fork of the repository.

**upstream:** (if you add it to the repository) Should point to the main repository you forked from.

**If you start a brand-new repository from scratch, you must do an initial push with `git push --no-verify` before using the tool so that the GH CLI works properly when creating Pull Requests.**

#### 2.4 Now — only once — Activate Automation in the Repository with a command.
In the root of the project where the `.git` folder is, run:

```bash
codewise-init --all
```
**Use this command whenever you want to change where the PULL REQUEST WILL BE CREATED in the pre-push hooks, because if you add an upstream remote you will need to switch which remote the PR will be generated for.**

Here is the Pull Request target configuration:

If your repository has an upstream remote configured, the installer will ask after you run `codewise-init --all` to set the default pre-push hook behavior:

```
An 'upstream' remote was detected.
What should be the default behavior of 'git push' for this repository?
1: Create Pull Request in 'origin' (your fork)
2: Create Pull Request in 'upstream' (main project)
Choose the default (1 or 2):
```

Your choice will be saved in the hook, and you won’t need to worry about it again. If there is no upstream, it will default to `origin`.

You’ll see a success message confirming that automation is active.

With this command the pre-commit and pre-push files will already have been added to your repository hooks.

---

Everything is now working in the repository you configured.
If you want to install it in a new repository, just repeat the steps.

# Using CodeWise
With the configuration complete, you now have access to the **codewise-lint** and **codewise-pr** commands both manually and automatically after installing the hooks.

1. **Add your changes**

    * After modifying your files, add them to the staging area:
    ```bash
    git add .
    ```
    * Here you can run the `codewise-lint` command to analyze the files and make adjustments before committing.

2. **Commit your changes**
    ```bash
    git commit -m "implement new feature"
    ```
    * At this moment, the **`pre-commit` hook will be triggered**, and `codewise-lint` will run a quick analysis in your terminal.

3. **Push to GitHub**
    ```bash
    git push
    ```
    * Now, the **`pre-push` hook will be triggered**. `codewise-pr` will ask which remote you want to push to if there is an upstream besides your `origin`, and then it will create/update your Pull Request with a title, description, and technical analysis generated by AI.


