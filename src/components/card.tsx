import React from 'react';

interface PrayerTime {
  id: number;
  name: string;
  time: string;
  color: string;
}

const prayerTimes: PrayerTime[] = [
  { id: 1, name: 'Fajr', time: '5:00 AM', color: 'bg-blue-500' },
  { id: 2, name: 'Dhuhr', time: '12:30 PM', color: 'bg-yellow-500' },
  { id: 3, name: 'Asr', time: '4:00 PM', color: 'bg-orange-500' },
  { id: 4, name: 'Maghrib', time: '6:30 PM', color: 'bg-red-500' },
  { id: 5, name: 'Isha', time: '8:00 PM', color: 'bg-purple-500' },
];

const PrayerTimeItem = ({ name, time, color }: Omit<PrayerTime, 'id'>) => (
  <li className="flex items-center justify-between p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all">
    <div className="flex items-center gap-3">
      <div className={`w-2 h-2 rounded-full ${color}`}></div>
      <strong className="text-lg">{name}</strong>
    </div>
    <span className="text-gray-600">{time}</span>
  </li>
);

const Card = () => {
  return (
    <div className="mt-8 p-8 border-0 rounded-xl shadow-lg bg-gradient-to-br from-white to-gray-50 w-full max-w-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 border-b pb-4">Namaz Times</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-2">
        {prayerTimes.map((prayer) => (
          <PrayerTimeItem
            key={prayer.id}
            name={prayer.name}
            time={prayer.time}
            color={prayer.color}
          />
        ))}
      </ul>
    </div>
  );
};

export default Card;