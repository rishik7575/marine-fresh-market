
import React from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

const CartButton: React.FC = () => {
  const { getTotalItems, setIsCartOpen } = useCart();
  const itemCount = getTotalItems();

  return (
    <button 
      onClick={() => setIsCartOpen(true)}
      className="relative p-2 text-gray-600 hover:text-amber-700 transition-colors"
      aria-label="Open cart"
    >
      <ShoppingCart className="h-6 w-6" />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-600 text-xs font-bold text-white">
          {itemCount}
        </span>
      )}
    </button>
  );
};

export default CartButton;
