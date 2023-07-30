import React from "react";
import "./Header.css"; // Import the CSS file for styling
import ProfileIndicator from "./ProfileIndicator/ProfileIndicator";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="Header">
      <div className="logo">
        <span className="Amit"> Amit </span>
        🌱
        <span className="Cannabis shop"> Cannabis shop </span>
      </div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/strains"> All Strains </Link>
        <Link to="/about"> About </Link>
      </nav>

      <div className="user-profile">
        <ProfileIndicator />
      </div>
    </div>
  );
}
