import React, { useContext } from "react";
import "./productList.css";
import { Button, Card, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toggleWishlist, addToCart } from "../../services/userService";
import { deleteStrain } from "../../services/strainService";
import { UserContext } from "../../context/userContext";

export const Product = (props) => {
  const { strain } = props;
  const { userData } = useContext(UserContext);
  const navigate = useNavigate();

  const isAdmin = userData?.role === "admin";

  return (
    <div className="col  d-flex justify-content-center mb-5" key={strain._id}>
      <Card style={{ width: "18rem" }}>
        {isAdmin ? (
          <div className="d-flex flex-row">
            <Button
              style={{
                margin: "auto",
                borderRadius: "100px",
              }}
              onClick={() => navigate(`/newStrain`, { state: strain })}
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
  );
};
