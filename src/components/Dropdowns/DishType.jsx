import { useContext, useState } from 'react';
import { RecipeContext } from "../../context/RecipeContext";

const DishType = () => {
    const { updateFilter } = useContext(RecipeContext);
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelect = (value) => {
        updateFilter("dishType", value);
        setIsOpen(false);
    };

    return (
        <div className="dropdown">
            <div className="dropdown-header" onClick={toggleDropdown}>
                <h1>Dish Type</h1>
                <span className={`arrow ${!isOpen ? 'open' : ''}`}>▼</span>
            </div>
            {isOpen && (
                <div>
                    <ul>
                        <li onClick={() => handleSelect("")}>All</li>
                        <li onClick={() => handleSelect("Soup")}>Soup</li>
                        <li onClick={() => handleSelect("Appetizer")}>Appetizer</li>
                        <li onClick={() => handleSelect("Main")}>Main</li>
                        <li onClick={() => handleSelect("Breakfast")}>Breakfast</li>
                        <li onClick={() => handleSelect("Lunch")}>Lunch</li>
                        <li onClick={() => handleSelect("Dinner")}>Dinner</li>
                        <li onClick={() => handleSelect("Drinks")}>Drinks</li>
                        <li onClick={() => handleSelect("Dessert")}>Dessert</li>
                    </ul>
                    <button onClick={() => handleSelect("")} className="clear-button">Clear</button>
                </div>
            )}
        </div>
    );
};

export default DishType;