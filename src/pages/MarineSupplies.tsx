
import React from "react";
import { Link } from "react-router-dom";

const BeeSupplies = () => {
  const supplies = [
    {
      id: 'bee-smoker',
      name: 'Beekeeping Smoker',
      price: 35.99,
      image: 'https://images.unsplash.com/photo-1591878840765-976ad1a421ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Professional-grade stainless steel bee smoker with heat shield. Essential tool for any beekeeper.'
    },
    {
      id: 'beekeeper-suit',
      name: 'Full Beekeeper Suit',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Complete beekeeper suit with veil, gloves, and durable cotton-polyester blend fabric for protection and comfort.'
    },
    {
      id: 'entrance-feeder',
      name: 'Entrance Bee Feeder',
      price: 15.99,
      image: 'https://images.unsplash.com/photo-1592119747782-c3c6baccd218?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Convenient entrance feeder for providing sugar syrup to bee colonies during periods of nectar scarcity.'
    },
    {
      id: 'hive-tool',
      name: 'Stainless Steel Hive Tool',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1589923188651-268a961a90bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Essential multi-purpose tool for hive inspection and maintenance. Made of durable stainless steel.'
    },
    {
      id: 'frame-grip',
      name: 'Frame Grip Tool',
      price: 18.99,
      image: 'https://images.unsplash.com/photo-1598335624134-981c084f3516?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Makes frame removal easy and safe. Grips frames securely without damaging the comb or disturbing bees.'
    },
    {
      id: 'honey-extractor',
      name: 'Manual Honey Extractor',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1600520611027-4735018b9993?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Two-frame stainless steel honey extractor with hand crank. Perfect for small to medium apiaries.'
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-40 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link to="/" className="text-xl font-semibold text-amber-700">SweetHoney</Link>
            
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                <li><Link to="/" className="relative py-2 text-gray-600 hover:text-amber-700 transition-colors">Home</Link></li>
                <li><Link to="/beekeeping" className="relative py-2 text-gray-600 hover:text-amber-700 transition-colors">Beekeeping</Link></li>
                <li><Link to="/honey-products" className="relative py-2 text-gray-600 hover:text-amber-700 transition-colors">Honey Products</Link></li>
                <li>
                  <Link to="/bee-supplies" className="relative py-2 text-amber-700 font-medium transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-amber-700">
                    Bee Supplies
                  </Link>
                </li>
              </ul>
            </nav>
            
            <div className="flex items-center">
              <Link to="/" className="p-2 text-gray-600 hover:text-amber-700 transition-colors md:hidden">
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
            src="https://images.unsplash.com/photo-1551838326-c9d989837b1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Beekeeping equipment" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-lg text-white">
            <h1 className="text-3xl md:text-5xl font-semibold mb-4">
              Beekeeping Supplies
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Quality equipment and accessories for professional and hobbyist beekeepers.
            </p>
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-8">Beekeeping Equipment & Supplies</h2>
          
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
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-amber-700 text-white rounded-lg hover:bg-amber-600 transition-all duration-300 active:scale-[0.98]"
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
      <section className="py-12 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-8 text-center">Equipment Categories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-3 text-amber-800">Beekeeping Tools</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Smokers & Fuel</li>
                <li>• Hive Tools</li>
                <li>• Frame Grips</li>
                <li>• Bee Brushes</li>
                <li>• Queen Catchers</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-3 text-amber-800">Protective Gear</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Bee Suits</li>
                <li>• Veils & Helmets</li>
                <li>• Gloves</li>
                <li>• Jackets</li>
                <li>• Boots</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-3 text-amber-800">Honey Processing</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Honey Extractors</li>
                <li>• Uncapping Tools</li>
                <li>• Strainers & Filters</li>
                <li>• Bottling Equipment</li>
                <li>• Storage Containers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BeeSupplies;
