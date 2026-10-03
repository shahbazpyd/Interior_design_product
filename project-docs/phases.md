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
- [x] Redesign `Home.jsx` with a cinematic Parallax Hero, scroll-triggered reveals, and a Testimonials carousel.
- [x] Redesign `Portfolio.jsx` with an advanced, animated masonry or staggered grid.
- [x] Build `ProjectDetails.jsx` page for deep-dive case studies (fetching by ID).
- [x] Redesign `Navbar` (glassmorphism on scroll) and `Contact` form (multi-step or highly interactive).

## Phase 9: Final Polish & Micro-interactions
- [x] Implement magnetic button effects and custom cursors (optional).
- [x] Fine-tune Framer Motion spring physics for maximum elegance.
- [x] Final performance audit for V2.

## Phase 10: Conversion & Business Logic Optimization
- [x] Update Navigation Bar to include "Services" and "About Us".
- [x] Fix Hero CTA Buttons hierarchy (Primary: "Book a Consultation" solid block, Secondary: "Explore Portfolio" outline).
- [x] Insert a "Featured Projects" 3-column grid section right below the hero image.
- [x] Build a comprehensive dark Footer (Address, Phone, Instagram, Pinterest, Privacy Policy).
- [x] Add a Founder Photo & Bio section below the "Signature Approach" section.
- [x] Improve Hero text legibility with a stronger dark gradient overlay.
- [x] Add Trust Badges (e.g., "As seen in Architectural Digest", ASID member) for instant credibility.

## Phase 11: The Final Pages (Completing the Funnel)
- [ ] Build `Services.jsx` (3-tier layout detailing design packages with direct links to Contact).
- [ ] Build `About.jsx` (Editorial layout expanding on studio history and philosophy).
- [ ] Add Active States to `Navbar.jsx` (highlight current page in gold).
- [ ] Implement Portfolio Category Filters in `Portfolio.jsx` (with smooth Framer Motion layout animations).
- [ ] Wire up new routes in `App.jsx` (including basic fallbacks for Privacy Policy / Terms).