from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import engine, Base
from routers import leads, portfolio, auth
import models

# Create database tables
models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="Interior Design Portfolio API")

import os

origins = [
    "http://localhost:5173",
    "http://localhost:3000",
]

frontend_url = os.getenv("FRONTEND_URL")
if frontend_url:
    origins.append(frontend_url)

# Configure CORS for frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(auth.router)
app.include_router(leads.router)
app.include_router(portfolio.router)

@app.get("/")
async def root():
    return {"status": "healthy", "message": "Welcome to the Interior Design API"}
