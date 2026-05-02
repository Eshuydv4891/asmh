import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, Activity, Bone, Eye, Brain, Baby } from 'lucide-react';

const departments = [
  { id: 1, name: "Trauma & Emergency", description: "24/7 critical care with advanced life support.", icon: Activity, color: "text-red-500", bg: "bg-red-50" },
  { id: 2, name: "Cardiology", description: "Comprehensive heart care and diagnostics.", icon: HeartPulse, color: "text-rose-500", bg: "bg-rose-50" },
  { id: 3, name: "Orthopedics", description: "Treatment for bones, joints, and spine.", icon: Bone, color: "text-blue-500", bg: "bg-blue-50" },
  { id: 4, name: "Neurology", description: "Expert care for brain and nervous system.", icon: Brain, color: "text-purple-500", bg: "bg-purple-50" },
  { id: 5, name: "Pediatrics", description: "Specialized healthcare for children.", icon: Baby, color: "text-emerald-500", bg: "bg-emerald-50" },
  { id: 6, name: "Ophthalmology", description: "Advanced eye care and surgeries.", icon: Eye, color: "text-cyan-500", bg: "bg-cyan-50" },
];

const DepartmentGrid = () => {
  return (
    <section id="departments" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-emerald-600 font-bold tracking-wide uppercase text-sm mb-2">Departments</h2>
          <h3 className="text-4xl font-extrabold text-[#1A365D]">Centers of Excellence</h3>
          <p className="mt-4 text-slate-600 text-lg">
            Our specialized departments are equipped with state-of-the-art technology to provide you with the best possible care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => {
            const Icon = dept.icon;
            return (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass-card p-8 rounded-2xl anti-gravity-hover bg-white"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${dept.bg} ${dept.color}`}>
                  <Icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-[#1A365D] mb-3">{dept.name}</h4>
                <p className="text-slate-600 leading-relaxed">
                  {dept.description}
                </p>
                <a href="#" className="inline-flex items-center gap-2 mt-6 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
                  Learn more <span aria-hidden="true">&rarr;</span>
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default DepartmentGrid;
