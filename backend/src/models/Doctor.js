const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  qualifications: { type: String, required: true },
  designation: { type: String, required: true },
  experienceYears: { type: Number, required: true, default: 6 },
  department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
  imageUrl: { type: String },
  bio: { type: String },
  isLeadership: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Doctor', doctorSchema);
