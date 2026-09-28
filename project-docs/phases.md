# Step-by-Step Development Roadmap

*AI Instruction: Only implement tasks within the currently Active Phase marked in memory.md.*

## Phases 1-5 (V1 MVP) - COMPLETE
- [x] Initial setup, database, API routes, basic UI, JWT auth, and testing.

## Phase 6: V2 Backend Expansion
- [x] Upgrade `PortfolioProject` model with rich text fields (challenge, solution, client).
- [x] Create `ProjectImage` model for one-to-many gallery images.
- [x] Create `Testimonial` model.
- [x] Update Pydantic schemas and API routers to handle nested relationships.

## Phase 7: V2 Frontend Architecture & Tooling
- [x] Install `framer-motion`, `lucide-react`, `clsx`, and `tailwind-merge`.
- [x] Setup global page transitions in `App.jsx`.
- [x] Build reusable animation wrapper components (e.g., `FadeIn`, `SlideUp`).

## Phase 8: Super Premium UI Implementation
- [ ] Redesign `Home.jsx` with a cinematic Parallax Hero, scroll-triggered reveals, and a Testimonials carousel.
- [ ] Redesign `Portfolio.jsx` with an advanced, animated masonry or staggered grid.
- [ ] Build `ProjectDetails.jsx` page for deep-dive case studies (fetching by ID).
- [ ] Redesign `Navbar` (glassmorphism on scroll) and `Contact` form (multi-step or highly interactive).

## Phase 9: Final Polish & Micro-interactions
- [ ] Implement magnetic button effects and custom cursors (optional).
- [ ] Fine-tune Framer Motion spring physics for maximum elegance.
- [ ] Final performance audit for V2.