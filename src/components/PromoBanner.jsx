import React from "react";

const PromoBanner = () => (
  <section className="bg-blue-700 py-6 px-4 text-center flex flex-col items-center">
    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Get Upto 70% OFF Sign Up Now</h3>
    <form className="flex flex-col sm:flex-row gap-3 justify-center w-full max-w-md">
      <input
        type="email"
        placeholder="Enter your email"
        className="px-4 py-2 rounded-l-md sm:rounded-md border-none focus:ring-2 focus:ring-blue-300 flex-1 min-w-0"
      />
      <button
        type="submit"
        className="bg-white text-blue-700 font-bold px-6 py-2 rounded-r-md sm:rounded-md shadow hover:bg-blue-100 transition"
      >
        Submit
      </button>
    </form>
  </section>
);

export default PromoBanner; 