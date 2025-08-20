"use client";

import React, { useState } from 'react';
import Head from 'next/head';

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      title: "Rabbit Rearing & Breeding",
      icon: "🐇",
      description: "Our ethical and sustainable rabbit farming practices prioritize animal welfare and genetic excellence.",
      features: [
        "Climate-controlled habitats with natural lighting cycles",
        "Veterinary-supervised health monitoring programs",
        "Selective breeding for optimal meat quality and animal health",
        "Ethical handling protocols certified by animal welfare organizations",
        "Custom nutritional plans for each growth stage"
      ],
      stats: ["99.7%", "Healthy livestock rate"],
      image: "/api/placeholder/500/300",
      fullDescription: "Our rabbit rearing program combines traditional farming wisdom with modern scientific approaches. We've developed proprietary habitat designs that mimic natural environments while ensuring optimal growth conditions. Our breeding program focuses on sustainability, animal welfare, and producing the highest quality meat through careful genetic selection and monitoring."
    },
    {
      title: "Farmer Training & Certification",
      icon: "🎓",
      description: "Comprehensive education programs for farmers and handlers on rabbit care and sustainable practices.",
      features: [
        "Handling certification programs with practical assessments",
        "Nutritional guidance and feed formulation training",
        "Health monitoring and disease prevention protocols",
        "Business management for rabbit farming operations",
        "Ongoing support and consultation services"
      ],
      stats: ["350+", "Farmers trained"],
      image: "/api/placeholder/500/300",
      fullDescription: "Our training programs have been developed in collaboration with agricultural universities and industry experts. We offer both in-person workshops at our demonstration farms and online courses with virtual reality components for hands-on learning. Certification includes ongoing support and access to our network of rabbit farming professionals."
    },
    {
      title: "Processing & Butchery",
      icon: "🔪",
      description: "Humane processing following strict quality control and food safety standards.",
      features: [
        "EU-standard processing facilities with HACCP certification",
        "Complete traceability from farm to package",
        "Humane handling certified by animal welfare organizations",
        "Advanced chilling and aging techniques for flavor development",
        "Custom cutting and preparation for various market needs"
      ],
      stats: ["100%", "Traceability"],
      image: "/api/placeholder/500/300",
      fullDescription: "Our state-of-the-art processing facilities implement the most advanced humane handling techniques while maintaining the highest standards of food safety. We've developed proprietary aging methods that enhance the natural flavor and tenderness of rabbit meat. Every package can be traced back to the specific farm and even the specific breeding line."
    },
    {
      title: "Product Development",
      icon: "🍽️",
      description: "Creating diverse rabbit meat products for different culinary preferences and markets.",
      features: [
        "Multiple cuts and preparations for various cuisines",
        "Value-added products like sausages, patties, and marinated cuts",
        "Recipe development in collaboration with renowned chefs",
        "Specialized products for dietary restrictions (halal, kosher, etc.)",
        "Innovative packaging solutions for freshness and sustainability"
      ],
      stats: ["25+", "Product varieties"],
      image: "/api/placeholder/500/300",
      fullDescription: "Our culinary team works with international chefs to develop products that meet diverse culinary traditions and modern dining trends. From traditional whole rabbit preparations to innovative value-added products, we're constantly expanding our offerings. Our R&D kitchen experiments with flavor profiles, cooking techniques, and presentation to make rabbit meat accessible and appealing to all consumers."
    },
    {
      title: "Quality Assurance",
      icon: "✅",
      description: "Rigorous testing and quality control at every stage of our operations.",
      features: [
        "Regular microbiological testing and nutritional analysis",
        "Quality grading system for consistent product standards",
        "Freshness guarantees with verified shelf-life testing",
        "Third-party audits and certifications",
        "Continuous improvement based on customer feedback"
      ],
      stats: ["0", "Safety incidents"],
      image: "/api/placeholder/500/300",
      fullDescription: "Our quality assurance program exceeds industry standards, with testing at every stage from farm to final product. We've implemented blockchain technology for complete supply chain transparency. Our team includes food scientists who continuously research and implement new methods for quality preservation and enhancement."
    },
    {
      title: "Distribution & Retail Support",
      icon: "🚚",
      description: "Efficient cold chain logistics ensuring premium products reach store shelves.",
      features: [
        "Temperature-controlled transport with real-time monitoring",
        "Retail partner programs with marketing support",
        "Consumer education materials and point-of-sale displays",
        "Inventory management systems for optimal freshness",
        "International export compliance and documentation"
      ],
      stats: ["48h", "Farm to store"],
      image: "/api/placeholder/500/300",
      fullDescription: "Our distribution network has been optimized to maintain the cold chain from processing to retail display. We provide comprehensive support to retail partners, including staff training, marketing materials, and merchandising solutions. Our data-driven approach ensures optimal inventory levels to guarantee freshness while minimizing waste."
    }
  ];

  return (
    <>
      <Head>
        <title>Our Services | Complete Rabbit Farming Ecosystem</title>
        <meta name="description" content="Discover our comprehensive rabbit farming services from breeding to retail distribution. Ethical, sustainable, and premium quality." />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">Our Complete Ecosystem</h1>
            <p className="text-lg text-amber-700 max-w-3xl mx-auto">
              From genetic selection to retail placement, we control every aspect of our rabbit farming process 
              to ensure the highest standards of quality, ethics, and sustainability.
            </p>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
          </div>

          {/* Services Navigation */}
          <div className="mb-12">
            <div className="flex overflow-x-auto pb-2 scrollbar-hide">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex-shrink-0 px-6 py-3 mr-4 rounded-full font-medium transition-all duration-300 ${activeTab === index 
                    ? 'bg-amber-600 text-white shadow-lg' 
                    : 'bg-amber-200 text-amber-800 hover:bg-amber-300'}`}
                >
                  <span className="mr-2">{service.icon}</span>
                  {service.title}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-16">
            <div className="md:flex">
              {/* Image Section */}
              <div className="md:w-2/5 relative">
                <div className="h-64 md:h-full bg-gradient-to-r from-amber-400 to-amber-600 flex items-center justify-center">
                  <div className="text-center p-8 text-white">
                    <span className="text-6xl mb-4 inline-block">{services[activeTab].icon}</span>
                    <h2 className="text-3xl font-bold mb-4">{services[activeTab].title}</h2>
                    <div className="bg-amber-800 bg-opacity-30 inline-flex items-center py-2 px-4 rounded-full">
                      <span className="text-2xl font-bold mr-2">{services[activeTab].stats[0]}</span>
                      <span>{services[activeTab].stats[1]}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="md:w-3/5 p-8">
                <p className="text-amber-700 text-lg mb-6">{services[activeTab].fullDescription}</p>
                
                <h3 className="text-xl font-semibold text-amber-900 mb-4">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {services[activeTab].features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-amber-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <h4 className="font-semibold text-amber-900 mb-2">Industry Leadership</h4>
                  <p className="text-amber-700 text-sm">
                    Our {services[activeTab].title.toLowerCase()} program has been recognized by the Sustainable Agriculture Board 
                    for innovation and excellence in animal husbandry and food production.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Process Timeline */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-amber-900 text-center mb-12">Our End-to-End Process</h2>
            
            <div className="relative">
              {/* Connector line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-amber-200 transform -translate-x-1/2 hidden md:block"></div>
              
              {/* Process Items */}
              <div className="space-y-12">
                {services.map((service, index) => (
                  <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Content */}
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-10' : 'md:pr-10'} mb-8 md:mb-0`}>
                      <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-amber-500">
                        <div className="flex items-center mb-4">
                          <span className="text-3xl mr-4">{service.icon}</span>
                          <h3 className="text-2xl font-bold text-amber-900">{service.title}</h3>
                        </div>
                        <p className="text-amber-700 mb-4">{service.description}</p>
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
          </div>

          {/* Certification Section */}
          <div className="bg-amber-800 text-white rounded-3xl p-10 mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Certifications & Accreditations</h2>
              <p className="text-amber-200 max-w-3xl mx-auto">
                Our commitment to excellence is verified by independent organizations and regulatory bodies.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Animal Welfare Approved", icon: "🏅" },
                { name: "USDA Organic Certified", icon: "🌿" },
                { name: "Global Animal Partnership", icon: "🤝" },
                { name: "Sustainable Agriculture Network", icon: "♻️" },
                { name: "HACCP Certified", icon: "✅" },
                { name: "Non-GMO Project Verified", icon: "🌽" },
                { name: "American Humane Certified", icon: "❤️" },
                { name: "Food Alliance Certified", icon: "🍎" }
              ].map((cert, index) => (
                <div key={index} className="bg-amber-700 bg-opacity-50 rounded-xl p-4 text-center">
                  <span className="text-3xl mb-2 inline-block">{cert.icon}</span>
                  <h3 className="font-semibold text-sm">{cert.name}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-amber-900 mb-6">Ready to Explore Partnership Opportunities?</h2>
            <p className="text-amber-700 mb-8 max-w-3xl mx-auto">
              Whether you&#39;re a restaurant looking for premium ingredients, a retailer interested in carrying our products, 
              or a farmer seeking training programs, we&#39;d love to discuss how we can work together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg">
                Request Information
              </button>
              <button className="border-2 border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white font-medium py-3 px-8 rounded-lg transition-all duration-300">
                Schedule a Consultation
              </button>
            </div>
            
            
          </div>
        </div>
      </div>
    </>
  );
}