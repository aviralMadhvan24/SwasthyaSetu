import React from 'react';

export default function UserManagement() {
  const users = [
    { id: 1, name: 'Demo User', email: 'user@example.com' },
  ];

  return (
    <div className="bg-card p-6 rounded-2xl shadow-lg overflow-auto">
      <table className="min-w-full text-left">
        <thead>
          <tr className="border-b border-gray-600">
            <th className="py-2 text-gray-200">Name</th>
            <th className="py-2 text-gray-200">Email</th>
            <th className="py-2 text-gray-200">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id} className="border-b border-gray-700">
              <td className="py-2 text-gray-200">{u.name}</td>
              <td className="py-2 text-gray-200">{u.email}</td>
              <td className="py-2">
                <button className="text-red-500 hover:text-red-400 transition">Ban</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}