from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .database import engine, Base
from .routers import leads, portfolio
from . import models

# Create database tables
models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="Interior Design Portfolio API")

# Configure CORS for frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, restrict this to frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(leads.router)
app.include_router(portfolio.router)

@app.get("/")
async def root():
    return {"status": "healthy", "message": "Welcome to the Interior Design API"}
