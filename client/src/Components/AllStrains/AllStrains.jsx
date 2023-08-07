import React, { useContext } from "react";
import "./AllStrains.css";
import { StrainContext } from "../../context/strainContext";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";

export default function AllStrains() {
  const { strains, page, totalPages, fetchAllStrains } =
    useContext(StrainContext);

  const items = [];
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item
        onClick={() => fetchAllStrains("", number)}
        key={number}
        active={number === page}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <Container>
      <Row>
        <h1> All Strains</h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Pagination>{items}</Pagination>
        </div>
        {!strains
          ? "Loading strains, please wait..."
          : strains.map((strain) => (
              <Col key={strain._id}>
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
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Pagination>{items}</Pagination>
        </div>
      </Row>
    </Container>
  );
}
