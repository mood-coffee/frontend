# Project Architecture

## Overview

This project is a Next.js application with TypeScript, designed to be easily integrated with a future NestJS backend. The architecture follows a feature-based approach with clean code principles.

## Tech Stack

- **Frontend**: Next.js 15 with App Router, React 19, TypeScript
- **Styling**: Tailwind CSS
- **Future Backend**: NestJS (to be implemented)

## Directory Structure

```
/
├── src/
│   ├── app/                  # Next.js App Router pages
│   ├── components/           # Shared components
│   │   ├── ui/               # UI components (buttons, inputs, etc.)
│   │   └── layout/           # Layout components
│   ├── features/             # Feature-based components and logic
│   │   ├── home/             # Home page specific components
│   │   ├── about/            # About page specific components
│   │   └── ...               # Other features
│   ├── lib/                  # Shared utilities
│   │   ├── api.ts            # API client abstraction
│   │   └── ...               # Other utilities
│   └── types/                # TypeScript type definitions
├── data/                     # Stub data (to be replaced with API calls)
│   ├── posts.json            # Stub posts data
│   └── ...                   # Other stub data
├── public/                   # Static assets
└── docs/                     # Additional documentation
```

## Data Flow

1. **Static Data Flow (Current)**:
   - Pages request data through the API client abstraction (`src/lib/api.ts`)
   - API client returns stub data from JSON files in the `/data` directory
   - Pages render the data using React components

2. **Future API Integration**:
   - The API client will be updated to make real HTTP requests to the NestJS backend
   - No changes will be required in the page or component code
   - The same interface will be maintained for seamless transition

## Design Patterns

- **Repository Pattern**: The API client abstracts data access
- **Component Composition**: UI is built from small, reusable components
- **Static Site Generation (SSG)**: Pages use `getStaticProps` for data fetching
- **Feature-based Organization**: Code is organized by feature rather than technical role

## Branching Strategy

- `main`: Production-ready code
- `develop`: Integration branch for features
- `feature/<name>`: Individual feature branches
- `bugfix/<name>`: Bug fix branches

## Dependency Graph

(To be updated as the project grows)

## Design Decisions

(To be updated as design decisions are made)
