import React from 'react';
import './Header.css'; // Import the CSS file for styling
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
        <Link to="/login">Login</Link>
        <Link to="/strains"> All Strains </Link>
        <Link to="/about"> About </Link>

      </nav>

      <div className="user-profile">
      </div>
    </div>
  );
}
