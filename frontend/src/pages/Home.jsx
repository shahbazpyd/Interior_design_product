import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star } from 'lucide-react';
import Button from '../components/Button';
import FadeIn from '../components/FadeIn';
import MagneticButton from '../components/MagneticButton';

export default function Home() {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <div className="bg-[#F9F8F6]">
      {/* Cinematic Parallax Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: y1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80" 
            alt="Luxury Interior" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <motion.div 
          style={{ opacity }}
          className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-20"
        >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#B89C72] uppercase tracking-[0.3em] text-sm md:text-base font-semibold mb-6"
          >
            Lumina Interiors
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-[1.1] tracking-tight drop-shadow-lg"
          >
            Elevate Your Space.<br/>Elevate Your Life.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <MagneticButton onClick={() => navigate('/contact')} className="!bg-white !text-[#121212] hover:!bg-gray-100">
              Book a Consultation
            </MagneticButton>
            <Link to="/portfolio" className="inline-block px-10 py-4 bg-transparent border border-white text-white hover:bg-white hover:text-[#121212] transition-colors">
              Explore Portfolio
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Projects (Visual Proof) */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-200 pb-8 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-[#121212]">Featured Work</h2>
              <p className="text-[#737373] mt-4 text-lg">A selection of our most iconic transformations.</p>
            </div>
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest hover:text-[#B89C72] transition-colors font-bold text-[#121212]">
              View All Projects
            </Link>
          </div>
        </FadeIn>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { id: 1, title: 'Modern Zen Kitchen', type: 'Kitchen', img: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80' },
            { id: 2, title: 'Downtown Loft', type: 'Living', img: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80' },
            { id: 3, title: 'Boutique Hotel Lobby', type: 'Commercial', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80' }
          ].map((project, idx) => (
            <FadeIn key={project.id} direction="up" delay={0.2 * idx}>
              <Link to={`/portfolio/${project.id}`} className="group block">
                <div className="aspect-[4/5] overflow-hidden bg-gray-100 relative mb-6">
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="text-xl font-serif text-[#121212] mb-1">{project.title}</h3>
                <span className="text-xs font-bold uppercase tracking-widest text-[#B89C72]">{project.type}</span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Signature Approach (Split Layout) */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
            <div className="aspect-[4/5] relative overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80" 
                alt="Design Process"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s] ease-out"
              />
            </div>
          </FadeIn>
          
          <div>
            <FadeIn delay={0.2}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-12 text-[#121212] leading-tight">Our Signature<br/>Approach</h2>
            </FadeIn>
            
            <div className="space-y-12">
              {[
                { num: "01", title: "Discovery", desc: "Understanding your vision, lifestyle, and how you want your space to feel." },
                { num: "02", title: "Concept Design", desc: "Curating layouts, materials, and 3D renderings to bring the vision to life." },
                { num: "03", title: "Execution", desc: "Managing contractors and procurement to ensure flawless, stress-free installation." }
              ].map((step, idx) => (
                <FadeIn key={step.num} delay={0.2 + (idx * 0.1)} direction="up">
                  <div className="flex gap-6 group cursor-default">
                    <span className="text-[#B89C72] font-serif text-2xl mt-1">{step.num}</span>
                    <div>
                      <h3 className="text-2xl font-serif mb-2 text-[#121212] group-hover:text-[#B89C72] transition-colors duration-500">{step.title}</h3>
                      <p className="text-[#737373] leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder & Trust Badges */}
      <section className="bg-white py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <FadeIn direction="up">
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight text-[#121212]">"Design is not just what it looks like. It's how it makes you feel."</h2>
              <p className="text-[#737373] text-lg leading-relaxed mb-6">
                I founded Lumina Interiors with a simple belief: your home should be your ultimate sanctuary. For over a decade, we've helped clients across the globe transform their spaces into stunning, deeply personal environments that elevate their everyday lives.
              </p>
              <p className="text-[#B89C72] font-serif text-xl italic mb-12">- Elena Rostova, Lead Designer</p>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.2}>
              <div className="flex flex-wrap gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="text-sm font-bold uppercase tracking-widest text-[#121212]/50 w-full mb-2">Featured In</div>
                <div className="font-serif text-2xl text-[#121212]">Architectural Digest</div>
                <div className="font-serif text-2xl text-[#121212]">Vogue Living</div>
                <div className="font-serif text-2xl text-[#121212]">ELLE Decor</div>
              </div>
            </FadeIn>
          </div>
          
          <FadeIn direction="left">
            <div className="aspect-square md:aspect-[3/4] relative overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80" 
                alt="Elena Rostova - Lead Designer"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s]"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-[#121212] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <FadeIn direction="up">
            <h2 className="text-4xl font-serif mb-16 text-white/90">Client Experiences</h2>
          </FadeIn>
          
          <FadeIn delay={0.2} className="max-w-4xl mx-auto">
            <div className="flex justify-center gap-2 mb-10">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-[#B89C72] text-[#B89C72]" />
              ))}
            </div>
            <p className="text-2xl md:text-4xl font-serif leading-snug mb-12 text-gray-300 italic">
              "Lumina completely transformed how we live in our home. The attention to detail and luxury finishes are beyond what we ever imagined."
            </p>
            <div className="uppercase tracking-[0.2em] text-sm font-bold text-[#B89C72]">
              Sarah Harrison <span className="mx-2 text-gray-600">|</span> Modern Zen Kitchen
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
