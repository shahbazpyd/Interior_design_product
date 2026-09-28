from sqlalchemy import Column, Integer, String, Text, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from database import Base

class Lead(Base):
    __tablename__ = "leads"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    email = Column(String(100), nullable=False)
    phone = Column(String(20), nullable=True)
    budget = Column(String(50), nullable=True)
    description = Column(Text, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

class PortfolioProject(Base):
    __tablename__ = "portfolio_projects"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(150), nullable=False)
    room_type = Column(String(50), nullable=False) # e.g., Kitchen, Living, Commercial
    image_url = Column(String(255), nullable=False) # main hero image
    description = Column(Text, nullable=True) # short abstract
    
    # New rich fields for V2 Super Premium case studies
    client_name = Column(String(100), nullable=True)
    challenge = Column(Text, nullable=True)
    solution = Column(Text, nullable=True)
    completion_date = Column(String(50), nullable=True)
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    # Relationship to multiple images
    images = relationship("ProjectImage", back_populates="project", cascade="all, delete-orphan")

class ProjectImage(Base):
    __tablename__ = "project_images"

    id = Column(Integer, primary_key=True, index=True)
    project_id = Column(Integer, ForeignKey("portfolio_projects.id"), nullable=False)
    image_url = Column(String(255), nullable=False)
    caption = Column(String(200), nullable=True)
    display_order = Column(Integer, default=0)
    
    project = relationship("PortfolioProject", back_populates="images")

class Testimonial(Base):
    __tablename__ = "testimonials"

    id = Column(Integer, primary_key=True, index=True)
    client_name = Column(String(100), nullable=False)
    project_name = Column(String(150), nullable=True)
    quote = Column(Text, nullable=False)
    rating = Column(Integer, default=5)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
