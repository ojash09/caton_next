import React from 'react';
import Image from 'next/image';
const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Edward Gilmore',
      role: 'Founder and CEO',
      Image: '/assets/undraw_pic_profile_re_7g2h.svg',
      social: {
        facebook: '#',
        instagram: '#',
        youtube: '#',
      },
    },
    {
      name: 'Lucy Kims',
      role: 'Member Experience Manager',
      Image: '/assets/undraw_pic_profile_re_7g2h.svg',
      social: {
        facebook: '#',
        instagram: '#',
        youtube: '#',
      },
    },
    {
      name: 'Dan Wilson',
      role: 'Senior Community Manager',
      Image: '/assets/undraw_pic_profile_re_7g2h.svg',
      social: {
        facebook: '#',
        instagram: '#',
        youtube: '#',
      },
    },
  ];

  return (
    <div className="min-h-screen bg-[#E0F3F8]">
      {/* Header Section */}
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-800">Our Team</h1>
        <p className="text-gray-500 mt-4">
          We strive to do everything so that you can comfortably and productively work in our space 
          and create amazing products and services.
        </p>
        <div className="flex justify-center mt-2">
          <span className="inline-block w-20 h-1 bg-blue-400 rounded"></span>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-8 py-12">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Image
              src={member.Image}
              alt={member.name}
              width={40}
              height={64}
              className="w-40 h-40 rounded-full mx-auto mb-6 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
            <p className="text-sm text-gray-500 mb-4">{member.role}</p>

            {/* Social Icons */}
            <div className="flex justify-center space-x-4 mt-4">
              <a href={member.social.facebook} className="text-pink-500 hover:text-pink-600">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href={member.social.instagram} className="text-pink-500 hover:text-pink-600">
                <i className="fab fa-instagram"></i>
              </a>
              <a href={member.social.youtube} className="text-pink-500 hover:text-pink-600">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
