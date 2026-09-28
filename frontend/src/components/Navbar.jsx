import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-brand-surface py-6 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50">
      <Link to="/" className="text-2xl font-serif font-bold text-brand-text-main tracking-tight">
        Lumina Interiors
      </Link>
      <div className="flex gap-8">
        <Link to="/portfolio" className="text-brand-text-muted hover:text-brand-accent transition-colors font-medium">Portfolio</Link>
        <Link to="/contact" className="text-brand-text-muted hover:text-brand-accent transition-colors font-medium">Contact</Link>
      </div>
    </nav>
  );
}
