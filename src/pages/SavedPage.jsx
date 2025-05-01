import React, { useContext } from 'react';
import RecipeCard from "../components/RecipeCard";
import { RecipeContext } from "../context/RecipeContext";
import "../styles/savedPage.css";

const SavedPage = () => {
  const { savedRecipes } = useContext(RecipeContext);

  return (
    <div className="saved-page">
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Saved Recipes</h2>
      <div className="search-results">
        {savedRecipes.length > 0 ? (
          savedRecipes.map((recipe, index) => (
            <RecipeCard key={index} image={recipe.image} name={recipe.name} description={recipe.description} />
          ))
        ) : (
          <p style={{ textAlign: 'center', color: '#666' }}>No saved recipes yet.</p>
        )}
      </div>
    </div>
  );
};

export default SavedPage;
