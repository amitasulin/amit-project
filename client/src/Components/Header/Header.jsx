import React from "react";
import "./Header.css";
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
        <Link to="/strains"> Products </Link>
        <Link to="/contactus"> Contact Us </Link>
        <Link to="/signin">Sign In</Link>
      </nav>

      <div className="user-profile">
        <ProfileIndicator />
      </div>
    </div>
  );
}
