import React from 'react';
import { FaSearch, FaInfoCircle } from 'react-icons/fa';

const HomePage: React.FC = () => {
  return (
    <div className="p-10 bg-[#E0F3F8] flex flex-col items-center">
      {/* Top Buttons */}
      <div className="flex gap-5">
        <button className="px-10 py-4 bg-blue-800 text-white rounded-lg text-lg cursor-pointer">Book your Appointment</button>
        <button className="px-10 py-4 bg-blue-800 text-white rounded-lg text-lg cursor-pointer">Organize Medical Records</button>
      </div>

      {/* Divider */}
      <div className="w-full h-0.5 bg-black my-8"></div>

      {/* Search Bar */}
      <div className="flex items-center justify-center mb-10">
        <input 
          type="text" 
          placeholder="Search by your city" 
          className="px-5 py-2 rounded-lg border border-gray-300 w-72 text-lg" 
        />
        <FaSearch className="ml-[-30px] text-gray-600 cursor-pointer" />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 gap-5">
        {['Kolkata', 'Ahmedabad', 'Banaras', 'Nagpur'].map((city) => (
          <div key={city} className="bg-[#A9D8E5] p-5 rounded-lg w-72 flex flex-col justify-between">
            <div className="flex items-center mb-3">
              <FaInfoCircle className="text-gray-800 text-2xl mr-2" />
              <h3 className="font-bold text-lg">{city}</h3>
            </div>
            <p className="text-gray-800 mb-5">
              Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.
            </p>
            <button className="px-5 py-2 bg-gray-200 rounded-lg cursor-pointer">Button</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
