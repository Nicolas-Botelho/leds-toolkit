---
title: How to Use MADE CLI
layout: '~/layouts/MarkdownLayout.astro' 
---

# How to Use MADE CLI

## Installation

### Global Installation
```bash
npm install -g made-beta
```

### Local Usage (without installation)
```bash
npx made-beta --help
```

## Prerequisites
- [Node.js](https://nodejs.org/en/download) installed on your system

## Commands

### Help
Get help information at any time:
```bash
made-cli --help
```

### Generate Documentation
Generate markdown documentation from your `.made` file:
```bash
made-cli generate project.made
```

**Options:**
- `-d, --destination <dir>` - Specify destination directory

**Example:**
```bash
made-cli generate myproject.made -d ./docs
```

### GitHub Integration
Push your project structure to GitHub:
```bash
made-cli github project.made
```

## GitHub Setup

### 1. Create Environment File
Create a `.env` file in the same directory as your `.made` file:

```env
GITHUB_TOKEN=your_github_personal_access_token
GITHUB_ORG=your_organization_or_username
GITHUB_REPO=your_repository_name
```

### 2. GitHub Token Setup
1. Go to GitHub Settings > Developer settings > Personal access tokens
2. Generate a new token with these permissions:
   - `repo` - Full repository access
   - `write:org` - Create teams and manage organization
3. Copy the token to your `.env` file

### 3. Execute Command
```bash
made-cli github myproject.made
```

## Examples

### Basic Documentation Generation
```bash
# Generate docs in current directory
made-cli generate project.made

# Generate docs in specific directory
made-cli generate project.made -d ./documentation
```

### GitHub Integration Workflow
```bash
# 1. Ensure .env is configured
cat .env
# GITHUB_TOKEN=ghp_xxxxxxxxxxxx
# GITHUB_ORG=myorg
# GITHUB_REPO=myrepo

# 2. Push to GitHub
made-cli github project.made
```

## Output

### Documentation Generation
- Creates markdown files for backlogs, sprints, roadmaps
- Generates charts and dependency diagrams
- Produces team and project documentation

### GitHub Push
- Creates GitHub Issues for Epics, Stories, and Tasks
- Sets up GitHub Projects with proper structure
- Creates milestones and assigns team members
- Links dependencies between issues