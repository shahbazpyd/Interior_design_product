from pydantic import BaseModel, EmailStr, ConfigDict
from typing import Optional
from datetime import datetime

# --- Portfolio Schemas ---
class PortfolioProjectBase(BaseModel):
    title: str
    room_type: str
    image_url: str
    description: Optional[str] = None

class PortfolioProjectCreate(PortfolioProjectBase):
    pass

class PortfolioProject(PortfolioProjectBase):
    id: int
    created_at: datetime
    
    model_config = ConfigDict(from_attributes=True)

# --- Lead Schemas ---
class LeadBase(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    budget: Optional[str] = None
    description: Optional[str] = None

class LeadCreate(LeadBase):
    pass

class Lead(LeadBase):
    id: int
    created_at: datetime
    
    model_config = ConfigDict(from_attributes=True)
