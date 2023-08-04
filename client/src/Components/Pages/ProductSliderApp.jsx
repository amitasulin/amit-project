import React from "react";
import ProductSlider from "./ProductSlider";

const products = [
  {
    name: "GG4",
    type: "Sativa",
    image: "https://images.leafly.com/flower-images/gg-4.jpg",
  },
  {
    name: "Wedding Cake",
    type: "Hybrid",
    price: "$29.99",
    image: "https://images.leafly.com/flower-images/wedding-cake.jpg",
  },
  {
    name: "Blue Dream",
    type: "Hybrid",
    price: "$15.99",
    image: "https://images.leafly.com/flower-images/blue-dream.png",
  },

  {
    name: "Sour Diesel",
    type: "Sativa",
    price: "$25.99",
    image: "https://images.leafly.com/flower-images/sour-diesel.jpg",
  },

  {
    name: "Gelato",
    type: "Hybrid",
    price: "$15.99",
    image: "https://images.leafly.com/flower-images/gelato.jpg",
  },
  {
    name: "Purple Punch",
    type: "Indica",
    price: "$26.99",
    image: "https://images.leafly.com/flower-images/purple-punch-fixed.jpg",
  },
];

const ProductSliderApp = () => {
  return (
    <div>
      <h2>Best Sellers - Last Month </h2>
      <ProductSlider products={products} />
    </div>
  );
};

export default ProductSliderApp;
