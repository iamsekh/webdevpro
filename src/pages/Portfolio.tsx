import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=500',
    description: 'A full-featured e-commerce platform with advanced inventory management.',
    technologies: ['React', 'Node.js', 'MongoDB']
  },
  {
    title: 'Healthcare Dashboard',
    category: 'Web Application',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&h=500',
    description: 'Analytics dashboard for healthcare providers with real-time data visualization.',
    technologies: ['Vue.js', 'Express', 'PostgreSQL']
  },
  {
    title: 'Real Estate Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&h=500',
    description: 'Property listing and management platform with virtual tour capabilities.',
    technologies: ['React', 'Django', 'AWS']
  },
  {
    title: 'Fitness App',
    category: 'Mobile Development',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&h=500',
    description: 'Mobile fitness application with workout tracking and social features.',
    technologies: ['React Native', 'Firebase']
  },
  {
    title: 'Restaurant Ordering System',
    category: 'Web Application',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&h=500',
    description: 'Online ordering system with real-time kitchen updates and delivery tracking.',
    technologies: ['Next.js', 'Node.js', 'MongoDB']
  },
  {
    title: 'Educational Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&h=500',
    description: 'E-learning platform with video courses and interactive assessments.',
    technologies: ['React', 'Python', 'PostgreSQL']
  }
];

const Portfolio = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Work</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Showcasing our best projects and digital solutions
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <ExternalLink className="h-5 w-5 text-gray-400 hover:text-indigo-600 cursor-pointer" />
                  </div>
                  <div className="text-sm text-indigo-600 mb-2">{project.category}</div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;