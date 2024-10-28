// // CartContext.tsx
// import React, { createContext, useContext, useEffect, useState } from 'react';

// // Define the Product interface
// interface Product {
//   id: number;
//   title: string;
//   image: string;
//   description: string;
//   price: number;
//   color: string;
//   size: string;
//   type: string;
//   quantity?: number; // Optional property for quantity
// }

// // Create the context
// export const CartContext = createContext<{
//   cartItems: Product[];
//   addToCart: (product: Product) => void;
// }>({ cartItems: [], addToCart: () => {} });

// // Create the provider component
// export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [cartItems, setCartItems] = useState<Product[]>(() => {
//     // Load cart items from local storage if available
//     if (typeof window !== 'undefined') {
//       const storedCart = localStorage.getItem('cartItems');
//       return storedCart ? JSON.parse(storedCart) : [];
//     }
//     return [];
//   });

//   // Update local storage whenever cartItems changes
//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       localStorage.setItem('cartItems', JSON.stringify(cartItems));
//     }
//   }, [cartItems]);

//   const addToCart = (product: Product) => {
//     setCartItems((prevItems) => {
//       const existingProduct = prevItems.find((item) => item.id === product.id);
//       if (existingProduct) {
//         return prevItems.map((item) =>
//           item.id === product.id 
//             ? { ...existingProduct, quantity: (existingProduct.quantity || 1) + 1 } 
//             : item
//         );
//       }
//       return [...prevItems, { ...product, quantity: 1 }];
//     });
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// // Hook to use the CartContext
// export const useCart = () => {
//   return useContext(CartContext);
// };
// pages/api/CartContext.tsx
import { createContext, useState, useContext, ReactNode } from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
}

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
