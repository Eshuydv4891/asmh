const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? 'https://asmh-hospital.vercel.app' 
    : 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// Database connection
connectDB();

// Routes
const contactRoutes = require('./routes/contactRoutes');
const testimonialRoutes = require('./routes/testimonialRoutes');

// Basic Route
app.get('/', (req, res) => {
  res.send('Shree Arjun Singh Memorial Hospital API is running...');
});

app.use('/api/contact', contactRoutes);
app.use('/api/testimonials', testimonialRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
