import "./Navbar.css";

function navbar() {
  return (
    <div className="container-fluid">
      <nav>
        <h3>Deenko.dev</h3>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Project</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default navbar;
