const express = require('express');
const router = express.Router();
const ContactInquiry = require('../models/ContactInquiry');

// POST /api/contact
// Create a new contact inquiry
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    
    // Basic validation
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ success: false, message: 'Please provide all required fields' });
    }

    const inquiry = await ContactInquiry.create({
      name,
      email,
      phone,
      message
    });

    res.status(201).json({ success: true, data: inquiry, message: 'Inquiry submitted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
});

// GET /api/contact
// Get all contact inquiries (admin only in real app)
router.get('/', async (req, res) => {
  try {
    const inquiries = await ContactInquiry.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: inquiries });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
});

module.exports = router;
