import "../styles/searchbar.css";

const Searchbar = ({ setSearchQuery }) => {
    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className="searchbar">
            <input type="text" placeholder="Search..." onChange={handleInputChange} />
            <button>S</button>
        </div>
    );
};
export default Searchbar;