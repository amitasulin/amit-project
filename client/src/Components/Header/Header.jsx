import React, { useContext, useRef } from "react";
import "./Header.css";

import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { Button, Col, Form, Row } from "react-bootstrap";
import { StrainContext } from "../../context/strainContext";
import { AppContext } from "../../context/appContext";

export default function Header() {
  const { isLoggedIn } = useContext(UserContext);
  const { fetchAllStrains } = useContext(StrainContext);
  const { showMobileMenu, setShowMobileMenu } = useContext(AppContext);
  const { userData, signOut } = useContext(UserContext);

  const navigate = useNavigate();
  const searchRef = useRef();

  const onSearch = async () => {
    await fetchAllStrains(searchRef.current.value);
    navigate("/strains");
  };

  return (
    <div className="Header">
      <div
        className="d-flex flex-row"
        style={{ padding: "20px 20px", justifyContent: "space-between" }}
      >
        <Col
          style={{
            margin: "auto",
            maxWidth: "240px",
          }}
        >
          <div style={{ margin: "0px 0px 0px 20px" }} className="logo">
            <span> Amit </span>
            🌱
            <span> Cannabis shop </span>
            <div
              style={{ position: "absolute", top: 20, left: 20 }}
              className="d-sm-block d-lg-none"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              ☰
            </div>
          </div>
        </Col>
        <Col
          style={{
            margin: "auto",
            justifyContent: "space-around",
            display: "flex",
            maxWidth: "500px",
          }}
          className="d-none d-lg-block"
        >
          <Link to="/">Home</Link>
          {" | "}
          <Link to="/strains">Products</Link>
          {" | "}
          <Link to="/users">Users</Link>
          {" | "}
          <Link to="/contactus">Contact Us</Link>
          {" | "}
          <Link to="/about">About</Link>
        </Col>

        <Col
          style={{
            margin: "auto",
            maxWidth: "400px",
          }}
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

        <Col className="d-none d-lg-block" style={{ margin: "auto" }}>
          {isLoggedIn ? (
            <div className="LoggedIn">
              <Link to="/profile">
                {userData.firstName}
                <i
                  style={{ marginLeft: "6px" }}
                  className="bi bi-person-circle"
                ></i>
              </Link>
              <Link to="/cart">
                Cart
                <i style={{ marginLeft: "6px" }} className="bi bi-cart"></i>
              </Link>
              <Link to="/orders">
                Orders
                <i
                  style={{ marginLeft: "6px" }}
                  className="bi bi-list-check"
                ></i>
              </Link>
              <Link to="/wishlist">
                Wishlist
                <i
                  style={{ marginLeft: "6px" }}
                  className="bi bi-person-lines-fill"
                ></i>
              </Link>
              <Button onClick={() => signOut()} variant="danger">
                Sign out
                <i
                  style={{ marginLeft: "6px" }}
                  className="bi bi-box-arrow-in-right"
                ></i>
              </Button>
            </div>
          ) : (
            <Link to="/signin">Sign In</Link>
          )}
        </Col>
      </div>
    </div>
  );
}
