const express = require('express');
const router = express.Router();
const Testimonial = require('../models/Testimonial');

// GET /api/testimonials
// Get all active video testimonials
router.get('/', async (req, res) => {
  try {
    // In a real app, you would fetch from DB:
    // const testimonials = await Testimonial.find({ isActive: true }).sort({ createdAt: -1 });
    
    // For demonstration, we'll return mock data so the frontend works immediately
    const mockTestimonials = [
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

    res.status(200).json({ success: true, data: mockTestimonials });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
});

// POST /api/testimonials (Admin only)
router.post('/', async (req, res) => {
  try {
    const testimonial = await Testimonial.create(req.body);
    res.status(201).json({ success: true, data: testimonial });
  } catch (error) {
    res.status(400).json({ success: false, message: 'Bad Request', error: error.message });
  }
});

module.exports = router;
