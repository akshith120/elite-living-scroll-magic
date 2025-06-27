
import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "I have felt really good, helped me with PCOS",
      author: "PersonName1"
    },
    {
      text: "I have felt really good, helped me with PCOS",
      author: "PersonName1"
    },
    {
      text: "I have felt really good, helped me with PCOS",
      author: "PersonName1"
    }
  ];

  return (
    <section className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-teal-600 mb-4">
            For many, being <span className="italic">healthy</span> is already real and easy!
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-teal-100/50 p-8 rounded-lg">
              <div className="w-16 h-16 bg-teal-200 rounded-lg mb-6 flex items-center justify-center">
                <div className="w-8 h-8 bg-teal-300 rounded"></div>
              </div>
              <p className="text-teal-700 mb-6 text-lg leading-relaxed">
                {testimonial.text}
              </p>
              <p className="text-teal-600 font-medium">
                - {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
