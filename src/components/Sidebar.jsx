import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home as HomeIcon, ClipboardList, User, History } from 'lucide-react';

const links = [
  { to: '/', label: 'Home', icon: HomeIcon },
  { to: '/dashboard', label: 'Dashboard', icon: ClipboardList },
  { to: '/profile', label: 'Profile', icon: User },
  { to: '/history', label: 'History', icon: History },
];

export default function Sidebar() {
  return (
    <aside className="w-72 bg-gray-800 border-r border-gray-700 shadow-lg">
      <nav className="flex flex-col p-8 space-y-6">
        <h2 className="text-3xl font-bold text-white">SwasthyaSetu</h2>
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center p-3 rounded-lg transition-all duration-200 hover:bg-gray-700 ${
                isActive ? 'bg-gray-700 text-white font-semibold' : 'text-gray-300'
              }`
            }
          >
            <Icon className="w-6 h-6 mr-3" />
            <span>{label}</span>
          </NavLink>
          
        ))}
        

      </nav>
    </aside>
  );
}