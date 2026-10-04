# Free Deployment Implementation Plan

To provide your client with a live URL, we need to deploy both the FastAPI backend and the React frontend to free cloud hosting providers. We will use **Render** for the backend and **Vercel** for the frontend, as they offer the most generous and reliable free tiers for this specific technology stack.

Since your database is already hosted in the cloud on **Neon**, it is already production-ready!

## Phase 1: Code Preparation
Before deploying, we must configure the code to work in a cloud environment (handling dynamic URLs instead of `localhost`).

- [ ] **Frontend Environment Variables:** Update the React app to use a `VITE_API_URL` environment variable for fetching data, instead of hardcoding `http://localhost:8000`.
- [ ] **Backend CORS Configuration:** Update `backend/main.py` to allow cross-origin requests from the future Vercel production URL, rather than just `localhost`.
- [ ] **Backend Dependencies:** Ensure `requirements.txt` is perfectly up-to-date for the cloud server to install (e.g., `fastapi`, `uvicorn`, `sqlalchemy`, `psycopg2-binary`).
- [ ] **Git Repository:** Initialize a Git repository (if not already done) and push the code to a free GitHub account. (Both Vercel and Render deploy directly from GitHub).

## Phase 2: Deploying the Backend (Render)
Render is an excellent free host for Python APIs and handles monorepos effortlessly.

1.  Connect your GitHub account to **Render.com**.
2.  Create a new **Web Service** and select your `Interior_design_product` repository.
3.  **Crucial Step:** Set the **Root Directory** to `backend`.
4.  Set the Build Command: `pip install -r requirements.txt`
5.  Set the Start Command: `uvicorn main:app --host 0.0.0.0 --port 10000`
6.  Add Environment Variables: 
    *   `DATABASE_URL` (Your Neon connection string).
    *   `SECRET_KEY` (For JWT auth).
7.  Deploy. Render will provide a live URL (e.g., `https://nawaz-api.onrender.com`).

## Phase 3: Deploying the Frontend (Vercel)
Vercel is the industry standard for hosting Vite/React applications and is perfectly designed for monorepos.

1.  Connect your GitHub account to **Vercel.com**.
2.  Import your `Interior_design_product` GitHub repository.
3.  **Crucial Step:** During import, set the **Root Directory** to `frontend`. Vercel will automatically detect that it's a Vite project.
4.  Add Environment Variables:
    *   `VITE_API_URL` = `https://nawaz-api.onrender.com` (The Render URL from Phase 2).
5.  Deploy. Vercel will provide a live URL (e.g., `https://nawaz-interiors.vercel.app`).

## Phase 4: Final Hookup
- [ ] Take the live Vercel URL and add it to the CORS `allow_origins` array in your FastAPI backend on Render.
- [ ] Test the live site to ensure the client can view the portfolio and submit contact forms successfully.
