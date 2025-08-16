/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useTransform, useScroll, MotionValue } from 'framer-motion';

const SubHeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Enhanced image array with depth and scale factors
  const images = [
    { 
      id: 1, 
      src: '/rabbit-habitat.avif', 
      alt: 'Rabbit Habitat',
      depth: 0.8,
      scale: 1.2
    },
    { 
      id: 2, 
      src: '/rabbit-eco-system.jpg', 
      alt: 'Rabbit Ecosystem',
      depth: 0.6,
      scale: 1.1
    },
    { 
      id: 3, 
      src: '/rabbit-food-chain.webp', 
      alt: 'Rabbit Food Chain',
      depth: 0.7,
      scale: 1.15
    },
    { 
      id: 4, 
      src: '/rabbit-breeding.webp', 
      alt: 'Rabbit Breeding',
      depth: 0.9,
      scale: 1.25
    },
    { 
      id: 5, 
      src: '/rabbit-eco-system.jpg', 
      alt: 'Rabbit Products',
      depth: 0.5,
      scale: 1.05
    },
  ];

  // 3D transform calculations
  const calculate3DTransform = (index: number, position: number) => {
    const distance = position - currentIndex;
    const direction = Math.sign(distance);
    const absDistance = Math.abs(distance);
    
    return {
      x: `${distance * 30}%`,
      y: `${-absDistance * 5}%`,
      z: `${-absDistance * 100}px`,
      rotateY: `${distance * 15}deg`,
      scale: 1 - absDistance * 0.2,
      opacity: 1 - absDistance * 0.3,
      zIndex: images.length - absDistance,
      filter: `brightness(${1 - absDistance * 0.2})`
    };
  };

  // Auto-rotate carousel with smooth transitions
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Parallax effect setup
  const { scrollYProgress } = useScroll({
    target: carouselRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section 
      ref={carouselRef}
      className="relative w-full h-screen max-h-[800px]  min-h-[600px] mx-auto overflow-hidden"
    >
      {/* Floating background elements */}
      <div className="absolute inset-0  overflow-hidden">
        <motion.div 
          className="absolute -left-20 -top-20 w-80 h-80 rounded-full   blur-3xl"
          animate={{
            x: [0, 20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -right-20 bottom-0 w-96 h-96 rounded-full  blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* 3D Carousel Container */}
      <div className="relative w-full h-full border-amber-600 perspective-1000">
        <AnimatePresence mode="wait">
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Floating images with 3D transforms */}
            {images.map((image, index) => {
              const position = (index - currentIndex + images.length) % images.length;
              const transform = calculate3DTransform(index, position);
              
              return (
                <motion.div
                  key={image.id}
                  className={`absolute w-3/4 h-3/4`}
                  style={{
                    x: transform.x,
                    y: transform.y,
                    z: transform.z,
                    rotateY: transform.rotateY,
                    scale: transform.scale,
                    opacity: transform.opacity,
                    zIndex: transform.zIndex,
                    filter: transform.filter,
                  }}
                  whileHover={{ scale: transform.scale * 1.05 }}
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover rounded-3xl shadow-2xl"
                    style={{
                      objectPosition: 'center',
                    }}
                    sizes="(max-width: 768px) 90vw, 50vw"
                    priority={index === currentIndex}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating navigation indicators */}
      <div className="absolute bottom-12 left-0 border-amber-600 right-0 flex justify-center z-50 space-x-3">
        {images.map((_, idx) => (
          <motion.button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all ${currentIndex === idx ? 'bg-amber-600' : 'bg-amber-300/50'}`}
            whileHover={{ scale: 1.5 }}
            animate={{
              width: currentIndex === idx ? 24 : 12,
              opacity: currentIndex === idx ? 1 : 0.7
            }}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Floating title */}
      {/* <motion.div 
        className="absolute top-1/4 left-0 right-0 text-center z-40"
        style={{ y }}
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-amber-900 mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Rabbit Ecosystem Journey
        </motion.h2>
        <motion.p 
          className="text-lg md:text-xl text-amber-800 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Explore the sustainable cycle from habitat to harvest
        </motion.p>
      </motion.div> */}
    </section>
  );
};

export default SubHeroCarousel;