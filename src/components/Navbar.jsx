import "../styles/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-header">
        <h1>RECIPEAS</h1>
      </div>
      <div className="navbar-menu">
        <ul>
          <li>
            <Link to="/" 
              className={({ isActive }) => isActive ? "active" : ""}
            >Search</Link>
          </li>
          <li>
          <Link to="/saved" 
              className={({ isActive }) => isActive ? "active" : ""}
            >View Saved</Link>
          </li>
          <li>
          <Link to="/add" 
              className={({ isActive }) => isActive ? "active" : ""}
            >Add a Dish</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;