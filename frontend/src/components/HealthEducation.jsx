import React from 'react';
import { healthTips } from '../data/healthTips';

export default function HealthEducation() {
  return (
    <div className="max-w-4xl mx-auto bg-gray-700 p-8 rounded-3xl shadow-2xl ring-1 ring-gray-600 transition-all duration-300">
      <h2 className="text-3xl font-bold mb-6 text-gray-100">Health Education & Tips</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {healthTips.map(tip => (
          <div key={tip.id} className="bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-200 mb-2">{tip.title}</h3>
            <p className="text-gray-300">{tip.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}