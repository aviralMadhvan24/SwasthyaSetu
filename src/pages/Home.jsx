import React from 'react';
import SymptomChecker from '../components/SymptomChecker';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-12">
      <h2 className="text-4xl font-bold text-white drop-shadow-lg">Welcome to SwasthyaSetu</h2>
      <SymptomChecker />
    </div>
  );
}