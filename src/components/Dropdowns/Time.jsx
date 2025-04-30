import { useContext, useState } from 'react';
import { RecipeContext } from "../../context/RecipeContext";

const Time = () => {
    const { updateFilter } = useContext(RecipeContext);
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelect = (value) => {
        updateFilter("time", value);
        setIsOpen(false);
    };

    return (
        <div className="dropdown">
            <div className="dropdown-header" onClick={toggleDropdown}>
                <h1>Time</h1>
                <span className={`arrow ${!isOpen ? 'open' : ''}`}>▼</span>
            </div>
            {isOpen && (
                <div>
                    <ul>
                        <li onClick={() => handleSelect("")}>All</li>
                        <li onClick={() => handleSelect("15")}>15 minutes or less</li>
                        <li onClick={() => handleSelect("30")}>30 minutes or less</li>
                        <li onClick={() => handleSelect("60")}>1 hour or less</li>
                        <li onClick={() => handleSelect("120")}>2 hours or less</li>
                    </ul>
                    <button onClick={() => handleSelect("")} className="clear-button">Clear</button>
                </div>
            )}
        </div>
    );
};

export default Time;