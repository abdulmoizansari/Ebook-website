import React from "react";

const Footer = () => (
  <footer className="bg-blue-800 text-white py-10 text-center border-t border-blue-900 mt-8">
    <div className="mb-2 font-extrabold text-xl tracking-wide flex justify-center items-center gap-2">
      <span className="bg-white text-blue-800 rounded-full px-3 py-1 font-bold text-lg">GB</span>
      Google Book Publisher
    </div>
    <div className="mb-1">16192 Coastal Hwy, Lewes, DE 19958, USA</div>
    <div className="mb-1">+1 (302) 201-2958 | info@googlebookpublisher.com</div>
    <div className="flex justify-center gap-4 mt-2 text-sm">
      <a href="#" className="underline hover:text-blue-200">Privacy Policy</a>
      <span>|</span>
      <a href="#" className="underline hover:text-blue-200">Terms & Conditions</a>
    </div>
    <div className="text-xs mt-4">&copy; {new Date().getFullYear()} Google Book Publisher | All rights reserved.</div>
  </footer>
);

export default Footer;