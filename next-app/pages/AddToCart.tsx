// pages/AddToCart.tsx
import React from 'react';
import { useCart } from './api/CartContext'; // Adjust path if necessary
import { useRouter } from 'next/router';
import RootLayout from '../app/layout';

const AddToCart: React.FC = () => {
  const { cartItems } = useCart();
  const router = useRouter();

  const handleCheckout = () => {
    // Redirect to the checkout page or handle checkout logic here
    router.push('/checkout'); // Change this to your checkout page route
  };

  return (
    <RootLayout>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-2">{item.description}</p>
                    <p className="text-lg font-semibold text-teal-600">
                      ${item.price.toFixed(2)} x {item.quantity} = ${(item.price * (item.quantity || 1)).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <button
                onClick={handleCheckout}
                className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </RootLayout>
  );
};

export default AddToCart;
