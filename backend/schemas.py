from pydantic import BaseModel, EmailStr, ConfigDict
from typing import Optional, List
from datetime import datetime

# --- Project Image Schemas (New in V2) ---
class ProjectImageBase(BaseModel):
    image_url: str
    caption: Optional[str] = None
    display_order: int = 0

class ProjectImageCreate(ProjectImageBase):
    pass

class ProjectImage(ProjectImageBase):
    id: int
    project_id: int
    
    model_config = ConfigDict(from_attributes=True)

# --- Portfolio Schemas (Upgraded in V2) ---
class PortfolioProjectBase(BaseModel):
    title: str
    room_type: str
    image_url: str
    description: Optional[str] = None
    client_name: Optional[str] = None
    challenge: Optional[str] = None
    solution: Optional[str] = None
    completion_date: Optional[str] = None

class PortfolioProjectCreate(PortfolioProjectBase):
    pass

class PortfolioProject(PortfolioProjectBase):
    id: int
    created_at: datetime
    images: List[ProjectImage] = []
    
    model_config = ConfigDict(from_attributes=True)

# --- Testimonial Schemas (New in V2) ---
class TestimonialBase(BaseModel):
    client_name: str
    project_name: Optional[str] = None
    quote: str
    rating: int = 5

class TestimonialCreate(TestimonialBase):
    pass

class Testimonial(TestimonialBase):
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
