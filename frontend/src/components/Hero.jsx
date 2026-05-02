import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, ShieldCheck, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen pt-20 overflow-hidden bg-slate-50 flex items-center">
      {/* Background animated gradient/waves */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-emerald-200/40 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-200/40 rounded-full blur-[120px] mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-semibold text-sm">
              <Activity size={16} />
              <span>Advanced Medical Care</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-extrabold text-[#1A365D] leading-[1.1]">
              Compassionate Care, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-600">
                Exceptional Healing
              </span>
            </h1>
            
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
              State-of-the-art trauma center and multi-specialty hospital dedicated to providing immediate, world-class medical attention when every second counts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#book" className="inline-flex justify-center items-center gap-2 bg-[#1A365D] hover:bg-blue-900 text-white px-8 py-4 rounded-xl font-bold transition-all anti-gravity-hover">
                Book Appointment
                <ArrowRight size={20} />
              </a>
              <a href="#services" className="inline-flex justify-center items-center gap-2 bg-white text-navy-900 border-2 border-slate-200 hover:border-emerald-500 hover:text-emerald-600 px-8 py-4 rounded-xl font-bold transition-all anti-gravity-hover">
                Our Services
              </a>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-slate-200">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">24/7 Open</h4>
                  <p className="text-sm text-slate-500">Emergency & Trauma</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-emerald-50 rounded-lg text-emerald-600">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Expert Care</h4>
                  <p className="text-sm text-slate-500">Top Specialists</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            {/* Main Hero Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl glass-card border-8 border-white/50 aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Hospital Facility" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
            </div>

            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl flex items-center gap-4 border border-white/40"
            >
              <div className="w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-emerald-500/30">
                10k+
              </div>
              <div>
                <p className="font-bold text-slate-800">Happy Patients</p>
                <p className="text-sm text-slate-500">Trusted in the region</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
