---
sidebar_position: 4
title: Architecture and Modularization
description: The modular architecture of the project.
---

# Architecture and Modularization

The Oráculo project is organized into well-defined modules with specific responsibilities, forming a decoupled and scalable architecture. Below is a clear explanation of each component’s role:

## Main Components


- 🔁 **Airbyte (ETL)**  
  Responsible for extracting data from GitHub (issues, pull requests, etc.), transforming and loading it into the PostgreSQL database.  
  The current approach captures data from Airbyte's temporary cache, transforms it, and inserts it into a **custom relational schema** with normalized tables. This improves compatibility with Vanna and enables more accurate SQL generation.

- ⚙️ **Backend (FastAPI)**  
  API developed with FastAPI. It acts as a bridge between the user and the database: receives questions, uses the AI to generate SQL queries, executes them, and formats the responses.   
  Pattern used: MVC (Model, View, Controller)

- 🧠 **MyVanna (LLM/AI)**  
  AI component that uses Google's Gemini model and ChromaDB. It interprets user questions, generates SQL, runs queries, and translates responses into natural language.  
  Responsibilities:
  - Understands the database schema
  - Generates and runs SQL queries
  - Learns from custom examples
  
  Additionally, to validate AI responses, the system now includes **semantic similarity tests** using Google BERT. These tests compare the generated SQL with expected queries using cosine similarity. If similarity is below 60%, the response is flagged as poor quality.  

- 🌐 **OpenWebUI (Graphical Interface)**  
  The visual interface where the user interacts with the system, submits questions, and receives responses.  


## Overview of the Data Flow

User (OpenWebUI interface)  
        ↓  
  `pipeline_api.py`  
        ↓  
 FastAPI (backend/API)  
        ↓  
    Vanna.AI (LLM)  
        ↓  
 SQL → PostgreSQL Database  
        ↓  
 ↪ Response shown to the user

## Architecture Summary by Role

| Component       | Role              | Description |
|----------------|-------------------|-------------|
| OpenWebUI      | Interface          | Frontend for user interaction |
| FastAPI (API)  | Backend/API        | Receives questions, uses AI, queries database |
| Airbyte        | ETL                | Extracts GitHub data and loads it into PostgreSQL |
| MyVanna        | LLM / AI           | Generates SQL and natural language responses using Gemini + Chroma |
| PostgreSQL     | Database           | Stores GitHub data queried by the system |

## Design Patterns Used

- **Singleton**  
  Ensures only one instance of key components like:
  - `AskController` (question logic)
  - `MyVanna` (AI client)
  - `airbyte` (ETL process)

- **MVC (Model-View-Controller)**  
  Applied in the API:
  - **Models**: Define the structure of questions/responses
  - **Controllers**: Process the logic (e.g. `AskController.py`)
  - **Views/Routes**: Handle API endpoints (e.g. `routes.py`)

## Deployment

The entire system is containerized using Docker. Components defined in `docker-compose.yml` include:
- `db`: PostgreSQL database
- `back-end`: Python-based API and ETL
- `front-end`: OpenWebUI interface

Configuration files include `Dockerfile.dev`, `Dockerfile.pub`, and `Dockerfile`.

## Security and Configuration

Sensitive data is stored in `.env` files. This includes:
- GitHub token
- Database password
- Gemini API key

## Testing

Tests are implemented using `pytest`, including:
- MyVanna tests (SQL generation and DB connection)
- Pipeline tests (question handling)
- API tests (`/ask` endpoint)
- AI Response Quality Tests: Implemented with BERT to evaluate the semantic similarity between expected and generated SQL queries. Tests fail if similarity drops below 60%.  

---

The Oráculo system demonstrates how AI and GitHub integration can simplify development tracking through natural language. Its architecture is modular, follows good design principles, and is production-ready with testing, containerization, and secure configuration.