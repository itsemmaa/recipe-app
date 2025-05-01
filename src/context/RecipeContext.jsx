import React, { createContext, useState, useMemo } from 'react';
import spaghettiImage from "../assets/spaghetti-bolognese-10.jpg"; // Import local image
import chickenCurryImage from "../assets/Andhra-Chicken-Curry-2-3.jpg"; // Import local image
import caesarSaladImage from "../assets/caesar-salad.jpg"; // Import local image
import lasagnaImage from "../assets/lasagna.jpg"; // Import local image
import enchiladasImage from "../assets/enchilada.jpg"; // Import local image
import cakeImage from "../assets/cake.jpg"; // Import local image


export const RecipeContext = createContext(); // Ensure this is exported

export const RecipeProvider = ({ children }) => {
    const [recipes, setRecipes] = useState([
        {
            name: "Spaghetti Bolognese",
            description: "A classic Italian pasta dish with rich meat sauce.",
            image: spaghettiImage,
            time: 45, // Ensure time is defined
            ingredients: ["Spaghetti", "Ground Beef", "Tomato Sauce", "Onion", "Garlic", "Meat", "Pasta"], // Ensure ingredients are defined
            author: "Chef Mario", // Ensure author is defined
            dishType: "Lunch",
        },
        {
            name: "Chicken Curry",
            description: "A flavorful and spicy chicken curry.",
            image: chickenCurryImage,
            time: 60,
            ingredients: ["Chicken", "Curry Powder", "Coconut Milk", "Onion", "Garlic", "Ginger", "Meat"],
            author: "Chef Priya",
            dishType: "Dinner",
        },
        {
            name: "Caesar Salad",
            description: "A fresh and healthy Caesar salad.",
            image: caesarSaladImage, // Use imported image
            time: 15, // Ensure time is defined
            ingredients: ["Romaine Lettuce", "Croutons", "Cheese", "Caesar Dressing"],
            author: "Chef Julia",
            dishType: "Appetizer",
        },
        {
            name: "Lasagna",
            description: "A simple and classic italian dish.",
            image: lasagnaImage, // Use imported image
            time: 90, // Ensure time is defined
            ingredients: ["Pasta", "Cheese", "Onion", "Meat", "Tomato Sauce"],
            author: "John Smith",
            dishType: "Dinner",
        },
        {
            name: "Chicken Enchiladas",
            description: "The best mexican dish ever!",
            image: enchiladasImage, // Use imported image
            time: 45, // Ensure time is defined
            ingredients: ["Chicken", "Tortillas", "Cheese", "Meat"],
            author: "John Jacob Jingleheimer Schmidt",
            dishType: "Dinner",
        },
        {
            name: "Chocolate Cake",
            description: "Perfect for a birthday dessert.",
            image: cakeImage, // Use imported image
            time: 60, // Ensure time is defined
            ingredients: ["Flour", "Eggs", "Cocoa Powder", "Sugar"],
            author: "John Smith",
            dishType: "Dessert",
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
            return [...prevSaved, recipe]; // Ensure the full recipe object, including details, is saved
        });
    };

    console.log("RecipeProvider rendered"); 

    return (
        <RecipeContext.Provider value={{ recipes: filteredRecipes, savedRecipes, addRecipe, updateFilter, toggleSaveRecipe }}>
            {children}
        </RecipeContext.Provider>
    );
};
