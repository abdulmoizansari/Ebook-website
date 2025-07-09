import React from "react";

const projects = [
  { title: "Ebook Design for Tech Startup", description: "Modern, interactive ebook for a SaaS company.", img: "https://via.placeholder.com/150x200?text=Book+1" },
  { title: "Children's Storybook", description: "Colorful illustrations and engaging content for kids.", img: "https://via.placeholder.com/150x200?text=Book+2" },
  { title: "Business Strategy Guide", description: "Professional layout and branding for a consulting firm.", img: "https://via.placeholder.com/150x200?text=Book+3" },
];

const Projects = () => (
  <section id="projects" className="py-16 bg-white">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-blue-800 mb-10 text-center">Our Work</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition flex flex-col items-center">
            <img src={project.img} alt={project.title} className="w-32 h-44 object-cover rounded mb-4 border border-blue-100 shadow" />
            <h3 className="text-lg font-semibold text-blue-700 mb-1 text-center">{project.title}</h3>
            <p className="text-gray-600 text-center">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects; 