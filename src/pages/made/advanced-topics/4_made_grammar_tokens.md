# Grammar Tokens

The MADE DSL uses Langium grammar to define its syntax. Understanding the grammar structure is essential for developers extending or integrating with MADE.

## Grammar Structure

### Main Grammar Entry Point
```langium
grammar Made

import 'helpers'
import 'terminals'
import 'projects'
import 'backlog'
import 'processes'
import 'timebox'
import 'team'
import 'roadmap'

entry Model:
    (project=Project)
    (components+=(Team|Process|Backlog|TimeBox|Roadmap))*
```

## Core Tokens

### 1. Project Definition
```langium
Project:
    'project' id=ID '{'
        'name:' name=STRING
        ('description:' description=STRING)?
        ('startDate:' startDate=DATE)?
        ('dueDate:' dueDate=DATE)?
        ('completedDate:' completedDate=DATE)?
    '}';
```

### 2. Team Structure
```langium
Team:
    'team' id=ID '{'
        'name:' name=STRING
        ('description:' description=STRING)?
        (teammember+=TeamMember)*
    '}';

TeamMember:
    'teammember' id=ID '{'
        'name:' name=STRING
        'email:' email=STRING
        ('discord:' discord=STRING)?
    '}';
```

### 3. Process Definition
```langium
Process:
    'process' id=ID '{'
        'name:' name=STRING
        ('description:' description=STRING)?
        (activities+=Activity)*
    '}';

Activity:
    'activity' id=ID '{'
        'name:' name=STRING
        ('description:' description=STRING)?
        ('DefinitionDone:' definitionDone=STRING)?
        ('DefinitionReady:' definitionReady=STRING)?
        ('Learning:' learning=STRING)?
        ('Label:' label=ID)?
        (tasks+=TaskProcess)*
    '}';
```

### 4. Backlog Structure
```langium
Backlog:
    'backlog' id=ID '{'
        'name:' name=STRING
        ('description:' description=STRING)?
        (items+=BacklogItem)*
    '}';

Epic:
    'epic' id=ID '{'
        'name:' name=STRING
        ('description:' description=STRING)?
        ('process:' process=[Process:QualifiedName])?
        ('Criterions:' criterions=StringList)?
        ('observation:' observation=STRING)?
        (userstories+=UserStory)*
    '}';

UserStory:
    'story' id=ID '{'
        'name:' name=STRING
        ('description:' description=STRING)?
        ('activity:' activity=[Activity:QualifiedName])?
        ('depends:' depends=ReferenceList)?
        ('Requirements:' requirements=StringList)?
        ('Criterions:' criterions=StringList)?
        ('observation:' observation=STRING)?
        (tasks+=Task)*
    '}';

Task:
    'task' id=ID '{'
        'name:' name=STRING
        ('description:' description=STRING)?
        ('task:' taskRef=[TaskProcess:QualifiedName])?
        ('depends:' depends=ReferenceList)?
        ('Deliverables:' deliverables=StringList)?
    '}';
```

### 5. TimeBox (Sprint) Definition
```langium
TimeBox:
    'sprint' id=ID '{'
        'name:' name=STRING
        ('description:' description=STRING)?
        ('startDate:' startDate=DATE)?
        ('endDate:' endDate=DATE)?
        ('status:' status=SprintStatus)?
        ('comment:' comment=STRING)?
        ('completeDate:' completeDate=DATE)?
        (sprintbacklog+=SprintBacklog)*
    '}';

SprintBacklog:
    'sprintbacklog' id=ID '{'
        (items+=SprintItem)*
    '}';

SprintItem:
    'item' reference=[BacklogItem:QualifiedName] '{'
        ('assignee:' assignee=[TeamMember:QualifiedName])?
        ('dueDate:' dueDate=DATE)?
        ('startDate:' startDate=DATE)?
        ('completedDate:' completedDate=DATE)?
        ('status:' status=ItemStatus)?
        ('complexity:' complexity=Complexity)?
    '}';
```

### 6. Roadmap Structure
```langium
Roadmap:
    'roadmap' id=ID '{'
        'name:' name=STRING
        ('description:' description=STRING)?
        (milestones+=Milestone)*
    '}';

Milestone:
    'milestone' id=ID '{'
        'name:' name=STRING
        ('description:' description=STRING)?
        ('startDate:' startDate=DATE)?
        ('dueDate:' dueDate=DATE)?
        ('completedDate:' completedDate=DATE)?
        ('status:' status=MilestoneStatus)?
        ('depends:' depends=[Milestone:QualifiedName])?
        (releases+=Release)*
    '}';

Release:
    'release' id=ID '{'
        ('name:' name=STRING)?
        ('description:' description=STRING)?
        ('version:' version=STRING)?
        ('dueDate:' dueDate=DATE)?
        ('releasedDate:' releasedDate=DATE)?
        ('status:' status=ReleaseStatus)?
        (('item:' item=[BacklogItem:QualifiedName]) | 
         ('itens:' items=ReferenceList))?
    '}';
```

## Terminal Definitions

### Basic Types
```langium
terminal ID: /[_a-zA-Z][\w_]*/;
terminal STRING: /"[^"]*"/;
terminal DATE: /\d{4}-\d{2}-\d{2}/;
terminal INT returns number: /[0-9]+/;
```

### Enumerations
```langium
enum SprintStatus:
    PLANNED | IN_PROGRESS | CLOSED;

enum ItemStatus:
    TODO | DOING | DONE;

enum Complexity:
    LOW | MEDIUM | HIGH;

enum MilestoneStatus:
    PLANNED | IN_PROGRESS | COMPLETED | CANCELLED;

enum ReleaseStatus:
    PLANNED | IN_DEVELOPMENT | RELEASED | CANCELLED;
```

### Helper Types
```langium
StringList:
    values+=STRING (',' values+=STRING)*;

ReferenceList:
    references+=[BacklogItem:QualifiedName] (',' references+=[BacklogItem:QualifiedName])*;

QualifiedName:
    ID ('.' ID)*;
```

## Advanced Grammar Features

### Cross-References
```langium
// Reference to team member
'assignee:' assignee=[TeamMember:QualifiedName]

// Reference to process activity
'activity:' activity=[Activity:QualifiedName]

// Reference to other backlog items for dependencies
'depends:' depends=ReferenceList
```

### Optional Properties
```langium
// Optional description field
('description:' description=STRING)?

// Optional date fields
('startDate:' startDate=DATE)?
('dueDate:' dueDate=DATE)?
```

### Collections
```langium
// Multiple team members
(teammember+=TeamMember)*

// Multiple tasks in user story
(tasks+=Task)*

// Multiple items in sprint backlog
(items+=SprintItem)*
```

## Validation Rules

### Date Format Validation
```typescript
export function validateDates(node: any, accept: any) {
    const typeMeta = reflection.getTypeMetaData(node.$type);
    for (const prop of typeMeta.properties) {
        if (prop.name.match(/date$/i) && typeof node[prop.name] === 'string') {
            const value = node[prop.name];
            if (value && !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
                accept('error', `Property "${prop.name}" must be in ISO 8601 format (YYYY-MM-DD)`, 
                      { node, property: prop.name });
            }
        }
    }
}
```

### Reference Validation
- Cross-references are validated at parse time
- Scoped resolution ensures correct reference targets
- Dependency cycles are detected and reported

## Grammar Extension Points

### Adding New Component Types
```langium
// Add to main grammar
entry Model:
    (project=Project)
    (components+=(Team|Process|Backlog|TimeBox|Roadmap|CustomComponent))*;

// Define new component
CustomComponent:
    'custom' id=ID '{'
        'property:' property=STRING
        // ... additional properties
    '}';
```

### Adding New Properties
```langium
// Extend existing components
Task:
    'task' id=ID '{'
        'name:' name=STRING
        ('description:' description=STRING)?
        ('priority:' priority=Priority)?  // New property
        // ... existing properties
    '}';
```

This grammar structure provides a solid foundation for the MADE DSL while maintaining flexibility for extensions and customizations.