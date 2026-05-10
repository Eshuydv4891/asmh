import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, ShieldCheck, ExternalLink } from 'lucide-react';

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
    const API_URL = import.meta.env.VITE_API_URL || (import.meta.env.MODE === 'production' ? '' : 'http://localhost:5000');
    
    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        alert('Thank you! Your message has been received.');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred.');
    }
  };

  // Antigravity Floating Animation
  const floatingAnim = {
    initial: { y: 0 },
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-emerald-400 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-blue-400 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-emerald-600 font-extrabold tracking-widest uppercase text-xs mb-3 block px-4 py-1.5 bg-emerald-50 rounded-full w-fit mx-auto border border-emerald-100 shadow-sm">
            Reach Us Anytime
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#1A365D] mb-6 tracking-tight">
            Contact & <span className="text-emerald-600">Location</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Our trauma center is strategically located for rapid access. We are available 24/7 for life-saving care and emergency consultations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Side: Floating Map & Details */}
          <div className="lg:col-span-7 space-y-10">
            {/* Map Container with Floating Effect */}
            <motion.div 
              variants={floatingAnim}
              initial="initial"
              animate="animate"
              className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 border-4 border-white glass-card group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/10 to-transparent pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="h-[450px] w-full bg-slate-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113645.72765870025!2d78.20387532356507!3d27.472714207908977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397441584b4231b1%3A0xe744e83fecf17a94!2sJalesar%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1689100000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  title="Hospital Location"
                  className="filter grayscale-[0.2] contrast-[1.1] hover:grayscale-0 transition-all duration-700"
                ></iframe>
              </div>
              
              {/* Floating Address Tag */}
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="bg-white/90 backdrop-blur-md p-5 rounded-2xl border border-white shadow-xl flex items-center gap-4">
                  <div className="p-3 bg-emerald-600 text-white rounded-xl shadow-lg shadow-emerald-600/30">
                    <MapPin size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-0.5">Location Address</p>
                    <p className="text-[#1A365D] font-bold text-sm leading-snug">
                      Gaushala Road, Bypass Road, near Purani Petrol Pump, Jalesar, UP 207302
                    </p>
                  </div>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-3 bg-slate-100 hover:bg-emerald-600 hover:text-white text-slate-600 rounded-xl transition-all duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Quick Contact Info Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: <Phone />, title: "Emergency", val: "+91 99999-99999", color: "bg-red-50 text-red-600" },
                { icon: <Clock />, title: "OPD Timing", val: "9 AM - 6 PM", color: "bg-emerald-50 text-emerald-600" },
                { icon: <ShieldCheck />, title: "Trauma Care", val: "24/7 Active", color: "bg-blue-50 text-blue-600" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 group transition-all duration-300"
                >
                  <div className={`p-3 rounded-xl w-fit mb-4 transition-transform group-hover:scale-110 ${item.color}`}>
                    {React.cloneElement(item.icon, { size: 24 })}
                  </div>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">{item.title}</p>
                  <p className="text-[#1A365D] font-black text-sm">{item.val}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: High-End Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="glass-card bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-white relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/50 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none group-hover:bg-blue-100/50 transition-colors duration-500" />
              
              <h3 className="text-2xl font-black text-[#1A365D] mb-8">Send us a <span className="text-emerald-600">Message</span></h3>
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="space-y-4">
                  <div className="relative group">
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Full Name"
                      className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:outline-none focus:border-emerald-500 focus:bg-white transition-all text-slate-700 font-semibold placeholder:text-slate-400"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:outline-none focus:border-emerald-500 focus:bg-white transition-all text-slate-700 font-semibold placeholder:text-slate-400"
                    />
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:outline-none focus:border-emerald-500 focus:bg-white transition-all text-slate-700 font-semibold placeholder:text-slate-400"
                    />
                  </div>

                  <textarea 
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your health concern or question..."
                    className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:outline-none focus:border-emerald-500 focus:bg-white transition-all text-slate-700 font-semibold placeholder:text-slate-400 resize-none"
                  ></textarea>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  className="w-full flex justify-center items-center gap-3 bg-[#1A365D] hover:bg-emerald-600 text-white font-black py-5 rounded-2xl transition-all duration-300 shadow-xl shadow-blue-900/20 hover:shadow-emerald-600/30 group"
                >
                  Submit Inquiry
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </motion.button>
              </form>

              <div className="mt-8 pt-8 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Direct Help</p>
                  <p className="text-[#1A365D] font-black">+91 88888-88888</p>
                </div>
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200" />
                  ))}
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-emerald-500 text-[10px] text-white flex items-center justify-center font-bold">24/7</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
