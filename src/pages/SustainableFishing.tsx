
import React from "react";
import { Link } from "react-router-dom";

const SustainableFishing = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-40 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link to="/" className="text-xl font-semibold text-gray-900">MarineFresh</Link>
            
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                <li><Link to="/" className="relative py-2 text-gray-600 hover:text-gray-900 transition-colors">Home</Link></li>
                <li>
                  <Link to="/sustainable-fishing" className="relative py-2 text-gray-900 font-medium transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gray-900">
                    Sustainable Fishing
                  </Link>
                </li>
                <li><Link to="/seafood" className="relative py-2 text-gray-600 hover:text-gray-900 transition-colors">Seafood</Link></li>
                <li><Link to="/marine-supplies" className="relative py-2 text-gray-600 hover:text-gray-900 transition-colors">Marine Supplies</Link></li>
              </ul>
            </nav>
            
            <div className="flex items-center">
              <Link to="/" className="p-2 text-gray-600 hover:text-gray-900 transition-colors md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" x2="20" y1="12" y2="12"/>
                  <line x1="4" x2="20" y1="6" y2="6"/>
                  <line x1="4" x2="20" y1="18" y2="18"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center mt-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1531523668299-e20047c89111?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Sustainable fishing" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-lg text-white">
            <h1 className="text-3xl md:text-5xl font-semibold mb-4">
              Sustainable Fishing
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Learn about our commitment to sustainable fishing practices and ocean conservation.
            </p>
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6">Our Commitment to Sustainability</h2>
            
            <p className="text-gray-700 mb-6">
              At MarineFresh, we believe that responsible fishing practices are essential for the long-term health of our oceans. We are committed to sourcing seafood only from fisheries that use sustainable methods and maintain healthy fish populations.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-8 border border-blue-100">
              <h3 className="text-xl font-medium text-blue-900 mb-3">Our Sustainable Practices</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>We only partner with fisheries certified by the Marine Stewardship Council (MSC) and other respected organizations.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Our suppliers follow strict quotas to prevent overfishing and allow populations to regenerate.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>We use selective fishing methods that minimize bycatch and protect endangered species.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>We regularly donate to marine conservation organizations and participate in ocean cleanup initiatives.</span>
                </li>
              </ul>
            </div>
            
            <h3 className="text-2xl font-semibold mb-4">Supporting Local Fishermen</h3>
            <p className="text-gray-700 mb-6">
              We believe in the importance of supporting local fishing communities. By purchasing from local fishermen who follow sustainable practices, we help maintain their livelihoods while ensuring the health of marine ecosystems.
            </p>
            
            <div className="aspect-w-16 aspect-h-9 mb-8 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1545566239-0d774a5a3deb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Local fishermen" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <h3 className="text-2xl font-semibold mb-4">Ocean Conservation Efforts</h3>
            <p className="text-gray-700 mb-6">
              Beyond sustainable fishing practices, we are actively involved in ocean conservation efforts. We regularly organize beach cleanups, support marine research, and educate our community about the importance of protecting our oceans.
            </p>
            
            <div className="bg-gray-100 p-6 rounded-lg">
              <h4 className="text-xl font-medium mb-4">Join Our Conservation Initiatives</h4>
              <p className="text-gray-700 mb-4">
                We're always looking for volunteers to join our conservation efforts. If you're passionate about protecting our oceans, please get in touch to learn about upcoming events and initiatives.
              </p>
              <Link to="/" className="inline-block px-6 py-3 bg-gray-900 text-white rounded-lg transition-all duration-300 hover:bg-gray-800 hover:scale-105 active:scale-95">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SustainableFishing;
