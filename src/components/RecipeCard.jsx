import "../styles/recipeCard.css"; 
import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";

const RecipeCard = ({ image, name, description, ingredients, time, author, isExpanded, toggleExpanded }) => {
    const { toggleSaveRecipe, savedRecipes } = useContext(RecipeContext);
    const isSaved = savedRecipes.some((recipe) => recipe.name === name);

    const details = [
        `Time: ${time} minutes`,
        `Author: ${author}`,
        `Ingredients: ${ingredients.join(", ")}`,
    ];

    return (
        <div 
            className={`recipe-card ${isExpanded ? "expanded" : ""}`} 
            onClick={!isExpanded ? toggleExpanded : undefined}
        >
            <div className="recipe-image">
                {image ? (
                    <img src={image} alt={name || "Recipe Image"} />
                ) : (
                    <p>No Image Available</p>
                )}
            </div>
            <div className="recipe-content">
                <h3>{name}</h3>
                <p>{description}</p>
                <button 
                    onClick={(e) => {
                        e.stopPropagation();
                        toggleSaveRecipe({ image, name, description, ingredients, time, author });
                    }} 
                    style={{
                        padding: '5px 10px',
                        borderRadius: '4px',
                        border: 'none',
                        backgroundColor: isSaved ? '#ff0000' : '#000',
                        color: '#fff',
                        cursor: 'pointer',
                        marginTop: '10px'
                    }}
                >
                    {isSaved ? "Unfavorite" : "Favorite"}
                </button>
                {isExpanded && (
                    <div className="recipe-details">
                        <h4>Details:</h4>
                        <ul>
                            {details.map((detail, index) => (
                                <li key={index}>{detail}</li>
                            ))}
                        </ul>
                        <button 
                            onClick={(e) => {
                                e.stopPropagation();
                                toggleExpanded();
                            }} 
                            style={{
                                marginTop: '20px',
                                padding: '10px 15px',
                                borderRadius: '4px',
                                border: '1px solid #ccc',
                                backgroundColor: '#f5f5f5',
                                color: '#333',
                                cursor: 'pointer'
                            }}
                        >
                            Back to Results
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RecipeCard;