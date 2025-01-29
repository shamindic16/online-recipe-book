import React, { useState } from 'react';
import { useRecipeStore } from '../store/useRecipeStore';

interface Recipe {
  id: number;
  title: string;
  ingredients: string;
  steps: string;
}

const RecipeAdd: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [ingredients, setIngredients] = useState<string>('');
  const [steps, setSteps] = useState<string>('');
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  const handleAddRecipe = () => {
    if (title && ingredients && steps) {
      const newRecipe: Recipe = {
        id: Date.now(), // Unique ID for the recipe
        title,
        ingredients,
        steps,
      };
      addRecipe(newRecipe); // Add the new recipe to the store
      setTitle('');
      setIngredients('');
      setSteps(''); // Reset input fields
    }
  };

  return (
    <div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Recipe Name</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 px-4 py-2 w-full border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Ingredients</label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="mt-1 px-4 py-2 w-full border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">How to Make</label>
        <textarea
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="mt-1 px-4 py-2 w-full border rounded"
        />
      </div>
      <button
        onClick={handleAddRecipe}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Add Recipe
      </button>
    </div>
  );
};

export default RecipeAdd;
