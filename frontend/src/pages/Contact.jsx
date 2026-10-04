import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Button from '../components/Button';
import FadeIn from '../components/FadeIn';

import { API_URL } from '../config';

export default function Contact() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', budget: '', description: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Submitting your inquiry...' });
    
    try {
      const response = await fetch(`${API_URL}/api/leads/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setStatus({ type: 'success', message: 'Thank you! We will be in touch shortly.' });
        setStep(4); // Success step
      } else {
        const errorData = await response.json();
        const errorMsg = Array.isArray(errorData.detail) ? errorData.detail.map(err => err.msg).join(", ") : errorData.detail;
        setStatus({ type: 'error', message: errorMsg || 'Something went wrong.' });
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Unable to connect to the server.' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F8F6] pt-40 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-serif mb-6 text-[#121212]">Let's Create Something Beautiful</h1>
            <p className="text-[#737373] text-lg font-light">Tell us about your space, your vision, and how we can help.</p>
          </div>
        </FadeIn>

        <div className="bg-white p-10 md:p-16 shadow-2xl relative overflow-hidden min-h-[450px] flex flex-col justify-center">
          {/* Progress Bar */}
          {step < 4 && (
            <div className="absolute top-0 left-0 w-full h-1 bg-gray-100">
              <motion.div 
                className="h-full bg-[#B89C72]"
                initial={{ width: '33%' }}
                animate={{ width: `${(step / 3) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          )}

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <h2 className="text-2xl font-serif text-[#121212]">1. Your Details</h2>
                <div className="space-y-6">
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name *" className="w-full bg-transparent border-b border-gray-300 py-3 focus:outline-none focus:border-[#B89C72] transition-colors" />
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address *" className="w-full bg-transparent border-b border-gray-300 py-3 focus:outline-none focus:border-[#B89C72] transition-colors" />
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="w-full bg-transparent border-b border-gray-300 py-3 focus:outline-none focus:border-[#B89C72] transition-colors" />
                </div>
                <div className="flex justify-end pt-4">
                  <Button onClick={nextStep} disabled={!formData.name || !formData.email} className="bg-[#121212] text-white hover:bg-[#2a2a2a] flex items-center gap-2 border-none">
                    Next <ArrowRight size={16} />
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <h2 className="text-2xl font-serif text-[#121212]">2. Project Scope</h2>
                <div className="space-y-6">
                  <select name="budget" value={formData.budget} onChange={handleChange} className="w-full bg-transparent border-b border-gray-300 py-3 focus:outline-none focus:border-[#B89C72] transition-colors text-[#121212]">
                    <option value="" disabled>Estimated Budget *</option>
                    <option value="$10k - $25k">$10k - $25k</option>
                    <option value="$25k - $50k">$25k - $50k</option>
                    <option value="$50k+">$50k+</option>
                  </select>
                </div>
                <div className="flex justify-between pt-4 items-center">
                  <button onClick={prevStep} className="text-[#737373] hover:text-[#121212] flex items-center gap-2 transition-colors">
                    <ArrowLeft size={16} /> Back
                  </button>
                  <Button onClick={nextStep} disabled={!formData.budget} className="bg-[#121212] text-white hover:bg-[#2a2a2a] flex items-center gap-2 border-none">
                    Next <ArrowRight size={16} />
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.form
                key="step3"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <h2 className="text-2xl font-serif text-[#121212]">3. The Vision</h2>
                <div className="space-y-6">
                  <textarea name="description" required value={formData.description} onChange={handleChange} placeholder="Tell us about your space and vision *" rows="4" className="w-full bg-transparent border-b border-gray-300 py-3 focus:outline-none focus:border-[#B89C72] transition-colors resize-none"></textarea>
                </div>
                
                {status.type === 'error' && <p className="text-red-500 text-sm">{status.message}</p>}

                <div className="flex justify-between pt-4 items-center">
                  <button type="button" onClick={prevStep} className="text-[#737373] hover:text-[#121212] flex items-center gap-2 transition-colors">
                    <ArrowLeft size={16} /> Back
                  </button>
                  <Button type="submit" disabled={status.type === 'loading' || !formData.description} className="bg-[#B89C72] text-white hover:bg-[#a3885f] border-none">
                    {status.type === 'loading' ? 'Submitting...' : 'Submit Inquiry'}
                  </Button>
                </div>
              </motion.form>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-6"
              >
                <div className="w-16 h-16 bg-[#B89C72]/10 text-[#B89C72] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-3xl font-serif text-[#121212]">Thank You, {formData.name.split(' ')[0]}</h2>
                <p className="text-[#737373] max-w-md mx-auto">Your inquiry has been received. Our design team will review your project details and contact you within 24-48 hours to schedule a consultation.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
