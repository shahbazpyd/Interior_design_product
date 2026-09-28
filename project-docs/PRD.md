# Product Requirements Document: Interior Design Platform

## Project Overview
A premium, high-performance portfolio and lead-generation website for an interior design business. The goal is to build a complete digital storefront (FalconStack internal project) to pitch to the client as a ready-to-deploy solution.

## Core Problem & Value Proposition
*   **Problem:** The client lacks a modern, fast, and visually compelling way to showcase past projects and capture high-quality leads.
*   **Value Proposition:** A lightning-fast, visually stunning React front-end paired with a secure FastAPI backend to manage inquiries, resulting in higher trust and more consultation bookings.

## User Personas & Journeys
1.  **The Homeowner (Visitor):** Browses the portfolio, reads about the design process, and submits a project inquiry via the contact form.
2.  **The Business Owner (Admin):** Logs into a secure dashboard to view submitted leads, add new portfolio images, and update service descriptions.

## MVP Features
*   Dynamic Portfolio Gallery (filterable by room type: Kitchen, Living, Commercial).
*   Services & Process page.
*   Lead Capture Form (name, email, phone, budget, project description).
*   Admin Dashboard (view leads, basic portfolio CRUD operations).

## Non-Goals (Out of Scope for MVP)
*   Online payments or direct booking of paid consultations.
*   Live chat integration.
*   Complex 3D room rendering (Zircon3D/Floor3D) within the browser.

## Success Metrics
*   Lighthouse Performance Score of 90+.
*   Fully responsive on all mobile devices.
*   Lead form submission successfully saves to the database and triggers an email notification.