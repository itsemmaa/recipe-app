import DishType from "./Dropdowns/DishType.jsx";
import Time from "./Dropdowns/Time.jsx";
import Ingredients from "./Dropdowns/Ingredients.jsx";
import CreatedBy from "./Dropdowns/CreatedBy.jsx";

import "../styles/dropdownMenu.css";

const DropdownMenu = () => {
    return (
        <div className="dropdown-menu">
            <DishType/>
            <Time/>
            <Ingredients/>
            <CreatedBy/>
        </div>
    );
};
export default DropdownMenu;