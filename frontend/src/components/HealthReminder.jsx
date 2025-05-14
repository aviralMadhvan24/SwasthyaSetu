import React, { useState, useEffect } from 'react';

export default function HealthReminder() {
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');
  const [scheduled, setScheduled] = useState(false);

  useEffect(() => {
    if (scheduled && time) {
      const [hour, minute] = time.split(':').map(Number);
      const now = new Date();
      const reminderTime = new Date();
      reminderTime.setHours(hour, minute, 0, 0);
      const delay = reminderTime.getTime() - now.getTime();
      if (delay > 0) {
        const timer = setTimeout(() => {
          new Notification('Health Reminder', { body: message || 'Time for your medication!' });
        }, delay);
        return () => clearTimeout(timer);
      }
    }
  }, [scheduled, time, message]);

  const handleSchedule = () => {
    if (!('Notification' in window)) return alert('This browser does not support notifications.');
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') setScheduled(true);
      else alert('Please allow notifications to set reminders.');
    });
  };

  return (
    <div className="max-w-lg mx-auto bg-gray-700 p-8 rounded-3xl shadow-2xl ring-1 ring-gray-600 transition-all duration-300">
      <h2 className="text-2xl font-bold mb-4 text-gray-100">Set Health Reminder</h2>
      <div className="space-y-4">
        <input
          type="time"
          value={time}
          onChange={e => setTime(e.target.value)}
          className="w-full p-3 rounded-2xl bg-gray-600 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <input
          type="text"
          placeholder="Reminder message"
          value={message}
          onChange={e => setMessage(e.target.value)}
          className="w-full p-3 rounded-2xl bg-gray-600 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <button
          onClick={handleSchedule}
          className="w-full py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow transition"
        >
          Schedule Reminder
        </button>
        {scheduled && <p className="mt-4 text-green-400">Reminder set for {time}</p>}
      </div>
    </div>
  );
}