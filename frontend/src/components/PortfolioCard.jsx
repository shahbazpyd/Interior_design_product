export default function PortfolioCard({ project }) {
  return (
    <div className="group cursor-pointer overflow-hidden bg-brand-surface shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
        <img 
          src={project.image_url} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-500" />
      </div>
      <div className="p-6 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">{project.room_type}</span>
        <h3 className="text-xl font-serif mt-2 text-brand-text-main">{project.title}</h3>
      </div>
    </div>
  );
}
