import React, { useContext, useState } from 'react';
import Searchbar from "../components/Searchbar";
import DropdownMenu from "../components/DropdownMenu";
import RecipeCard from "../components/RecipeCard";
import { RecipeContext } from "../context/RecipeContext";
import "../styles/searchPage.css";

const Search = () => {
  const { recipes, updateFilter } = useContext(RecipeContext);
  const [expandedCard, setExpandedCard] = useState(null);

  const setSearchQuery = (query) => {
    updateFilter("searchQuery", query);
  };

  const toggleExpandedCard = (name) => {
    setExpandedCard((prev) => (prev === name ? null : name));
  };

  return (
    <div className="search-page">
      <div className="searchbar-container">
        <Searchbar setSearchQuery={setSearchQuery} />
      </div>
      <div className="search-page-main-container">
        <div className="dropdown-menu-container">
          <DropdownMenu />
        </div>
        
        <div className="search-results-container">
          {expandedCard ? (
            <RecipeCard 
              image={recipes.find((recipe) => recipe.name === expandedCard).image}
              name={expandedCard}
              description={recipes.find((recipe) => recipe.name === expandedCard).description}
              ingredients={recipes.find((recipe) => recipe.name === expandedCard).ingredients}
              time={recipes.find((recipe) => recipe.name === expandedCard).time}
              author={recipes.find((recipe) => recipe.name === expandedCard).author}
              isExpanded={true}
              toggleExpanded={() => toggleExpandedCard(null)}
            />
          ) : (
            <div className="search-results">
              {recipes.map((recipe, index) => (
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
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
