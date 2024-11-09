// CheckoutPage.tsx
"use client";
import { useEffect, useState } from "react";
import { Product } from "../constants";
import RootLayout from "../app/layout";

const CheckoutPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCart);
  }, []);

  const handlePlaceOrder = () => {
    localStorage.removeItem("cart");
    setCartItems([]);
    alert("Thank you for your order!");
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <RootLayout>
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center mb-4">
            <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded mr-4" />
            <div className="flex-grow">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600">${item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
        <div className="text-right text-xl font-semibold">Total: ${getTotalPrice()}</div>
      </div>

      <button 
        onClick={handlePlaceOrder}
        className="w-full bg-green-500 text-white text-lg py-3 rounded hover:bg-green-600"
      >
        Place Order
      </button>
    </div>
    </RootLayout>
  );
};

export default CheckoutPage;
