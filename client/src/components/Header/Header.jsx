import React, { useContext, useRef } from "react";
import "./Header.css";

import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { Button, Col, Form } from "react-bootstrap";
import { StrainContext } from "../../context/strainContext";
import { AppContext } from "../../context/appContext";
import logo from "../../assets/608dbc866bdc4afcb272cb70110c9015.png";

export default function Header() {
  const { isLoggedIn } = useContext(UserContext);
  const { fetchAllStrains, setSearch } = useContext(StrainContext);
  const { showMobileMenu, setShowMobileMenu } = useContext(AppContext);
  const { userData, signOut } = useContext(UserContext);
  const isAdmin = userData?.role === "admin";

  const { isAdult } = useContext(AppContext);
  const isAdultStorage = localStorage.getItem("isAdult");

  const navigate = useNavigate();
  const searchRef = useRef();

  const onSearch = async () => {
    const searchVal = searchRef.current.value;
    await fetchAllStrains({ search: searchVal });
    setSearch(searchVal);
    navigate("/strains");
  };

  if (!isAdult && !isAdultStorage) {
    return null;
  }

  return (
    <div className="Header">
      <div
        className="d-flex flex-row flex-wrap"
        style={{
          justifyContent: "space-between",
          position: "relative",
          padding: "20px 40px",
        }}
      >
        <Col
          lg
          style={{
            margin: "auto",
          }}
        >
          <div className="logo">
            <img
              className="img-fluid"
              src={logo}
              alt="logo"
              style={{ height: "100px" }}
            />
            <div
              style={{
                position: "absolute",
                alignItems: "center",
                left: 20,
                top: 0,
                bottom: 0,
                cursor: "pointer",
              }}
              className="d-flex d-lg-none"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <i className="bi bi-list"></i>
            </div>
          </div>
        </Col>
        <Col
          style={{
            margin: "auto 20px",
            justifyContent: "space-around",
            display: "flex",
            maxWidth: "500px",
          }}
          className="d-none d-lg-block"
        >
          <Link to="/">Home</Link>
          {" | "}
          <Link to="/strains">Products</Link>

          {isAdmin && " | "}
          {isAdmin ? <Link to="/users">Users</Link> : null}

          {" | "}
          <Link to="/contactus">Contact Us</Link>
          {" | "}
          <Link to="/about">About</Link>
        </Col>

        <Col
          style={{
            margin: "auto 20px",
            maxWidth: "450px",
            minWidth: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
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

              <Link to="/wishlist">
                Wishlist
                <i
                  style={{ marginLeft: "6px" }}
                  className="bi bi-person-lines-fill"
                ></i>
              </Link>
              <Button
                style={{ position: "absolute", bottom: -40, right: 0 }}
                onClick={() => {
                  signOut();
                  navigate("/");
                }}
                variant="danger"
              >
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
