
function CreatedBy() {
    const [isOpen, setIsOpen] = useState(false);
    
        const toggleDropdown = () => setIsOpen(!isOpen);
    
        return (
            <div className="dropdown" onClick={toggleDropdown}>
            <h1>Created By</h1>
            {isOpen && (
                <div>
                    <ul>
                        <li>Me</li>
                        <li>Angie</li>
                        <li>Stephanie</li>
                        <li>Craig</li>
                    </ul>
                </div>)}
            </div>
        )
}

export default CreatedBy;