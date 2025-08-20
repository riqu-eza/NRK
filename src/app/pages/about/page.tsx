

import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Back Button */}
        <Link 
          href="/" 
          className="inline-flex items-center mb-10 text-amber-700 hover:text-amber-900 transition-colors duration-300"
        >
          <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-amber-900 mb-6">About Me</h1>
          <div className="w-24 h-2 bg-amber-500 mx-auto"></div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none prose-amber">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-amber-800 mb-6">My Journey</h2>
              <p className="text-amber-700 mb-6">
                My journey in web development began over 5 years ago when I discovered 
                my passion for creating digital experiences. Since then, I&#39;ve worked with 
                various startups and established companies, helping them bring their 
                visions to life through clean, efficient code and thoughtful design.
              </p>
              <p className="text-amber-700 mb-6">
                I believe that great websites are a combination of technical excellence 
                and artistic vision. This philosophy drives me to continuously learn 
                new technologies while maintaining a strong focus on user experience 
                and aesthetic quality.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-amber-800 mb-6">My Approach</h2>
              <p className="text-amber-700 mb-6">
                I take a holistic approach to web development, considering not just 
                how a website looks, but how it performs, how accessible it is, and 
                how it serves both the business goals and user needs.
              </p>
              <p className="text-amber-700 mb-6">
                Collaboration is at the heart of my process. I work closely with 
                clients to understand their vision and translate it into digital 
                experiences that exceed expectations.
              </p>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-amber-800 mb-6">Skills & Expertise</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                'React', 'Next.js', 'TypeScript', 'Tailwind CSS',
                'UI/UX Design', 'Responsive Design', 'Web Performance', 'API Integration'
              ].map((skill) => (
                <div key={skill} className="bg-amber-200 text-amber-900 py-3 px-4 rounded-lg text-center font-medium shadow-md">
                  {skill}
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link 
              href="/pages/contact" 
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-amber-900 bg-amber-500 hover:bg-amber-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}