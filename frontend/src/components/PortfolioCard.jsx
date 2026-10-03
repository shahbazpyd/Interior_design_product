import { Link } from 'react-router-dom';

export default function PortfolioCard({ project }) {
  return (
    <Link to={`/portfolio/${project.id}`} className="group cursor-pointer overflow-hidden block relative">
      <div className="overflow-hidden bg-gray-100 relative">
        <img 
          src={project.image_url} 
          alt={project.title} 
          className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-8 text-left bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <span className="text-xs font-bold uppercase tracking-widest text-[#B89C72]">{project.room_type}</span>
        <h3 className="text-2xl font-serif mt-2 text-white">{project.title}</h3>
      </div>
    </Link>
  );
}
