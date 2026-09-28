# System Architecture & Tech Stack

## Tech Stack
*   **Frontend:** React 18, Vite, Tailwind CSS, React Router.
*   **Backend:** FastAPI, Python 3.10+.
*   **Database:** PostgreSQL (using SQLAlchemy ORM).
*   **Authentication:** JWT (JSON Web Tokens) for the Admin Dashboard.

## High-Level Data Flow
[Client Browser] <--(JSON via REST API)--> [FastAPI Backend] <--(SQLAlchemy)--> [PostgreSQL Database]

## Folder Structure
/project-root
│
├── /frontend               # React Application
│   ├── /src
│   │   ├── /components     # Reusable UI elements (Buttons, Cards)
│   │   ├── /pages          # Route components (Home, Portfolio, Contact)
│   │   ├── /services       # API call functions (Axios/Fetch)
│   │   └── /assets         # Static images, icons
│
└── /backend                # FastAPI Application
    ├── /app
    │   ├── main.py         # Application entry point
    │   ├── /models         # SQLAlchemy database models
    │   ├── /schemas        # Pydantic validation schemas
    │   ├── /routers        # API endpoints (leads, portfolio)
    │   └── /core           # Config, security, database setup