import React, { useState, useContext } from 'react';
import CreatableSelect from 'react-select/creatable';
import { RecipeContext } from '../context/RecipeContext';

const RecipeForm = () => {
    const { addRecipe } = useContext(RecipeContext); 
    const [tags, setTags] = useState([]);
    const [time, setTime] = useState(0);
    const [title, setTitle] = useState('');
    const [instructions, setInstructions] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!image) {
            alert("Please upload an image.");
            return;
        }
        const newRecipe = {
            name: title,
            description: instructions,
            image: URL.createObjectURL(image), 
            tags,
            time,
        };
        addRecipe(newRecipe);
        setTitle('');
        setInstructions('');
        setTags([]);
        setTime(0);
        setImage(null);
    };

    return (
        <div className="recipe-form-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', backgroundColor: 'transparent' }}>
            <div className="recipe-form" style={{ width: '100%', maxWidth: '500px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#ffffff' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Create a New Dish</h2>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <label htmlFor="dish-name" style={{ color: '#555' }}>Title:</label>
                    <input 
                        placeholder="Dish Name" 
                        type="text" 
                        id="dish-name" 
                        name="dish-name" 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required 
                        style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc', backgroundColor: '#f9f9f9', color: '#333' }}
                    />

                    <label htmlFor="dish-image" style={{ color: '#555' }}>Upload an image:</label>
                    <input 
                        type="file" 
                        id="dish-image" 
                        name="dish-image" 
                        accept="image/jpg, image/png, image/jpeg" 
                        onChange={(e) => setImage(e.target.files[0])}
                        required 
                        style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc', backgroundColor: '#f9f9f9', color: '#333' }}
                    />

                    <label htmlFor="dish-time" style={{ color: '#555' }}>Time expected (minutes):</label>
                    <input 
                        type="range" 
                        id="dish-time" 
                        name="dish-time" 
                        min="0" 
                        max="120" 
                        step="5" 
                        value={time} 
                        onChange={(e) => setTime(e.target.value)} 
                        required 
                        style={{ margin: '10px 0', backgroundColor: '#f9f9f9' }}
                    />
                    <span id="time-display" style={{ textAlign: 'center', color: '#333' }}>{time} minutes</span>

                    <label htmlFor="ingredients" style={{ color: '#555' }}>Ingredients:</label>
                    <CreatableSelect 
                        isMulti 
                        value={tags} 
                        onChange={setTags} 
                        placeholder="Add ingredients..." 
                        styles={{
                            control: (base) => ({ ...base, backgroundColor: '#f9f9f9', borderColor: '#ccc', color: '#333' }),
                            multiValue: (base) => ({ ...base, backgroundColor: '#e0e0e0' }),
                            placeholder: (base) => ({ ...base, color: '#888' }),
                        }}
                    />

                    <label htmlFor="instructions" style={{ color: '#555' }}>Notes:</label>
                    <textarea 
                        id="instructions" 
                        name="instructions" 
                        placeholder="Write a description..." 
                        value={instructions}
                        onChange={(e) => setInstructions(e.target.value)}
                        required 
                        style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc', backgroundColor: '#f9f9f9', color: '#333', minHeight: '100px' }}
                    ></textarea>

                    <button 
                        type="submit" 
                        style={{ padding: '10px', borderRadius: '4px', border: 'none', backgroundColor: '#000', color: '#fff', cursor: 'pointer' }}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};
export default RecipeForm;