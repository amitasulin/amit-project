import React from "react";
import "./Footer.css"; // Import the CSS file for styling
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Amit Canabbis Shop.</p>
        <p>All rights reserved to Amit Asulin.</p>
        <li>
          <Link to="/ShippingAndReturnPolicy">Shipping and Return Policy</Link>
        </li>
        <li>
          <Link to="/FAQ">FAQ</Link>
        </li>
      </div>
    </footer>
  );
};

export default Footer;
