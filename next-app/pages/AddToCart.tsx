import React from 'react';
import RootLayout from '../app/layout';
import { useCart } from './cartContext'; // Import cart context

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart(); // Access cart items from context

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

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
                <li
                  key={item.id}
                  className="flex flex-col lg:flex-row justify-between items-center border-b pb-6"
                >
                  <div className="flex items-center space-x-4 w-full lg:w-auto">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-md shadow-md"
                    />
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800">
                        {item.name}
                      </h2>
                      <p className="text-gray-600">
                        ${item.price} x {item.quantity} = ${item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 transition duration-300"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-8 text-right">
              <h2 className="text-3xl font-bold text-gray-800">
                Total: ${totalAmount.toFixed(2)}
              </h2>
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
