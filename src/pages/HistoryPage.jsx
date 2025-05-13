import React from 'react';
import HistoryList from '../components/HistoryList';

export default function HistoryPage() {
  const records = [
    { symptom: 'Fever', advice: 'Rest and hydrate', date: '2025-05-13' },
  ];

  return (
    <div className="max-w-2xl mx-auto py-8">
      <HistoryList records={records} />
    </div>
  );
}