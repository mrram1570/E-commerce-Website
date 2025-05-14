
import React from 'react';
import { Calendar, Building, Code } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Web Development Intern',
      company: 'Ripan Technology',
      period: 'June 2024 - August 2024',
      description: 'Working on developing and maintaining web applications using React, Node.js, and MongoDB. Collaborating with the development team to implement new features and improve existing ones.',
      skills: ['React', 'Node.js', 'MongoDB', 'Express', 'RESTful APIs'],
      icon: Building
    },
    {
      title: 'Freelance Web Developer',
      company: 'Self-Employed',
      period: 'January 2024 - Present',
      description: 'Designing and developing responsive websites and landing pages for small businesses and local clients. Implementing custom solutions based on client requirements.',
      skills: ['HTML/CSS', 'JavaScript', 'WordPress', 'Responsive Design', 'UI/UX'],
      icon: Code
    },
  ];

  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="card hover:border-l-4 hover:border-orange transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="p-3 bg-orange/10 rounded-lg self-start">
                  <exp.icon size={24} className="text-orange" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-3">
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <div className="flex items-center text-sm text-orange">
                      <Calendar size={14} className="mr-1" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-2">{exp.company}</p>
                  <p className="mb-4 text-gray-300">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 bg-navy border border-gray-700 rounded-md text-xs text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
