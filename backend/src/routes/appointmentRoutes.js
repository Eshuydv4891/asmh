const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

// POST /api/appointments
// Create a new appointment
router.post('/', async (req, res) => {
  try {
    const { name, phone, date, department, notes } = req.body;
    
    // Basic validation
    if (!name || !phone || !date) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    const appointment = await Appointment.create({
      patientName: name,
      phone,
      preferredDate: date,
      department, // Assuming department ID is passed if available
      notes,
      status: 'Pending'
    });

    res.status(201).json({ success: true, data: appointment });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET /api/appointments
// Get all appointments (Admin only)
router.get('/', async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: appointments });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
