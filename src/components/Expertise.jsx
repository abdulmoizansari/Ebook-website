import React from "react";

const services = [
  {
    icon: (
      <svg className="w-8 h-8 text-blue-700 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V4m0 7v9m0 0H7m5 0h5" /></svg>
    ),
    title: "Custom Ebook Design",
    desc: "Beautiful, branded layouts for every genre and audience."
  },
  {
    icon: (
      <svg className="w-8 h-8 text-blue-700 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 018 0v2M9 17a4 4 0 01-8 0v-2a4 4 0 018 0v2zm0 0h6" /></svg>
    ),
    title: "Ghostwriting & Editing",
    desc: "Professional writing, editing, and proofreading for your story."
  },
  {
    icon: (
      <svg className="w-8 h-8 text-blue-700 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7v4a1 1 0 001 1h3m10-5h3a1 1 0 011 1v4a1 1 0 01-1 1h-3m-10 0v6a1 1 0 001 1h8a1 1 0 001-1v-6m-10 0h10" /></svg>
    ),
    title: "Publishing & Marketing",
    desc: "Get your ebook published and promoted to the right audience."
  },
];

const Expertise = () => (
  <section id="about" className="py-16 bg-gray-50">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-blue-800 mb-10 text-center">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition">
            {service.icon}
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Expertise; 