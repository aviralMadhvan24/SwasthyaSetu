import React from 'react';
import { Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { useAuth } from './components/AuthContext';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProfilePage from './pages/ProfilePage';
import HistoryPage from './pages/HistoryPage';
import Admin from './pages/Admin';

import HealthEducation from './components/HealthEducation';
import HospitalLocator from './components/hospitalLocator';
import HealthReminder from './components/HealthReminder';

export default function App() {
  const { user } = useAuth() || {};
  return (
   
      <div className="flex h-screen min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-200">
        { <Sidebar />}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Navigation */}
          
          <main className="p-6 overflow-auto">
            <Routes>
              <Route path="/" element={<Home /> } />
              <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
              <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
              <Route path="/dashboard" element={ <Dashboard /> } />
               <Route path="/profile" element={user ? <ProfilePage /> : <Navigate to="/login" />} />
              <Route path="/profile" element={user ? <ProfilePage /> : <Navigate to="/login" />} />
              <Route path="/history" element={user ? <HistoryPage /> : <Navigate to="/login" />} />
              <Route path="/education" element={ <HealthEducation /> } />
              <Route path="/hospitals" element={ <HospitalLocator />} />
              <Route path="/reminder" element={ <HealthReminder /> } />
              <Route path="/admin" element={user?.isAdmin ? <Admin /> : <Navigate to="/" />} />
            </Routes>
          </main>
        </div>
      </div>
    
  );
}