# How to Contribute

We welcome contributions to make MADE better! This guide outlines how to contribute and suggests key features that would significantly improve the tool.

## Getting Started

### Development Setup
1. Fork the repository
2. Clone your fork locally
3. Install dependencies: `npm install`
4. Build the project: `npm run build`
5. Run tests: `npm test`

### Repository Structure
- `leds-tools-made` - VS Code extension and CLI
- `leds-tools-made-lib` - Core processing library
- `leds-tools-made-docker` - Containerized runtime
- `leds-tools-made-githubaction` - GitHub Actions automation

## Priority Feature Requests

We've identified several key improvements that would make MADE significantly better. These features represent excellent opportunities for contributors to make meaningful impact.

### 1. Avoid Duplication of Issues on GitHub

**Problem**: Currently, running the GitHub integration multiple times creates duplicate issues.

**Solution Needed**: 
- Compare existing repository issues before creation
- Skip issues that already exist based on title/description matching
- Provide option to update existing issues instead of creating duplicates

**Implementation Approach**:
```typescript
class GitHubDuplicationHandler {
    async getExistingIssues(org: string, repo: string): Promise<GitHubIssue[]> {
        // Query existing issues from repository
    }
    
    async shouldCreateIssue(newIssue: Issue, existingIssues: GitHubIssue[]): Promise<boolean> {
        // Compare titles, descriptions, labels
        // Return false if similar issue exists
    }
}
```

**Impact**: Prevents cluttered repositories and improves workflow reliability.

### 2. Allow Use of GitHub Templates

**Problem**: Issues are created with basic formatting, missing repository-specific templates.

**Solution Needed**:
- Support custom issue templates for different issue types (Epic, Story, Task)
- Read templates from local folder structure
- Allow variable substitution in templates

**Implementation Approach**:
```
project/
├── .made-templates/
│   ├── epic.md              # Epic issue template
│   ├── story.md             # Story issue template
│   └── task.md              # Task issue template
├── project.made
└── .env
```

**Template Example**:
```markdown
<!-- epic.md -->
## Epic: {{title}}

**Description**: {{description}}

**Acceptance Criteria**:
{{#each criterions}}
- [ ] {{this}}
{{/each}}

**Related Stories**: 
<!-- Will be populated automatically -->
```

**Impact**: Better integration with existing GitHub workflows and repository standards.

### 3. Event-Based Programming Paradigm

**Problem**: Current implementation uses condition-checking patterns, making it harder to extend and maintain.

**Solution Needed**:
- Refactor core architecture to use event-driven patterns
- Implement observer pattern for component processing
- Enable plugin-based extensions through events

**Implementation Approach**:
```typescript
interface MadeEvent {
    type: string;
    data: any;
    timestamp: Date;
}

class EventBus {
    private listeners: Map<string, Function[]> = new Map();
    
    emit(event: MadeEvent): void {
        const handlers = this.listeners.get(event.type) || [];
        handlers.forEach(handler => handler(event));
    }
    
    on(eventType: string, handler: Function): void {
        // Register event listener
    }
}

// Usage
eventBus.on('backlog.processed', (event) => {
    // Generate backlog documentation
});

eventBus.on('sprint.created', (event) => {
    // Update sprint metrics
});
```

**Impact**: Improved extensibility, better separation of concerns, and easier testing.

### 4. Improve GitHub Integration Mapping

**Problem**: Current GitHub integration doesn't leverage GitHub's native features optimally.

**Solution Needed**:
- Better mapping of MADE components to GitHub native structures
- Utilize GitHub Projects V2 custom fields more effectively
- Improve milestone and release management integration

**Current vs Improved Mapping**:

| MADE Component | Current GitHub Mapping | Improved Mapping |
|----------------|----------------------|------------------|
| Epic | Issue with "Epic" label | Epic issue with linked children |
| Story | Issue with "Story" label | Story with proper parent Epic reference |
| Task | Issue with "Task" label | Task with Story parent and proper assignees |
| Sprint | Milestone | GitHub Project iteration field |
| Process | Not mapped | GitHub Project template |
| Dependencies | Description text | GitHub issue blocking relationships |

**Implementation Ideas**:
```typescript
class ImprovedGitHubMapper {
    async createEpicWithChildren(epic: Epic): Promise<void> {
        // Create parent Epic issue
        // Create child Story issues with proper linking
        // Use GitHub's issue hierarchy features
    }
    
    async mapSprintToIteration(sprint: TimeBox): Promise<void> {
        // Use GitHub Projects V2 iteration fields
        // Better sprint planning integration
    }
    
    async setupDependencyBlocking(task: Task): Promise<void> {
        // Use GitHub's native issue blocking
        // Create proper dependency chains
    }
}
```

**Impact**: More native GitHub experience, better project management integration.

## Additional Contribution Opportunities

### Documentation Improvements
- Add more comprehensive examples
- Create video tutorials
- Improve error messages and help text

### Testing Enhancement
- Increase test coverage
- Add integration tests with real GitHub API
- Performance testing for large projects

### Feature Extensions
- Support for more project management tools (Jira, Azure DevOps)
- Custom chart types and metrics
- Advanced dependency analysis

### Developer Experience
- Better error handling and debugging
- Improved CLI output and progress indicators
- Hot reload for development

## Contribution Guidelines

### Code Style
- Follow TypeScript best practices
- Use meaningful variable and function names
- Add comprehensive JSDoc comments
- Include unit tests for new features

### Pull Request Process
1. Create feature branch from `main`
2. Implement feature with tests
3. Update documentation
4. Submit PR with clear description
5. Address review feedback

### Testing Requirements
- Unit tests for new functionality
- Integration tests for GitHub features
- Manual testing with example `.made` files
- Performance impact assessment

## Getting Help

- Open an issue for questions or bug reports
- Check existing issues before creating new ones
- Join community discussions
- Review architecture documentation first

## Recognition

Contributors will be:
- Listed in project contributors
- Credited in release notes
- Invited to maintainer discussions for significant contributions

These improvements would make MADE a more robust, user-friendly, and professionally viable project management tool. Each represents a meaningful opportunity to contribute to an active open-source project.