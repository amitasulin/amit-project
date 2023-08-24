import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import { addStrain, updateStrain } from "../../services/strainService";
import { useLocation } from "react-router-dom";

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

export default function CreateEditProduct() {
  const params = useLocation();
  const existingProduct = params.state;

  console.log(existingProduct);
  const isEdit = Boolean(existingProduct);
  const [product, setProduct] = useState(existingProduct || INITIAL_STATE);

  const addNewStrain = async () => {
    addStrain(product);
  };

  const updateExistStrain = async () => {
    updateStrain(product);
  };

  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
            placeholder="Enter name"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {product.type || "Select type"}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              onClick={(e) =>
                setProduct({ ...product, type: e.currentTarget.innerText })
              }
            >
              Hybrid
            </Dropdown.Item>
            <Dropdown.Item
              onClick={(e) =>
                setProduct({ ...product, type: e.currentTarget.innerText })
              }
            >
              Sativa
            </Dropdown.Item>
            <Dropdown.Item
              onClick={(e) =>
                setProduct({ ...product, type: e.currentTarget.innerText })
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
            value={product.description}
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
            placeholder="Description"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Price</Form.Label>
          <Form.Control
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
            placeholder="Price"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Thc Level</Form.Label>
          <Form.Control
            value={product.thcLevel}
            onChange={(e) =>
              setProduct({ ...product, thcLevel: e.target.value })
            }
            placeholder="Thc Level"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>img_url</Form.Label>
          <Form.Control
            value={product.img_url}
            onChange={(e) =>
              setProduct({ ...product, img_url: e.target.value })
            }
            placeholder="img_url"
          />
        </Form.Group>
        <Button
          onClick={(e) => {
            e.preventDefault();
            isEdit ? updateExistStrain() : addNewStrain();
          }}
          variant="primary"
          type="submit"
        >
          {isEdit ? "Save" : "Create"}
        </Button>
      </Form>
    </Container>
  );
}
