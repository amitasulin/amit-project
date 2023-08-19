import { useContext } from "react";

import Offcanvas from "react-bootstrap/Offcanvas";
import { AppContext } from "../../context/appContext";
import { Link } from "react-router-dom";

function MobileMenu() {
  const { showMobileMenu, setShowMobileMenu } = useContext(AppContext);

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
            {/* <Link to="/cart">Cart</Link> */}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export { MobileMenu };
