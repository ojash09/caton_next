import React from 'react';
import Image from 'next/image';
const WelcomeSection: React.FC = () => {
  return (
    <div className="flex items-center justify-center bg-gradient-to-r from-[#003C43] to-[#77B0AA] text-white h-[500px]">
      <div className="flex-1 pr-5">
        <h1 className="text-5xl font-bold text-white ml-16">Healthcare Management Solutions </h1>

        <p className="text-lg italic text-white mb-5 ml-16">
        Our cutting-edge healthcare management platform enables hospitals, clinics, and health professionals to streamline their operations, manage patient records, and ensure quality care.        </p>
        <button className="bg-[#79A8A9] text-white text-lg py-2 px-8 rounded-md cursor-pointer ml-16">
          Let&apos;s Explore
        </button>
      </div>
      <div className="flex-1 flex justify-center">
        <Image src="/assets/undraw_medicine.svg" alt="Healthcare illustration" width={100} height={64} className="w-full max-w-xs h-auto" />
      </div>
    </div>
  );
};

export default WelcomeSection;
