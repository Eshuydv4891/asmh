const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  patientName: { type: String, required: true },
  treatmentReceived: { type: String, required: true },
  videoUrl: { type: String, required: true },
  thumbnailUrl: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5, default: 5 },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Testimonial', testimonialSchema);
