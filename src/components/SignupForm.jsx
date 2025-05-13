import React, { useState } from 'react';
import { useAuth } from './AuthContext';

export default function SignupForm() {
  const { signup } = useAuth() || {};
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    signup({ name, email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto bg-gray-800 p-8 rounded-2xl shadow-2xl">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Sign Up</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        className="w-full bg-gray-700 text-gray-200 border border-gray-600 px-4 py-3 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-primary"
      />
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
        onClick={handleSubmit}
        type="submit"
        className="w-full bg-green-600 text-white font-semibold py-3 rounded-xl shadow hover:bg-green-500 transition"
      >
        Sign Up
      </button>
    </form>
  );
}