---
title: Use Example
sidebar_position: 8
---

# Use Exemple
Here you can find a example of the grammar used in the Andes' files.

```plaintext
overview Todolist {
  name: "ToDoList"
  description: "System for organizing daily tasks"
  purpose: "Help users manage their tasks in a simple, efficient, and organized way"
  miniworld: "Users can register tasks, organize by categories, track deadlines and statuses"
  Architecture: python
}

requirements Requirements {
    name: "ToDo Requirements"
    description: "Requirements for the functioning of the To-Do List system"

    functional_requirement RF01 {
        description: "The system must allow users to register with name, email, and password"
        priority: "High"
    }

    functional_requirement RF02 {
        description: "The system must allow user authentication"
        priority: "High"
        depend: Requirements.RF01
    }

    functional_requirement RF03 {
        description: "The system must allow users to create new tasks"
        priority: "High"
    }

    functional_requirement RF04 {
        description: "The system must allow users to edit existing tasks"
        priority: "High"
    }

    functional_requirement RF05 {
        description: "The system must allow users to delete tasks"
        priority: "High"
    }

    functional_requirement RF06 {
        description: "The system must list the user's tasks"
        priority: "High"
    }

    functional_requirement RF07 {
        description: "The system must allow changing the status of tasks"
        priority: "High"
    }

    functional_requirement RF08 {
        description: "The system must allow users to create and manage categories"
        priority: "Medium"
    }

    functional_requirement RF09 {
        description: "The system must allow filtering tasks by status, date, and category"
        priority: "Medium"
    }

    functional_requirement RF10 {
        description: "The system may send notifications about pending or upcoming tasks"
        priority: "Low"
    }

    non_functional_requirement RNF01 {
        description: "The system must have secure authentication with password encryption"
        priority: "High"
    }

    non_functional_requirement RNF02 {
        description: "It must be a responsive application, working well on desktop and mobile"
        priority: "High"
    }

    non_functional_requirement RNF03 {
        description: "The backend must be developed in Django"
        priority: "High"
    }

    non_functional_requirement RNF04 {
        description: "The frontend must be developed in React"
        priority: "High"
    }

    non_functional_requirement RNF05 {
        description: "The system must support at least 100 simultaneous users"
        priority: "Medium"
    }

    non_functional_requirement RNF06 {
        description: "Request response time must not exceed 2 seconds in 95% of cases"
        priority: "High"
    }
}

usecase Registration {
    name: "Registration and Authentication"
    description: "User registers and logs in"
    requirements: Requirements.RF01, Requirements.RF02
}

usecase TaskManagement {
    name: "Task Management"
    description: "User creates, edits, deletes, and changes task statuses"
    requirements: Requirements.RF03, Requirements.RF04
}

usecase TaskOrganization {
    name: "Task Organization"
    description: "User organizes tasks by category, date, and status"
    requirements: Requirements.RF06, Requirements.RF08
}

usecase Notifications {
    name: "Notifications"
    description: "System sends reminders to the user"
    requirements: Requirements.RF10

    event EventX{
        name: "Name"
        action: "User Does Something", "System Responds With Something"
    }
}

module ToDoApp {
    description: "Main module of the To-Do List application"

    enum Priority {
        low
        medium
        high
    }

    enum Status {
        pending
        in_progress
        completed
        canceled
    }

    // Description of the User class
    entity User {
        name: string
        _email: email
        password: string
    }

    entity Category {
        name: string
        user OneToMany User
    }

    entity Task {
        title: string
        description: string
        due_date: date
        priority uses Priority
        status uses Status
        category ManyToOne Category
        user ManyToOne User
    }

}