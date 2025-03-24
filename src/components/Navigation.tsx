
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import CartButton from "./CartButton";

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
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
          
          <div className="flex items-center gap-2">
            <CartButton />
            
            <button 
              className="p-2 text-gray-600 hover:text-amber-700 transition-colors md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3">
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/"
                  className={`block py-2 ${location.pathname === '/' ? 'text-amber-700 font-medium' : 'text-gray-600'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/beekeeping"
                  className={`block py-2 ${location.pathname === '/beekeeping' ? 'text-amber-700 font-medium' : 'text-gray-600'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Beekeeping
                </Link>
              </li>
              <li>
                <Link 
                  to="/honey-products"
                  className={`block py-2 ${location.pathname === '/honey-products' ? 'text-amber-700 font-medium' : 'text-gray-600'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Honey Products
                </Link>
              </li>
              <li>
                <Link 
                  to="/bee-supplies"
                  className={`block py-2 ${location.pathname === '/bee-supplies' ? 'text-amber-700 font-medium' : 'text-gray-600'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Bee Supplies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
