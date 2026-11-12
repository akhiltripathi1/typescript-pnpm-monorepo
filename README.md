# TypeScript PNPM Monorepo

_A full-stack **TypeScript monorepo** starter built with **pnpm workspaces**, React, Vite, and Express._

_Designed to provide a clean and scalable architecture with reusable shared packages for types, interfaces, and utility functions._

---

## Tech Stack

* Package Manager: pnpm
* Language: TypeScript
* Frontend: React + Vite
* Backend: Node.js + Express
* Architecture: PNPM Workspaces


## Project Structure 

```text
typescript-pnpm-monorepo/
│
├── apps/
│   ├── web/              # React + Vite frontend
│   └── api/              # Express backend
│
├── packages/
│   ├── shared/           # Shared TypeScript types
│   └── utils/            # Reusable utility functions
│
├── pnpm-workspace.yaml
├── tsconfig.base.json
└── package.json
```

---

## Getting Started

### Prerequisites

* Node.js
* pnpm

### Installation

```bash
git clone https://github.com/akhiltripathi1/typescript-pnpm-monorepo.git

cd typescript-pnpm-monorepo

pnpm install
```

### Development

Start the frontend and backend:

```bash
pnpm dev
```

Frontend: http://localhost:5173

Backend: http://localhost:5000

### Individual Applications

Start frontend:

```bash
pnpm dev:web
```

Start backend:

```bash
pnpm dev:api
```

### Build

```bash
pnpm build
```

### Type Checking
```bash
pnpm typecheck
```

---

## Workspace Packages

| Package	|  Description |
|-----------|--------------|
| @repo/shared | Shared types and interfaces |
| @repo/utils | Reusable utility functions |
| @repo/web | React frontend |
| @repo/api | Express backend |

---

## Features
* pnpm workspace configuration
* Independent frontend and backend applications
* Shared TypeScript configuration
* Reusable shared types and utilities
* Express REST API
* Vite development proxy
* TypeScript support across applications and packages
* Workspace dependency management

---

## Future Improvements
* Zod validation
* Database integration
* ESLint and Prettier
* Automated testing
* CI/CD pipeline
* Authentication and authorization

### License

MIT License (add a LICENSE file before claiming this project is MIT-licensed).