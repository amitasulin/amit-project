import React, { useContext } from "react";
import { UserContext } from "../../../../context/userContext";
import "./LoggedIn.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function LoggedIn() {
  const { userData, signOut } = useContext(UserContext);

  return (
    <div className="LoggedIn">
      <Link to="/profile">
        {userData.firstName}
        <i style={{ marginLeft: "6px" }} className="bi bi-person-circle"></i>
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
  );
}
