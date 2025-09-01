---
sidebar_position: 3
title: An Advanced Study of Grammar
layout: '~/layouts/MarkdownLayout.astro'
---

# A Brief About Grammar
Spark files ussing a Program Based Language. Like most Language it have the following tokes:
- KeyWord: some reserved word that you can't use;
- NameSpace: some keywords specifing a namespace, wich have in it semantics `keyword <namespaceName> <startblock> <items> <endbock>`, where:
  - `<namespaceName>` is a free text;
  - `<startblock>` is "`{`";
  - `<endblock>` is "`}`";
  - `<items>` is or NameSpaces, KeyWords and SingleItems;
- SingleItem: some keywods spcifing a single item, wich have in it sematics `keyword <startModifier> <modifier>`, where `<startModifier>` is ":".

# Language Hierarchy
The Spark Document must have:
- One Configuration Section it Top Level;
  
- At least one module section that includes:
    - Or one or more entity;
    - Or one or more modules;
    - Or both;

# The Configuration NameSapce

## Token Mapper
| Keyword | Category | Qualifier | Examples | 
|    -    |     -    |     -     |    -     |
| Configuration | Name Space | | |
| software_name | Single Item | string | `software_name: "free text"` |
| about | Single Item | string | `about: "free text"` |
| language | Single Item | enum | `language: csharp-clean-architecture` |

Attention: every "string" qualifier must be inside quotation marks (**"**)

### Language Token Mapper
| Enum Option | Description |
|      -      |      -      |
| csharp-clean-architecture | specificer the backend must be generated using .NET with Clean Architecture Architecture|
| csharp-minimal-api | specificer the backend must be generated using .NET with Minimal API Architecture |
| python | specifier the backend must be generated using Django rest framework with DJango MVC Architecture |
| java | specifier the backend must be generated using SpringBoot with SpringBoot MVC Architecture |


## Setting Configuration
To start the section namespace include the keyword `Configuration` and start it block. Internal, it must have:
- software_name (single item with string qualifier);
- about (single item with string qualifier); and
- language (single item with enum qualifier).

<p align='center'> Configuration Example </p>
```
    Configuration {
        software_name: "name_of_the_software"
        about: "software description"
        language: csharp-clean-architecture-custom
    }
```

The `language` token accept the keys specified [here](#language-token-mapper).

# The Module NameSpace
This namespace refers to Domain Class Packages and/or program Packages/Modules. The `module` key word to refers to it was arbitrary chosed.

## Token Mapper
| Keyword | Category | Name | Acceptable Sub Name Spaces | Correct Examples | Wrong Examples |
|    -    |     -    |   -  |             -              |        -         |       -        |
| module | Name Space | free text with no special characters, inclunding numbers, "\\" based chars in ASCII and utf-8, and spaces. | module, entity and enum | `module someName`, `module SomeName`, `module SOMENAME_NAME_WHY_YOU_IS_DOING_it` | `module 1Name`, `module Module Name`, `module <keyword>` |
| entity | Name Space | free text with no special characters, inclunding numbers, "\\" based chars in ASCII and utf-8, and spaces | enum | `entity someName`, `entity SomeName`, `entity SOMENAME_NAME_WHY_YOU_IS_DOING_it` | `entity 1Name`, `entity Entity Name`, `entity <keyword>` |
| enum | Name Space | free text with no special characters, inclunding numbers, "\\" based chars in ASCII and utf-8, and spaces | | `enum someName`, `enum SomeName`, `enum some_NaMe` | `enum 1Name`, `enum Enum Name`, `enum <keyword>` |

## Setting Module

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

# The Class NameSpace
The class namespace have an diferent internal struct. Each item in it is an attribute... Check it out.

## The Attribute Item
The ttribute have the follow semantic:
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
| min | we don't know how use it, but it is here :)  |
| max | we don't know how use it, but it is here :)  |


#### About `blank` and `null`
Some databases technologys, like PostegressSQL and MySQL, diferes null attributes from blank attributes. The most part of REST API frameworks abrating the database technology, so this qualifiers will be passed to it. In other hand, some languages, like javascript, difers `undefined` from `null` objects, so the `blank` modifier will be interpreter as `undefined` and `null` will be interpreted as `null`.


#### About `min` and `max` attributes
Yes, we don't know why it is here, but have rules to use. First, you can use each of them separatly. Next, you must pass some integer value affter the qualifier declaration, like `min: 10`. In end, if you use `min` and `max` together, you must specify the `max` first.

## The Relations Items
To specify some relations between classes you will need the `ManyToOne`, `OneToMany`, `OneToOne` and `ManyToMany` keywords. Everyone work's at same. First, set some class reference (it can be from other `module` to). Next, set some keyword. In the end, specify the other side of relation.

Attention, the relation are seted in the referenced order, not referenced class. Check it example:
```
entity One {...}
entity Two {
    one ManyToOne Two
}
```

The code above will be translated in some generic OO Program Language Like
```
class One {
    Two target;
}

class Two {

}
```

It is useful in analysis to center the order of viewing. Here's the example: You have a class diagram with the Product and Price classes. It is obvious that the product has some relationship with the price of the class. Correct? So how do you specify it in Spark?

```
    entity Product {...}
    entity Price { OneToOne Product Price }
```
``` entity Product { OneToMany Product Price }
    entity Price {...}
```

Both are correctly and probably do exactly the same thing in each implementation. By the way, check the first option. It's less intuitive at first glance, but the reasoning here is obvious that a product has some price, so we'll show it after, where it could be more useful than knowing (where we're studying the Product class).

## The Enum NameSpace
The enum namepace are some of most simples to specify. Just start the enum namepace with `enum` keyword. Aftter, each free text inside will be option in the enum. To set some class attribute as an `enum` reference file, use the keyword `uses`.

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

