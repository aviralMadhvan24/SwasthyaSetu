import React, { useState } from 'react';
import { useAuth } from './AuthContext.jsx';

export default function LoginForm() {
  const { login } = useAuth() || {};
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto bg-gray-800 p-8 rounded-2xl shadow-2xl">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="w-full bg-gray-700 text-gray-200 border border-gray-600 px-4 py-3 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="w-full bg-gray-700 text-gray-200 border border-gray-600 px-4 py-3 rounded-xl mb-6 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <button
        type="submit"
        className="w-full bg-primary text-white font-semibold py-3 rounded-xl shadow hover:bg-blue-500 transition"
      >
        Login
      </button>
    </form>
  );
}