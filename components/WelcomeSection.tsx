import React from 'react';

const WelcomeSection: React.FC = () => {
  return (
    <div className="flex items-center justify-between bg-[#9DDAB9] p-5 h-[500px]">
      <div className="flex-1 pr-5">
        <h1 className="text-4xl font-bold text-black ml-16">Welcome user!</h1>
        <p className="text-lg italic text-gray-700 mb-5 ml-16">
          At Caton, you can book clinic appointments with the best doctors in any location and manage your health records.
        </p>
        <button className="bg-[#172dd4] text-white text-lg py-2 px-8 rounded-md cursor-pointer ml-16">
          Let's Explore
        </button>
      </div>
      <div className="flex-1 flex justify-center">
        <img src="/assets/undraw_medicine.svg" alt="Healthcare illustration" className="w-full max-w-xs h-auto" />
      </div>
    </div>
  );
};

export default WelcomeSection;
