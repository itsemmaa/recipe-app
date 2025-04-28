import "../styles/navbar.css";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-header">
        <h1>RECIPEAS</h1>
      </div>
      <div className="navbar-menu">
        <ul>
          <li><a href="/">Search</a></li>
          <li><a href="/about">View Saved</a></li>
          <li><a href="/contact">Add a Dish</a></li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;