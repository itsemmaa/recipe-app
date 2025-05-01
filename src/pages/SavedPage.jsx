import React, { useContext, useState } from 'react';
import RecipeCard from "../components/RecipeCard";
import { RecipeContext } from "../context/RecipeContext";
import "../styles/savedPage.css";

const SavedPage = () => {
  const { savedRecipes } = useContext(RecipeContext);
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleExpandedCard = (name) => {
    setExpandedCard((prev) => (prev === name ? null : name));
  };

  return (
    <div className="saved-page">
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Saved Recipes</h2>
      <div className="search-results-container">
        {expandedCard ? (
          <RecipeCard 
            image={savedRecipes.find((recipe) => recipe.name === expandedCard).image}
            name={expandedCard}
            description={savedRecipes.find((recipe) => recipe.name === expandedCard).description}
            ingredients={savedRecipes.find((recipe) => recipe.name === expandedCard).ingredients}
            time={savedRecipes.find((recipe) => recipe.name === expandedCard).time}
            author={savedRecipes.find((recipe) => recipe.name === expandedCard).author}
            isExpanded={true}
            toggleExpanded={() => toggleExpandedCard(null)}
          />
        ) : (
          <div className="search-results">
            {savedRecipes.length > 0 ? (
              savedRecipes.map((recipe, index) => (
                <RecipeCard 
                  key={index} 
                  image={recipe.image} 
                  name={recipe.name} 
                  description={recipe.description} 
                  ingredients={recipe.ingredients}
                  time={recipe.time}
                  author={recipe.author}
                  isExpanded={false}
                  toggleExpanded={() => toggleExpandedCard(recipe.name)}
                />
              ))
            ) : (
              <p style={{ textAlign: 'center', color: '#666' }}>No saved recipes yet.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedPage;
