import DishType from './Dropdowns/DishType';
import Time from './Dropdowns/Time';
import Ingredients from './Dropdowns/Ingredients';
import CreatedBy from './Dropdowns/CreatedBy';

function DropdownMenu() {
    return (
        <div className="dropdown-menu">
            <DishType/>
            <Time/>
            <Ingredients/>
            <CreatedBy/>
        </div>
    )
}

export default DropdownMenu;