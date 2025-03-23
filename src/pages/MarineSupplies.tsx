
import React from "react";
import { Link } from "react-router-dom";

const MarineSupplies = () => {
  const supplies = [
    {
      id: 'fishing-nets',
      name: 'Professional Fishing Nets',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1516684369235-2f76b889e76f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'High-quality fishing nets designed for professional use, made from durable materials.'
    },
    {
      id: 'fishing-rods',
      name: 'Carbon Fiber Fishing Rods',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1595263231867-0368e6092e56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Lightweight yet strong carbon fiber fishing rods, perfect for both beginners and professionals.'
    },
    {
      id: 'tackle-box',
      name: 'Complete Tackle Box Set',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1573998610872-9b8b4374ca0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Comprehensive tackle box with a variety of hooks, lures, and accessories for all fishing needs.'
    },
    {
      id: 'waders',
      name: 'Neoprene Fishing Waders',
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1528629297340-d1d466945dc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Waterproof and insulated waders for comfortable fishing in various water conditions.'
    },
    {
      id: 'fish-finder',
      name: 'Portable Fish Finder',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Advanced sonar technology helps locate fish underwater with accurate depth and temperature readings.'
    },
    {
      id: 'cooler',
      name: 'Marine Grade Cooler',
      price: 119.99,
      image: 'https://images.unsplash.com/photo-1628185028480-46316d4b67d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Heavy-duty cooler designed to keep your catch fresh for extended periods in marine environments.'
    }
  ];

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
                <li><Link to="/sustainable-fishing" className="relative py-2 text-gray-600 hover:text-gray-900 transition-colors">Sustainable Fishing</Link></li>
                <li><Link to="/seafood" className="relative py-2 text-gray-600 hover:text-gray-900 transition-colors">Seafood</Link></li>
                <li>
                  <Link to="/marine-supplies" className="relative py-2 text-gray-900 font-medium transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gray-900">
                    Marine Supplies
                  </Link>
                </li>
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
            src="https://images.unsplash.com/photo-1617432078102-e7dc0ee25929?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Fishing equipment" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-lg text-white">
            <h1 className="text-3xl md:text-5xl font-semibold mb-4">
              Marine Supplies
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Quality equipment and accessories for professional and recreational fishing.
            </p>
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-8">Fishing Equipment & Supplies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supplies.map(item => (
              <div 
                key={item.id} 
                className="overflow-hidden rounded-xl bg-white transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg shadow-md group"
              >
                <div className="relative overflow-hidden rounded-t-xl pt-[75%]">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-medium truncate">{item.name}</h3>
                    <span className="font-semibold">${item.price.toFixed(2)}</span>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{item.description}</p>
                  
                  <button 
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 active:scale-[0.98]"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
                      <path d="M3 6h18"/>
                      <path d="M16 10a4 4 0 0 1-8 0"/>
                    </svg>
                    <span>View Details</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Equipment Categories */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-8 text-center">Equipment Categories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-3">Fishing Gear</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Rods & Reels</li>
                <li>• Nets & Traps</li>
                <li>• Lines & Hooks</li>
                <li>• Tackle Boxes</li>
                <li>• Bait & Lures</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-3">Safety Equipment</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Life Jackets</li>
                <li>• Navigation Lights</li>
                <li>• Emergency Flares</li>
                <li>• First Aid Kits</li>
                <li>• Marine Radios</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-3">Processing Tools</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Fillet Knives</li>
                <li>• Scaling Tools</li>
                <li>• Cutting Boards</li>
                <li>• Storage Containers</li>
                <li>• Marine Coolers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarineSupplies;
