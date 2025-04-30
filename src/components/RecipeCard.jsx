import "../styles/recipeCard.css"; 
import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";

const RecipeCard = ({ image, name, description }) => {
    const { toggleSaveRecipe, savedRecipes } = useContext(RecipeContext);
    const isSaved = savedRecipes.some((recipe) => recipe.name === name);

    return (
        <div className="recipe-card">
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
                    onClick={() => toggleSaveRecipe({ image, name, description })} 
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
            </div>
        </div>
    );
};

export default RecipeCard;