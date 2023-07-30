import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import ProductSlider from "./ProductSliderApp";
import "./Home.css";

const imageBackground = () => {
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Cannabis_sativa_001.JPG/1200px-Cannabis_sativa_001.JPG";
};
imageBackground();
const Home = () => {
  return (
    <Container className="Container">
      <ProductSlider></ProductSlider>
      <Row className="mt-5">
        <Col md={6}>
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStc_DRIPwmjeiIAXqCglqvDe0OYkKh5YncNmU5vTApAly0E3yuhL2XEx4IYBO0IPy8PB8&usqp=CAU"
            fluid
          />
        </Col>
        <Col md={6} className="d-flex align-items-center">
          <div>
            <h1>Welcome to Our Online Store!</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut
              turpis at mi fringilla blandit. Nullam euismod, elit at
              scelerisque mollis, libero odio euismod dui, eu bibendum ex elit
              sit amet nunc. Nulla facilisi. Mauris ut dapibus justo.
            </p>
            <Button variant="primary">Shop Now</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
