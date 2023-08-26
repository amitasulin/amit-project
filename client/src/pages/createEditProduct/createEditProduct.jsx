import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import { addStrain, updateStrain } from "../../services/strainService";
import { useLocation, useNavigate } from "react-router-dom";
import { MyContainer } from "../../components/MyContainer";
import { Product } from "../productList/Product";
import Joi from "joi";
import { toast } from "react-toastify";
import { StrainContext } from "../../context/strainContext";

const strainValidation = Joi.object({
  name: Joi.string().min(2).max(20).required(),
  type: Joi.string().valid("Hybrid", "Sativa", "Indica").required(),
  description: Joi.string().min(2).max(1024).required(),
  img_url: Joi.string()
    .regex(
      /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?/
    )
    .required(),
  thcLevel: Joi.number().min(0).max(50),
  price: Joi.number().min(1).max(100),
}).options({ allowUnknown: true });

const INITIAL_STATE = {
  name: "",
  type: "",
  description: "",
  img_url: "",
  thcLevel: "",
  price: "",
};

export default function CreateEditProduct() {
  const params = useLocation();
  const existingProduct = params.state;
  const navigate = useNavigate();

  const isEdit = Boolean(existingProduct);
  const [product, setProduct] = useState(existingProduct || INITIAL_STATE);
  const { strains, setStrains } = useContext(StrainContext);

  const addNewStrain = async () => {
    const { error } = strainValidation.validate(product);
    if (error) {
      console.log(error);
      toast.error(`Failed to validate a new strain`);
    } else {
      try {
        addStrain(product);
        const newStrains = [product, ...strains];
        setStrains(newStrains);
        navigate("/strains");
        toast.success(`${product.name} has been added successfully!`);
      } catch (e) {
        toast.error(`Failed to add a new strain`);
      }
    }
  };

  const updateExistStrain = async () => {
    console.log(product);
    const { error } = strainValidation.validate(product);
    if (error) {
      console.log(error);

      toast.error(`Failed to validate a strain`);
    } else {
      try {
        //updates server
        updateStrain(product);

        //updates context (memory)
        const strainIndex = strains.findIndex((str) => str._id === product._id);
        if (strainIndex > -1) {
          const newStrains = [...strains];
          newStrains[strainIndex] = product;
          setStrains(newStrains);
          navigate("/strains");
        }
        toast.success(`${product.name} has been updated successfully!`);
      } catch (e) {
        toast.error(`Failed to update a strain`);
      }
    }
  };

  return (
    <MyContainer>
      <div className="d-flex flex-row flex-wrap align-items-center justify-content-center">
        <Form style={{ width: 350, padding: "0px 40px" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              value={product.name}
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
              placeholder="Enter name"
            />
            <Form.Text>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {product.type.to || "Select type"}
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
              onChange={(e) =>
                setProduct({ ...product, price: e.target.value })
              }
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
        <Product isPreview={true} product={product} />
      </div>
    </MyContainer>
  );
}
