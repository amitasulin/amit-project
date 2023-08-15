import React, { useContext, useState } from "react";
import "./AllStrains.css";
import { StrainContext } from "../../context/strainContext";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import { addStrain } from "../../services/strainService";

const INITIAL_STATE = {
  name: "",
  type: "",
  description: "",
  img_url: "",
  most_common_terpene: "",
  thcLevel: "",
  effects: [],
  price: "",
};

export default function NewStrain() {
  const [state, setState] = useState(INITIAL_STATE);

  const addNewStrain = async () => {
    addStrain(state);
  };

  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={state.name}
            onChange={(e) => setState({ ...state, name: e.target.value })}
            placeholder="Enter name"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {state.type || "Select type"}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              onClick={(e) =>
                setState({ ...state, type: e.currentTarget.innerText })
              }
            >
              Hybrid
            </Dropdown.Item>
            <Dropdown.Item
              onClick={(e) =>
                setState({ ...state, type: e.currentTarget.innerText })
              }
            >
              Sativa
            </Dropdown.Item>
            <Dropdown.Item
              onClick={(e) =>
                setState({ ...state, type: e.currentTarget.innerText })
              }
            >
              Indica
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={state.description}
            onChange={(e) =>
              setState({ ...state, description: e.target.value })
            }
            placeholder="Description"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Price</Form.Label>
          <Form.Control
            value={state.price}
            onChange={(e) => setState({ ...state, price: e.target.value })}
            placeholder="Price"
          />
        </Form.Group>

        <Button
          onClick={(e) => {
            e.preventDefault();
            addNewStrain();
          }}
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
}
