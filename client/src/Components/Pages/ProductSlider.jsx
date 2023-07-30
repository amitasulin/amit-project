import React from "react";
import { Carousel } from "react-bootstrap";
import ".//../Pages/ProductSlider.css";
const ProductSlider = ({ products }) => {
  return (
    <Carousel>
      {products.map((product, index) => (
        <Carousel.Item key={index}>
          <img className="image" src={product.image} alt={product.name} />
          <Carousel.Caption>
            <h3>{product.name}</h3>
            <p>{product.type}</p>
            <p>{product.price}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductSlider;
