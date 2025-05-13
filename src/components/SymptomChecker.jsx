import React, { useState } from 'react';

export default function SymptomChecker() {
  const [symptom, setSymptom] = useState('');
  const [advice, setAdvice] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = symptom.toLowerCase();
    if (text.includes('fever')) setAdvice('You might have a fever. Rest and stay hydrated.');
    else if (text.includes('headache')) setAdvice('Consider resting in a quiet, dark room.');
    else setAdvice('Please consult a healthcare professional for proper diagnosis.');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg w-full bg-gray-700 p-8 rounded-3xl shadow-2xl ring-1 ring-gray-600 hover:ring-gray-500 transition-all duration-300">
      <label className="block text-gray-200 font-medium mb-3">Describe your symptom:</label>
      <input
        type="text"
        value={symptom}
        onChange={(e) => setSymptom(e.target.value)}
        className="w-full bg-gray-600 text-gray-100 border border-gray-600 px-4 py-3 rounded-2xl mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        placeholder="e.g., I have a headache and fever"
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold py-3 rounded-2xl shadow hover:bg-blue-500 transition"
      >
        Check
      </button>
      {advice && (
        <p className="mt-6 text-gray-100 font-semibold bg-gray-800 p-4 rounded-xl ring-1 ring-gray-600">
          Advice: {advice}
        </p>
      )}
    </form>
  );
}