
import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      title: "Identify",
      description: "We diagnose and understand every family member and design a custom diet for each of your family members",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop"
    },
    {
      title: "Optimise",
      description: "Our world class nutritionists discuss, customise and plan a diet for you within the walls of your gated society",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    },
    {
      title: "Deliver",
      description: "We deliver the premium quality fruits and nuts needed for your family at the doorstep of your house",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl text-teal-600 font-light mb-8">
            What do we do?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="text-center group">
              <div className="mb-8 overflow-hidden rounded-lg">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl text-orange-500 font-medium mb-4">
                {service.title}
              </h3>
              <p className="text-teal-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
