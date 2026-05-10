import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Calendar, 
  Phone, 
  User, 
  Clock, 
  Filter, 
  ChevronRight, 
  Loader2,
  AlertCircle,
  Stethoscope,
  ShieldCheck
} from 'lucide-react';

const AdminAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/api/appointments`);
      if (response.data.success) {
        setAppointments(response.data.data);
      }
      setLoading(false);
    } catch (err) {
      console.error('Error fetching appointments:', err);
      setError('Failed to load appointments. Please check your connection.');
      setLoading(false);
    }
  };

  const filteredAppointments = appointments.filter(app => {
    const matchesSearch = app.patientName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         app.phone.includes(searchQuery);
    const matchesFilter = filterStatus === 'All' || app.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Confirmed': return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20 shadow-[0_0_15px_rgba(52,211,153,0.3)]';
      case 'Pending': return 'text-amber-400 bg-amber-400/10 border-amber-400/20 shadow-[0_0_15px_rgba(251,191,36,0.3)]';
      case 'Completed': return 'text-blue-400 bg-blue-400/10 border-blue-400/20 shadow-[0_0_15px_rgba(96,165,250,0.3)]';
      case 'Cancelled': return 'text-red-400 bg-red-400/10 border-red-400/20 shadow-[0_0_15px_rgba(248,113,113,0.3)]';
      default: return 'text-slate-400 bg-slate-400/10 border-slate-400/20';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0f18] flex flex-col items-center justify-center relative overflow-hidden">
        <motion.div 
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="relative z-10"
        >
          <div className="w-24 h-24 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full blur-[2px]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Stethoscope className="text-emerald-500 w-10 h-10" />
          </div>
        </motion.div>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8 text-emerald-400 font-bold tracking-widest uppercase text-xs"
        >
          Accessing Hospital Data...
        </motion.p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0f18] text-slate-300 p-6 md:p-12 relative">
      {/* Antigravity Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl font-black text-white tracking-tight"
            >
              Patient <span className="text-emerald-500">Appointments</span>
            </motion.h1>
            <p className="text-slate-500 mt-2 font-medium">Manage hospital bookings and patient history.</p>
          </div>

          {/* Floating Search & Filter Bar */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 bg-white/5 backdrop-blur-xl p-2 rounded-2xl border border-white/10 shadow-2xl"
          >
            <div className="relative">
              <Search className="absolute left-4 top-3.5 text-slate-500" size={18} />
              <input 
                type="text" 
                placeholder="Search patient..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-3 bg-transparent border-none focus:outline-none text-white font-medium w-48 md:w-64"
              />
            </div>
            <div className="h-8 w-[1px] bg-white/10 mx-2" />
            <select 
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="bg-transparent text-slate-400 font-bold text-sm px-4 focus:outline-none cursor-pointer"
            >
              <option value="All">All Status</option>
              <option value="Pending">Pending</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Completed">Completed</option>
            </select>
          </motion.div>
        </header>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-2xl flex items-center gap-4 text-red-400 mb-8">
            <AlertCircle />
            <p className="font-bold">{error}</p>
          </div>
        )}

        {/* Appointment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredAppointments.length > 0 ? (
              filteredAppointments.map((app, index) => (
                <motion.div
                  key={app._id}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ 
                    y: -10, 
                    rotateX: 5, 
                    rotateY: -5,
                    boxShadow: "0 25px 50px -12px rgba(16, 185, 129, 0.2)"
                  }}
                  className="glass-card bg-white/5 backdrop-blur-lg border border-white/10 rounded-[2rem] p-8 relative group overflow-hidden"
                  style={{ perspective: 1000 }}
                >
                  {/* Neon Glow Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Status Badge */}
                  <div className="flex justify-between items-start mb-8 relative z-10">
                    <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-tighter border ${getStatusColor(app.status)}`}>
                      {app.status}
                    </div>
                    <div className="text-slate-600 text-[10px] font-bold">
                      ID: #{app._id.slice(-6).toUpperCase()}
                    </div>
                  </div>

                  {/* Patient Info */}
                  <div className="space-y-6 relative z-10">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-500 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                        <User size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                          {app.patientName}
                        </h3>
                        <p className="text-slate-500 text-sm font-medium flex items-center gap-2">
                          <Phone size={14} /> {app.phone}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                      <div className="space-y-1">
                        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Date</p>
                        <p className="text-slate-200 text-sm font-bold flex items-center gap-2">
                          <Calendar size={14} className="text-emerald-500" />
                          {new Date(app.preferredDate).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Department</p>
                        <p className="text-slate-200 text-sm font-bold truncate capitalize">
                          {app.department || 'General'}
                        </p>
                      </div>
                    </div>

                    {app.notes && (
                      <div className="bg-black/20 p-4 rounded-xl border border-white/5 group-hover:border-emerald-500/20 transition-colors">
                        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                          <AlertCircle size={12} /> Patient Note
                        </p>
                        <p className="text-slate-400 text-sm leading-relaxed italic">
                          "{app.notes}"
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Floating Action Button */}
                  <motion.button 
                    whileHover={{ scale: 1.1, x: 5 }}
                    className="absolute bottom-8 right-8 w-10 h-10 bg-emerald-500 text-[#0a0f18] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.4)] opacity-0 group-hover:opacity-100 transition-all"
                  >
                    <ChevronRight size={20} strokeWidth={3} />
                  </motion.button>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-12 max-w-md mx-auto">
                  <Search className="w-12 h-12 text-slate-700 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">No Appointments Found</h3>
                  <p className="text-slate-500">Try adjusting your search or filters to see results.</p>
                </div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Admin Security Warning */}
      <footer className="mt-20 py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-600">
        <p>© {new Date().getFullYear()} Shree Arjun Singh Memorial Hospital - Admin Panel</p>
        <div className="flex items-center gap-2 text-amber-500/60">
          <ShieldCheck size={14} />
          SECURE ENCRYPTED ACCESS ONLY
        </div>
      </footer>
    </div>
  );
};

export default AdminAppointments;
