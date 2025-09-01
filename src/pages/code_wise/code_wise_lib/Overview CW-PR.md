---
sidebar_position: 1
title: Overview
layout: '~/layouts/MarkdownLayout.astro'
---

# CodeWise

* A library installable via pip that uses AI to analyze code and automate Pull Request documentation through Git hooks.


## Key Features
- **Title Generation:** Creates clear and concise PR titles following the *Conventional Commits* standard.
- **Description Generation:** Writes detailed descriptions based on code changes.
- **Technical Analysis:** Posts a comment on the PR with an executive summary of architectural improvements, adherence to S.O.L.I.D. principles, and other quality points.
- **Automation with Hooks:** Integrates into your Git workflow to run automatically on every `git commit` and `git push`.