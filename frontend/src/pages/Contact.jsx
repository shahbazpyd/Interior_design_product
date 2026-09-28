import { useState } from 'react';
import Button from '../components/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    description: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Submitting...' });
    
    try {
      const response = await fetch('http://localhost:8000/api/leads/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setStatus({ type: 'success', message: 'Thank you! We will be in touch shortly.' });
        setFormData({ name: '', email: '', phone: '', budget: '', description: '' });
      } else {
        const errorData = await response.json();
        // Handle Pydantic validation error format
        const errorMsg = Array.isArray(errorData.detail) 
            ? errorData.detail.map(err => err.msg).join(", ") 
            : errorData.detail;
        setStatus({ type: 'error', message: errorMsg || 'Something went wrong.' });
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Unable to connect to the server.' });
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif mb-4">Start Your Project</h1>
        <p className="text-brand-text-muted font-light">Fill out the form below to book your initial design consultation.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 bg-brand-surface p-8 md:p-12 shadow-sm border border-gray-100">
        {status.message && (
          <div className={`p-4 text-sm font-medium ${status.type === 'error' ? 'bg-red-50 text-red-600 border border-red-200' : status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-gray-50 text-gray-600'}`}>
            {status.message}
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative">
            <input 
              type="text" 
              name="name"
              required 
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name *" 
              className="w-full bg-transparent border-b border-gray-300 py-3 focus:outline-none focus:border-brand-accent transition-colors placeholder-gray-400"
            />
          </div>
          <div className="relative">
            <input 
              type="email" 
              name="email"
              required 
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address *" 
              className="w-full bg-transparent border-b border-gray-300 py-3 focus:outline-none focus:border-brand-accent transition-colors placeholder-gray-400"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative">
            <input 
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number" 
              className="w-full bg-transparent border-b border-gray-300 py-3 focus:outline-none focus:border-brand-accent transition-colors placeholder-gray-400"
            />
          </div>
          <div className="relative">
            <select 
              name="budget" 
              value={formData.budget}
              onChange={handleChange}
              className={`w-full bg-transparent border-b border-gray-300 py-3 focus:outline-none focus:border-brand-accent transition-colors ${formData.budget ? 'text-brand-text-main' : 'text-gray-400'}`}
            >
              <option value="" disabled>Estimated Budget</option>
              <option value="$10k - $25k">$10k - $25k</option>
              <option value="$25k - $50k">$25k - $50k</option>
              <option value="$50k+">$50k+</option>
            </select>
          </div>
        </div>

        <div className="relative">
          <textarea 
            name="description"
            required
            value={formData.description}
            onChange={handleChange}
            placeholder="Tell us about your space and vision *" 
            rows="4"
            className="w-full bg-transparent border-b border-gray-300 py-3 focus:outline-none focus:border-brand-accent transition-colors resize-none placeholder-gray-400"
          ></textarea>
        </div>

        <div className="text-center pt-4">
          <Button type="submit" className="w-full md:w-auto px-12 py-4">Submit Inquiry</Button>
        </div>
      </form>
    </div>
  );
}
