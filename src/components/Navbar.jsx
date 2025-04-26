
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-header">
        <a href="/">RECIPEAS</a>
      </div>
      <ul className="navbar-menu">
        <li><a href="/">Search</a></li>
        <li><a href="/about">View Saved</a></li>
        <li><a href="/contact">Create a Dish</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;