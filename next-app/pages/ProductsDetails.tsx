import RootLayout from "../app/layout";
import { useState } from 'react';
import Select, { MultiValue } from 'react-select';

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
  // State to manage selected filters
  const [filters, setFilters] = useState({
    type: [] as string[],
    size: [] as string[],
    color: [] as string[],
    price: [0, 100], // Initialize price range (min, max)
  });

  // Sample products data
  const products: Product[] = [
    // Ensure all products have unique IDs and consistent casing
    {
      id: 1,
      title: 'Handcrafted Ceramic Vase',
      image: '/porcelain2.jpg',
      description: 'A beautiful handcrafted vase made from fine ceramic.',
      price: 49.99,
      color: 'Blue',
      size: '30x30',
      type: 'Door',
    },
    {
      id: 2,
      title: 'Minimalist Ceramic Mug',
      image: '/ceramic1.jpg',
      description: 'A simple yet elegant ceramic mug for your coffee.',
      price: 19.99,
      color: 'White',
      size: '20x20',
      type: 'Floor',
    },
    {
      id: 3,
      title: 'Minimalist Ceramic Mug',
      image: '/porcelain2.jpg',
      description: 'A simple yet elegant ceramic mug for your coffee.',
      price: 19.99,
      color: 'blue',
      size: '30x30',
      type: 'door',
    },
    {
      id: 4,
      title: 'Minimalist Ceramic Mug',
      image: '/porcelain3.jpg',
      description: 'A simple yet elegant ceramic mug for your coffee.',
      price: 80,
      color: 'red',
      size: '40x40',
      type: 'Outdoor Walls',
    },
    {
      id: 5,
      title: 'Minimalist Ceramic Mug',
      image: '/ceramic1.jpg',
      description: 'A simple yet elegant ceramic mug for your coffee.',
      price: 90,
      color: 'biege',
      size: '60x60',
      type: 'Outdoor floor',
    },
    {
      id: 6,
      title: 'Minimalist Ceramic Mug',
      image: '/porcelain4.jpg',
      description: 'A simple yet elegant ceramic mug for your coffee.',
      price: 50,
      color: 'white',
      size: '20x20',
      type: 'Outdoor Floor',
    },
    {
      id: 7,
      title: 'Minimalist Ceramic Mug',
      image: '/porcelain6.jpg',
      description: 'A simple yet elegant ceramic mug for your coffee.',
      price: 100,
      color: 'red',
      size: '40x40',
      type: 'Floor',
    },
    {
      id: 8,
      title: 'Minimalist Ceramic Mug',
      image: '/ceramic1.jpg',
      description: 'A simple yet elegant ceramic mug for your coffee.',
      price: 19.99,
      color: 'White',
      size: '20x20',
      type: 'Floor',
    },
    {
      id: 9,
      title: 'Minimalist Ceramic Mug',
      image: '/five.jpg',
      description: 'A simple yet elegant ceramic mug for your coffee.',
      price: 19.99,
      color: 'Beige',
      size: '20x20',
      type: 'Door',
    },

    // ... other products with unique IDs
    {
      id: 10,
      title: 'Decorative Ceramic Plate',
      image: '/ceramic2.jpg',
      description: 'A decorative plate for your dining table.',
      price: 39.99,
      color: 'Blue',
      size: '20x20',
      type: 'Floor',
    },
  ];

  // Handler for React Select changes
  const handleSelectChange = (
    filterType: keyof typeof filters,
    selectedOptions: MultiValue<{ value: string; label: string }>
  ) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: selectedOptions ? selectedOptions.map(option => option.value) : [],
    }));
  };

  // Function to filter products based on selected filters
  const getFilteredProducts = () => {
    return products.filter((product) => {
      // Filter by Type
      if (filters.type.length > 0 && !filters.type.includes(product.type)) {
        return false;
      }

      // Filter by Size
      if (filters.size.length > 0 && !filters.size.includes(product.size)) {
        return false;
      }

      // Filter by Color
      if (filters.color.length > 0 && !filters.color.includes(product.color)) {
        return false;
      }

      // Filter by Price
      if (product.price < filters.price[0] || product.price > filters.price[1]) {
        return false;
      }

      return true;
    });
  };

  const filteredProducts = getFilteredProducts();

  // Options for React Select
  const typeOptions = [
    { value: 'Door', label: 'Door' },
    { value: 'Floor', label: 'Floor' },
    { value: 'Outdoor walls', label: 'Outdoor walls' },
    { value: 'Outdoor floor', label: 'Outdoor floor' },
  ];

  const sizeOptions = [
    { value: '20x20', label: '20x20' },
    { value: '30x30', label: '30x30' },
    { value: '40x40', label: '40x40' },
    { value: '50x50', label: '50x50' },
    { value: '60x60', label: '60x60' },
  ];

  const colorOptions = [
    { value: 'White', label: 'White' },
    { value: 'Beige', label: 'Beige' },
    { value: 'Black', label: 'Black' },
    { value: 'Blue', label: 'Blue' },
    { value: 'Red', label: 'Red' },

  ];

  return (
    <RootLayout>
      {/* <Navbar /> */}
      <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50 p-8">
        {/* Filter Sidebar */}
        <aside className="w-full mt-20 lg:w-1/4 mb-8 lg:mb-0 mr-8">
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Filter Products</h2>

            {/* Type Filter */}
            <div className="mb-6">
              <label htmlFor="type" className="block text-xl font-semibold mb-2">
                Type
              </label>
              <Select
                id="type"
                isMulti
                options={typeOptions}
                value={typeOptions.filter(option => filters.type.includes(option.value))}
                onChange={(selected) => handleSelectChange('type', selected)}
                className="react-select-container"
                classNamePrefix="react-select"
                placeholder="Select Type..."
              />
            </div>

            {/* Size Filter */}
            <div className="mb-6">
              <label htmlFor="size" className="block text-xl font-semibold mb-2">
                Size
              </label>
              <Select
                id="size"
                isMulti
                options={sizeOptions}
                value={sizeOptions.filter(option => filters.size.includes(option.value))}
                onChange={(selected) => handleSelectChange('size', selected)}
                className="react-select-container"
                classNamePrefix="react-select"
                placeholder="Select Size..."
              />
            </div>

            {/* Color Filter */}
            <div className="mb-6">
              <label htmlFor="color" className="block text-xl font-semibold mb-2">
                Color
              </label>
              <Select
                id="color"
                isMulti
                options={colorOptions}
                value={colorOptions.filter(option => filters.color.includes(option.value))}
                onChange={(selected) => handleSelectChange('color', selected)}
                className="react-select-container"
                classNamePrefix="react-select"
                placeholder="Select Color..."
              />
            </div>

            {/* Price Filter */}
            <div className="mb-6">
              <label className="block text-xl font-semibold mb-2">Price Range</label>
              <div className="flex items-center space-x-4">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={filters.price[0]}
                  onChange={(e) => {
                    const newMin = parseFloat(e.target.value);
                    setFilters((prev) => ({
                      ...prev,
                      price: [newMin, prev.price[1]],
                    }));
                  }}
                  className="w-full"
                />
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={filters.price[1]}
                  onChange={(e) => {
                    const newMax = parseFloat(e.target.value);
                    setFilters((prev) => ({
                      ...prev,
                      price: [prev.price[0], newMax],
                    }));
                  }}
                  className="w-full"
                />
              </div>
              <div>
                Price: ${filters.price[0]} - ${filters.price[1]}
              </div>
            </div>

            {/* Reset Filters Button */}
            <button
              onClick={() => setFilters({ type: [], size: [], color: [], price: [0, 100] })}
              className="w-full mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
            >
              Reset Filters
            </button>
          </div>
        </aside>

        {/* Product Display Area */}
        <main className="w-full mt-20 lg:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                    <p className="text-gray-600 mb-2">{product.description}</p>
                    <p className="text-lg font-semibold text-teal-600">${product.price.toFixed(2)}</p>
                    {/* Display Size, Color, and Type */}
                    <p className="text-sm text-gray-500">Size: {product.size}</p>
                    <p className="text-sm text-gray-500">Color: {product.color}</p>
                    <p className="text-sm text-gray-500">Type: {product.type}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="col-span-3 text-center text-gray-500">No products match the selected filters.</p>
            )}
          </div>
        </main>
      </div>
    </RootLayout>
  );
}

export default ProductsDetails;
