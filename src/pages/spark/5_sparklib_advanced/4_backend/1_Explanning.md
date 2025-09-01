---
sidebar_position: 1
title: Overview
layout: '~/layouts/MarkdownLayout.astro'
---


To modularize, we copy the folder structure of the backend generators into our lib, in order to remove this part of the processing from within the main program.

We created this directory structure
```mermaid
graph TD
  A[backend/]
  A --> C[java-generator/]
  A --> D[python-generator/]
  A --> B[csharp-generator/]
  A --> F[models/]
  A --> G[generators/]
  B --> B1[cleanArchitecture-generator/]
  B --> B2[minimal-API-generator/]
  A --> E[index.ts]

```
We created the generators folder to make the calls uniform and in the same directory, this is necessary npm
The final use of the lib is in referencing these generators folder
```mermaid
graph TD

  backend/ --> C[generators/]
  C --> C1[cleanArchitecture-generators/]
  C --> C2[minimal-API-generators/]
  C --> C3[django.ts]
  C --> C4[index.ts]
  C --> C5[springboot.ts]
```

The models folder was created due to the common need to use files that were also shared in the application within the original Spark structure.

```mermaid

graph TD
  models/ --> D[model.js]
  models/ --> C[index.ts]

```

index.ts is an extremely important part in the construction of our lib, it is where the logic imports are scaled between folders and referenced at the time of import for use in the source code.

---

### Use in Spark

With the use of the lib we needed to modify our source code of the spark generators, where all code generation logic was within the source code, with the use of our lib we removed all this part of the product logic and kept only the lib calls we created, keeping only one generator.ts within each respective language.

This leaves us with the source code structure like this:


```mermaid

graph TD
  backend/ --> A[csharp/]
  backend/ --> B[java/]
  backend/ --> C[python/]
  
  
  A --> A1[generator.ts]
  A --> A2[clean-archictecture-custom]
  A --> A3[generator-clean-arch-custom.ts]
  B --> B1[generator.ts]
  C --> C1[generator.ts]
  
```


These generators are where spark-generators-lib is called for each language, thus communicating with the generators and index within the lib.