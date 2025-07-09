import React from "react";

const reviews = [
  {
    name: "Joseph Boucher",
    text: "I'm especially grateful for the support I received from the team. They were always available to answer my questions and help me through any challenges.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Gurmit Meade",
    text: "I'm a self-published author who has used Google Book Publisher to publish several of my books. I've been consistently impressed with the quality of their service.",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    name: "Fernande Desarmes",
    text: "I'm a professor who has used Google Book Publisher to publish my textbook. I'm very happy with the results. They made it easy to publish my textbook, and worked with me to create a custom template that matched my needs.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    name: "Maria Garcia",
    text: "Creative layouts and great communication throughout the project.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
];

const quoteIcon = (
  <svg className="w-8 h-8 text-blue-200 mb-2" fill="currentColor" viewBox="0 0 24 24"><path d="M7.17 6A5.001 5.001 0 002 11c0 2.21 1.79 4 4 4 .34 0 .67-.03.99-.09l-.49 2.45A1 1 0 007.47 19h2.06a1 1 0 00.98-.8l1.5-7A1 1 0 0011 10H7.17zm9 0A5.001 5.001 0 0011 11c0 2.21 1.79 4 4 4 .34 0 .67-.03.99-.09l-.49 2.45A1 1 0 0016.47 19h2.06a1 1 0 00.98-.8l1.5-7A1 1 0 0021 10h-3.83z" /></svg>
);

const Reviews = () => (
  <section id="reviews" className="py-20 bg-blue-50">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-blue-800 mb-10 text-center">Testimonials</h2>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
        {reviews.map((review, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition flex flex-col items-center">
            {quoteIcon}
            <img src={review.avatar} alt={review.name} className="w-16 h-16 rounded-full border-4 border-blue-100 mb-3 object-cover" />
            <p className="text-gray-700 italic mb-4">"{review.text}"</p>
            <div className="font-semibold text-blue-700">- {review.name}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Reviews; 