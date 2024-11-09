// CartPage.tsx
"use client";
import { useEffect, useState } from "react";
import { Product } from "../constants";
import RootLayout from "../app/layout";

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCart);
  }, []);

  const handleRemoveFromCart = (productId: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <RootLayout>
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      
      {cartItems.length > 0 ? (
        <div className="grid gap-6 mb-8">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center p-4 border rounded-lg shadow-md">
              <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded mr-4" />
              <div className="flex-grow">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                <p className="text-lg font-bold mt-2">${item.price.toFixed(2)}</p>
              </div>
              <button 
                onClick={() => handleRemoveFromCart(item.id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="text-right text-2xl font-semibold">Total: ${getTotalPrice()}</div>
        </div>
      ) : (
        <p className="text-xl text-gray-500">Your cart is empty.</p>
      )}

      <button 
        onClick={() => location.href = '/checkout'} // Navigates to the checkout page
        className="mt-4 w-full bg-blue-500 text-white text-lg py-3 rounded hover:bg-blue-600"
      >
        Proceed to Checkout
      </button>
      </div>
      </RootLayout>
  );
};

export default CartPage;
