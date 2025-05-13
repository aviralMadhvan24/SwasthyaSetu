import React from 'react';
import { Users, Activity } from 'lucide-react';
import AnalyticsChart from '../components/AnalyticsChart';
export default function Dashboard() {
  const stats = [
    { label: 'Total Users', value: 120, icon: Users },
    { label: 'Checks Today', value: 45, icon: Activity },
  ];

  return (<>
    <div className="space-y-8">
      <h2 className="text-4xl font-bold text-white drop-shadow-lg">Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {stats.map(({ label, value, icon: Icon }) => (
          <div
            key={label}
            className="flex items-center p-8 bg-gray-800 rounded-3xl shadow-2xl ring-1 ring-gray-600 hover:ring-gray-500 transition-transform transform hover:-translate-y-2"
          >
            <Icon className="w-10 h-10 text-blue-400 mr-6" />
            <div>
              <p className="text-2xl font-bold text-white">{value}</p>
              <p className="text-lg text-gray-300">{label}</p>
            </div>
          </div>
          
        ))}
      </div>
    </div><br /><br /><br /><br />
  <div className="space-y-8">
    <br /><br />
      <h2 className="text-3xl font-bold text-white">Dashboard Analytics</h2>
      <AnalyticsChart />
    </div>

</>

  );
}
