
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <div className="mb-4">
              <span className="px-4 py-2 bg-navy-light text-orange inline-block rounded-full text-sm font-medium">Web Developer</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Turning Ideas into
              <span className="text-orange block mt-2">Digital Experiences</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-lg">
              A passionate B.Tech student specializing in creating 
              interactive web applications that deliver exceptional user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn btn-primary">
                Contact Me <ArrowRight size={18} className="ml-2" />
              </a>
              <a href="#projects" className="btn border border-gray-600 text-white hover:border-orange hover:text-orange">
                View Projects
              </a>
            </div>
            
            <div className="mt-12">
              <p className="text-gray-500 mb-3">Tech Stack</p>
              <div className="flex flex-wrap gap-3">
                {['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'Tailwind'].map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 bg-navy-light border border-gray-700 rounded-md text-sm text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center md:justify-end animate-slide-from-right">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-orange/20 to-teal/20 p-2">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=600" 
                alt="Jatoth Rampandu" 
                className="rounded-full w-full h-full object-cover border-4 border-navy"
              />
              <div className="absolute -bottom-4 -right-4 bg-navy-light px-4 py-2 rounded-full border-2 border-orange">
                <span className="text-white font-semibold">B.Tech Student</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
