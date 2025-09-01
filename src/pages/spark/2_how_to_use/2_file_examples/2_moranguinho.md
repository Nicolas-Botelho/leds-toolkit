---
sidebar_position: 2
title: Moranguinho - Spark Example
layout: '~/layouts/MarkdownLayout.astro' 
---

In free translate, Litle Strawbery

# .spark File
```
Configuration {
    software_name: "Morango"
    about: "Moranguinho!"
    language: csharp-clean-architecture
}

module Moranguinho {

    
    entity Agricultor{
        nome: string
        identification: cpf
        email_x: email
        telefone: string
        foto: file
        Agricultor OneToMany Moranguinho.Propriedade
    }

    entity Propriedade {
        nome: string
        distrito: string
    }
    
    
}
```

# Class Diagram
![Model Generated Class Diagram](./assets/imgs/2_morango_class_diagram.png)

# Output
![Model Generated Backend](./assets/imgs/2_morango_backend.png)

![Model Generated Frontend](./assets/imgs/2_morango_frontend.png)

![Model Generated Documentation](./assets/imgs/2_morango_documentation.png)