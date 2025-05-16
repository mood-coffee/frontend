# Mood - Frontend

A modern web application built with Next.js and TypeScript, designed with clean code principles and best practices.

## Project Overview

This project is a static website that will eventually connect to a NestJS backend API. It follows a feature-based architecture and is designed for minimal manual intervention.

### Reference UI/UX
- [null.coffee](https://null.coffee/)
- [montagcoffee.com](https://www.montagcoffee.com/)

## Tech Stack

- **Frontend**: Next.js 15 with App Router, React 19, TypeScript
- **Styling**: Tailwind CSS
- **Future Backend**: NestJS (to be implemented)

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

The project follows a feature-based structure. For more details, see [ARCHITECTURE.md](./ARCHITECTURE.md).

## Development Workflow

### Branching Strategy

- `main`: Production-ready code
- `develop`: Integration branch for features
- `feature/<name>`: Individual feature branches
- `bugfix/<name>`: Bug fix branches

### Commit Convention

We follow the Conventional Commits format:

```
feat(login): scaffold login page and AuthContext
docs(ISSUES): [FEATURE:login] [YYYY-MM-DD] Login scaffold completed
```

### Pull Request Process

1. Create a feature branch from `develop`
2. Implement the feature
3. Update documentation (ARCHITECTURE.md, ISSUES.md)
4. Create a pull request to `develop`
5. After review, merge to `develop`

## Documentation

- [ARCHITECTURE.md](./ARCHITECTURE.md): Project architecture and design decisions
- [ISSUES.md](./ISSUES.md): Task tracking and progress
