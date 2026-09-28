from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
import models, schemas
from database import get_db

from auth import get_current_admin

router = APIRouter(
    prefix="/api/leads",
    tags=["Leads"]
)

@router.post("/", response_model=schemas.Lead, status_code=status.HTTP_201_CREATED)
def create_lead(lead: schemas.LeadCreate, db: Session = Depends(get_db)):
    db_lead = models.Lead(**lead.model_dump())
    db.add(db_lead)
    db.commit()
    db.refresh(db_lead)
    return db_lead

@router.get("/", response_model=list[schemas.Lead])
def get_leads(skip: int = 0, limit: int = 100, db: Session = Depends(get_db), admin: str = Depends(get_current_admin)):
    # Fetch newest leads first
    leads = db.query(models.Lead).order_by(models.Lead.created_at.desc()).offset(skip).limit(limit).all()
    return leads
