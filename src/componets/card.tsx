const prayerTimes = [
    { id: 1, name: 'Fajr', time: '5:20 AM', color: 'bg-blue-500' },
    { id: 2, name: 'Dhuhr', time: '12:30 PM', color: 'bg-yellow-500 ' },
    { id: 3, name: 'Asr', time: '4:00 PM', color: 'bg-orange-500 ' },
    { id: 4, name: 'Maghrib', time: '6:30 PM', color: 'bg-red-500 ' },
    { id: 5, name: 'Isha', time: '8:00 PM', color: 'bg-purple-500 ' },
  ];
  
  const PrayerTimeItem = ({ name, time, color }: { name: string; time: string; color: string }) => (
    <li
      className={`flex items-center justify-between p-4 rounded-lg ${color} hover:shadow-md transition-all duration-300`}
    >
      <div className="flex items-center gap-3">
        <div className="w-3 h-3 rounded-full bg-white"></div>
        <strong className="text-lg font-medium">{name} : </strong>
      </div>
      <span className="m-5 text"> {time}</span>
    </li>
  );

const Card = () => {
  return (
    <div className="divide-y divide-gray-100">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Namaz Times</h2>
      <ul className="space-y-4 ">
      {prayerTimes.map((prayer) => {
  console.log(prayer); // Check if this logs each item
  return (
    <PrayerTimeItem
      key={prayer.id}
      name={prayer.name}
      time={prayer.time}
      color={prayer.color}
    />
  );
})}
      </ul>
    </div>
  );
};

export default Card;