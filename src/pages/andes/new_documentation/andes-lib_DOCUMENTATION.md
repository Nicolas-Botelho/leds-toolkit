---
sidebar_position: 7
title: Andes GPS Project Lib Architecture
---

# Andes Lib - Documentation

**Andes Lib** is an auxiliary library used by the `andes-gps-projeto` tool. It functions as a **compiler** and provides **interfaces and base classes** that represent elements of the Andes model.

Note that within the library, information is compiled via the IRender class, which, based on a provided indentation, compiles the sent information into the desired format. When you are performing maintenance on the library, this is how you will add information.

-----

## `IRender` Interface

```ts
export default interface IRender {
    public render(identationStartLevel: number = 0): string;
}
```

## TODO
documentar cada um dos renders
