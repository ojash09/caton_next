import Image from 'next/image';

const WhyUs = () => {
  return (
    <div className="bg-gray-50 py-16">
      {/* Heading */}
      <div className="container mx-auto px-6">
        
        <h1 className="text-5xl font-normal text-blue-950 text-center mb-10">
          Improve productivity with the most<br />advanced hospital management system
        </h1>
        
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-start justify-center">
        {/* Image on the Left */}
        <div className="lg:w-2/5 ">
          <Image
            src="/assets/features.svg" // Replace with your image path
            alt="Doctors Team"
            width={600} // Adjust based on your layout
            height={600} // Adjust based on your layout
            className=""
          />
        </div>

        {/* List on the Right */}
        <div className="lg:w-2/5 lg:ml-10 mt-10 lg:mt-0 ">
          <ul className="text-gray-600 space-y-6">
            <li className="border-b border-gray-300 pb-4 mb-4">
              <h2 className="font-medium text-2xl text-blue-800">Streamlined operations</h2>
              <p className="text-gray-600">Fully integrated clinical, support, finance and billing, supply chain, and administrative functions for more efficient operations.</p>
            </li>

            <li className="border-b border-gray-300 pb-4 mb-4">
              <h2 className="font-medium text-2xl text-blue-800">Enhanced patient care</h2>
              <p className="text-gray-600">Structured, specialty-wise electronic medical records enabling doctors to provide diagnosis-based care with better visibility to patients.</p>
            </li>

            <li className="border-b border-gray-300 pb-4 mb-4">
              <h2 className="font-medium text-2xl text-blue-800">Interoperability across standards</h2>
              <p className="text-gray-600">Compatible with standards like ICD, CPT, HL7, and DICOM.</p>
            </li>

            <li>
              <h2 className="font-medium text-2xl text-blue-800">Information Security</h2>
              <p className="text-gray-600">Role-based security matrix to define user access controls.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
