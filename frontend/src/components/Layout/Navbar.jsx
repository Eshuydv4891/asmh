import React from 'react';
import { Phone, Menu, X, HeartPulse } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 glass-card bg-white/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 h-14 w-14 overflow-hidden rounded-full border-2 border-emerald-500 shadow-sm">
              <img src="/images/logo.jpeg" alt="ASMH Logo" className="h-full w-full object-cover" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-navy-900 leading-tight">Shree Arjun Singh</h1>
              <p className="text-xs text-emerald-600 font-semibold tracking-wider">MEMORIAL HOSPITAL & TRAUMA CENTER</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">Home</a>
            <a href="#departments" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">Departments</a>
            <a href="#leadership" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">Our Doctors</a>
            <a href="#contact" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">Contact</a>
            
            {/* Emergency Button */}
            <a 
              href="tel:+919999999999" 
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-red-500/30 transition-all hover:-translate-y-1"
            >
              <Phone size={18} className="animate-pulse" />
              <span>Emergency 24/7</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-navy-900">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden glass-card absolute w-full border-t border-slate-100">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#" className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-emerald-50 rounded-md">Home</a>
            <a href="#departments" className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-emerald-50 rounded-md">Departments</a>
            <a href="#leadership" className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-emerald-50 rounded-md">Our Doctors</a>
            <a href="#contact" className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-emerald-50 rounded-md">Contact</a>
            <a href="tel:+919999999999" className="block px-3 py-3 mt-4 text-center text-base font-bold bg-red-600 text-white rounded-md">
              Emergency 24/7
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
