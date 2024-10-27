import React, { useState, useEffect } from 'react';
import RootLayout from '../app/layout';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cartItems');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const updateQuantity = (id: number, quantity: number) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  const removeItem = (id: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  return (
    <RootLayout>
      <div className="container mx-auto py-12 px-4 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Your Cart</h1>
        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-center">Your cart is empty.</p>
        ) : (
          <div className="space-y-8">
            <ul className="space-y-6">
              {cartItems.map((item) => (
                <li key={item.id} className="flex flex-col lg:flex-row justify-between items-center border-b pb-6">
                  <div className="flex items-center space-x-4">
                    <img src={item.image} alt={item.name} className="w-20 h-20 rounded-md shadow-md" />
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                      <p className="text-gray-600">${item.price} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 mt-4 lg:mt-0">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
                      className="w-16 border border-gray-300 rounded-md p-1 text-center transition duration-300 focus:ring focus:ring-blue-200"
                    />
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700 transition duration-300"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8 text-right">
              <h2 className="text-3xl font-bold text-gray-800">Total: ${totalAmount.toFixed(2)}</h2>
              <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </RootLayout>
  );
};

export default CartPage;

