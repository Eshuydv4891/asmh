import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Star } from 'lucide-react';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
    
    // Fetch testimonials from API
    const fetchTestimonials = async () => {
      const fallbackData = [
        {
          _id: '1',
          patientName: 'Children Hospital Patient',
          treatmentReceived: 'Critical Care Center',
          videoUrl: '/videos/childcare.mp4',
          thumbnailUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          rating: 5
        },
        {
          _id: '2',
          patientName: 'Sunita Devi & Dr. Vijay Yadav',
          treatmentReceived: 'Complex Trauma Recovery',
          videoUrl: '/videos/dr_vijay.mp4',
          thumbnailUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          rating: 5
        },
        {
          _id: '3',
          patientName: 'Patient Feedback',
          treatmentReceived: 'Hospital Experience',
          videoUrl: '/videos/whatsapp_video.mp4',
          thumbnailUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          rating: 5
        },
        {
          _id: '4',
          patientName: 'NICU Patient',
          treatmentReceived: 'Neonatal Intensive Care Unit',
          videoUrl: '/videos/nicu_care.mp4',
          thumbnailUrl: 'https://images.unsplash.com/photo-1554734867-bf3c00a49371?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          rating: 5
        }
      ];

      try {
        const res = await fetch(`${API_URL}/api/testimonials`);
        const json = await res.json();
        if (json.success && json.data.length > 0) {
          setTestimonials(json.data);
        } else {
          setTestimonials(fallbackData);
        }
      } catch (error) {
        console.error("Error fetching testimonials, using fallback data:", error);
        setTestimonials(fallbackData);
      }
    };
    fetchTestimonials();
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-emerald-600 font-bold tracking-wide uppercase text-sm mb-2">Patient Stories & Feedback</h2>
          <h3 className="text-4xl font-extrabold text-[#1A365D]">Miracles at Shree Arjun Singh Memorial</h3>
          <p className="mt-4 text-slate-600 text-lg">
            Hear directly from our patients about their recovery journey and experiences with our expert medical team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card rounded-2xl overflow-hidden bg-white group cursor-pointer shadow-lg hover:shadow-xl transition-all"
              onClick={() => setSelectedVideo(item.videoUrl)}
            >
              {/* Thumbnail Area */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={item.thumbnailUrl} 
                  alt={item.patientName} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="text-[#1A365D] ml-1" size={28} fill="currentColor" />
                  </div>
                </div>
              </div>
              
              {/* Content Area */}
              <div className="p-6">
                <div className="flex gap-1 mb-3 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <h4 className="text-xl font-bold text-[#1A365D] leading-tight mb-1">{item.patientName}</h4>
                <p className="text-emerald-600 font-medium text-sm">{item.treatmentReceived}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal Lightbox */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-emerald-400 transition-colors"
              onClick={() => setSelectedVideo(null)}
            >
              <X size={36} />
            </button>
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedVideo.includes('youtube.com') || selectedVideo.includes('vimeo.com') ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={`${selectedVideo}?autoplay=1`}
                  title="Patient Testimonial"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <video
                  width="100%"
                  height="100%"
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                >
                  <source src={selectedVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Testimonials;
