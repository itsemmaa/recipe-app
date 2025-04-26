
function RecipeCard() {
    return (
        <div className="recipe-card">
            <div className="recipe-image">
                <img src={image} alt={image}/>
            </div>
            <div className="recipe-content">
                <p>{name}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default RecipeCard;