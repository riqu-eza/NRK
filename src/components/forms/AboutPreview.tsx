import Link from 'next/link';

export default function AboutPreview() {
  return (
    <section id="about-preview" className="py-20 bg-gradient-to-b from-amber-50 to-amber-100">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Text Content */}
          <div className="md:w-2/3">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              About Me
            </h2>
            <p className="text-lg md:text-xl text-amber-800 leading-relaxed mb-8">
              I&#39;m a passionate developer and designer with expertise in creating 
              modern, responsive web applications. With over 5 years of experience 
              in the industry, I specialize in front-end development using React, 
              Next.js, and Tailwind CSS to build intuitive user experiences that 
              combine functionality with aesthetic appeal.
            </p>
            <Link 
              href="/pages/about" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-amber-900 bg-amber-500 hover:bg-amber-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Learn More
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
          
          {/* Visual Element */}
          <div className="md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 bg-amber-300 rounded-full flex items-center justify-center overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 opacity-70"></div>
              <div className="relative z-10 text-amber-900 text-center p-6">
                <span className="text-6xl font-bold">5+</span>
                <p className="text-lg font-semibold mt-2">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}