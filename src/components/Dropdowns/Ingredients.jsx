import { useContext, useState } from 'react';
import { RecipeContext } from "../../context/RecipeContext";

const Ingredients = () => {
    const { updateFilter } = useContext(RecipeContext);
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelect = (value) => {
        updateFilter("ingredients", value);
        setIsOpen(false);
    };

    return (
        <div className="dropdown">
            <div className="dropdown-header" onClick={toggleDropdown}>
                <h1>Ingredients</h1>
                <span className={`arrow ${!isOpen ? 'open' : ''}`}>▼</span>
            </div>
            {isOpen && (
                <div>
                    <ul>
                        <li onClick={() => handleSelect("")}>All</li>
                        <li onClick={() => handleSelect("Chicken")}>Chicken</li>
                        <li onClick={() => handleSelect("Tomato Sauce")}>Tomato Sauce</li>
                        <li onClick={() => handleSelect("Garlic")}>Garlic</li>
                        <li onClick={() => handleSelect("Parmesan Cheese")}>Parmesan Cheese</li>
                    </ul>
                    <button onClick={() => handleSelect("")} className="clear-button">Clear</button>
                </div>
            )}
        </div>
    );
};

export default Ingredients;