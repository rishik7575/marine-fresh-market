import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  // Products data
  const products = [
    {
      id: 'salmon-fresh',
      name: 'Fresh Salmon',
      price: 18.99,
      image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Fish',
      description: 'Premium wild-caught salmon, rich in omega-3 fatty acids with no preservatives.'
    },
    {
      id: 'tuna-steak',
      name: 'Yellowfin Tuna Steak',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1596046592492-f391684781d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Fish',
      description: 'Premium sushi-grade tuna steaks, perfect for grilling or serving as sashimi.'
    },
    {
      id: 'jumbo-shrimp',
      name: 'Jumbo Shrimp',
      price: 21.99,
      image: 'https://images.unsplash.com/photo-1565280654386-923b2e8db8ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Shellfish',
      description: 'Large, succulent shrimp, perfect for grilling, cocktails, or adding to pasta dishes.'
    },
    {
      id: 'live-lobster',
      name: 'Live Maine Lobster',
      price: 32.99,
      image: 'https://images.unsplash.com/photo-1553659971-f01207815844?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Shellfish',
      description: 'Fresh live Maine lobsters, caught daily and delivered straight to your door.'
    },
    {
      id: 'oyster-dozen',
      name: 'Fresh Oysters',
      price: 26.99,
      image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Shellfish',
      description: 'Fresh caught oysters, perfect for serving raw on the half shell. Dozen pack.'
    },
    {
      id: 'seaweed-salad',
      name: 'Seaweed Salad',
      price: 8.99,
      image: 'https://images.unsplash.com/photo-1561895108-625c6de09faf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Specialty',
      description: 'Traditional Japanese seaweed salad, seasoned with sesame oil and spices.'
    }
  ];

  // State management
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState('All');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");
  const [showToast, setShowToast] = useState(false);

  const cartPanelRef = useRef(null);
  const toastRef = useRef(null);

  // Filter products by category
  const filteredProducts = category === 'All' 
    ? products 
    : products.filter(product => product.category === category);

  // Calculate cart totals
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  // Handle category filter change
  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  // Cart functions
  const addToCart = (productId) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    setCart(prevCart => {
      // Check if product already in cart
      const existingItem = prevCart.find(item => item.product.id === productId);
      
      if (existingItem) {
        // Increase quantity if already in cart
        return prevCart.map(item => 
          item.product.id === productId 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        // Add new item to cart
        return [...prevCart, { product, quantity: 1 }];
      }
    });
    
    displayToast(`Added ${product.name} to cart`);
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.product.id !== productId));
  };

  const increaseQuantity = (productId) => {
    setCart(prevCart => 
      prevCart.map(item => 
        item.product.id === productId 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCart(prevCart => {
      const item = prevCart.find(item => item.product.id === productId);
      
      if (item && item.quantity > 1) {
        // Decrease quantity
        return prevCart.map(item => 
          item.product.id === productId 
            ? { ...item, quantity: item.quantity - 1 } 
            : item
        );
      } else {
        // Remove item if quantity would become 0
        return prevCart.filter(item => item.product.id !== productId);
      }
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      displayToast('Your cart is empty!', 'error');
      return;
    }
    
    displayToast('Checkout completed! Thank you for your purchase.', 'success');
    clearCart();
    setIsCartOpen(false);
  };

  // Toast notification
  const displayToast = (message, type = 'success') => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  // Close cart when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartPanelRef.current && !cartPanelRef.current.contains(event.target) && isCartOpen) {
        setIsCartOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCartOpen]);

  // Handle body scroll when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isCartOpen]);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-40 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link to="/" className="text-xl font-semibold text-gray-900">MarineFresh</Link>
            
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                <li>
                  <Link to="/" className="relative py-2 text-gray-900 font-medium transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gray-900">
                    Home
                  </Link>
                </li>
                <li><Link to="/sustainable-fishing" className="relative py-2 text-gray-600 hover:text-gray-900 transition-colors">Sustainable Fishing</Link></li>
                <li>
                  <Link to="/seafood" className="relative py-2 text-gray-900 font-medium transition-colors">
                    Seafood
                  </Link>
                </li>
                <li><Link to="/marine-supplies" className="relative py-2 text-gray-600 hover:text-gray-900 transition-colors">Marine Supplies</Link></li>
              </ul>
            </nav>
            
            <div className="flex items-center">
              <button 
                className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors mr-2"
                onClick={() => setIsCartOpen(true)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
                  <path d="M3 6h18"/>
                  <path d="M16 10a4 4 0 0 1-8 0"/>
                </svg>
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-black rounded-full">
                    {itemCount}
                  </span>
                )}
              </button>
              
              <button 
                className="p-2 text-gray-600 hover:text-gray-900 transition-colors md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" x2="20" y1="12" y2="12"/>
                  <line x1="4" x2="20" y1="6" y2="6"/>
                  <line x1="4" x2="20" y1="18" y2="18"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-2 px-4">
            <ul className="space-y-3">
              <li><Link to="/" className="block py-2 text-gray-900 font-medium">Home</Link></li>
              <li><Link to="/sustainable-fishing" className="block py-2 text-gray-600">Sustainable Fishing</Link></li>
              <li><Link to="/seafood" className="block py-2 text-gray-600">Seafood</Link></li>
              <li><Link to="/marine-supplies" className="block py-2 text-gray-600">Marine Supplies</Link></li>
            </ul>
          </div>
        )}
      </header>
      
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center mt-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Fresh seafood" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-lg text-white">
            <h1 className="text-3xl md:text-5xl font-semibold mb-4 animate-fade-in">
              Fresh Seafood
            </h1>
            <p className="text-lg md:text-xl opacity-90 animate-fade-in-delay">
              Explore our selection of premium seafood, including fish, shellfish, and specialty marine products.
            </p>
          </div>
        </div>
      </section>
      
      {/* Filter Section */}
      <section className="py-8 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3">
            <button 
              className={`px-4 py-2 rounded-full transition-all ${
                category === 'All' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => handleCategoryChange('All')}
            >
              All
            </button>
            <button 
              className={`px-4 py-2 rounded-full transition-all ${
                category === 'Fish' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => handleCategoryChange('Fish')}
            >
              Fish
            </button>
            <button 
              className={`px-4 py-2 rounded-full transition-all ${
                category === 'Shellfish' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => handleCategoryChange('Shellfish')}
            >
              Shellfish
            </button>
            <button 
              className={`px-4 py-2 rounded-full transition-all ${
                category === 'Specialty' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => handleCategoryChange('Specialty')}
            >
              Specialty
            </button>
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-8">{category} Seafood</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
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
                  <button 
                    className="absolute right-4 bottom-4 z-10 bg-white rounded-full p-2 shadow-sm opacity-0 transform scale-90 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100"
                    onClick={() => addToCart(product.id)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"/>
                      <path d="M12 5v14"/>
                    </svg>
                  </button>
                </div>
                
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-medium truncate">{product.name}</h3>
                    <span className="font-semibold">${product.price.toFixed(2)}</span>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                  
                  <button 
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 active:scale-[0.98]"
                    onClick={() => addToCart(product.id)}
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
      
      {/* Cart Panel */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsCartOpen(false)}
      ></div>
      
      <div 
        ref={cartPanelRef}
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-xl z-50 flex flex-col transform transition-transform duration-300 ease-in-out ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
              <path d="M3 6h18"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            <h2 className="text-xl font-medium">Your Cart</h2>
            <span className="text-sm text-gray-500">({itemCount} items)</span>
          </div>
          
          <button 
            className="p-2 text-gray-500 hover:text-gray-900 transition-colors"
            onClick={() => setIsCartOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18"/>
              <path d="m6 6 12 12"/>
            </svg>
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full py-8 text-center">
              <svg className="text-gray-300 mb-4" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
                <path d="M3 6h18"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
              <h3 className="text-xl font-medium mb-2">Your cart is empty</h3>
              <p className="text-gray-600 mb-6">Add some products to your cart and they will appear here</p>
              <button 
                className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 active:scale-95"
                onClick={() => setIsCartOpen(false)}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map(item => (
                <div key={item.product.id} className="flex py-4 border-b border-gray-200">
                  <div className="h-20 w-20 bg-gray-100 rounded-md overflow-hidden flex-shrink-0 mr-4">
                    <img 
                      src={item.product.image} 
                      alt={item.product.name} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <h4 className="font-medium text-sm sm:text-base truncate">{item.product.name}</h4>
                      <button 
                        className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                        onClick={() => removeFromCart(item.product.id)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 6 6 18"/>
                          <path d="m6 6 12 12"/>
                        </svg>
                      </button>
                    </div>
                    
                    <p className="text-sm text-gray-600 mt-1">${item.product.price.toFixed(2)}</p>
                    
                    <div className="flex items-center mt-2">
                      <button 
                        className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100"
                        onClick={() => decreaseQuantity(item.product.id)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14"/>
                        </svg>
                      </button>
                      
                      <span className="w-10 text-center font-medium text-sm">{item.quantity}</span>
                      
                      <button 
                        className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100"
                        onClick={() => increaseQuantity(item.product.id)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14"/>
                          <path d="M12 5v14"/>
                        </svg>
                      </button>
                      
                      <div className="ml-auto font-medium">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="border-t border-gray-200 p-4">
          {cart.length > 0 && (
            <button 
              className="flex items-center justify-center gap-2 w-full py-2 mb-4 text-gray-600 hover:text-red-600 transition-colors"
              onClick={clearCart}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 6h18"/>
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                <line x1="10" x2="10" y1="11" y2="17"/>
                <line x1="14" x2="14" y1="11" y2="17"/>
              </svg>
              <span>Clear Cart</span>
            </button>
          )}
          
          <div className="flex justify-between text-lg font-semibold mb-4">
            <span>Total:</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          
          <button 
            className="w-full py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            onClick={handleCheckout}
            disabled={cart.length === 0}
          >
            Checkout
          </button>
        </div>
      </div>
      
      {/* Toast Notification */}
      <div 
        ref={toastRef}
        className={`fixed bottom-4 right-4 py-3 px-4 rounded-lg shadow-lg z-100 transition-all duration-300 transform ${
          showToast ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        } ${toastType === 'success' ? 'bg-emerald-500' : 'bg-red-500'} text-white`}
      >
        {toastMessage}
      </div>

      <style>
        {`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        .animate-fade-in-delay {
          animation: fadeIn 0.6s ease-out 0.2s forwards;
          opacity: 0;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        `}
      </style>
    </div>
  );
};

export default Index;

