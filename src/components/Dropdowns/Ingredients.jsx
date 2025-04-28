import { useState } from "react";

const Ingredients = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className="dropdown">
            <div className="dropdown-header" onClick={toggleDropdown}>
                <h1>Ingredients</h1>
                <span className={`arrow ${!isOpen ? 'open' : ''}`}>▼</span>
            </div>
            {isOpen && (
                <div>
                    <ul>
                        <li>Beef</li>
                        <li>Pork</li>
                        <li>Chicken</li>
                        <li>Seafood</li>
                        <li>Pasta</li>
                        <li>Vegetables</li>
                        <li>Rice</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Ingredients;