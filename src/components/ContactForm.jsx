import React from "react";

const ContactForm = () => (
  <section id="contact" className="py-20 bg-white">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-blue-800 mb-10 text-center">Contact Us</h2>
      <div className="flex flex-col md:flex-row gap-10 items-start justify-center">
        <form className="bg-gray-50 rounded-lg shadow-md p-8 space-y-6 flex-1 min-w-[300px]">
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
        <div className="flex-1 min-w-[250px] bg-blue-50 rounded-lg shadow-md p-8 text-blue-800 space-y-4">
          <div>
            <div className="font-bold text-lg mb-1">Phone</div>
            <div>+1 (302) 201-2958</div>
          </div>
          <div>
            <div className="font-bold text-lg mb-1">Email</div>
            <div>info@googlebookpublisher.com</div>
          </div>
          <div>
            <div className="font-bold text-lg mb-1">Address</div>
            <div>16192 Coastal Hwy, Lewes, DE 19958, USA</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactForm; 
