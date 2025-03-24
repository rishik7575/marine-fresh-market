
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  return (
    <header className="fixed top-0 left-0 w-full z-40 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="text-xl font-semibold text-amber-700">SweetHoney</Link>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link 
                  to="/" 
                  className={`relative py-2 ${location.pathname === '/' ? 'text-amber-700 font-medium after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-amber-700' : 'text-gray-600 hover:text-amber-700'} transition-colors`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/beekeeping" 
                  className={`relative py-2 ${location.pathname === '/beekeeping' ? 'text-amber-700 font-medium after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-amber-700' : 'text-gray-600 hover:text-amber-700'} transition-colors`}
                >
                  Beekeeping
                </Link>
              </li>
              <li>
                <Link 
                  to="/honey-products" 
                  className={`relative py-2 ${location.pathname === '/honey-products' ? 'text-amber-700 font-medium after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-amber-700' : 'text-gray-600 hover:text-amber-700'} transition-colors`}
                >
                  Honey Products
                </Link>
              </li>
              <li>
                <Link 
                  to="/bee-supplies" 
                  className={`relative py-2 ${location.pathname === '/bee-supplies' ? 'text-amber-700 font-medium after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-amber-700' : 'text-gray-600 hover:text-amber-700'} transition-colors`}
                >
                  Bee Supplies
                </Link>
              </li>
            </ul>
          </nav>
          
          <div className="flex items-center">
            <button className="p-2 text-gray-600 hover:text-amber-700 transition-colors md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12"/>
                <line x1="4" x2="20" y1="6" y2="6"/>
                <line x1="4" x2="20" y1="18" y2="18"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
