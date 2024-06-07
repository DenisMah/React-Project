import "./Navbar.css";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

function navbar() {
  return (
    <div className="container-fluid" id="navbar-container">
      <nav>
        <h3>Deenko.dev</h3>
        <ul>
          <li>
            <a className="anchor-navbar">Home</a>
          </li>
          <li>
            <a className="anchor-navbar">About</a>
          </li>
          <li>
            <a className="anchor-navbar">Project</a>
          </li>
          <li>
            <a className="anchor-navbar">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default navbar;
