import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center bg-gradient-to-r from-green-400 to-blue-200 text-white p-2.5">
      <div className="flex items-center">
        <img src="/assets/logo-no-background.png" alt="logo" className="w-12 h-12 mx-2.5" />
      </div>
      <div className="flex gap-16 pr-52">
        <Link href="/" className="text-lg text-black no-underline">Home</Link>
        <Link href="/services" className="text-lg text-black no-underline">Services</Link>
        <Link href="/about" className="text-lg text-black no-underline">About</Link>
        <Link href="/contact" className="text-lg text-black no-underline">Contact us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
