---
sidebar_position: 5
title: Suggestions for Improvements
layout: '~/layouts/MarkdownLayout.astro'
---

# Suggestions for Improvements

### Suggestion 1: Conversation Memory in AI

#### Concept
Add **contextual memory** to the chatbot, allowing it to keep track of previous user interactions. This way, sequential questions can be understood within the same context, without requiring repetition.

#### Why implement?
Currently, each question to Oráculo is processed in isolation, forcing users to repeat context for each query.  
With memory, it would be possible to maintain a **continuous dialogue**, improving usability and making interactions more natural.

#### Benefits
- Enables chained queries (e.g., *“Which tasks are open?”* → *“And from those, which belong to the current sprint?”*).  
- Reduces redundancy and saves user time.  
- Makes the chatbot behave more like an **intelligent personal assistant**.  

---

### Suggestion 2: Graph Generation and Standardized Responses

#### Concept
Enable Oráculo to **generate visual charts** (bar, line, pie) from GitHub metrics, and apply a **standard response format** for all answers.

#### Why implement?
Currently, the system only provides **plain text responses**, which can make it harder to interpret complex metrics.  
Visual outputs make results easier to understand and more useful for sprint reviews or team meetings.  
Standardized responses ensure that information is always presented consistently, supporting comparison and professional reporting.

#### Benefits
- Improves clarity of communication (e.g., sprint performance, number of open/closed issues).  
- Easier analysis for managers who prefer **visuals over text**.  
- Creates a more professional experience aligned with modern management tools.  

---

### Suggestion 3: Dynamic Token Management

#### Concept
Allow updating API tokens (e.g., **GitHub**, **Gemini**) directly through the **system interface**, without editing the `.env` file or restarting services.

#### Why implement?
Currently, token replacement requires manual changes to the `.env` file and restarting the application.  
This process creates friction, especially for non-technical users, and interrupts workflow.  
With dynamic token management, users could update credentials in real time, ensuring better **usability and flexibility**.

#### Benefits
- Fast replacement of expired credentials.  
- Reduces technical dependency by avoiding manual file editing.  
