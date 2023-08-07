import React, { useContext, useRef } from "react";
import "./Header.css";
import ProfileIndicator from "./ProfileIndicator/ProfileIndicator";

import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { StrainContext } from "../../context/strainContext";

export default function Header() {
  const { isLoggedIn } = useContext(UserContext);
  const { fetchAllStrains } = useContext(StrainContext);

  const navigate = useNavigate();

  const searchRef = useRef();

  const onSearch = async () => {
    await fetchAllStrains(searchRef.current.value);
    navigate("/strains");
  };

  return (
    <div className="Header">
      <Row style={{ padding: "20px 0px", justifyContent: "space-between" }}>
        <Col
          style={{
            margin: "auto",
            maxWidth: "240px",
          }}
          lg
        >
          <div className="logo">
            <span> Amit </span>
            🌱
            <span> Cannabis shop </span>
          </div>
        </Col>
        <Col
          style={{
            margin: "auto",
            justifyContent: "space-around",
            display: "flex",
            maxWidth: "500px",
          }}
          lg
        >
          <Link to="/">Home</Link>
          <Link to="/strains">Products</Link>
          <Link to="/strains">Users</Link>
          <Link to="/contactus">Contact Us</Link>
        </Col>

        <Col
          style={{
            margin: "auto",
            maxWidth: "400px",
          }}
          lg
        >
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              onSearch();
            }}
            className="d-flex"
          >
            <Form.Control
              ref={searchRef}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button onClick={onSearch} variant="primary">
              Search
            </Button>
          </Form>
        </Col>

        <Col style={{ margin: "auto", maxWidth: "400px" }} lg>
          {isLoggedIn ? null : <Link to="/signin">Sign In</Link>}

          <ProfileIndicator />
        </Col>
      </Row>
    </div>
  );
}
