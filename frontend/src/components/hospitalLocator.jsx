import React from 'react';
import { hospitals } from '../data/hospitals';

export default function HospitalLocator() {
  return (
    <div className="max-w-4xl mx-auto bg-gray-700 p-8 rounded-3xl shadow-2xl ring-1 ring-gray-600 transition-all duration-300">
      <h2 className="text-3xl font-bold mb-6 text-gray-100">Nearby Government Hospitals</h2>
      <ul className="space-y-4">
        {hospitals.map(h => (
          <li key={h.id} className="bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-200">{h.name}</h3>
            <p className="text-gray-300 mt-1">{h.address}</p>
            <p className="text-gray-300 mt-1">Emergency: {h.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}