
import React from "react";
import { X, Plus, Minus, ShoppingCart, Trash } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

const Cart: React.FC = () => {
  const { 
    cart, 
    removeFromCart, 
    increaseQuantity, 
    decreaseQuantity, 
    clearCart, 
    getTotalPrice,
    isCartOpen,
    setIsCartOpen
  } = useCart();
  const { toast } = useToast();

  const handleCheckout = () => {
    toast({
      title: "Order Placed",
      description: "Your order has been successfully placed!",
    });
    clearCart();
    setIsCartOpen(false);
  };

  return (
    <>
      {/* Cart Overlay */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity ${
          isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Cart Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-lg transform transition-transform ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            <h2 className="font-medium">Your Cart</h2>
            <span className="text-sm text-gray-500">({cart.length} items)</span>
          </div>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center p-4">
              <ShoppingCart className="h-16 w-16 text-gray-300 mb-4" />
              <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
              <p className="text-gray-500 mb-6">Add some products to your cart and they will appear here</p>
              <Button 
                onClick={() => setIsCartOpen(false)}
                className="bg-amber-600 hover:bg-amber-700"
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex border-b pb-4">
                  <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  
                  <div className="ml-4 flex flex-1 flex-col">
                    <div className="flex justify-between text-base font-medium">
                      <h3>{item.name}</h3>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">${item.price.toFixed(2)}</p>
                    
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border rounded">
                        <button 
                          onClick={() => decreaseQuantity(item.id)}
                          className="p-1 hover:bg-gray-100"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="px-2">{item.quantity}</span>
                        <button 
                          onClick={() => increaseQuantity(item.id)}
                          className="p-1 hover:bg-gray-100"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {cart.length > 0 && (
          <div className="border-t p-4 space-y-4">
            <button 
              onClick={clearCart}
              className="flex items-center justify-center w-full text-gray-500 hover:text-red-500 py-2"
            >
              <Trash className="h-4 w-4 mr-2" />
              <span>Clear Cart</span>
            </button>
            
            <div className="flex justify-between text-lg font-medium">
              <span>Total</span>
              <span>${getTotalPrice().toFixed(2)}</span>
            </div>
            
            <Button 
              onClick={handleCheckout}
              className="w-full bg-amber-600 hover:bg-amber-700"
            >
              Checkout
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
