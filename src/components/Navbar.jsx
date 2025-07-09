import React from "react";

const Navbar = () => (
  <nav className="bg-blue-800 sticky top-0 z-50 shadow-md py-3 px-8 flex justify-between items-center">
    <div className="font-extrabold text-2xl text-white tracking-wide flex items-center">
      <span className="bg-white text-blue-800 rounded-full px-3 py-1 mr-3 font-bold text-lg">GB</span>
      Google Book Publisher
    </div>
    <ul className="flex space-x-8 text-white font-medium text-lg">
      <li><a href="#home" className="hover:underline underline-offset-4">Home</a></li>
      <li><a href="#services" className="hover:underline underline-offset-4">Services</a></li>
      <li><a href="#portfolio" className="hover:underline underline-offset-4">Portfolio</a></li>
      <li><a href="#pricing" className="hover:underline underline-offset-4">Pricing</a></li>
      <li><a href="#reviews" className="hover:underline underline-offset-4">Reviews</a></li>
      <li><a href="#contact" className="hover:underline underline-offset-4">Contact</a></li>
    </ul>
  </nav>
);

export default Navbar; 