import React, { useContext } from "react";
import { UserContext } from "../../../../context/userContext";
import "./LoggedIn.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function LoggedIn() {
  const { userData, signOut } = useContext(UserContext);

  return (
    <div className="LoggedIn">
      <div>Hello</div>
      <Link to="/profile">
      {userData.firstName}
      <i style={{marginLeft:'6px'}} class="bi bi-person-circle"></i>

      </Link>
            <Button onClick={() => signOut()} variant="danger">
        Sign out
        <i style={{marginLeft:'6px'}} class="bi bi-box-arrow-in-right"></i>
      </Button>
    </div>
  );
}
