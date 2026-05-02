import React from 'react';
import { motion } from 'framer-motion';
import { Award, Stethoscope } from 'lucide-react';

const leaders = [
  {
    id: 1,
    name: "Dr. Vijay Yadav",
    qualifications: "MBBS, MD",
    designation: "Director & Senior Consultant",
    experience: "6+ Years",
    image: "/images/vijay yadav.png",
    specialty: "General Medicine"
  },
  {
    id: 2,
    name: "Dr. Shubham Yadav",
    qualifications: "BAMS, MD",
    designation: "Managing Director",
    experience: "6+ Years",
    image: "/images/shubham yadav.png",
    specialty: "Ayurvedic & General Practice"
  }
];

const expertDoctors = [
  {
    id: 3,
    name: "Dr. Govind Sharma",
    qualifications: "MBBS, MS",
    designation: "Consultant Orthopaedist",
    experience: "15+ Years",
    image: "/images/govind sharma.png",
    specialty: "Orthopaedics"
  },
  {
    id: 4,
    name: "Dr. Mahipal Singh Yadav",
    qualifications: "MBBS, MS",
    designation: "Ex. SN Medical Hospital",
    experience: "3+ Years",
    image: "/images/WhatsApp Image 2026-04-22 at 03.25.19.jpeg",
    specialty: "Ophthalmology"
  },
  {
    id: 5,
    name: "Dr. Rachna Mishra",
    qualifications: "MBBS, MS, MBA",
    designation: "Senior Gynaecologist",
    experience: "35+ Years",
    image: "/images/rachna mishra.png",
    specialty: "Gynaecology"
  },
  {
    id: 6,
    name: "Dr. Ravi Kumar",
    qualifications: "MBBS, MD",
    designation: "General Physician",
    experience: "Experienced",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    specialty: "General Medicine"
  },
  {
    id: 7,
    name: "Dr. Prashant Yadav",
    qualifications: "MBBS, MD",
    designation: "General Physician",
    experience: "Experienced",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    specialty: "General Medicine"
  }
];

const DoctorCard = ({ doctor, index }) => (
  <motion.div 
    key={doctor.id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="glass-card rounded-3xl overflow-hidden anti-gravity-hover flex flex-col h-full"
  >
    <div className="aspect-[4/3] overflow-hidden bg-slate-100">
      <img 
        src={doctor.image} 
        alt={doctor.name} 
        className="w-full h-full object-cover object-top"
      />
    </div>
    <div className="p-6 text-center bg-white flex flex-col flex-1">
      <h4 className="text-xl font-bold text-[#1A365D] leading-tight mb-1">{doctor.name}</h4>
      <p className="text-emerald-600 font-semibold text-sm mb-3">{doctor.qualifications}</p>
      <div className="inline-block bg-slate-100 px-3 py-1 rounded-full text-xs font-medium text-slate-700 mb-5 mx-auto">
        {doctor.designation}
      </div>
      
      <div className="mt-auto grid grid-cols-2 gap-2 border-t border-slate-100 pt-4">
        <div className="flex flex-col items-center">
          <Stethoscope className="text-emerald-500 mb-1" size={20} />
          <span className="text-xs text-slate-500">Specialty</span>
          <span className="font-semibold text-sm text-slate-800">{doctor.specialty}</span>
        </div>
        <div className="flex flex-col items-center border-l border-slate-100">
          <Award className="text-blue-500 mb-1" size={20} />
          <span className="text-xs text-slate-500">Experience</span>
          <span className="font-semibold text-sm text-slate-800">{doctor.experience}</span>
        </div>
      </div>
    </div>
  </motion.div>
);

const Leadership = () => {
  return (
    <section id="leadership" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Leadership Section */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-emerald-600 font-bold tracking-wide uppercase text-sm mb-2">Our Leadership</h2>
            <h3 className="text-4xl font-extrabold text-[#1A365D]">Trusted Experts</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {leaders.map((leader, index) => (
              <DoctorCard key={leader.id} doctor={leader} index={index} />
            ))}
          </div>
        </div>

        {/* Expert Doctors Section */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-emerald-600 font-bold tracking-wide uppercase text-sm mb-2">Our Medical Team</h2>
            <h3 className="text-3xl font-extrabold text-[#1A365D]">Specialized Doctors</h3>
            <p className="mt-4 text-slate-600 text-lg">
              Our multidisciplinary team of experienced doctors is dedicated to providing comprehensive and compassionate care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertDoctors.map((doctor, index) => (
              <DoctorCard key={doctor.id} doctor={doctor} index={index} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Leadership;
