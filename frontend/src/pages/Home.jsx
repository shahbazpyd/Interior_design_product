import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
        {/* Placeholder for Hero Image background */}
        <div className="absolute inset-0 z-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight tracking-wide">Elevate Your Space.<br/>Elevate Your Life.</h1>
          <p className="text-lg md:text-xl font-sans mb-10 text-gray-300 max-w-2xl mx-auto font-light">
            Bespoke interior design tailored to your lifestyle, blending modern minimalism with timeless luxury.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/portfolio">
              <Button className="w-full sm:w-auto">View Our Work</Button>
            </Link>
            <Link to="/contact">
              <Button className="w-full sm:w-auto bg-transparent border border-white hover:bg-white hover:text-black">Book a Consultation</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Snippet */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-serif mb-16 text-brand-text-main">Our Signature Approach</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="group">
            <div className="w-16 h-16 bg-brand-accent/10 mx-auto rounded-full flex items-center justify-center mb-6 text-brand-accent font-serif text-2xl group-hover:bg-brand-accent group-hover:text-white transition-colors duration-500">01</div>
            <h3 className="text-xl font-serif mb-3">Discovery</h3>
            <p className="text-brand-text-muted">Understanding your vision, lifestyle, and how you want your space to feel.</p>
          </div>
          <div className="group">
            <div className="w-16 h-16 bg-brand-accent/10 mx-auto rounded-full flex items-center justify-center mb-6 text-brand-accent font-serif text-2xl group-hover:bg-brand-accent group-hover:text-white transition-colors duration-500">02</div>
            <h3 className="text-xl font-serif mb-3">Concept Design</h3>
            <p className="text-brand-text-muted">Curating layouts, materials, and 3D renderings to bring the vision to life.</p>
          </div>
          <div className="group">
            <div className="w-16 h-16 bg-brand-accent/10 mx-auto rounded-full flex items-center justify-center mb-6 text-brand-accent font-serif text-2xl group-hover:bg-brand-accent group-hover:text-white transition-colors duration-500">03</div>
            <h3 className="text-xl font-serif mb-3">Execution</h3>
            <p className="text-brand-text-muted">Managing contractors and procurement to ensure flawless, stress-free installation.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
