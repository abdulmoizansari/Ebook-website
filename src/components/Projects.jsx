import React, { useState } from "react";

const categories = ["All", "Fiction", "Biography", "Non-Fiction", "Informative", "Memoir", "Children's Books"];

const projects = [
  { title: "Fictional Journey", category: "Fiction", img: "https://via.placeholder.com/150x200?text=Fiction+1" },
  { title: "Life of a Legend", category: "Biography", img: "https://via.placeholder.com/150x200?text=Biography+1" },
  { title: "Business Strategy Guide", category: "Non-Fiction", img: "https://via.placeholder.com/150x200?text=Non-Fiction+1" },
  { title: "Science for Kids", category: "Informative", img: "https://via.placeholder.com/150x200?text=Informative+1" },
  { title: "Memoir of Dreams", category: "Memoir", img: "https://via.placeholder.com/150x200?text=Memoir+1" },
  { title: "Adventures in Wonderland", category: "Children's Books", img: "https://via.placeholder.com/150x200?text=Children+1" },
  { title: "Fictional Sequel", category: "Fiction", img: "https://via.placeholder.com/150x200?text=Fiction+2" },
  { title: "Biography of a Hero", category: "Biography", img: "https://via.placeholder.com/150x200?text=Biography+2" },
];

const Projects = () => {
  const [selected, setSelected] = useState("All");
  const filtered = selected === "All" ? projects : projects.filter(p => p.category === selected);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-800 mb-10 text-center">Our Work</h2>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-5 py-2 rounded-full font-semibold border transition-all duration-200 ${selected === cat ? "bg-blue-700 text-white border-blue-700" : "bg-white text-blue-700 border-blue-200 hover:bg-blue-50"}`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
          {filtered.map((project, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-lg transition">
              <img src={project.img} alt={project.title} className="w-32 h-44 object-cover rounded mb-3 border border-blue-100 shadow" />
              <h3 className="text-lg font-semibold text-blue-700 mb-1 text-center">{project.title}</h3>
              <span className="text-xs text-gray-500">{project.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 