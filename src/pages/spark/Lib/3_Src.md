---
sidebar_position: 5
title: SRC
---

With the use of the lib we needed to modify our source code of the spark generators, where all code generation logic was within the source code, with the use of our lib we removed all this part of the product logic and kept only the lib calls we created, keeping only one generator.ts within each respective language.

This leaves us with the source code structure like this:


```mermaid

graph TD
  Backend/ --> A[csharp/]
  Backend/ --> B[java/]
  Backend/ --> C[python/]
  
  
  A --> A1[generator.ts]
  B --> B1[generator.ts]
  C --> C1[generator.ts]
```


These generators are where spark-generators-lib is called for each language, thus communicating with the generators and index within the lib.