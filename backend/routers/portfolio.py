from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from .. import models, schemas
from ..database import get_db

router = APIRouter(
    prefix="/api/portfolio",
    tags=["Portfolio"]
)

@router.get("/", response_model=list[schemas.PortfolioProject])
def get_portfolio_projects(room_type: str = None, db: Session = Depends(get_db)):
    query = db.query(models.PortfolioProject)
    if room_type:
        query = query.filter(models.PortfolioProject.room_type == room_type)
    return query.all()

@router.get("/{project_id}", response_model=schemas.PortfolioProject)
def get_project(project_id: int, db: Session = Depends(get_db)):
    project = db.query(models.PortfolioProject).filter(models.PortfolioProject.id == project_id).first()
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    return project
