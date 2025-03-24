
import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Index = () => {
  const featuredProducts = [
    {
      id: 'raw-honey',
      name: 'Raw Wildflower Honey',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Honey',
      description: 'Pure, unfiltered wildflower honey harvested from our own beehives.'
    },
    {
      id: 'bee-smoker',
      name: 'Beekeeping Smoker',
      price: 35.99,
      image: 'https://images.unsplash.com/photo-1591878840765-976ad1a421ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Equipment',
      description: 'Professional-grade stainless steel bee smoker with heat shield.'
    },
    {
      id: 'comb-honey',
      name: 'Raw Comb Honey',
      price: 16.99,
      image: 'https://images.unsplash.com/photo-1580655653885-65763b2597d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Honey',
      description: 'Pure honeycomb sections direct from our hives.'
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center mt-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1631552814942-6eb178b8b5b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Bee farm" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl text-white">
            <h1 className="text-4xl md:text-6xl font-semibold mb-4">
              Fresh Honey & Bee Supplies
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-6">
              Explore our selection of premium honey products and beekeeping supplies from our sustainable, family-owned bee farm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/honey-products" 
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium transition-colors text-center"
              >
                Shop Honey
              </Link>
              <Link 
                to="/beekeeping" 
                className="bg-transparent border border-white hover:bg-white/10 text-white px-6 py-3 rounded-lg font-medium transition-colors text-center"
              >
                Learn Beekeeping
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center text-amber-800">Featured Products</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <div 
                key={product.id} 
                className="overflow-hidden rounded-xl bg-white transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg shadow-md group"
              >
                <div className="relative overflow-hidden rounded-t-xl pt-[75%]">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-amber-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                    {product.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-medium">{product.name}</h3>
                    <span className="font-semibold">${product.price.toFixed(2)}</span>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{product.description}</p>
                  
                  <button 
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-amber-700 text-white rounded-lg hover:bg-amber-600 transition-all duration-300 active:scale-[0.98]"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
                      <path d="M3 6h18"/>
                      <path d="M16 10a4 4 0 0 1-8 0"/>
                    </svg>
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Link 
              to="/honey-products" 
              className="inline-block bg-amber-700 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1587327903256-2c89a6c621de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Beekeeper with beehives" 
                className="rounded-xl shadow-md"
              />
            </div>
            
            <div>
              <h2 className="text-3xl font-semibold mb-6 text-amber-800">Our Sustainable Beekeeping Practices</h2>
              <p className="text-lg text-gray-700 mb-6">
                At SweetHoney, we believe in responsible beekeeping practices that support healthy bee populations and produce the highest quality honey. Our family-owned operation has been practicing sustainable beekeeping for over three generations.
              </p>
              
              <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
                <h3 className="text-xl font-medium mb-4 text-amber-800">Our Commitments</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">✓</span>
                    <span>We never use harmful pesticides or chemicals near our hives</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">✓</span>
                    <span>We leave adequate honey for bees to sustain themselves through winter</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">✓</span>
                    <span>We provide diverse native plant habitats for our bees</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">✓</span>
                    <span>We practice regular hive maintenance and health monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">✓</span>
                    <span>We support local pollinator conservation efforts</span>
                  </li>
                </ul>
              </div>
              
              <Link 
                to="/beekeeping" 
                className="inline-block bg-amber-700 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Learn More About Our Practices
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Category Blocks */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center text-amber-800">Explore Our Categories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link 
              to="/honey-products" 
              className="relative rounded-xl overflow-hidden h-80 group"
            >
              <img 
                src="https://images.unsplash.com/photo-1558642891-54be180ea339?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Honey Products" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                <h3 className="text-2xl font-semibold mb-2">Honey Products</h3>
                <p className="text-center mb-4">Discover our variety of pure, raw honey and honey-based products</p>
                <span className="px-4 py-2 border border-white rounded-lg group-hover:bg-white group-hover:text-amber-800 transition-colors">
                  Explore
                </span>
              </div>
            </Link>
            
            <Link 
              to="/beekeeping" 
              className="relative rounded-xl overflow-hidden h-80 group"
            >
              <img 
                src="https://images.unsplash.com/photo-1584633155097-19e7753dba76?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Beekeeping" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                <h3 className="text-2xl font-semibold mb-2">Beekeeping</h3>
                <p className="text-center mb-4">Learn the art of beekeeping with our guides and resources</p>
                <span className="px-4 py-2 border border-white rounded-lg group-hover:bg-white group-hover:text-amber-800 transition-colors">
                  Learn More
                </span>
              </div>
            </Link>
            
            <Link 
              to="/bee-supplies" 
              className="relative rounded-xl overflow-hidden h-80 group"
            >
              <img 
                src="https://images.unsplash.com/photo-1551838326-c9d989837b1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Bee Supplies" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                <h3 className="text-2xl font-semibold mb-2">Bee Supplies</h3>
                <p className="text-center mb-4">Quality equipment and tools for hobbyist and professional beekeepers</p>
                <span className="px-4 py-2 border border-white rounded-lg group-hover:bg-white group-hover:text-amber-800 transition-colors">
                  Shop Now
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Join Our Community</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for beekeeping tips, recipes, seasonal updates, and exclusive offers.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none"
              required
            />
            <button 
              type="submit"
              className="bg-amber-900 hover:bg-amber-800 px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
