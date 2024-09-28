import React from 'react';
import { FaSearch, FaInfoCircle } from 'react-icons/fa';
import CityCards from './CityCards';
import WhyUs from './WhyUs';
import FeaturesSection from './FeaturesSection';

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

      <WhyUs/>
      <FeaturesSection/>
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
      <CityCards/>
    </div>
  );
};

export default HomePage;
