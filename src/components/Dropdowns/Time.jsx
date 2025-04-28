import { useState } from "react";

const Time = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className="dropdown">
            <div className="dropdown-header" onClick={toggleDropdown}>
                <h1>Time</h1>
                <span className={`arrow ${!isOpen ? 'open' : ''}`}>▼</span>
            </div>
            {isOpen && (
                <div>
                    <ul>
                        <li>Under 15 min</li>
                        <li>Under 30 min</li>
                        <li>Under 1 hour</li>
                        <li>Over 1 hour</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Time;