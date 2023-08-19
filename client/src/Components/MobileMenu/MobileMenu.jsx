import { useContext } from "react";

import Offcanvas from "react-bootstrap/Offcanvas";
import { AppContext } from "../../context/appContext";
import { Link } from "react-router-dom";
import ProfileIndicator from "../Header/ProfileIndicator/ProfileIndicator";
import { UserContext } from "../../context/userContext";

function MobileMenu() {
  const { showMobileMenu, setShowMobileMenu } = useContext(AppContext);
  const { isLoggedIn } = useContext(UserContext);

  const handleClose = () => setShowMobileMenu(false);

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
            <ProfileIndicator />{" "}
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
            <Link onClick={handleClose} to="/users">
              Users
            </Link>
            <Link onClick={handleClose} to="/cart">
              Cart
            </Link>
            <Link onClick={handleClose} to="/orders">
              Orders
            </Link>
            <Link onClick={handleClose} to="/wishlist">
              Wishlist
            </Link>
            <Link onClick={handleClose} to="/profile">
              Profile
            </Link>
            {isLoggedIn ? null : <Link to="/signin">Sign In</Link>}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export { MobileMenu };
