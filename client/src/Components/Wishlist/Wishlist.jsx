import React, { useContext, useEffect, useState } from "react";
import "./AllStrains.css";
import { StrainContext } from "../../context/strainContext";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";
import { useNavigate } from "react-router-dom";
import { toggleWishlist, addToCart, getData } from "../../services/userService";
import { UserContext } from "../../context/userContext";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  const getUserData = async () => {
    const response = await getData();
    console.log(response.data);
    setWishlist(response.data.wishlist);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Container>
      <Row>
        <h1>Wishlist</h1>
        {!wishlist
          ? "Loading strains, please wait..."
          : wishlist.map((strain) => (
              <Col key={strain._id}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={strain.img_url} />
                  <Card.Body>
                    <Card.Title>{strain.name}</Card.Title>
                    <Card.Text
                      style={{
                        overflow: "hidden",
                        height: "100px",
                      }}
                    >
                      {strain.description}
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>{strain.price + "$"}</ListGroup.Item>
                    <ListGroup.Item>{strain.type}</ListGroup.Item>
                    <ListGroup.Item>{strain.thcLevel}</ListGroup.Item>
                  </ListGroup>
                  <Card.Body>
                    <Card.Link href={`/strains/${strain._id}`}>
                      More Info
                    </Card.Link>
                    <Card.Link
                      style={{ cursor: "pointer" }}
                      onClick={() => toggleWishlist(strain._id)}
                    >
                      Add to wishlist
                    </Card.Link>
                    <Card.Link
                      style={{ cursor: "pointer" }}
                      onClick={() => addToCart(strain._id, 1)}
                    >
                      Add to cart
                    </Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
      </Row>
    </Container>
  );
}
