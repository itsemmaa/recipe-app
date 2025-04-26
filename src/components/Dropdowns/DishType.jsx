import React, { useState } from 'react';

function DishType() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className="dropdown" onClick={toggleDropdown}>
        <h1>Dish Type</h1>
        {isOpen && (
            <div>
                <ul>
                    <li>Soup</li>
                    <li>Appetizer</li>
                    <li>Main</li>
                    <li>Breakfast</li>
                    <li>Lunch</li>
                    <li>Dinner</li>
                    <li>Drinks</li>
                    <li>Dessert</li>
                </ul>
            </div>)}
        </div>
    )
}

export default DishType;