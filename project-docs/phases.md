# Step-by-Step Development Roadmap

*AI Instruction: Only implement tasks within the currently Active Phase marked in memory.md.*

## Phase 1: Setup & Scaffolding
- [x] Initialize Git repository.
- [x] Set up React + Vite frontend with Tailwind CSS.
- [x] Set up FastAPI backend environment and basic `main.py` health check endpoint.
- [x] Configure PostgreSQL database connection and `.env` files.

## Phase 2: Database & Core API Models
- [x] Create SQLAlchemy models for `Lead` and `PortfolioProject`.
- [x] Create Pydantic schemas for data validation.
- [x] Build REST API endpoints for Lead capture (POST).
- [x] Build REST API endpoints for Portfolio (GET all, GET by ID).

## Phase 3: Frontend UI - Public Facing
- [x] Build global layout (Navbar, Footer).
- [x] Build Hero section and Home page.
- [x] Build Portfolio gallery page with grid layout.
- [x] Build Contact/Lead generation form connected to FastAPI backend.

## Phase 4: Admin & Authentication (Post-MVP prep)
- [x] Implement JWT authentication endpoint in FastAPI.
- [x] Create protected Admin Dashboard route in React.
- [x] Build UI to fetch and display submitted leads in a table.

## Phase 5: Testing & Refinement
- [ ] Run full cross-device responsive checks.
- [ ] Verify form error handling (empty fields, invalid emails).
- [ ] Polish UI animations and loading states.