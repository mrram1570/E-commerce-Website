
import React, { useState } from 'react';
import { ExternalLink, GitHub } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      title: 'Doodle Jump Website Game',
      description: 'Web-based version of the classic game with interactive elements, built using JavaScript and HTML5 Canvas.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
      tech: ['JavaScript', 'HTML5 Canvas', 'CSS3'],
      category: 'game',
      github: 'https://github.com/JatothRampandu',
      live: '#',
      period: 'March 2024 - Present'
    },
    {
      title: 'Ticket Booking System',
      description: 'Full-stack project with seat selection, payment integration, and secure booking management.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      category: 'fullstack',
      github: 'https://github.com/JatothRampandu',
      live: '#',
      period: 'January 2024 - March 2024'
    },
    {
      title: 'Personal Portfolio Website',
      description: 'A responsive portfolio website built with React and Tailwind CSS to showcase projects and skills.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
      tech: ['React', 'Tailwind CSS', 'Vite'],
      category: 'frontend',
      github: 'https://github.com/JatothRampandu',
      live: '#',
      period: 'March 2024 - Present'
    }
  ];
  
  const filters = [
    { key: 'all', label: 'All' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'game', label: 'Game Dev' }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="bg-navy-light">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter.key 
                  ? 'bg-orange text-white' 
                  : 'bg-navy text-gray-400 hover:text-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="group bg-navy rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy to-transparent h-20"></div>
                <div className="absolute top-4 right-4 bg-navy p-1.5 rounded-full text-xs text-gray-400">
                  {project.period}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-2 py-1 bg-navy-light rounded-md text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center text-sm text-gray-300 hover:text-orange transition-colors"
                  >
                    <GitHub size={16} className="mr-1" />
                    Code
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center text-sm text-gray-300 hover:text-orange transition-colors"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
