# System Architecture & Tech Stack (V2 Super Premium)

## Tech Stack Enhancements
*   **Frontend Core:** React 18, Vite, Tailwind CSS, React Router.
*   **Frontend UX/UI:** `framer-motion` (for complex, physics-based animations), `lucide-react` (for premium iconography), `clsx` and `tailwind-merge` (for dynamic styling).
*   **Backend:** FastAPI, Python 3.10+.
*   **Database:** PostgreSQL (using SQLAlchemy ORM).
*   **Authentication:** JWT for the Admin Dashboard.

## High-Level Data Flow
[Client Browser (Framer Motion)] <--(JSON via REST API)--> [FastAPI Backend] <--(SQLAlchemy)--> [PostgreSQL Database]

## Database Schema Additions (V2)
The database must be expanded to support rich content:
1.  `PortfolioProject`: Needs fields for `client_name`, `challenge`, `solution`, `completion_date`.
2.  `ProjectImage` (New): One-to-Many relationship with `PortfolioProject` for masonry galleries.
3.  `Testimonial` (New): To store client reviews.

## Folder Structure (V2 Additions)
/project-root
│
├── /frontend               # React Application
│   ├── /src
│   │   ├── /components     # Includes new Animated wrappers, MasonryGrid, TestimonialSlider
│   │   ├── /pages          # Includes new ProjectDetails.jsx
│   │   ├── /hooks          # Custom hooks (e.g., useScroll, useInView)
│   │   └── /assets         # Expanded static assets
│
└── /backend                # FastAPI Application
    ├── /app
    │   ├── /models         # Updated with ProjectImage and Testimonial
    │   ├── /schemas        # Updated for nested relations
    │   ├── /routers        # Expanded endpoints