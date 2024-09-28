import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-[#003C43] to-[#77B0AA] text-black p-10 flex justify-center">
      <div className="w-full max-w-screen-xl flex justify-between">
        <div className="flex-1 mr-5">
          <h3 className="font-bold mb-2.5">About</h3>
          <div className="flex mt-2.5">
            <FaFacebookF className="text-2xl text-[#F4F7F7] mr-2.5 cursor-pointer" />
            <FaTwitter className="text-2xl text-[#F4F7F7] mr-2.5 cursor-pointer" />
            <FaInstagram className="text-2xl text-[#F4F7F7] mr-2.5 cursor-pointer" />
            <FaYoutube className="text-2xl text-[#F4F7F7] cursor-pointer" />
          </div>
        </div>

        <div className="flex-1 mr-5">
          <h3 className="font-bold mb-2.5">Quick Links</h3>
          <ul className="list-none p-0">
            <li><Link href="/faqs" className="text-[#F4F7F7] no-underline mb-2.5 block">FAQs</Link></li>
            <li><Link href="/contact" className="text-[#F4F7F7] no-underline mb-2.5 block">Contact Us</Link></li>
          </ul>
        </div>

        <div className="flex-1 mr-5">
          <h3 className="font-bold mb-2.5">Helpful Links</h3>
          <ul className="list-none p-0">
            <li><Link href="/healthcare-professional" className="text-[#F4F7F7] no-underline mb-2.5 block">Healthcare Professional</Link></li>
            <li><Link href="/lgu-facilities" className="text-[#F4F7F7] no-underline mb-2.5 block">LGU Facilities</Link></li>
            <li><Link href="/protect-family" className="text-[#F4F7F7] no-underline mb-2.5 block">Protect Your Family</Link></li>
            <li><Link href="/world-health" className="text-[#F4F7F7] no-underline mb-2.5 block">World Health</Link></li>
          </ul>
        </div>

        <div className="flex-1">
          <h3 className="font-bold mb-2.5">Resources</h3>
          <ul className="list-none p-0">
            <li><Link href="https://www.who.int" className="text-[#F4F7F7] no-underline mb-2.5 block">WHO Website</Link></li>
            <li><Link href="https://www.cdc.gov" className="text-[#F4F7F7] no-underline mb-2.5 block">CDC Website</Link></li>
            <li><Link href="https://www.gov.com" className="text-[#F4F7F7] no-underline mb-2.5 block">Gov Website</Link></li>
            <li><Link href="https://www.doh.gov" className="text-[#F4F7F7] no-underline mb-2.5 block">DOH Website</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
