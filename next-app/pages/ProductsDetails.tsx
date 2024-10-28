// import RootLayout from "../app/layout";
// import { useState, useEffect } from 'react';
// import Select from 'react-select';

// interface Product {
//   id: number;
//   title: string;
//   image: string;
//   description: string;
//   price: number;
//   color: string;
//   size: string;
//   type: string;
// }

// const ProductsDetails: React.FC = () => {
//   const [showToast, setShowToast] = useState(false);
//   // Sample products data
//   const products: Product[] = [
//     { id: 1, title: 'Ceramic Bowl', image: '/images/bowl.jpg', description: 'A beautiful ceramic bowl.', price: 19.99, color: 'Blue', size: 'Medium', type: 'Bowl' },
//     { id: 2, title: 'Ceramic Plate', image: '/images/plate.jpg', description: 'A stunning ceramic plate.', price: 14.99, color: 'White', size: 'Large', type: 'Plate' },
//     { id: 3, title: 'Vase', image: '/images/vase.jpg', description: 'A decorative vase for your home.', price: 29.99, color: 'Green', size: 'Small', type: 'Vase' },
//     { id: 4, title: 'Ceramic Mug', image: '/images/mug.jpg', description: 'A stylish mug for your coffee.', price: 9.99, color: 'Red', size: 'Small', type: 'Mug' },
//     { id: 5, title: 'Teapot', image: '/images/teapot.jpg', description: 'A lovely teapot for your tea.', price: 24.99, color: 'White', size: 'Medium', type: 'Teapot' },
//     { id: 6, title: 'Soup Bowl', image: '/images/soup_bowl.jpg', description: 'Perfect for soups and stews.', price: 19.99, color: 'Yellow', size: 'Medium', type: 'Bowl' },
//     { id: 7, title: 'Dinner Plate', image: '/images/dinner_plate.jpg', description: 'A large dinner plate.', price: 17.99, color: 'Grey', size: 'Large', type: 'Plate' },
//     { id: 8, title: 'Fruit Bowl', image: '/images/fruit_bowl.jpg', description: 'Ideal for serving fruits.', price: 22.99, color: 'Brown', size: 'Large', type: 'Bowl' },
//     { id: 9, title: 'Spoon', image: '/images/spoon.jpg', description: 'A shiny stainless steel spoon.', price: 4.99, color: 'Silver', size: 'Small', type: 'Cutlery' },
//     { id: 10, title: 'Fork', image: '/images/fork.jpg', description: 'A durable fork for dining.', price: 4.99, color: 'Silver', size: 'Small', type: 'Cutlery' },
//     { id: 11, title: 'Knife', image: '/images/knife.jpg', description: 'A sharp kitchen knife.', price: 9.99, color: 'Silver', size: 'Small', type: 'Cutlery' },
//     { id: 12, title: 'Decorative Plate', image: '/images/decorative_plate.jpg', description: 'A plate for decoration.', price: 34.99, color: 'Gold', size: 'Large', type: 'Plate' },
//     { id: 13, title: 'Ceramic Cup', image: '/images/cup.jpg', description: 'A ceramic cup for hot drinks.', price: 11.99, color: 'Black', size: 'Small', type: 'Cup' },
//     { id: 14, title: 'Bowl Set', image: '/images/bowl_set.jpg', description: 'A set of ceramic bowls.', price: 49.99, color: 'Assorted', size: 'Varied', type: 'Set' },
//     { id: 15, title: 'Serving Tray', image: '/images/tray.jpg', description: 'A ceramic serving tray.', price: 27.99, color: 'Blue', size: 'Large', type: 'Tray' },
//   ];

//   const [filters, setFilters] = useState({
//     type: [] as string[],
//     size: [] as string[],
//     color: [] as string[],
//     price: [0, 100], // Initialize price range (min, max)
//   });

//   const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

//   useEffect(() => {
//     // Filter products based on selected filters
//     const applyFilters = () => {
//       const filtered = products.filter(product => {
//         const matchesType = filters.type.length === 0 || filters.type.includes(product.type);
//         const matchesSize = filters.size.length === 0 || filters.size.includes(product.size);
//         const matchesColor = filters.color.length === 0 || filters.color.includes(product.color);
//         const matchesPrice = product.price >= filters.price[0] && product.price <= filters.price[1];

//         return matchesType && matchesSize && matchesColor && matchesPrice;
//       });

//       setFilteredProducts(filtered);
//     };

//     applyFilters();
//   }, [filters]);

//   // Handler to update filters
//   const handleFilterChange = (key: keyof typeof filters) => (selectedOptions: any) => {
//     setFilters((prev) => ({
//       ...prev,
//       [key]: selectedOptions ? selectedOptions.map((option: any) => option.value) : [],
//     }));
//   };

//   // Define options for filters
//   const typeOptions = Array.from(new Set(products.map(product => ({ value: product.type, label: product.type }))));
//   const sizeOptions = Array.from(new Set(products.map(product => ({ value: product.size, label: product.size }))));
//   const colorOptions = Array.from(new Set(products.map(product => ({ value: product.color, label: product.color }))));

//   function handleAddToCart(product: Product): void {
//     throw new Error("Function not implemented.");
//   }

//   return (
// <RootLayout>
//       <div className="container mx-auto p-4">
//         <h1 className="text-2xl font-bold mb-4">Products</h1>

//         <div className="mb-6">
//           <h2 className="text-lg font-semibold">Filters</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <Select
//               isMulti
//               options={typeOptions}
//               placeholder="Filter by Type"
//               onChange={handleFilterChange('type')}
//               className="basic-multi-select"
//               classNamePrefix="select"
//             />
//             <Select
//               isMulti
//               options={sizeOptions}
//               placeholder="Filter by Size"
//               onChange={handleFilterChange('size')}
//               className="basic-multi-select"
//               classNamePrefix="select"
//             />
//             <Select
//               isMulti
//               options={colorOptions}
//               placeholder="Filter by Color"
//               onChange={handleFilterChange('color')}
//               className="basic-multi-select"
//               classNamePrefix="select"
//             />
//           </div>
//           <div className="mt-4">
//             <label className="block">Price Range:</label>
//             <input
//               type="number"
//               value={filters.price[0]}
//               onChange={(e) => setFilters((prev) => ({ ...prev, price: [parseFloat(e.target.value), prev.price[1]] }))}
//               className="border rounded p-2 mr-2"
//               placeholder="Min"
//             />
//             <input
//               type="number"
//               value={filters.price[1]}
//               onChange={(e) => setFilters((prev) => ({ ...prev, price: [prev.price[0], parseFloat(e.target.value)] }))}
//               className="border rounded p-2"
//               placeholder="Max"
//             />
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {filteredProducts.map((product) => (
//             <div key={product.id} className="border p-4 rounded shadow-md">
//               <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-2" />
//               <h3 className="text-xl font-semibold">{product.title}</h3>
//               <p className="text-gray-700">{product.description}</p>
//               <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
//               <button 
//                 onClick={() => handleAddToCart(product)} 
//                 className="bg-blue-500 text-white p-2 rounded mt-2 hover:bg-blue-600"
//               >
//                 Add to Cart
//               </button>
//             </div>
//           ))}
//         </div>

//         {/* Toast Notification */}
//         {showToast && (
//           <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
//             Product added to cart!
//           </div>
//         )}
//       </div>
//     </RootLayout>
//   );
// };

// export default ProductsDetails;
import { useState, useEffect, useContext } from 'react';
import Select from 'react-select';
import { CartContext } from './api/CartContext';
import RootLayout from "../app/layout";
import { useRouter } from 'next/router';

interface Product {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
  color: string;
  size: string;
  type: string;
}

const ProductsDetails: React.FC = () => {
  const { addToCart } = useCart(); // Use custom hook from CartContext
  const router = useRouter();
  const [showToast, setShowToast] = useState(false);
  // Sample products data
  const products: Product[] = [
    { id: 1, title: 'Ceramic Bowl', image: '/images/bowl.jpg', description: 'A beautiful ceramic bowl.', price: 19.99, color: 'Blue', size: 'Medium', type: 'Bowl' },
    { id: 2, title: 'Ceramic Plate', image: '/images/plate.jpg', description: 'A stunning ceramic plate.', price: 14.99, color: 'White', size: 'Large', type: 'Plate' },
    { id: 3, title: 'Vase', image: '/images/vase.jpg', description: 'A decorative vase for your home.', price: 29.99, color: 'Green', size: 'Small', type: 'Vase' },
    { id: 4, title: 'Ceramic Mug', image: '/images/mug.jpg', description: 'A stylish mug for your coffee.', price: 9.99, color: 'Red', size: 'Small', type: 'Mug' },
    { id: 5, title: 'Teapot', image: '/images/teapot.jpg', description: 'A lovely teapot for your tea.', price: 24.99, color: 'White', size: 'Medium', type: 'Teapot' },
    { id: 6, title: 'Soup Bowl', image: '/images/soup_bowl.jpg', description: 'Perfect for soups and stews.', price: 19.99, color: 'Yellow', size: 'Medium', type: 'Bowl' },
    { id: 7, title: 'Dinner Plate', image: '/images/dinner_plate.jpg', description: 'A large dinner plate.', price: 17.99, color: 'Grey', size: 'Large', type: 'Plate' },
    { id: 8, title: 'Fruit Bowl', image: '/images/fruit_bowl.jpg', description: 'Ideal for serving fruits.', price: 22.99, color: 'Brown', size: 'Large', type: 'Bowl' },
    { id: 9, title: 'Spoon', image: '/images/spoon.jpg', description: 'A shiny stainless steel spoon.', price: 4.99, color: 'Silver', size: 'Small', type: 'Cutlery' },
    { id: 10, title: 'Fork', image: '/images/fork.jpg', description: 'A durable fork for dining.', price: 4.99, color: 'Silver', size: 'Small', type: 'Cutlery' },
    { id: 11, title: 'Knife', image: '/images/knife.jpg', description: 'A sharp kitchen knife.', price: 9.99, color: 'Silver', size: 'Small', type: 'Cutlery' },
    { id: 12, title: 'Decorative Plate', image: '/images/decorative_plate.jpg', description: 'A plate for decoration.', price: 34.99, color: 'Gold', size: 'Large', type: 'Plate' },
    { id: 13, title: 'Ceramic Cup', image: '/images/cup.jpg', description: 'A ceramic cup for hot drinks.', price: 11.99, color: 'Black', size: 'Small', type: 'Cup' },
    { id: 14, title: 'Bowl Set', image: '/images/bowl_set.jpg', description: 'A set of ceramic bowls.', price: 49.99, color: 'Assorted', size: 'Varied', type: 'Set' },
    { id: 15, title: 'Serving Tray', image: '/images/tray.jpg', description: 'A ceramic serving tray.', price: 27.99, color: 'Blue', size: 'Large', type: 'Tray' },
  ];

  const [filters, setFilters] = useState({
    type: [] as string[],
    size: [] as string[],
    color: [] as string[],
    price: [0, 100],
  });

  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  useEffect(() => {
    const applyFilters = () => {
      const filtered = products.filter(product => {
        const matchesType = filters.type.length === 0 || filters.type.includes(product.type);
        const matchesSize = filters.size.length === 0 || filters.size.includes(product.size);
        const matchesColor = filters.color.length === 0 || filters.color.includes(product.color);
        const matchesPrice = product.price >= filters.price[0] && product.price <= filters.price[1];
        return matchesType && matchesSize && matchesColor && matchesPrice;
      });
      setFilteredProducts(filtered);
    };
    applyFilters();
  }, [filters]);

  const handleFilterChange = (key: keyof typeof filters) => (selectedOptions: any) => {
    setFilters((prev) => ({
      ...prev,
      [key]: selectedOptions ? selectedOptions.map((option: any) => option.value) : [],
    }));
  };

  const typeOptions = Array.from(new Set(products.map(product => ({ value: product.type, label: product.type }))));
  const sizeOptions = Array.from(new Set(products.map(product => ({ value: product.size, label: product.size }))));
  const colorOptions = Array.from(new Set(products.map(product => ({ value: product.color, label: product.color }))));

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    router.push('/cart');
  };
  return (
    <RootLayout>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Products</h1>

        <div className="mb-6">
          <h2 className="text-lg font-semibold">Filters</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Select
              isMulti
              options={typeOptions}
              placeholder="Filter by Type"
              onChange={handleFilterChange('type')}
              className="basic-multi-select"
              classNamePrefix="select"
            />
            <Select
              isMulti
              options={sizeOptions}
              placeholder="Filter by Size"
              onChange={handleFilterChange('size')}
              className="basic-multi-select"
              classNamePrefix="select"
            />
            <Select
              isMulti
              options={colorOptions}
              placeholder="Filter by Color"
              onChange={handleFilterChange('color')}
              className="basic-multi-select"
              classNamePrefix="select"
            />
          </div>
          <div className="mt-4">
            <label className="block">Price Range:</label>
            <input
              type="number"
              value={filters.price[0]}
              onChange={(e) => setFilters((prev) => ({ ...prev, price: [parseFloat(e.target.value), prev.price[1]] }))}
              className="border rounded p-2 mr-2"
              placeholder="Min"
            />
            <input
              type="number"
              value={filters.price[1]}
              onChange={(e) => setFilters((prev) => ({ ...prev, price: [prev.price[0], parseFloat(e.target.value)] }))}
              className="border rounded p-2"
              placeholder="Max"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="border p-4 rounded shadow-md">
              <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-2" />
              <h3 className="text-xl font-semibold">{product.title}</h3>
              <p className="text-gray-700">{product.description}</p>
              <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
              <button 
                onClick={() => handleAddToCart(product)} 
                className="bg-blue-500 text-white p-2 rounded mt-2 hover:bg-blue-600"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {showToast && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
            Product added to cart!
          </div>
        )}
      </div>
    </RootLayout>
  );
};

export default ProductsDetails;
function useCart(): { addToCart: any; } {
  throw  ('Function not implemented.');
}

