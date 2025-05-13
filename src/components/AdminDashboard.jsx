import React from 'react';
import UserManagement from './UserManagement';

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-white">Admin Panel</h2>
      <UserManagement />
    </div>
  );
}