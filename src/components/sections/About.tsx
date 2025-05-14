
import React from 'react';

const About = () => {
  const skills = [
    { name: 'C', level: 80 },
    { name: 'Java', level: 75 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Node.js', level: 70 },
    { name: 'MongoDB', level: 65 },
  ];

  return (
    <section id="about" className="bg-navy-light">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-2">
            <div className="rounded-lg overflow-hidden mb-6">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80" 
                alt="Jatoth Rampandu Working" 
                className="w-full object-cover"
              />
            </div>
            
            <div className="bg-navy p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <div className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-orange">
                <div className="mb-6 relative before:content-[''] before:absolute before:left-[-20px] before:top-2 before:w-4 before:h-4 before:bg-orange before:rounded-full">
                  <h4 className="text-lg font-bold">B.Tech in Computer Science</h4>
                  <p className="text-orange">2022 - 2026</p>
                  <p className="text-gray-400">Sree Dattha Institute of Engineering and Science</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h3 className="text-2xl font-bold mb-4">
              A Passionate <span className="text-orange">Web Developer</span> and B.Tech Student
            </h3>
            <p className="text-gray-300 mb-6">
              As a third-year B.Tech student, I am deeply passionate about web development and constantly seek to expand my knowledge and skills in this field. I believe in creating web applications that not only look visually appealing but also provide exceptional user experiences.
            </p>
            <p className="text-gray-300 mb-6">
              My journey in web development began with a curiosity about how websites work, which led me to explore various technologies and frameworks. I enjoy the process of turning ideas into fully functioning websites and applications, solving complex problems, and continuously learning new techniques to improve my craft.
            </p>
            <p className="text-gray-300 mb-8">
              When I'm not coding, I'm exploring new technologies, participating in hackathons, or collaborating with fellow developers on exciting projects. I am always open to new challenges and opportunities to grow both personally and professionally.
            </p>
            
            <h3 className="text-xl font-bold mb-4">Technical Skills</h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-orange">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-navy rounded-full h-2">
                    <div 
                      className="bg-orange h-2 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
