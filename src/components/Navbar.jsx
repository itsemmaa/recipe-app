import "../styles/navbar.css";

const Navbar = ({ currentPage, setCurrentPage }) => {
  return (
    <nav className="navbar">
      <div className="navbar-header">
        <h1>RECIPEAS</h1>
      </div>
      <div className="navbar-menu">
        <ul>
          <li>
            <button 
              onClick={() => setCurrentPage("search")} 
              className={currentPage === "search" ? "active" : ""}
            >
              Search
            </button>
          </li>
          <li>
            <button 
              onClick={() => setCurrentPage("savedPage")} 
              className={currentPage === "savedPage" ? "active" : ""}
            >
              View Saved
            </button>
          </li>
          <li>
            <button 
              onClick={() => setCurrentPage("addPage")} 
              className={currentPage === "addPage" ? "active" : ""}
            >
              Add a Dish
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;