# Shree Arjun Singh Memorial Hospital & Trauma Center 🏥

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

A professional, high-performance web platform built for **Shree Arjun Singh Memorial Hospital**, under the expert leadership of **Dr. Vijay Yadav** and **Dr. Shubham Yadav**. This platform provides patients with crucial information, appointment bookings, emergency contact integration, and NICU/Trauma Center facilities details.

---

## 🚀 Features
- **Modern UI/UX**: Built with React and Tailwind CSS, featuring "antigravity" smooth animations via Framer Motion.
- **Patient Feedback**: Embedded local video testimonials.
- **Dynamic Routing**: Express.js REST API handling bookings and inquiries.
- **Database**: MongoDB for storing patient inquiries and dynamic content.

## ⚙️ Environment Variables Template
Before running the project, create `.env` files in both `/backend` and `/frontend` directories.

**Backend (`/backend/.env`)**
```env
PORT=
MONGO_URI=
JWT_SECRET=
CLOUDINARY_URL=
FRONTEND_URL=
```

## 🛠️ Installation Guide

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd ASMH1
   ```

2. **Install all dependencies:**
   ```bash
   npm run install-all
   ```

3. **Run for Development:**
   ```bash
   npm run dev
   ```
   *This will start both the backend server and frontend application concurrently.*
