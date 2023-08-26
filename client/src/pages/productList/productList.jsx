import React, { useContext } from "react";
import "./productList.css";
import { StrainContext } from "../../context/strainContext";
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";
import { useNavigate } from "react-router-dom";
import { toggleWishlist, addToCart } from "../../services/userService";
import { deleteStrain } from "../../services/strainService";
import { UserContext } from "../../context/userContext";
import { MyContainer } from "../../components/MyContainer";

export default function ProductList() {
  const navigate = useNavigate();
  const { strains, page, totalPages, fetchAllStrains } =
    useContext(StrainContext);

  const { userData } = useContext(UserContext);

  const isAdmin = userData?.role === "admin";
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
    <MyContainer>
      <div className="d-flex flex-column ">
        <h1>All Strains</h1>
        {isAdmin ? (
          <Button
            onClick={() => navigate("/newStrain")}
            style={{ margin: "auto", borderRadius: "100px" }}
          >
            <i className="bi bi-file-earmark-plus"> Add new strain</i>
          </Button>
        ) : null}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "20px",
          }}
        >
          <Pagination>{items}</Pagination>
        </div>

        <div style={{ maxWidth: 1400 }} className="d-flex  flex-row flex-wrap">
          {!strains
            ? "Loading strains, please wait..."
            : strains.map((strain) => (
                <div
                  className="col  d-flex justify-content-center mb-5"
                  key={strain._id}
                >
                  <Card style={{ width: "18rem" }}>
                    {isAdmin ? (
                      <div className="d-flex flex-row">
                        <Button
                          style={{
                            margin: "auto",
                            borderRadius: "100px",
                          }}
                          onClick={() =>
                            navigate(`/newStrain`, { state: strain })
                          }
                        >
                          <i className="bi bi-pen"></i>
                        </Button>
                        <Button
                          className="btn-danger"
                          style={{
                            margin: "auto",
                            borderRadius: "100px",
                          }}
                          onClick={() => deleteStrain(strain._id)}
                        >
                          <i className="bi bi-trash3"></i>
                        </Button>
                      </div>
                    ) : null}

                    <Card.Img
                      style={{ height: "230px" }}
                      variant="top"
                      src={strain.img_url}
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
                    <ListGroup
                      className="list-group-flush"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        margin: "auto",
                      }}
                    >
                      <ListGroup.Item>{strain.price + "$"}</ListGroup.Item>
                      <ListGroup.Item>{strain.type}</ListGroup.Item>
                      <ListGroup.Item>{strain.thcLevel}</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                      <Card.Link href={`/strains/${strain._id}`}>
                        <i className="bi bi-info-circle"> More Info</i>
                      </Card.Link>
                      <Card.Link
                        style={{ cursor: "pointer" }}
                        onClick={() => toggleWishlist(strain._id)}
                      >
                        <i className="bi bi-bag-check"> Add to wishlist</i>
                      </Card.Link>
                      <Card.Link
                        style={{ cursor: "pointer" }}
                        onClick={() => addToCart(strain._id, 1)}
                      >
                        <i className="bi bi-cart">Add to cart</i>
                      </Card.Link>
                    </Card.Body>
                  </Card>
                </div>
              ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Pagination>{items}</Pagination>
        </div>
      </div>
    </MyContainer>
  );
}
