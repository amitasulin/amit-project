import { useContext } from "react";
import "./MobileMenu.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import { AppContext } from "../../context/appContext";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { Button } from "react-bootstrap";
import logo from "../../assets/608dbc866bdc4afcb272cb70110c9015.png";

function MobileMenu() {
  const { showMobileMenu, setShowMobileMenu } = useContext(AppContext);
  const { isLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClick = (path = "/") => {
    navigate(path);
    setShowMobileMenu(false);
  };
  const { userData, signOut } = useContext(UserContext);

  return (
    <>
      <Offcanvas
        style={{ backgroundColor: " #26a550", opacity: 0.9 }}
        show={showMobileMenu}
        onHide={() => setShowMobileMenu(false)}
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
              fontSize: 24,
            }}
          >
            <div className="menuItem" onClick={() => handleClick("/")}>
              Home
            </div>
            <div className="menuItem" onClick={() => handleClick("/strains")}>
              Products
            </div>

            {isLoggedIn ? (
              <div className="menuItem" onClick={() => handleClick("/users")}>
                Users
              </div>
            ) : null}

            <div className="menuItem" onClick={() => handleClick("/about")}>
              About Us
            </div>

            <div className="menuItem" onClick={() => handleClick("/contactus")}>
              Contact Us
            </div>
            {isLoggedIn ? null : (
              <div className="menuItem" onClick={() => handleClick("/signin")}>
                Sign In
              </div>
            )}
            {userData?.firstName ? (
              <div className="menuItem" onClick={() => handleClick("/profile")}>
                {userData.firstName}
                <i
                  style={{ marginLeft: "6px" }}
                  className="bi bi-person-circle"
                ></i>
              </div>
            ) : null}
            {isLoggedIn ? (
              <>
                <div className="menuItem" onClick={() => handleClick("/cart")}>
                  Cart
                  <i style={{ marginLeft: "6px" }} className="bi bi-cart"></i>
                </div>

                <div
                  className="menuItem"
                  onClick={() => handleClick("/wishlist")}
                >
                  Wishlist
                  <i
                    style={{ marginLeft: "6px" }}
                    className="bi bi-person-lines-fill"
                  ></i>
                </div>
                <div>
                  <Button
                    onClick={() => {
                      signOut();
                      handleClick("/");
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
              </>
            ) : null}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export { MobileMenu };
