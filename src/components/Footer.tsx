
import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: 'https://github.com/JatothRampandu', ariaLabel: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/jatoth-rampandu/', ariaLabel: 'LinkedIn' },
    { icon: Mail, href: 'mailto:rampandu8328@gmail.com', ariaLabel: 'Email' },
    { icon: Phone, href: 'tel:+918328191310', ariaLabel: 'Phone' },
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-navy-light pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Jatoth Rampandu</h3>
            <p className="text-gray-400 mb-6">
              A passionate B.Tech student and web developer focused on creating interactive, user-centric digital experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.ariaLabel}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.ariaLabel}
                  className="social-icon"
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-orange transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact Info</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:rampandu8328@gmail.com" className="flex items-center text-gray-400 hover:text-orange transition-colors">
                  <Mail size={16} className="mr-2" />
                  rampandu8328@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+918328191310" className="flex items-center text-gray-400 hover:text-orange transition-colors">
                  <Phone size={16} className="mr-2" />
                  +91 8328191310
                </a>
              </li>
              <li className="flex items-start text-gray-400">
                <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                <span>Sree Dattha Institute of Engineering and Science, Hyderabad, India</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; {currentYear} Jatoth Rampandu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
