import React from "react";

const Hero = () => (
  <section id="home" className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 py-28 text-center text-white flex flex-col items-center justify-center">
    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg max-w-3xl mx-auto leading-tight">
      Grow Your Brand with Our Ghostwriting Expertise.
    </h1>
    <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto font-medium">
      Professional ebook, ghostwriting, and publishing solutions for authors, businesses, and storytellers. Let us help you bring your story to life.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="#contact" className="inline-block bg-white text-blue-800 px-8 py-4 rounded-full font-bold text-lg shadow hover:bg-blue-100 transition">Chat Now</a>
      <a href="#contact" className="inline-block bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow hover:bg-blue-800 transition border-2 border-white">Request a Quote</a>
    </div>
  </section>
);

export default Hero; 