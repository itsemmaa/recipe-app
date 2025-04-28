import { useState } from "react";

const CreatedBy = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className="dropdown">
            <div className="dropdown-header" onClick={toggleDropdown}>
                <h1>Created By</h1>
                <span className={`arrow ${!isOpen ? 'open' : ''}`}>▼</span>
            </div>
            {isOpen && (
                <div>
                    <ul>
                        <li>Me</li>
                        <li>Angie</li>
                        <li>Stephanie</li>
                        <li>Craig</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default CreatedBy;