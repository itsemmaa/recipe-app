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
    const [author, setAuthor] = useState('');
    const [steps, setSteps] = useState(['']);

    const handleStepChange = (idx, value) => {
        const newSteps = [...steps];
        newSteps[idx] = value;
        setSteps(newSteps);
    };

    const addStepField = () => setSteps([...steps, '']);
    const removeStepField = (idx) => setSteps(steps.filter((_, i) => i !== idx));

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
            ingredients: tags.map(tag => typeof tag === 'string' ? tag : tag.value),
            time: Number(time),
            author,
            steps: steps.filter(s => s.trim() !== ''),
        };
        addRecipe(newRecipe);
        setTitle('');
        setInstructions('');
        setTags([]);
        setTime(0);
        setImage(null);
        setAuthor('');
        setSteps(['']);
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

                    <label htmlFor="dish-author" style={{ color: '#555' }}>Author:</label>
                    <input 
                        placeholder="Author" 
                        type="text" 
                        id="dish-author" 
                        name="dish-author" 
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
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

                    <label style={{ color: '#555' }}>Steps (one sentence each):</label>
                    {steps.map((step, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <input
                                type="text"
                                value={step}
                                onChange={e => handleStepChange(idx, e.target.value)}
                                placeholder={`Step ${idx + 1}`}
                                required
                                style={{ flex: 1, padding: '8px', borderRadius: '4px', border: '1px solid #ccc', backgroundColor: '#f9f9f9' }}
                            />
                            {steps.length > 1 && (
                                <button type="button" onClick={() => removeStepField(idx)} style={{ color: '#fff', background: '#ff0000', border: 'none', borderRadius: '4px', padding: '4px 8px', cursor: 'pointer' }}>Remove</button>
                            )}
                        </div>
                    ))}
                    <button type="button" onClick={addStepField} style={{ marginBottom: '10px', background: '#eee', border: 'none', borderRadius: '4px', padding: '6px 12px', cursor: 'pointer', color: '#333' }}>Add Step</button>

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