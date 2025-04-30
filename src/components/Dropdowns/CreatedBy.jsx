import { useContext, useState } from 'react';
import { RecipeContext } from "../../context/RecipeContext";

const CreatedBy = () => {
    const { updateFilter } = useContext(RecipeContext);
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelect = (value) => {
        updateFilter("createdBy", value);
        setIsOpen(false);
    };

    return (
        <div className="dropdown">
            <div className="dropdown-header" onClick={toggleDropdown}>
                <h1>Created By</h1>
                <span className={`arrow ${!isOpen ? 'open' : ''}`}>▼</span>
            </div>
            {isOpen && (
                <div>
                    <ul>
                        <li onClick={() => handleSelect("")}>All</li>
                        <li onClick={() => handleSelect("Chef Mario")}>Chef Mario</li>
                        <li onClick={() => handleSelect("Chef Priya")}>Chef Priya</li>
                        <li onClick={() => handleSelect("Chef Julia")}>Chef Julia</li>
                    </ul>
                    <button onClick={() => handleSelect("")} className="clear-button">Clear</button>
                </div>
            )}
        </div>
    );
};

export default CreatedBy;