import React from "react";
import "./Footer.css"; // Import the CSS file for styling
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} Your Website. All rights reserved.
        </p>
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
