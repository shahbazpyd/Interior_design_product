import { useState, useEffect } from 'react';
import PortfolioCard from '../components/PortfolioCard';

export default function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // For MVP, we fetch from our local FastAPI server
  // Note: in a real environment, we'd use environment variables for API URL
  useEffect(() => {
    fetch('http://localhost:8000/api/portfolio/')
      .then(res => res.json())
      .then(data => {
        // If DB is empty, let's provide some fallback mock data for testing UI
        if (data.length === 0) {
          setProjects([
            { id: 1, title: 'Modern Zen Kitchen', room_type: 'Kitchen', image_url: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80' },
            { id: 2, title: 'Downtown Loft', room_type: 'Living', image_url: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80' },
            { id: 3, title: 'Boutique Hotel Lobby', room_type: 'Commercial', image_url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80' },
          ]);
        } else {
          setProjects(data);
        }
      })
      .catch(err => console.error("Error fetching portfolio:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif mb-4">Our Portfolio</h1>
        <p className="text-brand-text-muted max-w-2xl mx-auto font-light">A curated selection of our finest interior design projects, showcasing our commitment to elegance and detail.</p>
      </div>
      
      {loading ? (
        <div className="text-center py-20 text-brand-text-muted">Loading masterpieces...</div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
