---
sidebar_position: 3
title: Instalation
---

To use this action in your repository, follow the steps below:

1. Install the extension locally
2. Configure your .env file with the appropriate LLM credentials:
    (name of your provider)_API_KEY=your-api-key (ex. GEMINI_API_KEY)
    MODEL=your-model-name
    PROVIDER=gemini 
    - Supported providers:
        openai

        google (Gemini)

        groq

        ollama

        mistral

        cohere

        anthropic

        together  

3. Ensure your project has the necessary dependencies:
    * "@types/node": "20.x"
    * "typescript": "^5.8.3"
    * "node.js": "^v20.18.0"
    * "npm": "^11.4.1"
    * Visual Studio Code (v1.85+)