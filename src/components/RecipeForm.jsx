import React, { useState } from 'react';
import CreatetableSelect from 'react-select/creatable';

const RecipeForm = () => {
    
    const [tags, setTags] = useState([]);

    const handleChange = (newValue) => {
        setTags(newValue);
    };

    return (
        <div className="recipe-form">
            <h2>Create a New Dish</h2>
            <form>
                <label htmlFor="dish-name">Title:</label>
                <input placeholder="Dish Name" type="text" id="dish-name" name="dish-name" required />

                <label htmlFor="dish-image">Upload an image:</label>
                <imput type="file" id="dish-image" name="dish-image" accept="image/jpg, image/png, image/jpeg" required />

                <label htmlFor="dish-time">Time expected:</label>
                <input type="range" id="dish-time" name="dish-time" min="0" max="120" step="5" required />

                <label htmlFor="ingredients">Ingredients:</label>
                <CreatetableSelect isMulti value={tags} onChange={handleChange}/>

                <label htmlFor="instructions">Instructions:</label>
                <textarea id="instructions" name="instructions" required></textarea>

                <button type="submit">Post</button>
            </form>
        </div>
    );
};
export default RecipeForm;