import os
from database import engine, Base
import models
from database import SessionLocal

print("Dropping all tables to apply V2 schema...")
Base.metadata.drop_all(bind=engine)

print("Creating new V2 tables...")
Base.metadata.create_all(bind=engine)

print("Database reset successfully.")

# Seed some mock data for V2
db = SessionLocal()
try:
    project1 = models.PortfolioProject(
        title="Modern Zen Kitchen",
        room_type="Kitchen",
        image_url="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80",
        description="A serene, minimalist kitchen designed for a culinary enthusiast.",
        client_name="The Harrison Family",
        challenge="The original space was cramped, poorly lit, and disconnected from the living area.",
        solution="We knocked down the dividing wall, introduced floor-to-ceiling windows, and used organic materials like white oak and Calcutta marble to create a seamless, breathable space.",
        completion_date="Fall 2025"
    )
    db.add(project1)
    db.commit()
    db.refresh(project1)
    
    img1 = models.ProjectImage(project_id=project1.id, image_url="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80", caption="Main View", display_order=1)
    img2 = models.ProjectImage(project_id=project1.id, image_url="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80", caption="Island Detail", display_order=2)
    img3 = models.ProjectImage(project_id=project1.id, image_url="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80", caption="Custom Cabinetry", display_order=3)
    
    test1 = models.Testimonial(
        client_name="Sarah Harrison",
        project_name="Modern Zen Kitchen",
        quote="Nawaz completely transformed how we live in our home. The attention to detail and luxury finishes are beyond what we ever imagined."
    )
    
    db.add_all([img1, img2, img3, test1])
    db.commit()
    print("Mock data seeded successfully!")
finally:
    db.close()
