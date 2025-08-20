import React from 'react';
import Link from 'next/link';

export default function ProductShowcase() {
  const products = [
    {
      id: 1,
      title: "Rabbit Rearing Training Program",
      description: "Comprehensive training for farmers on ethical rabbit rearing practices",
      price: "From $499",
      features: ["4-week intensive course", "Farm certification", "Ongoing support", "Resource materials"],
      image: "/api/placeholder/300/200",
      cta: "View Training Details",
      tag: "Education"
    },
    {
      id: 2,
      title: "Premium Rabbit Meat Package",
      description: "Farm-fresh, ethically sourced rabbit meat delivered to your door",
      price: "From $29.99",
      features: ["Various cuts available", "Vacuum-sealed packaging", "Next-day delivery", "Recipe guide included"],
      image: "/api/placeholder/300/200",
      cta: "Explore Meat Options",
      tag: "Product"
    },
    {
      id: 3,
      title: "Transportation & Logistics Solution",
      description: "Complete cold-chain transportation for rabbit products",
      price: "Custom Quote",
      features: ["Temperature-controlled vehicles", "Nationwide coverage", "Real-time tracking", "Delivery scheduling"],
      image: "/api/placeholder/300/200",
      cta: "Request Quote",
      tag: "Service"
    },
    {
      id: 4,
      title: "Butchery & Processing Service",
      description: "Professional processing and packaging services",
      price: "From $199",
      features: ["EU-standard facilities", "Custom cutting options", "Vacuum packaging", "Labeling services"],
      image: "/api/placeholder/300/200",
      cta: "Learn More",
      tag: "Service"
    },
    {
      id: 5,
      title: "Starter Farm Setup Package",
      description: "Complete setup for new rabbit farming operations",
      price: "From $2,499",
      features: ["Habitat design", "Initial breeding stock", "Equipment package", "Training sessions"],
      image: "/api/placeholder/300/200",
      cta: "View Package Details",
      tag: "Solution"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-amber-100">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Our Products & Services
          </h2>
          <p className="text-lg text-amber-700 max-w-3xl mx-auto">
            Explore our comprehensive range of rabbit farming solutions, from training programs to premium products.
          </p>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
        </div>

        {/* Products Horizontal Scroll Container */}
        <div className="relative">
          <div className="flex overflow-x-auto pb-8 scrollbar-thin scrollbar-thumb-amber-400 scrollbar-track-amber-100 scrollbar-thumb-rounded-full space-x-6 py-4">
            {products.map((product) => (
              <div key={product.id} className="flex-shrink-0 w-80 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Product Image */}
                <div className="h-48 bg-gradient-to-r from-amber-400 to-amber-600 relative overflow-hidden">
                  <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {product.tag}
                  </div>
                  <div className="h-full flex items-center justify-center text-white text-5xl">
                    {product.tag === "Education" && "📚"}
                    {product.tag === "Product" && "🍖"}
                    {product.tag === "Service" && "🚚"}
                    {product.tag === "Solution" && "🏡"}
                  </div>
                </div>
                
                {/* Product Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-amber-900 mb-2">{product.title}</h3>
                  <p className="text-amber-700 mb-4 text-sm">{product.description}</p>
                  
                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-amber-600">{product.price}</span>
                  </div>
                  
                  {/* Features */}
                  <ul className="mb-6 space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-amber-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA Button */}
                  <Link 
                    href={`/products/${product.id}`}
                    className="block w-full bg-amber-500 hover:bg-amber-600 text-white text-center font-medium py-3 px-4 rounded-lg transition-colors duration-300"
                  >
                    {product.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link 
            href="/products" 
            className="inline-flex items-center text-amber-700 hover:text-amber-900 font-semibold transition-colors duration-300"
          >
            View All Products & Services
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}