import React from 'react';
import { useAuth } from './AuthContext';

export default function Profile() {
  const { user } = useAuth();

  return (
    <div className="max-w-md mx-auto bg-gray-800 p-8 rounded-2xl shadow-2xl">
      <h2 className="text-2xl font-bold text-white mb-6">Profile</h2>
      <p className="text-gray-200"><strong>Name:</strong> {user.name}</p>
      <p className="text-gray-200"><strong>Email:</strong> {user.email}</p>
    </div>
  );
}