
function Ingredients() {
    const [isOpen, setIsOpen] = useState(false);
    
        const toggleDropdown = () => setIsOpen(!isOpen);
    
        return (
            <div className="dropdown" onClick={toggleDropdown}>
            <h1>Ingredients</h1>
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
                </div>)}
            </div>
        )
}

export default Ingredients;