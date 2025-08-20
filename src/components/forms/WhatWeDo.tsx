import React from 'react';
import Link from 'next/link';

export default function WhatWeDo() {
  const processes = [
    {
      title: "Rabbit Rearing",
      description: "Ethical and sustainable rabbit farming practices with emphasis on animal welfare and health.",
      icon: "🐇",
      details: [
        "Climate-controlled habitats",
        "Veterinary supervised care",
        "Breeding program excellence"
      ]
    },
    {
      title: "Training & Education",
      description: "Comprehensive training programs for farmers and handlers on best practices in rabbit care.",
      icon: "🎓",
      details: [
        "Handling certification programs",
        "Nutritional guidance",
        "Health monitoring protocols"
      ]
    },
    {
      title: "Processing & Preparation",
      description: "Humane processing following strict quality control and food safety standards.",
      icon: "🔪",
      details: [
        "EU-standard processing facilities",
        "HACCP certified procedures",
        "Traceability from farm to package"
      ]
    },
    {
      title: "Product Development",
      description: "Creating diverse rabbit meat products for different culinary preferences and markets.",
      icon: "🍽️",
      details: [
        "Multiple cuts and preparations",
        "Value-added products",
        "Recipe development"
      ]
    },
    {
      title: "Quality Assurance",
      description: "Rigorous testing and quality control at every stage of our operations.",
      icon: "✅",
      details: [
        "Regular microbiological testing",
        "Quality grading system",
        "Freshness guarantees"
      ]
    },
    {
      title: "Distribution & Retail",
      description: "Efficient cold chain logistics ensuring premium products reach store shelves.",
      icon: "🚚",
      details: [
        "Temperature-controlled transport",
        "Retail partner programs",
        "Consumer education materials"
      ]
    }
  ];

  return (
    <section className="py-20 bg-amber-50">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Our Complete Rabbit Farming Ecosystem
          </h2>
          <p className="text-lg text-amber-700 max-w-3xl mx-auto">
            From ethical rearing to premium products on your shelf, we maintain excellence
            at every step of our vertically integrated process.
          </p>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connector line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-amber-200 transform -translate-x-1/2 hidden md:block"></div>
          
          {/* Process Items */}
          <div className="space-y-12">
            {processes.map((process, index) => (
              <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-10' : 'md:pr-10'} mb-8 md:mb-0`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-amber-500">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-4">{process.icon}</span>
                      <h3 className="text-2xl font-bold text-amber-900">{process.title}</h3>
                    </div>
                    <p className="text-amber-700 mb-4">{process.description}</p>
                    <ul className="space-y-2">
                      {process.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-amber-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Timeline Indicator */}
                <div className="flex md:block justify-center md:w-1/2 relative">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-500 text-white font-bold text-lg relative z-10 mx-auto shadow-lg">
                    {index + 1}
                  </div>
                </div>
                
                {/* Spacer for alternating sides */}
                <div className="md:w-1/2 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Call to Action Section */}
        <div className="mt-20  p-10 text-center">
          <div className="max-w-3xl mx-auto">
            
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/pages/services" 
                className="inline-flex items-center justify-center px-6 py-4 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                Explore Our Services
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
             
            </div>
            
            
          </div>
        </div>
      </div>
    </section>
  );
}