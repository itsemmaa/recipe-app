import DishType from "./Dropdowns/DishType.jsx";
import Time from "./Dropdowns/Time.jsx";
import Ingredients from "./Dropdowns/Ingredients.jsx";
import CreatedBy from "./Dropdowns/CreatedBy.jsx";
import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";

import "../styles/dropdownMenu.css";

const DropdownMenu = () => {
    const { updateFilter } = useContext(RecipeContext);

    const clearAllFilters = () => {
        updateFilter("dishType", "");
        updateFilter("time", "");
        updateFilter("ingredients", "");
        updateFilter("createdBy", "");
    };

    return (
        <div className="dropdown-menu">
            <DishType />
            <Time />
            <Ingredients />
            <CreatedBy />
            <button onClick={clearAllFilters} className="clear-button">Clear All</button>
        </div>
    );
};

export default DropdownMenu;