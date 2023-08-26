import { useContext } from "react";

import Offcanvas from "react-bootstrap/Offcanvas";
import { AppContext } from "../../context/appContext";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { Button } from "react-bootstrap";
import logo from "../../assets/608dbc866bdc4afcb272cb70110c9015.png";

function MobileMenu() {
  const { showMobileMenu, setShowMobileMenu } = useContext(AppContext);
  const { isLoggedIn } = useContext(UserContext);

  const handleClose = () => setShowMobileMenu(false);
  const { userData, signOut } = useContext(UserContext);

  const navigate = useNavigate();
  return (
    <>
      <Offcanvas
        style={{ backgroundColor: " #26a550" }}
        show={showMobileMenu}
        onHide={handleClose}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <img
          className="img-fluid"
          src={logo}
          alt="logo"
          style={{ height: "100px", width: "100px" }}
        />
        <Offcanvas.Body>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Link onClick={handleClose} to="/">
              Home
            </Link>
            <Link onClick={handleClose} to="/strains">
              Products
            </Link>
            <Link onClick={handleClose} to="/users">
              Users
            </Link>
            <Link onClick={handleClose} to="/contactus">
              Contact Us
            </Link>
            {isLoggedIn ? null : (
              <Link onClick={handleClose} to="/signin">
                Sign In
              </Link>
            )}
            <Link onClick={handleClose} to="/profile">
              {userData?.firstName}
              <i
                style={{ marginLeft: "6px" }}
                className="bi bi-person-circle"
              ></i>
            </Link>
            <Link onClick={handleClose} to="/cart">
              Cart
              <i style={{ marginLeft: "6px" }} className="bi bi-cart"></i>
            </Link>
            <Link onClick={handleClose} to="/orders">
              Orders
              <i style={{ marginLeft: "6px" }} className="bi bi-list-check"></i>
            </Link>
            <Link onClick={handleClose} to="/wishlist">
              Wishlist
              <i
                style={{ marginLeft: "6px" }}
                className="bi bi-person-lines-fill"
              ></i>
            </Link>
            <Button
              onClick={() => {
                handleClose();
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
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export { MobileMenu };
