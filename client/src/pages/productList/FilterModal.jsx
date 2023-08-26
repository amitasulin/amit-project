import React, { useContext, useState } from "react";
import "./productList.css";
import { StrainContext } from "../../context/strainContext";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";

export default function FilterModal({ showFilters, setShowFilters }) {
  const { fetchAllStrains, search } = useContext(StrainContext);

  const [filters, setFilters] = useState({
    price: [],
    thc: [],
    type: undefined,
  });

  return (
    <Modal onHide={() => setShowFilters(false)} show={showFilters}>
      <div
        style={{ padding: 50 }}
        className="d-flex flex-column align-items-center justify-content-around flex-wrap"
      >
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon2">Type</InputGroup.Text>
          <Form.Select
            onChange={(e) =>
              setFilters({ ...filters, type: e.currentTarget.value })
            }
            value={filters.type}
            aria-label="Default select example"
          >
            <option></option>
            <option value="hybrid">Hybrid</option>
            <option value="sativa">Sativa</option>
            <option value="indica">Indica</option>
          </Form.Select>
        </InputGroup>
        <InputGroup className="mb-3 w-auto">
          <InputGroup.Text id="basic-addon1">Price</InputGroup.Text>

          <InputGroup.Text id="basic-addon1">From</InputGroup.Text>
          <Form.Control
            onChange={(e) =>
              setFilters({
                ...filters,
                price: [e.currentTarget.value, filters.price[1]],
              })
            }
            value={filters.price[0]}
            type="number"
            aria-label="Start price"
            aria-describedby="basic-addon1"
          />
          <InputGroup.Text id="basic-addon2">To</InputGroup.Text>
          <Form.Control
            onChange={(e) =>
              setFilters({
                ...filters,
                price: [filters.price[0], e.currentTarget.value],
              })
            }
            value={filters.price[1]}
            type="number"
            aria-label="End price"
            aria-describedby="basic-addon2"
          />
        </InputGroup>

        <InputGroup className=" mb-3 w-auto">
          <InputGroup.Text id="basic-addon1">THC</InputGroup.Text>

          <InputGroup.Text id="basic-addon1">From</InputGroup.Text>
          <Form.Control
            onChange={(e) =>
              setFilters({
                ...filters,
                thc: [e.currentTarget.value, filters.thc[1]],
              })
            }
            value={filters.thc[0]}
            type="number"
            aria-label="Start THC"
            aria-describedby="basic-addon1"
          />
          <InputGroup.Text id="basic-addon2">To</InputGroup.Text>
          <Form.Control
            onChange={(e) =>
              setFilters({
                ...filters,
                thc: [filters.thc[0], e.currentTarget.value],
              })
            }
            value={filters.thc[1]}
            type="number"
            aria-label="End THC"
            aria-describedby="basic-addon2"
          />
        </InputGroup>

        <Button onClick={() => fetchAllStrains({ search, filters })}>
          Filter
        </Button>
      </div>
    </Modal>
  );
}
