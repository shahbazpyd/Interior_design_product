import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import FadeIn from '../components/FadeIn';

export default function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll position on load
    fetch(`http://localhost:8000/api/portfolio/${id}`)
      .then(res => res.json())
      .then(data => setProject(data))
      .catch(err => console.error("Error fetching project:", err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <div className="min-h-screen bg-[#F9F8F6] flex items-center justify-center text-[#B89C72] animate-pulse">Loading case study...</div>;
  }

  if (!project) {
    return <div className="min-h-screen bg-[#F9F8F6] flex items-center justify-center text-[#121212]">Project not found.</div>;
  }

  return (
    <div className="bg-[#F9F8F6] min-h-screen text-[#121212]">
      {/* Hero Image */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <img 
          src={project.image_url} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-10 left-10 md:left-20 z-10 text-white">
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest hover:text-[#B89C72] transition-colors mb-6">
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
          <FadeIn direction="up">
            <h1 className="text-5xl md:text-7xl font-serif leading-tight">{project.title}</h1>
            {(project.client_name || project.completion_date) && (
              <p className="text-lg mt-4 opacity-90 font-light tracking-wide">
                {project.client_name} <span className="mx-2 opacity-50">|</span> {project.completion_date}
              </p>
            )}
          </FadeIn>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="max-w-4xl mx-auto px-6 py-32 space-y-20">
        <FadeIn direction="up">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#B89C72] mb-6">The Challenge</h2>
            <p className="text-2xl md:text-3xl font-serif leading-relaxed text-[#121212]">
              {project.challenge || project.description}
            </p>
          </div>
        </FadeIn>
        
        <FadeIn direction="up" delay={0.2}>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#B89C72] mb-6">Our Solution</h2>
            <p className="text-lg md:text-xl text-[#737373] leading-loose">
              {project.solution || "Bespoke design elements curated specifically for the client's lifestyle."}
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Image Gallery */}
      {project.images && project.images.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 pb-32">
          <div className="columns-1 md:columns-2 gap-8 space-y-8">
            {project.images.sort((a, b) => a.display_order - b.display_order).map((img, idx) => (
              <FadeIn key={img.id} direction="up" delay={0.1 * (idx % 2)} className="break-inside-avoid">
                <div className="relative group cursor-crosshair">
                  <img src={img.image_url} alt={img.caption || `Gallery ${idx}`} className="w-full h-auto object-cover" />
                  {img.caption && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <p className="font-serif text-lg">{img.caption}</p>
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
