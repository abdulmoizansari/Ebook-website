import React from "react";

const services = [
  {
    icon: (
      <svg className="w-10 h-10 text-blue-700 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V4m0 7v9m0 0H7m5 0h5" /></svg>
    ),
    title: "Professional Ghostwriting",
    desc: "Let our experts bring your story to life with engaging, original writing."
  },
  {
    icon: (
      <svg className="w-10 h-10 text-blue-700 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 018 0v2M9 17a4 4 0 01-8 0v-2a4 4 0 018 0v2zm0 0h6" /></svg>
    ),
    title: "Creative Writing",
    desc: "Original, compelling content for your ebook, blog, or business."
  },
  {
    icon: (
      <svg className="w-10 h-10 text-blue-700 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7v4a1 1 0 001 1h3m10-5h3a1 1 0 011 1v4a1 1 0 01-1 1h-3m-10 0v6a1 1 0 001 1h8a1 1 0 001-1v-6m-10 0h10" /></svg>
    ),
    title: "eBook Writing",
    desc: "High-quality ebook writing, formatting, and publishing services."
  },
  {
    icon: (
      <svg className="w-10 h-10 text-blue-700 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
    ),
    title: "Book Editing & Proofreading",
    desc: "Polish your manuscript with our professional editing and proofreading."
  },
  {
    icon: (
      <svg className="w-10 h-10 text-blue-700 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 4h9" /><path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16" /></svg>
    ),
    title: "Book Marketing",
    desc: "Reach your audience with targeted ebook marketing strategies."
  },
  {
    icon: (
      <svg className="w-10 h-10 text-blue-700 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V4m0 7v9m0 0H7m5 0h5" /></svg>
    ),
    title: "Book Publishing",
    desc: "Smooth path from manuscript to publication on all major platforms."
  },
  {
    icon: (
      <svg className="w-10 h-10 text-blue-700 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v16c0 1.104.896 2 2 2h12c1.104 0 2-.896 2-2V4" /><path strokeLinecap="round" strokeLinejoin="round" d="M16 2v4H8V2" /></svg>
    ),
    title: "Book Cover Design",
    desc: "Eye-catching, professional covers that capture your story’s essence."
  },
];

const Expertise = () => (
  <section id="services" className="py-20 bg-gray-50">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-blue-800 mb-10 text-center">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition flex flex-col items-center">
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