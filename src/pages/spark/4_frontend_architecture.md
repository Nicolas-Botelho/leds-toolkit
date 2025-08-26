---
sidebar_position: 4
title: Front-end Architecture
---
# Front-end Architecture

```
.
└── frontend/vue-vite/
    ├── cypress/
    │   ├── e2e/
    │   │   ├── generate.ts
    │   │   └── step_definitions/
    │   │       ├── generate.ts
    │   │       └── generateDelete.ts
    │   ├── generate.ts
    │   └── pageObjects/
    │       ├── generate.ts
    │       ├── generateDetails.ts
    │       ├── generateForms.ts
    │       └── generateIndex.ts
    ├── generate.ts
    ├── helpers-generator.ts
    ├── public/
    │   └── generate.ts
    └── src/
        ├── components/
        │   └── generate.ts
        ├── composition/
        │   └── generate.ts
        ├── generate.ts
        ├── layouts/
        │   ├── full/
        │   │   ├── customizer/
        │   │   │   └── generate.ts
        │   │   ├── generate.ts
        │   │   ├── horizontal-header/
        │   │   │   └── generate.ts
        │   │   ├── horizontal-sidebar/
        │   │   │   └── generate.ts
        │   │   ├── logo/
        │   │   │   └── generate.ts
        │   │   ├── vertical-header/
        │   │   │   └── generate.ts
        │   │   └── vertical-sidebar/
        │   │       └── generate.ts
        │   └── generate.ts
        ├── plugins/
        │   └── generate.ts
        ├── router/
        │   └── generate.ts
        ├── scss/
        │   ├── components/
        │   │   └── generate.ts
        │   ├── generate.ts
        │   ├── layout/
        │   │   └── generate.ts
        │   └── pages/
        │       └── generate.ts
        ├── services/
        │   ├── generate.ts
        │   └── requires/
        │       └── generate.ts
        ├── stores/
        │   ├── apps/
        │   │   ├── generate.ts
        │   │   └── userprofile/
        │   │       └── generate.ts
        │   └── generate.ts
        ├── theme/
        │   └── generate.ts
        ├── utils/
        │   └── generate.ts
        └── views/
            ├── authentication/
            │   └── generate.ts
            ├── generate.ts
            └── model/
                ├── generate.ts
                ├── generateDetails.ts
                ├── generateForms.ts
                └── generateIndex.ts
```
## Generators
The generators, in TypeScript, creates the code, the files and the folders of the frontend.

The generators are organized acordingly with what they create.

The generators on the superiors parts create the structure and call the generators in the level below them. This generators will create a specific part of the code and the respective files and/or will create other folders and call their respective generators.

## Generator's Organization
### Main Generator
- Creates the App.vue and configuration files.
    - Vue's main file.
    - Calls the router (src/router).
- Creates the cypress folder.
- Creates the public folder.
- Creates the src folder.

### frontend/cypress
Folder with subfolders responsible for generating the structure of Cypress, an automated front-end testing tool.

- **e2e:** Defines the tests that are going to be made.
- **PageObjects:** Applies the Page Object Pattern, organizing and encapsulating page elements and actions into reusable components.

### frontend/public
Defines the public assets for the project, like the favicon image, environment variables and redirect configs.

### frontend/src
Folder with multiple subfolders.
Each subfolder is responsible for part of the frontend components.

- **Components:** Defines the options for colors.

- **Composition:** Defines the available funcionabilities (e.g.: get by id, post, delete).

- **Layout:** Defines the components disposition on the screen.

- **Plugins:** Imports Vuetify to style the components and define the default theme.

- **Router:** Defines the routes for src/composition.

- **Scss:** Defines the components used in src/layout.

- **Services:** Generates the Factory and the Api (localhost port).

- **Stores:** Makes the user configurations (e.g.: authentication, followers, posts)

- **Theme:** Defines the colors to light theme and dark theme.

- **Utils:** Defines colors used in each theme.

- **Views:**
    - src/views/model: Create the responsible files for the Index, Detail and Form screens to each class.

    - src/views/authentication: Create the responsible file for the user sidebar login.
