
import React from 'react';
import { LayoutGrid, Globe, ShoppingBag, Code } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Web Design & Development',
      description: 'Creating modern, responsive websites that provide exceptional user experiences across all devices.',
      icon: LayoutGrid,
      features: [
        'Responsive Design',
        'Interactive UI/UX',
        'Fast Loading Speeds',
        'SEO Optimization'
      ]
    },
    {
      title: 'Full-Stack Web Development',
      description: 'Building complete web applications with robust frontend interfaces and powerful backend systems.',
      icon: Code,
      features: [
        'Frontend Development',
        'Backend Systems',
        'API Development',
        'Database Design'
      ]
    },
    {
      title: 'E-Commerce Website Development',
      description: 'Creating online stores with secure payment gateways, product management, and customer portals.',
      icon: ShoppingBag,
      features: [
        'Product Catalogs',
        'Secure Payments',
        'Shopping Cart',
        'Order Management'
      ]
    },
    {
      title: 'Website Maintenance',
      description: 'Keeping websites updated, secure, and running smoothly with regular maintenance and support.',
      icon: Globe,
      features: [
        'Regular Updates',
        'Performance Optimization',
        'Security Patches',
        'Content Updates'
      ]
    }
  ];

  return (
    <section id="services">
      <div className="container">
        <h2 className="section-title">Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <div 
                key={index}
                className="card group hover:border-l-4 hover:border-orange transition-all duration-300"
              >
                <div className="mb-5 p-3 bg-orange/10 rounded-lg w-fit">
                  <Icon size={24} className="text-orange" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-orange transition-colors">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <span className="w-1.5 h-1.5 bg-orange rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
