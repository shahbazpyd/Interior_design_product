import { useEffect } from 'react';
import FadeIn from '../components/FadeIn';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F9F8F6] min-h-screen text-[#121212]">
      {/* Hero */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80" 
          alt="Studio Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-6">
          <FadeIn direction="up">
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">Our Story</h1>
            <p className="text-lg text-white/80 max-w-xl mx-auto font-light">Crafting spaces that reflect the soul of the people who live in them.</p>
          </FadeIn>
        </div>
      </section>

      {/* Editorial Content */}
      <section className="max-w-4xl mx-auto px-6 py-32 space-y-20">
        <FadeIn direction="up">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <h2 className="text-3xl md:text-4xl font-serif leading-tight">Founded on the belief that environment shapes emotion.</h2>
            <p className="text-[#737373] leading-relaxed">
              Lumina Interiors was established in 2015 by Elena Rostova. After spending a decade designing luxury boutique hotels across Europe, Elena realized that residential design often lacked the immersive, emotional resonance of hospitality spaces. 
            </p>
          </div>
        </FadeIn>

        <FadeIn direction="up">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="order-2 md:order-1 text-[#737373] leading-relaxed">
              We approach every project not just as a visual exercise, but as a lifestyle curation. We dive deep into how our clients move, entertain, rest, and connect. The result is a home that feels incredibly tailored—a true sanctuary that elevates everyday life.
            </div>
            <h2 className="text-3xl md:text-4xl font-serif leading-tight order-1 md:order-2">Our philosophy is simple: bespoke, livable luxury.</h2>
          </div>
        </FadeIn>
      </section>
      
      {/* Team/Image */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
         <FadeIn direction="up">
            <img 
              src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80" 
              alt="Design Details" 
              className="w-full h-[60vh] object-cover shadow-2xl"
            />
         </FadeIn>
      </section>
    </div>
  );
}
