import React, { useContext } from "react";
import { Carousel } from "react-bootstrap";
import "./ProductSlider.css";
import { StrainContext } from "../../context/strainContext";
const ProductSlider = () => {
  const { strains } = useContext(StrainContext);

  return (
    <Carousel
      variant="dark"
      style={{ color: "black", flex: 1, display: "flex" }}
    >
      {strains.map((product, index) => (
        <Carousel.Item key={index}>
          <img className="image" src={product.img_url} alt={product.name} />
          <Carousel.Caption>
            <h3>{product.name}</h3>
            <br></br>
            <p>{product.type}</p>
            <br></br>
            <p>{product.thcLevel}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductSlider;