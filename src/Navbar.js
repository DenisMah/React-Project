import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "@fontsource/roboto/700.css";

function Navbar() {
  return (
    <div className="container-fluid" id="navbar-container">
      <nav>
        <h3>Deenko.dev</h3>
        <ul>
          <li>
            <Link to="/" className="anchor-navbar">
              Home
            </Link>
          </li>
          <li>
            <Link to="/aboutme" className="anchor-navbar">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="anchor-navbar">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="anchor-navbar">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
