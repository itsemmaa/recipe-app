import React, { createContext, useState, useMemo } from 'react';
import spaghettiImage from "../assets/spaghetti-bolognese-10.jpg"; // Import local image
import chickenCurryImage from "../assets/Andhra-Chicken-Curry-2-3.jpg"; // Import local image
import caesarSaladImage from "../assets/caesar-salad.jpg"; // Import local image

export const RecipeContext = createContext(); // Ensure this is exported

export const RecipeProvider = ({ children }) => {
    const [recipes, setRecipes] = useState([
        {
            name: "Spaghetti Bolognese",
            description: "A classic Italian pasta dish with rich meat sauce.",
            image: spaghettiImage, // Use imported image
            time: 45,
            ingredients: ["Spaghetti", "Ground Beef", "Tomato Sauce", "Onion", "Garlic"],
            author: "Chef Mario",
            dishType: "Lunch",
        },
        {
            name: "Chicken Curry",
            description: "A flavorful and spicy chicken curry.",
            image: chickenCurryImage, // Use imported image
            time: 60,
            ingredients: ["Chicken", "Curry Powder", "Coconut Milk", "Onion", "Garlic", "Ginger"],
            author: "Chef Priya",
            dishType: "Dinner",
        },
        {
            name: "Caesar Salad",
            description: "A fresh and healthy Caesar salad.",
            image: caesarSaladImage, // Use imported image
            time: 15,
            ingredients: ["Romaine Lettuce", "Croutons", "Parmesan Cheese", "Caesar Dressing"],
            author: "Chef Julia",
            dishType: "Appetizer",
        },
    ]);
    const [filters, setFilters] = useState({ dishType: "", time: "", ingredients: "", createdBy: "", searchQuery: "" });
    const [savedRecipes, setSavedRecipes] = useState([]); // New state for saved recipes

    const filteredRecipes = useMemo(() => {
        const result = recipes.filter((recipe) => {
            const matchesDishType = !filters.dishType || recipe.dishType === filters.dishType;
            const matchesTime = !filters.time || recipe.time <= parseInt(filters.time);
            const matchesIngredients = !filters.ingredients || recipe.ingredients?.includes(filters.ingredients);
            const matchesCreatedBy = !filters.createdBy || recipe.author === filters.createdBy;
            const matchesSearchQuery = !filters.searchQuery || recipe.name.toLowerCase().includes(filters.searchQuery.toLowerCase());

            return matchesDishType && matchesTime && matchesIngredients && matchesCreatedBy && matchesSearchQuery;
        });
        console.log("Filtered Recipes:", result); // Debug log
        return result;
    }, [recipes, filters]);

    const updateFilter = (filterName, value) => {
        setFilters((prevFilters) => ({ ...prevFilters, [filterName]: value }));
    };

    const addRecipe = (recipe) => {
        console.log("Adding recipe:", recipe); 
        setRecipes((prevRecipes) => [...prevRecipes, recipe]);
    };

    const toggleSaveRecipe = (recipe) => {
        setSavedRecipes((prevSaved) => {
            if (prevSaved.some((r) => r.name === recipe.name)) {
                return prevSaved.filter((r) => r.name !== recipe.name); 
            }
            return [...prevSaved, recipe];
        });
    };

    console.log("RecipeProvider rendered"); 

    return (
        <RecipeContext.Provider value={{ recipes: filteredRecipes, savedRecipes, addRecipe, updateFilter, toggleSaveRecipe }}>
            {children}
        </RecipeContext.Provider>
    );
};
