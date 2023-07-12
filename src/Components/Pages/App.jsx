import React from 'react';
import ProductGallery from './ProductGallery';

const App = () => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      image: 'product1.jpg',
      description: 'This is the description of Product 1',
    },
    {
      id: 2,
      name: 'Product 2',
      image: 'product2.jpg',
      description: 'This is the description of Product 2',
    },
    // Add more products here...
  ];

  return (
    <div className="app">
      <h1>Products</h1>
      <ProductGallery products={products} />
    </div>
  );
};

export default App;
