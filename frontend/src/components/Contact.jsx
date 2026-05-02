import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate API call to our backend /api/contact
    console.log('Submitting inquiry:', formData);
    alert('Thank you for reaching out! We have received your message.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-emerald-600 font-bold tracking-wide uppercase text-sm mb-2">Visit Us</h2>
          <h3 className="text-4xl font-extrabold text-[#1A365D]">Get in Touch & Find Us</h3>
          <p className="mt-4 text-slate-600 text-lg">
            Our trauma center is strategically located for rapid access. We are here 24/7 to answer your questions and provide life-saving care.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Details & Map */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col h-full"
          >
            <div className="glass-card bg-slate-50 p-8 rounded-t-2xl space-y-6 flex-1">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-100 text-emerald-600 rounded-lg shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A365D] text-lg">Location</h4>
                  <p className="text-slate-600 mt-1 font-semibold text-lg">Gaushala road, near petrol pump, bypass jalesar etah.</p>
                  <p className="text-emerald-600 text-sm font-medium mt-1 inline-block bg-emerald-50 px-2 py-1 rounded">Look for the Petrol Pump landmark</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-lg shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A365D] text-lg">Emergency & Reception</h4>
                  <p className="text-slate-600 mt-1">Trauma Hotline: <span className="font-bold text-red-600">+91 99999-99999</span></p>
                  <p className="text-slate-600">Reception: +91 88888-88888</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-100 text-purple-600 rounded-lg shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A365D] text-lg">Working Hours</h4>
                  <p className="text-slate-600 mt-1 font-bold">24/7 Open for Emergencies</p>
                  <p className="text-slate-500 text-sm">OPD Timings: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Google Map Embedded Iframe */}
            <div className="h-64 md:h-80 w-full rounded-b-2xl overflow-hidden border border-t-0 border-slate-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113645.72765870025!2d78.20387532356507!3d27.472714207908977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397441584b4231b1%3A0xe744e83fecf17a94!2sJalesar%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1689100000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Hospital Location on Google Maps"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100"
          >
            <h4 className="text-2xl font-bold text-[#1A365D] mb-6">Send us a Message</h4>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-slate-700"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-slate-700"
                    placeholder="+91 98765-43210"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-slate-700"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea 
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-slate-700 resize-none"
                  placeholder="How can we help you today?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full inline-flex justify-center items-center gap-2 bg-[#1A365D] hover:bg-blue-900 text-white font-bold py-4 rounded-xl transition-all anti-gravity-hover shadow-lg shadow-blue-900/20"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
