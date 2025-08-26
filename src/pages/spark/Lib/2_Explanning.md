---
sidebar_position: 2
title: Explanning
---


To modularize, we copy the folder structure of the backend generators into our lib, in order to remove this part of the processing from within the main program.

We created this directory structure
```mermaid
graph TD
  A[packages/]
  A --> C[java-generator/]
  A --> D[python-generator/]
  A --> B[csharp-generator/]
  A --> F[Shared/]
  A --> G[generators/]
  B --> B1[cleanArchitecture-generator/]
  B --> B2[minimal-API-generator/]
  A --> E[index.ts]

```
We created the generators folder to make the calls uniform and in the same directory, this is necessary npm
The final use of the lib is in referencing these generators folder
```mermaid
graph TD

  Packages/ --> C[generators/]
  C --> C1[cleanArchitecture-generators/]
  C --> C2[minimal-API-generators/]
  C --> C3[django.ts]
  C --> C4[index.ts]
  C --> C5[springboot.ts]
```

The Shared folder was created due to the common need to use files that were also shared in the application within the original Spark structure.

```mermaid

graph TD
  Shared/ --> D[ast.js]
  Shared/ --> A[generator-util.js]
  Shared/ --> B[relations.js]
  Shared/ --> C[index.ts]

```

Index.ts is an extremely important part in the construction of our lib, it is where the logic imports are scaled between folders and referenced at the time of import for use in the source code.