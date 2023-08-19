import { useContext } from "react";

import Offcanvas from "react-bootstrap/Offcanvas";
import { AppContext } from "../../context/appContext";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { Button } from "react-bootstrap";

function MobileMenu() {
  const { showMobileMenu, setShowMobileMenu } = useContext(AppContext);
  const { isLoggedIn } = useContext(UserContext);

  const handleClose = () => setShowMobileMenu(false);
  const { userData, signOut } = useContext(UserContext);

  return (
    <>
      <Offcanvas
        style={{ backgroundColor: " #26a550" }}
        show={showMobileMenu}
        onHide={handleClose}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
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
            {isLoggedIn ? null : <Link to="/signin">Sign In</Link>}
            <Link to="/profile">
              {userData?.firstName}
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
              <i style={{ marginLeft: "6px" }} className="bi bi-list-check"></i>
            </Link>
            <Link to="/wishlist">
              Wishlist
              <i
                style={{ marginLeft: "6px" }}
                className="bi bi-person-lines-fill
"
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
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export { MobileMenu };
