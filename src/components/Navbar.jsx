import React from "react";

const Navbar = () => (
  <nav className="bg-blue-800 shadow-md py-4 px-8 flex justify-between items-center">
    <div className="font-bold text-2xl text-white tracking-wide">EbookBiz</div>
    <ul className="flex space-x-8 text-white font-medium">
      <li><a href="#home" className="hover:underline underline-offset-4">Home</a></li>
      <li><a href="#projects" className="hover:underline underline-offset-4">Past Work</a></li>
      <li><a href="#about" className="hover:underline underline-offset-4">About</a></li>
      <li><a href="#contact" className="hover:underline underline-offset-4">Contact</a></li>
    </ul>
  </nav>
);

export default Navbar; 