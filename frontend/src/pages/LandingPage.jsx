import React from 'react';
import { PhoneCall } from 'lucide-react';
import Navbar from '../components/Layout/Navbar';
import Hero from '../components/Hero';
import Leadership from '../components/Leadership';
import Testimonials from '../components/Testimonials';
import DepartmentGrid from '../components/DepartmentGrid';
import Appointment from '../components/Appointment';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 relative pb-16 md:pb-0">
      <Navbar />
      <Hero />
      <Leadership />
      <Testimonials />
      <DepartmentGrid />
      <Appointment />
      
      {/* Floating Emergency Button */}
      <a 
        href="tel:+919999999999" 
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-4 rounded-full font-bold shadow-2xl shadow-red-500/40 transition-all hover:scale-105"
      >
        <PhoneCall size={24} className="animate-pulse" />
        <span className="hidden md:inline">Emergency: Call Now</span>
      </a>

      {/* SEO-Friendly Footer */}
      <footer className="bg-[#1A365D] text-emerald-50 py-12 border-t-4 border-emerald-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-xl mb-4 text-white">Shree Arjun Singh</h4>
              <p className="text-emerald-100/80 font-medium">Memorial Hospital & Trauma Center</p>
              <p className="text-emerald-100/80 mt-2 text-sm leading-relaxed">
                Compassionate Care, Exceptional Healing. Serving the community with 24/7 emergency and trauma care.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2 text-emerald-100/80">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Home</a></li>
                <li><a href="#departments" className="hover:text-emerald-400 transition-colors">Departments</a></li>
                <li><a href="#leadership" className="hover:text-emerald-400 transition-colors">Our Doctors</a></li>
                <li><a href="#book" className="hover:text-emerald-400 transition-colors">Book Appointment</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-4 text-white">Contact & Location</h4>
              <p className="text-emerald-100/80"><span className="font-semibold">Trauma Center:</span> +91 99999-99999</p>
              <p className="text-emerald-100/80"><span className="font-semibold">Reception:</span> +91 88888-88888</p>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-emerald-100/90 font-medium">Shree Arjun Singh Memorial Hospital</p>
                <p className="text-emerald-100/80 text-sm mt-1">Gaushala Road, Near Petrol Pump,</p>
                <p className="text-emerald-100/80 text-sm">Bypass Jalesar, Etah, Uttar Pradesh</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-emerald-100/60">
            &copy; {new Date().getFullYear()} Shree Arjun Singh Memorial Hospital & Trauma Center. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
