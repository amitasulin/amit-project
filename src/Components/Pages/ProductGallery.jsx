import React from 'react';

const ProductGallery = ({ products }) => {
  return (
    <div className="product-gallery">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductGallery;
