import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { postNewRecipe } from '../utils/api-calls';

function NewRecipe() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState([{ name: '', quantity: '' }]);
    const [steps, setSteps] = useState([{ title: '', body: '' }]);

    const navigate = useNavigate();

    const handleIngredientChange = (index, event) => {
        const newIngredients = ingredients.slice();
        newIngredients[index][event.target.name] = event.target.value;
        setIngredients(newIngredients);
    };

    const handleStepChange = (index, event) => {
        const newSteps = steps.slice();
        newSteps[index][event.target.name] = event.target.value;
        setSteps(newSteps);
    };

    const addIngredient = () => setIngredients([...ingredients, { name: '', quantity: '' }]);
    const addStep = () => setSteps([...steps, { title: '', body: '' }]);

    const removeIngredient = () => setIngredients(prevIngredients => prevIngredients.slice(0, -1));
    const removeStep = () => setSteps(prevSteps => prevSteps.slice(0, -1));

    const handleSubmit = async (event) => {
        event.preventDefault();
        const recipe = { title, description, ingredients, steps };
        console.log(recipe);
        
        try {
            await postNewRecipe(recipe);
            navigate('/recipes')
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='max-w-screen-xl mx-auto md:px-4'>
            <div className='md:border border-gray-100 my-2 p-5'>
                <form onSubmit={handleSubmit}>
                    <h2 className="text-2xl font-bold text-red-600 mb-4">Create a Recipe</h2>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-gray-700 text-sm font-medium mb-2">Recipe Title</label>
                        <input
                        type="text"
                        id="title"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-gray-700 text-sm font-medium mb-2">Description</label>
                        <textarea
                        id="description"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        rows="3"
                        required
                        />
                    </div>
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold text-red-600 mb-2">Ingredients</h3>
                        <button
                        type="button"
                        onClick={removeIngredient}
                        className="w-full bg-gray-600 text-white mb-2 rounded hover:bg-gray-700"
                        >
                        -
                        </button>
                        {ingredients.map((ingredient, index) => (
                        <div key={index} className="mb-2 flex space-x-2">
                            <input
                            type="text"
                            name="name"
                            value={ingredient.name}
                            onChange={(e) => handleIngredientChange(index, e)}
                            placeholder="Ingredient Name"
                            className="flex-1 p-2 border border-gray-300 rounded"
                            required
                            />
                            <input
                            type="text"
                            name="quantity"
                            value={ingredient.quantity}
                            onChange={(e) => handleIngredientChange(index, e)}
                            placeholder="Quantity"
                            className="flex-1 p-2 border border-gray-300 rounded"
                            required
                            />
                        </div>
                        ))}
                        <button
                        type="button"
                        onClick={addIngredient}
                        className="w-full bg-gray-600 text-white rounded hover:bg-gray-700"
                        >
                        +
                        </button>
                        
                    </div>
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold text-red-600 mb-2">Steps</h3>
                        <button
                        type="button"
                        onClick={removeStep}
                        className="w-full bg-gray-600 text-white mb-2 rounded hover:bg-gray-700"
                        >
                        -
                        </button>
                        {steps.map((step, index) => (
                        <div key={index} className="mb-2">
                            <input
                            type="text"
                            name="title"
                            value={step.title}
                            onChange={(e) => handleStepChange(index, e)}
                            placeholder="Step Title"
                            className="w-full p-2 border border-gray-300 rounded mb-1"
                            required
                            />
                            <textarea
                            name="body"
                            value={step.body}
                            onChange={(e) => handleStepChange(index, e)}
                            placeholder="Step Description"
                            className="w-full p-2 border border-gray-300 rounded"
                            rows="2"
                            required
                            />
                        </div>
                        ))}
                        <button
                        type="button"
                        onClick={addStep}
                        className="w-full bg-gray-600 text-white rounded hover:bg-gray-700"
                        >
                        +
                        </button>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
                    >
                        Submit Recipe
                    </button>
                </form>
            </div>
        </div>
    )
}

export default NewRecipe