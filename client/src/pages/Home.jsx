import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import HowToOrder from "./HowToOrder";
import ProductSlider from "../components/ProductSlider/ProductSlider";
import { p1, p2, p3 } from "../constants/home";
import { MyContainer } from "../components/MyContainer";
const Home = () => {
  return (
    <MyContainer>
      <Col style={{ padding: "0px 40px", maxWidth: "1000px", margin: "auto" }}>
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStc_DRIPwmjeiIAXqCglqvDe0OYkKh5YncNmU5vTApAly0E3yuhL2XEx4IYBO0IPy8PB8&usqp=CAU"
          fluid
        />
        <div style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
          <div className="d-flex mb-5 flex-row align-items-center justify-content-center">
            <h1 style={{ marginRight: 30 }}>Welcome to Our Online Store!</h1>
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Cannabis_leaf.svg/120px-Cannabis_leaf.svg.png"></Image>
          </div>
          <p>{p1}</p>
          <p>{p2}</p>
          <p>{p3}</p>
        </div>

        <h1 style={{ marginBottom: 30 }}> Best Sellers</h1>
        <ProductSlider />
        <HowToOrder></HowToOrder>
      </Col>
    </MyContainer>
  );
};

export default Home;
