import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Phone, MessageSquare } from 'lucide-react';

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    department: '',
    notes: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const API_URL = import.meta.env.VITE_API_URL || (import.meta.env.MODE === 'production' ? '' : 'http://localhost:5000');
    
    try {
      const response = await fetch(`${API_URL}/api/appointments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        alert('Appointment requested successfully! We will contact you soon.');
        setFormData({ name: '', phone: '', date: '', department: '', notes: '' });
      } else {
        alert('Failed to request appointment. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting appointment:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <section id="book" className="py-20 bg-emerald-900 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="white" strokeWidth="2" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="text-white space-y-6">
            <h2 className="text-emerald-400 font-bold tracking-wide uppercase text-sm">Book an Appointment</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Ready to take the first step towards better health?
            </h3>
            <p className="text-emerald-100 text-lg max-w-lg">
              Fill out the form, and our staff will get back to you to confirm your appointment. For emergencies, please use our 24/7 hotline.
            </p>
            <div className="flex items-center gap-4 p-4 glass-card bg-white/10 border-white/20 rounded-xl mt-8 max-w-sm">
              <div className="bg-red-500 text-white p-3 rounded-full">
                <Phone size={24} className="animate-pulse" />
              </div>
              <div>
                <p className="text-emerald-100 text-sm">Emergency Hotline</p>
                <p className="font-bold text-2xl">+91 99999-99999</p>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card bg-white p-8 md:p-10 rounded-3xl shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="relative">
                  <User className="absolute left-4 top-3.5 text-slate-400" size={20} />
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder="Full Name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-slate-700 font-medium"
                  />
                </div>
                
                <div className="relative">
                  <Phone className="absolute left-4 top-3.5 text-slate-400" size={20} />
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    placeholder="Phone Number" 
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-slate-700 font-medium"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <Calendar className="absolute left-4 top-3.5 text-slate-400" size={20} />
                    <input 
                      type="date" 
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-slate-700 font-medium"
                    />
                  </div>
                  <div className="relative">
                    <select 
                      name="department"
                      required
                      value={formData.department}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-slate-700 font-medium appearance-none"
                    >
                      <option value="">Select Department</option>
                      <option value="trauma">Trauma & Emergency</option>
                      <option value="cardiology">Cardiology</option>
                      <option value="orthopedics">Orthopedics</option>
                    </select>
                  </div>
                </div>

                <div className="relative">
                  <MessageSquare className="absolute left-4 top-3.5 text-slate-400" size={20} />
                  <textarea 
                    name="notes"
                    placeholder="Briefly describe your symptoms or reason for visit..." 
                    value={formData.notes}
                    onChange={handleChange}
                    rows="3"
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-slate-700 font-medium resize-none"
                  ></textarea>
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#1A365D] hover:bg-blue-900 text-white font-bold py-4 rounded-xl transition-all anti-gravity-hover shadow-lg shadow-blue-900/20"
              >
                Confirm Appointment Request
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Appointment;
