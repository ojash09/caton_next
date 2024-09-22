import React from 'react';
import { FaUserMd } from 'react-icons/fa'; // Using doctor icon from react-icons

const StatisticsSection: React.FC = () => {
  return (
    <div className="bg-[#E0F3F8] p-12 flex flex-col items-center">
      {/* Title */}
      <div className="text-center mb-7">
        <h2 className="text-2xl font-bold">
          <span className="text-[#1DBF73]">Patients</span> Statistics
        </h2>
        <p className="text-lg text-gray-600">
          Here is the overview of patients and Healthcare providers connected with us.
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="flex gap-5 justify-center">
        <div className="bg-white p-7 rounded-lg shadow-md text-center w-48 flex flex-col items-center">
          <FaUserMd className="text-4xl text-[#1DBF73] mb-2.5" />
          <h3 className="text-2xl font-bold text-black">10000+</h3>
          <p className="text-lg text-gray-600 mt-2.5">Patients Reached</p>
        </div>

        <div className="bg-white p-7 rounded-lg shadow-md text-center w-48 flex flex-col items-center">
          <FaUserMd className="text-4xl text-[#1DBF73] mb-2.5" />
          <h3 className="text-2xl font-bold text-black">500+</h3>
          <p className="text-lg text-gray-600 mt-2.5">Doctors Connected</p>
        </div>

        <div className="bg-white p-7 rounded-lg shadow-md text-center w-48 flex flex-col items-center">
          <FaUserMd className="text-4xl text-[#1DBF73] mb-2.5" />
          <h3 className="text-2xl font-bold text-black">20%+</h3>
          <p className="text-lg text-gray-600 mt-2.5">Growth Rates</p>
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;
