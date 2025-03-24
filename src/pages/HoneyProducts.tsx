
import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const HoneyProducts = () => {
  const products = [
    {
      id: 'raw-wildflower',
      name: 'Raw Wildflower Honey',
      price: 12.99,
      size: '16 oz',
      image: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Pure, unfiltered wildflower honey harvested from our own beehives. Rich in natural enzymes and antioxidants.'
    },
    {
      id: 'clover-honey',
      name: 'Clover Honey',
      price: 10.99,
      size: '16 oz',
      image: 'https://images.unsplash.com/photo-1596432196143-8c61bd8a69b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Mild, sweet clover honey with a light amber color. Perfect for tea, baking, or enjoying straight from the jar.'
    },
    {
      id: 'creamed-honey',
      name: 'Creamed Honey',
      price: 14.99,
      size: '12 oz',
      image: 'https://images.unsplash.com/photo-1627485937980-221fdaa7e1d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Smooth, creamy honey with a spreadable consistency. Perfect for toast, biscuits, or as a natural sweetener.'
    },
    {
      id: 'comb-honey',
      name: 'Raw Comb Honey',
      price: 16.99,
      size: '8 oz',
      image: 'https://images.unsplash.com/photo-1580655653885-65763b2597d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Pure honeycomb sections direct from our hives. Enjoy the honey and the natural beeswax together.'
    },
    {
      id: 'honey-sticks',
      name: 'Honey Sticks Variety Pack',
      price: 9.99,
      size: '10 sticks',
      image: 'https://images.unsplash.com/photo-1639588473831-dd9d014646ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Convenient honey sticks in assorted flavors. Perfect for lunches, tea on the go, or as a natural energy boost.'
    },
    {
      id: 'propolis-tincture',
      name: 'Propolis Tincture',
      price: 22.99,
      size: '2 oz',
      image: 'https://images.unsplash.com/photo-1572179026912-3d66e44a0791?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Natural propolis extract with powerful antimicrobial properties to support immune health.'
    }
  ];

  const healthBenefits = [
    {
      id: 'antioxidants',
      title: 'Rich in Antioxidants',
      description: 'Raw honey contains a range of plant chemicals that act as antioxidants, helping to protect your body from cell damage.'
    },
    {
      id: 'antibacterial',
      title: 'Natural Antibacterial Properties',
      description: 'Honey has natural antibacterial and antimicrobial properties, making it effective against certain bacteria and pathogens.'
    },
    {
      id: 'sore-throat',
      title: 'Soothes Sore Throats',
      description: 'The smooth texture and antibacterial properties make honey an effective natural remedy for soothing sore throats and coughs.'
    },
    {
      id: 'wound-healing',
      title: 'Promotes Wound Healing',
      description: 'Applied topically, honey can help wounds and burns heal faster due to its anti-inflammatory and antibacterial properties.'
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center mt-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558642891-54be180ea339?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Honey jars" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl text-white">
            <h1 className="text-3xl md:text-5xl font-semibold mb-4">
              Pure & Natural Honey Products
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-6">
              Discover our selection of raw, unfiltered honey and bee-derived wellness products.
            </p>
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Shop Now
            </button>
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center text-amber-800">Our Honey Collection</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(product => (
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
                    {product.size}
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
        </div>
      </section>
      
      {/* Health Benefits Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center text-amber-800">Health Benefits of Honey</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {healthBenefits.map(benefit => (
              <div key={benefit.id} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-medium mb-3 text-amber-800">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-6 bg-white rounded-xl shadow-sm">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <img 
                  src="https://images.unsplash.com/photo-1601063458289-77247ba485ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Jar of honey with honeycomb" 
                  className="rounded-lg"
                />
              </div>
              <div className="md:w-2/3 md:pl-8">
                <h3 className="text-xl font-medium mb-3 text-amber-800">Why Raw Honey?</h3>
                <p className="text-gray-700 mb-4">
                  Unlike commercial honey, our raw honey is never heated above natural hive temperatures or ultra-filtered. This preserves all the beneficial enzymes, pollen, and natural properties that make honey a true superfood.
                </p>
                <p className="text-gray-700">
                  Each jar captures the unique flavor profile of the flowers our bees visit, creating a taste experience that connects you directly to the local ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Recipes Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-6 text-center text-amber-800">Delicious Honey Recipes</h2>
          <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
            Get inspired with these simple yet delicious ways to incorporate honey into your daily meals.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-xl overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1607920592519-bab2a80efd43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Honey glazed salmon" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">Honey Glazed Salmon</h3>
                <p className="text-gray-700 mb-4">A perfect blend of sweet and savory, this honey glazed salmon is a quick and nutritious dinner option.</p>
                <button className="text-amber-700 font-medium hover:underline">View Recipe</button>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1610725667280-ded87b9a5fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Honey yogurt parfait" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">Honey Yogurt Parfait</h3>
                <p className="text-gray-700 mb-4">Start your day with this simple yet delicious breakfast featuring layers of Greek yogurt, honey, and fresh fruits.</p>
                <button className="text-amber-700 font-medium hover:underline">View Recipe</button>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1614173188975-67bf229ab322?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Honey lavender cookies" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">Honey Lavender Cookies</h3>
                <p className="text-gray-700 mb-4">These delicate cookies feature the subtle floral notes of lavender paired perfectly with sweet honey.</p>
                <button className="text-amber-700 font-medium hover:underline">View Recipe</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-amber-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center">What Our Customers Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="text-amber-400">
                  ★★★★★
                </div>
              </div>
              <p className="mb-4 italic">"The wildflower honey is absolutely delicious - you can really taste the difference compared to store-bought. It's now a staple in our home."</p>
              <p className="font-medium">- Sarah M.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="text-amber-400">
                  ★★★★★
                </div>
              </div>
              <p className="mb-4 italic">"I've been using the propolis tincture for immune support and have noticed a real difference. Plus the customer service is exceptional!"</p>
              <p className="font-medium">- Michael D.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="text-amber-400">
                  ★★★★★
                </div>
              </div>
              <p className="mb-4 italic">"The creamed honey is simply perfect - smooth, spreadable, and not too sweet. My kids prefer it over any other sweetener now."</p>
              <p className="font-medium">- Jennifer K.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HoneyProducts;
