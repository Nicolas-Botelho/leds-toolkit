---
sidebar_position: 1
title: Writting a File
---

# Language Hierarchy
The Spark Document must have:
- One Configuration Section it Top Level;
  
- At least one module section that includes:
    - Or one or more entity;
    - Or one or more modules;
    - Or both;

# The Configuration Section

To start the section namespace include the keyword `Configuration` and start it block. Internal, it must have:
- software_name (the main project name);
- about (long text description can be used here); and
- language (specifys the architecture and tecnology of **backend**).

**How i configure the Frontend?**
You don`t. It have only one frontend implementation, the Vue + Tailwind implementation.

<p align="center">List of Possible Languages</p>
| Enum Option | Description |
|      -      |      -      |
| csharp-clean-architecture | specificer the backend must be generated using .NET with Clean Architecture Architecture|
| csharp-minimal-api | specificer the backend must be generated using .NET with Minimal API Architecture |
| python | specifier the backend must be generated using Django rest framework with DJango MVC Architecture |
| java | specifier the backend must be generated using SpringBoot with SpringBoot MVC Architecture |

<p align='center'> Configuration Section Example </p>
```
    Configuration {
        software_name: "name_of_the_software"
        about: "software description"
        language: csharp-clean-architecture-custom
    }
```

# The Module Section
This section refers to Domain Class Packages and/or program Packages/Modules. The `module` key word to refers to it was arbitrary chosed.

Start insert the keyword `module`, set some module name and initialize the namespace block. Then, insert in it other modules, entitys or both. It must have at least one module or entity.

<p align='center'> Module Example 1 </p>
```
module ModuleName {
    module SubModule {...}
}
```

<p align='center'> Module Example 2 </p>
```
entity EntityName {...}
```

<p align='center'> Module Example 3 </p>
```
// some description comment
module ModuleName {
    module SubModule {...}
    entity SomeEntity {...}
}
```

<p align='center'> Wrong Module Example </p>
```
module ModuleName {
    // empty module :(
}
```

# The Class/Entity Section
The class/entity section have an diferent internal struct. Each item in it is an attribute... Check it out.

## The Attribute Item
The attribute have the follow semantic:
` attributeName : <qualifier> `

The most important qualifier are types, and it must be the first specified qualifier. After it, you could use to many other qualifiers, like `blank`, `null`, etc.

### Attribute Qualifiers - Types Enum
| Token | Description |
|   -   |      -      |
| string | refers to strings attribute in referenced language |
| integer | refers to integers attribute in referenced language |
| decimal | refers to precising decimal representation attribute in referenced language (it could not be float or double) |
| datetime | refers to date and time attribute in referenced language |
| date | refers to date attribute in referenced language |
| boolean | refers to boolean attribute in referenced language |
| uuid | refers to Universal User Identfier attribute wich depends the tecnology implemented (example, in C# it use UUID class from .NET) |
| email | refers to email attribute wich depends the tecnology implemented (example, in Python it use EmailField class from Django) |
| cpf | refers to "Cadastro de Pessoa Física" attribute wich depends the tecnology implemented (example, in Python it use CPFField class from django-cpf-cnpj) [Specific for Brazil]|
| cnpj | refers to "Cadastro Nacional de Pessoa Jurídica" attribute wich depends the tecnology implemented (example, in Python it use CNPJField class from django-cpf-cnpj) [Specific for Brazil]|
| currency | refers to monetary manipulation attribute wich depends the tecnology implemented |
| mobilePhoneNumber | refers to mobile phones number attribute wich depends the tecnology implemented |
| phoneNumber | refers to landline phones number attribute wich depends the tecnology implemented  |

### Attribute Qualifiers - Otehrs Enum
| Token | Description |
|   -   |      -      |
| unique | refers to unique attributes; some types, like `uuid`, it are implict |
| blank | refers to attributes could be `blank` |
| null | refers to attributes could be `null` |


#### About `blank` and `null`
Some databases technologys, like PostegressSQL and MySQL, diferes null attributes from blank attributes. The most part of REST API frameworks abrating the database technology, so this qualifiers will be passed to it. In other hand, some languages, like javascript, difers `undefined` from `null` objects, so the `blank` modifier will be interpreter as `undefined` and `null` will be interpreted as `null`.

## The Relations Items
To specify some relations between classes you will need the `ManyToOne`, `OneToMany`, `OneToOne` and `ManyToMany` keywords. Everyone work's at same. First, set some class reference (it can be from other `module` to). Next, set some keyword. In the end, specify the other side of relation.

## Examples

Classes (with attributes and relations)
```spark
// Module Desscription
module ModuleName {
    // entity Description
    entity ClassName {
        // attribute description
        attributeName : attributeType
        ClassName OneToOne ModuleName.AnotherClass
    }
    
    entity AnotherClass {
        attribute : attributeType
        enumReference uses MyEnum
        ClassName ManyToOne AnotherClass
    }

    enum MyEnum {
        op1
        op2
        op3
    }
}
```

