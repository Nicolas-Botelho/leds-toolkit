---
sidebar_position: 3
title: Andes Tool VS Andes Lib
---

# Difference between Andes Lib and Andes GPS Project

The Andes architecture is made up of **two complementary parts**:

---

## 📚 Andes Lib
- Acts as an **auxiliary compiler**.
- Defines **interfaces, base classes, and fundamental types** that represent entities in the Andes model.
- Serves as an **abstraction layer** for:
  - Use cases
  - Requirements
  - Entities
  - Relationships
  - Events

---

## Andes
- Is the **main tool**.
- Responsible for:
  - Defining the **Andes grammar** (`.langium`)
  - **Parsing** models written in the Andes DSL
  - Translating the grammar elements into **Andes Lib** types (via `translatorutils`)

