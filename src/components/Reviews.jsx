import React from "react";

const reviews = [
  { name: "Alice Smith", text: "Fantastic ebook design! My clients loved the interactive features." },
  { name: "John Doe", text: "Professional and timely delivery. Highly recommended for business ebooks." },
  { name: "Maria Garcia", text: "Creative layouts and great communication throughout the project." },
];

const quoteIcon = (
  <svg className="w-8 h-8 text-blue-200 mb-2" fill="currentColor" viewBox="0 0 24 24"><path d="M7.17 6A5.001 5.001 0 002 11c0 2.21 1.79 4 4 4 .34 0 .67-.03.99-.09l-.49 2.45A1 1 0 007.47 19h2.06a1 1 0 00.98-.8l1.5-7A1 1 0 0011 10H7.17zm9 0A5.001 5.001 0 0011 11c0 2.21 1.79 4 4 4 .34 0 .67-.03.99-.09l-.49 2.45A1 1 0 0016.47 19h2.06a1 1 0 00.98-.8l1.5-7A1 1 0 0021 10h-3.83z" /></svg>
);

const Reviews = () => (
  <section className="py-16 bg-blue-50">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-blue-800 mb-10 text-center">Testimonials</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((review, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition flex flex-col items-center">
            {quoteIcon}
            <p className="text-gray-700 italic mb-4">"{review.text}"</p>
            <div className="font-semibold text-blue-700">- {review.name}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Reviews; 