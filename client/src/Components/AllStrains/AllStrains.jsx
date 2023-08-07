import React, { useContext } from "react";
import "./AllStrains.css";
import { StrainContext } from "../../context/strainContext";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";

export default function AllStrains() {
  const { strains } = useContext(StrainContext);

  return (
    <Container>
      <Row>
        <h1> All Strains</h1>
        {!strains
          ? "Loading strains, please wait..."
          : strains.map((strain) => (
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={
                      strain.img_url ||
                      "https://images.leafly.com/flower-images/gsc.png"
                    }
                  />
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
                    <Card.Link href="#">Add to wishlist</Card.Link>
                    <Card.Link href="#">Add to cart</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
      </Row>
    </Container>
  );
}
