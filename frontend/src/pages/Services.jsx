import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "Full-Service Design",
      price: "Starting at $10k",
      desc: "Our signature white-glove service. We handle everything from conceptual design and spatial planning to procurement, contractor management, and final installation. Perfect for major renovations or new builds.",
      features: ["3D Renderings", "Project Management", "Custom Furniture Sourcing", "White-Glove Installation"]
    },
    {
      title: "E-Design",
      price: "Starting at $2.5k / Room",
      desc: "A completely virtual experience for clients globally. You provide the measurements and inspiration, and we deliver a comprehensive design package you can execute at your own pace.",
      features: ["Custom Floor Plans", "Shoppable Links", "Material Board", "1-on-1 Video Consultations"]
    },
    {
      title: "Design Consultation",
      price: "$500 / Session",
      desc: "A focused, 2-hour intensive session to solve your specific design dilemmas. Ideal for choosing paint colors, rearranging existing furniture, or getting a professional eye on your DIY project.",
      features: ["2-Hour Video Call", "Actionable PDF Guide", "Paint & Material Advice", "Vendor Recommendations"]
    }
  ];

  return (
    <div className="bg-[#F9F8F6] min-h-screen pt-40 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn direction="up">
          <div className="text-center mb-24">
            <h1 className="text-5xl md:text-7xl font-serif mb-6 text-[#121212]">Design Packages</h1>
            <p className="text-[#737373] max-w-2xl mx-auto font-light text-lg">Whether you are building a custom home or simply refreshing a single room, we offer tailored services to bring your vision to life.</p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <FadeIn key={idx} direction="up" delay={0.2 * idx} className="h-full">
              <div className="bg-white p-10 shadow-lg border border-gray-100 h-full flex flex-col group hover:shadow-2xl transition-shadow duration-500">
                <h2 className="text-3xl font-serif text-[#121212] mb-2">{service.title}</h2>
                <p className="text-[#B89C72] font-semibold text-sm uppercase tracking-widest mb-6">{service.price}</p>
                <p className="text-[#737373] leading-relaxed mb-8 flex-grow">{service.desc}</p>
                
                <ul className="space-y-3 mb-10">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-[#121212]">
                      <svg className="w-4 h-4 mr-3 text-[#B89C72]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link to="/contact" className="w-full block text-center py-4 bg-[#121212] text-white hover:bg-[#2a2a2a] transition-colors border-none group-hover:bg-[#B89C72]">
                  Book Now
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
