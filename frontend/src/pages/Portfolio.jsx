import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PortfolioCard from '../components/PortfolioCard';
import FadeIn from '../components/FadeIn';
import { API_URL } from '../config';

export default function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    fetch(`${API_URL}/api/portfolio/`)
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error("Error fetching portfolio:", err))
      .finally(() => setLoading(false));
  }, []);

  // Extract unique categories for filters
  const categories = ['All', ...new Set(projects.map(p => p.room_type))];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.room_type === filter);

  return (
    <div className="bg-[#F9F8F6] min-h-screen pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-serif mb-6 text-[#121212]">Our Portfolio</h1>
            <p className="text-[#737373] max-w-2xl mx-auto font-light text-lg">A curated selection of our finest interior design projects, showcasing our commitment to elegance and detail.</p>
          </div>
        </FadeIn>
        
        {loading ? (
          <div className="text-center py-20 text-[#737373] animate-pulse">Curating masterpieces...</div>
        ) : (
          <>
            {/* Filters */}
            <FadeIn direction="up" delay={0.2}>
              <div className="flex flex-wrap justify-center gap-4 mb-16">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-6 py-2 rounded-full text-sm font-medium tracking-wide transition-all ${
                      filter === cat 
                        ? 'bg-[#121212] text-white shadow-lg' 
                        : 'bg-white text-[#737373] border border-gray-200 hover:border-[#121212] hover:text-[#121212]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </FadeIn>

            <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
              <AnimatePresence>
                {filteredProjects.map((project, idx) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    key={project.id} 
                    className="break-inside-avoid"
                  >
                    <PortfolioCard project={project} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}
