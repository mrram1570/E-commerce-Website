
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];
  
  const socialLinks = [
    { icon: Github, href: 'https://github.com/JatothRampandu', ariaLabel: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/jatoth-rampandu/', ariaLabel: 'LinkedIn' },
    { icon: Mail, href: 'mailto:rampandu8328@gmail.com', ariaLabel: 'Email' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-navy shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container flex justify-between items-center">
        <a href="#home" className="flex items-center">
          <span className="text-2xl font-bold text-white">
            <span className="text-orange">J</span>atoth <span className="text-orange">R</span>ampandu
          </span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </nav>
        
        {/* Social Icons - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          {socialLinks.map((link) => (
            <a 
              key={link.ariaLabel}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.ariaLabel}
              className="social-icon"
            >
              <link.icon size={20} />
            </a>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-navy-light absolute top-full left-0 right-0 shadow-lg py-4 animate-fade-in">
          <div className="container flex flex-col">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="py-3 px-4 hover:bg-navy-light hover:text-orange transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            
            <div className="flex items-center space-x-6 mt-4 px-4 py-3 border-t border-gray-700">
              {socialLinks.map((link) => (
                <a 
                  key={link.ariaLabel}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.ariaLabel}
                  className="social-icon"
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
