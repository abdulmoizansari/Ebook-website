import React from "react";

const Footer = () => (
  <footer className="bg-blue-800 text-white py-8 text-center border-t border-blue-900 mt-8">
    <div className="mb-2 font-semibold text-lg tracking-wide">EbookBiz</div>
    <div className="mb-1">925 Filbert Street, Pennsylvania 18072</div>
    <div className="mb-1">+45 34 11 44 11 | info@gmail.com</div>
    <div className="text-sm mt-2">&copy; {new Date().getFullYear()} - All Rights Reserved</div>
  </footer>
);

export default Footer; 