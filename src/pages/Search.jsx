import React, { useContext } from 'react';
import Searchbar from "../components/Searchbar";
import DropdownMenu from "../components/DropdownMenu";
import RecipeCard from "../components/RecipeCard";
import { RecipeContext } from "../context/RecipeContext";
import "../styles/searchPage.css";


const Search = () => {
  const { recipes, updateFilter } = useContext(RecipeContext);

  const setSearchQuery = (query) => {
    updateFilter("searchQuery", query);
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
          <div className="search-results">
            {recipes.map((recipe, index) => (
              <RecipeCard key={index} image={recipe.image} name={recipe.name} description={recipe.description} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
