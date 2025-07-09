import React from "react";

const ContactForm = () => (
  <section id="contact" className="py-16 bg-gray-50">
    <div className="max-w-xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-blue-800 mb-10 text-center">Contact Us</h2>
      <form className="bg-white rounded-lg shadow-md p-8 space-y-6">
        <div>
          <label className="block text-blue-700 font-medium mb-2">Name</label>
          <input type="text" className="w-full border border-blue-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="Your Name" />
        </div>
        <div>
          <label className="block text-blue-700 font-medium mb-2">Email</label>
          <input type="email" className="w-full border border-blue-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="Your Email" />
        </div>
        <div>
          <label className="block text-blue-700 font-medium mb-2">Message</label>
          <textarea className="w-full border border-blue-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300" rows="4" placeholder="Your Message"></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-700 text-white py-3 rounded font-semibold hover:bg-blue-800 transition">Send Message</button>
      </form>
    </div>
  </section>
);

export default ContactForm; 