import React from 'react';

export default function HistoryList({ records }) {
  return (
    <div className="space-y-4">
      {records.map((r, i) => (
        <div
          key={i}
          className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
        >
          <p className="text-gray-200"><strong>Symptom:</strong> {r.symptom}</p>
          <p className="text-gray-200"><strong>Advice:</strong> {r.advice}</p>
          <p className="text-gray-400 text-sm mt-2">{r.date}</p>
        </div>
      ))}
    </div>
  );
}