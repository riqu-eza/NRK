"use client";

import Link from "next/link";
import SubHeroCarousel from "./SubHeroCaruosel";
// import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative bg-amber-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left half - Space reserved for your carousel or other content */}
          <div className="w-full  md:w-1/2">
          <SubHeroCarousel />
          </div>

          {/* Right half - Hero content */}
          <div className="w-full md:w-1/2 px-6 py-16 md:py-24 lg:py-32">
            <div className="max-w-lg mx-auto md:ml-0">
              <h1 className="text-4xl sm:text-5xl font-bold text-amber-900 leading-tight mb-4">
                Sustainable <span className="text-amber-600">Rabbit</span> Ecosystems
              </h1>
              
              <p className="text-lg text-amber-800 mb-8">
                Revolutionizing rabbit husbandry through ecological balance and innovative farming practices that benefit both animals and environment.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link 
                  href="#" 
                  className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-all text-center"
                >
                  Explore Our Farms
                </Link>
                <Link 
                  href="#" 
                  className="border-2 border-amber-600 text-amber-700 hover:bg-amber-50 font-medium py-3 px-6 rounded-lg shadow-sm transition-all text-center"
                >
                  Learn More
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-amber-700">50+</p>
                  <p className="text-sm text-amber-800">Eco-Farms</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-amber-700">10K+</p>
                  <p className="text-sm text-amber-800">Healthy Rabbits</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-amber-700">100%</p>
                  <p className="text-sm text-amber-800">Sustainable</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="hidden md:block absolute -left-20 top-1/3 w-40 h-40 rounded-full bg-amber-200/30 blur-xl">well</div>
      <div className="hidden md:block absolute right-0 bottom-0 w-64 h-64 rounded-full bg-amber-300/20 blur-xl">well</div>
    </section>
  );
}