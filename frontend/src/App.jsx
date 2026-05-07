import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AdminAppointments from './pages/AdminAppointments';

// Basic Protected Route Component
const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  
  // Shortcut: if ?admin=true is in the URL, set the token automatically
  if (queryParams.get('admin') === 'true') {
    localStorage.setItem('hospital_admin_token', 'asmh_admin_2024');
  }

  const isAdmin = localStorage.getItem('hospital_admin_token') === 'asmh_admin_2024'; 
  return isAdmin ? children : <div className="p-20 text-center font-bold text-red-500">Access Denied: Authorized Admins Only</div>;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route 
          path="/admin/appointments" 
          element={
            <ProtectedRoute>
              <AdminAppointments />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
