import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-800 pb-16">
        
        {/* Brand Column */}
        <div className="md:col-span-1">
          <Link to="/" className="text-2xl font-serif font-bold tracking-tight mb-6 block">
            Lumina Interiors
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Award-winning interior design firm transforming spaces into timeless, elegant sanctuaries.
          </p>
          <div className="flex gap-4">
            {/* Trust Badges */}
            <div className="bg-gray-800 text-xs px-3 py-1 rounded text-gray-300">ASID Member</div>
          </div>
        </div>

        {/* Explore Links */}
        <div>
          <h4 className="text-[#B89C72] font-serif text-lg mb-6 uppercase tracking-widest text-sm">Explore</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About the Firm</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Book Consultation</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-[#B89C72] font-serif text-lg mb-6 uppercase tracking-widest text-sm">Contact</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li>123 Luxury Avenue<br/>New York, NY 10012</li>
            <li><a href="mailto:hello@luminainteriors.com" className="hover:text-white transition-colors">hello@luminainteriors.com</a></li>
            <li><a href="tel:+12125550198" className="hover:text-white transition-colors">+1 (212) 555-0198</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-[#B89C72] font-serif text-lg mb-6 uppercase tracking-widest text-sm">Follow</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Pinterest</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Architectural Digest</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 text-xs text-gray-600">
        <p>&copy; {new Date().getFullYear()} Lumina Interiors. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link to="/privacy-policy" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-gray-400 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
