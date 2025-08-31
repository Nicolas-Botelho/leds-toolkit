---
sidebar_position: 1
title: Overview
---

**SparkLib** is a code generation library focused on productivity and standardization. Currently, this version supports generating code for:

#### Frontend:
* Vue + Tailwind.

#### Backend:
* C# (Clean Architecture or Minimal API)
* Java
* Python

The library receives a `ProjectAbstraction` object from [SEONLibImplementation](https://github.com/chevitaresebruno/SEONLibImplementation) and, from it, generates the entire folder and file structure of the frontend project.

---

##  Features

*  Automatic generation of Vue Modular frontend project structure.
*  Full Tailwind CSS support.
*  Integration with [SEONLibImplementation](https://github.com/chevitaresebruno/SEONLibImplementation) for project abstraction.
*  Folder and file organization based on frontend development best practices.

---

##  Technologies Used

* [Vue.js (Modular Architecture)](https://vuejs.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [SEONLibImplementation](https://github.com/chevitaresebruno/SEONLibImplementation) (as source of Project Abstraction)

---

##  Prerequisites

* Have [SEONLibImplementation](https://github.com/chevitaresebruno/SEONLibImplementation) installed and configured.
* Development environment configured with Node.js, if you wish to run and test the generated projects.

---

##  Installation

```bash
# Clone this repository
git clone https://github.com/guilhermbc/leds-tools-spark-lib.git 

# Access the project folder
cd leds-tools-spark-lib

# Install dependencies, if necessary
npm install
```