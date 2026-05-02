const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  patientName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String },
  preferredDate: { type: Date, required: true },
  department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
  status: { 
    type: String, 
    enum: ['Pending', 'Confirmed', 'Completed', 'Cancelled'], 
    default: 'Pending' 
  },
  notes: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Appointment', appointmentSchema);
