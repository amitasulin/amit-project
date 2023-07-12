import React from 'react';
import './Header.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom'; // Import Link from react-router-dom if you're using React Router

const Header = () => {
  return (
    <nav className="header">
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );

};





export default Header;