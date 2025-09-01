---
sidebar_position: 3
title: VS Code Guide
layout: '~/layouts/MarkdownLayout.astro'
---

## Using CodeWise in Visual Studio Code

The CodeWise workflow is fully compatible with Visual Studio Code. Since the hooks are installed in your Git repository, they will be triggered whether you use the command line or the editor's graphical interface.

There are two main ways to use Git in VS Code, and both activate CodeWise.

---

## Method 1: Using the Integrated Terminal (Recommended)

This is the most direct and recommended way, as you will see all of CodeWise's output in real-time.

### 1. Open the Integrated Terminal
You can open a terminal directly in VS Code using the shortcut `Ctrl + ` ` (backtick) or by going to the `Terminal` > `New Terminal` menu.

### 2. Follow the Standard Flow
With the terminal open, the steps are exactly the same as in the main guide:

* **Add your changes:**
    ```bash
    git add .
    ```
    *At this point, `codewise-lint` can be run manually for a preliminary analysis.*

* **Make the commit:**
    ```bash
    git commit -m "implements new feature"
    ```
    *The `pre-commit` hook will be triggered, and you will see the `codewise-lint` analysis directly in the terminal.*

* **Push to GitHub:**
    ```bash
    git push
    ```
    *The `pre-push` hook will be triggered. Watch the terminal to see the Pull Request creation and to answer any questions about the remote (`origin` or `upstream`).*

---

## Method 2: Using the GUI (Source Control Panel)

If you prefer to use the visual interface for Git in VS Code, CodeWise will also work. The key is to **keep an eye on the integrated terminal to see the tool's messages**.

### 1. Stage Your Changes
* Open the **Source Control** panel in the sidebar (icon with three connected dots).
* Modified files will appear under "Changes". Click the **`+`** icon next to each file to stage them (equivalent to `git add`).

### 2. Make the Commit
* At the top of the Source Control panel, type your commit message in the text box.
* Click the "check" icon or press `Ctrl + Enter` to commit.

    > ⚠️ **Attention:** At this moment, the `pre-commit` hook will be triggered in the background. **Open the Integrated Terminal (`Ctrl + ` `) to see the output from `codewise-lint`.**

### 3. Push to GitHub
* After committing, a **"Sync Changes"** or **"Publish Branch"** button will appear in the Source Control panel. Click it to send your changes.

    > ⚠️ **Attention:** The `pre-push` hook will be triggered now. It is **essential that you watch the Integrated Terminal**, as `codewise-pr` may ask questions (like the choice between `origin` and `upstream`) that will require your input to continue. The push process in the GUI will only complete after the CodeWise hook finishes its execution.