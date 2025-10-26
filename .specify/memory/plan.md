\# 🛠️ Plan — Speckit SaaS Demo



\## Architecture Overview

\- \*\*Frontend:\*\* React + TypeScript + Styled Component(Separate File for styling)

&nbsp; - State management: Context API or Suitable

&nbsp; - Real-time updates via WebSocket

\- \*\*Backend:\*\* .NET 8 Web API

&nbsp; - Layered architecture (API → Services → Domain → Persistence)

&nbsp; - JWT-based authentication

&nbsp; - MongoDB access via repository pattern

\- \*\*Database:\*\* MongoDB Atlas (free tier)

&nbsp; - Collections: Users, Tasks, KnowledgeCards, Teams



\## Feature-to-Component Mapping

| Feature | Frontend Component | Backend Service | Notes |

|---------|-----------------|----------------|-------|

| Task CRUD | TaskList, TaskCard, TaskForm | TaskService | Realtime via WebSocket |

| User Management | UserProfile, InviteForm | UserService | Role-based auth |

| Tooltips \& Guidance | TooltipManager | N/A | Frontend only, uses knowledge cards |

| Knowledge Cards | KnowledgeCardList | KnowledgeCardService | CRUD + search API |



\## Deployment Plan

\- Dockerize both frontend and backend

\- Use Vercel for frontend, Render for backend

\- MongoDB Atlas as cloud DB

\- Optional: GitHub Actions for CI/CD



\## Tech Decisions

\- Styled Components(Light Weight) for fast, responsive UI

\- Context for minimal state management

\- WebSocket for real-time updates

\- Modular folder structure to reflect Clean Architecture

\- Linting/formatting: ESLint + Prettier for frontend, .NET analyzers for backend



\## Constraints

\- Must run on free-tier hosting

\- Minimal external dependencies

\- Lightweight, demo-ready UI



---



\_Last updated: October 2025\_



