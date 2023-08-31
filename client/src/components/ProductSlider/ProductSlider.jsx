import React, { useContext } from "react";
import { Carousel } from "react-bootstrap";
import "./ProductSlider.css";
import { StrainContext } from "../../context/strainContext";
const ProductSlider = () => {
  const { strains } = useContext(StrainContext);

  return (
    <Carousel indicators={null} variant="dark">
      {strains.map((product, index) => (
        <Carousel.Item key={index}>
          <div
            style={{
              flexDirection: "row",
              textAlign: "center",
            }}
          >
            <span style={{ marginRight: "12px" }} className="font18">
              {product.name}
            </span>
          </div>
          <img className="image" src={product.img_url} alt={product.name} />
          <div
            style={{
              flexDirection: "row",
              textAlign: "center",
            }}
          >
            <span style={{ marginRight: "12px" }} className="font18">
              {product.type}
            </span>
            <span className="font18">{product.thcLevel + "%"}</span>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductSlider;
