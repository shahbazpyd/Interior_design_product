import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../utils/cn';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const isDarkPage = location.pathname === '/contact' || location.pathname.includes('/admin');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed w-full top-0 z-50 py-6 px-6 md:px-12 flex justify-between items-center transition-all duration-500",
        isScrolled || isDarkPage 
          ? "bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm text-[#121212] py-4" 
          : "bg-transparent text-white"
      )}
    >
      <Link to="/" className="text-2xl font-serif font-bold tracking-tight hover:opacity-80 transition-opacity">
        Lumina Interiors
      </Link>
      <div className="flex gap-8">
        {[
          { path: '/services', label: 'Services' },
          { path: '/about', label: 'About Us' },
          { path: '/portfolio', label: 'Portfolio' },
          { path: '/contact', label: 'Contact' }
        ].map((link) => (
          <Link 
            key={link.path}
            to={link.path} 
            className={cn(
              "transition-colors font-medium relative",
              location.pathname.startsWith(link.path) ? "text-[#B89C72]" : "hover:text-[#B89C72]"
            )}
          >
            {link.label}
            {location.pathname.startsWith(link.path) && (
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#B89C72] rounded-full" />
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
}
