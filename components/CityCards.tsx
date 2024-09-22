import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';

const CityCards: React.FC = () => {
  const cities = [
    {
      name: 'Nagpur',
      description: 'Experience world-class healthcare services in the heart of Maharashtra with seamless appointment bookings and comprehensive health records management.',
    },
    {
      name: 'Kolkata',
      description: 'Access top-tier medical care and lab facilities in Kolkata. Manage your appointments and health reports effortlessly.',
    },
    {
      name: 'Ahmedabad',
      description: 'Stay on top of your health with trusted doctors and state-of-the-art medical facilities available in Ahmedabad.',
    },
    {
      name: 'Banaras',
      description: 'Book appointments with leading specialists and manage your health records with ease in the spiritual city of Banaras.',
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-6 p-6">
      {cities.map((city) => (
        <div key={city.name} className="bg-[#A9D8E5] p-5 rounded-lg w-72 flex flex-col justify-between">
        <div className="flex items-center mb-3">
          <FaInfoCircle className="text-gray-800 text-2xl mr-2" />
          <h3 className="font-bold text-lg">{city.name}</h3>
        </div>
        <p className="text-gray-800 mb-5">
            {city.description}
        </p>
        <button className="px-5 py-2 bg-gray-200 rounded-lg cursor-pointer">Button</button>
      </div>
      ))}
    </div>
  );
};

export default CityCards;
