
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8 text-center">
        Oops! We couldn't find the page you're looking for.
      </p>
      <Link 
        to="/" 
        className="px-6 py-3 bg-gray-900 text-white rounded-lg transition-all duration-300 hover:bg-gray-800 hover:scale-105 active:scale-95"
      >
        Return to Home
      </Link>
      
      <div className="mt-16 w-full max-w-md">
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        
        <div className="mt-8 text-center">
          <h2 className="text-gray-800 text-lg font-medium mb-4">You might be interested in:</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/seafood" className="px-4 py-2 bg-gray-100 rounded-md text-gray-700 transition-colors hover:bg-gray-200">
              Fresh Seafood
            </Link>
            <Link to="/sustainable-fishing" className="px-4 py-2 bg-gray-100 rounded-md text-gray-700 transition-colors hover:bg-gray-200">
              Sustainable Fishing
            </Link>
            <Link to="/marine-supplies" className="px-4 py-2 bg-gray-100 rounded-md text-gray-700 transition-colors hover:bg-gray-200">
              Marine Supplies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
