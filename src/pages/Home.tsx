import React, { useState } from 'react';
import { useRecipeStore } from '../store/useRecipeStore';
import Swal from 'sweetalert2';

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
        id: Date.now(),
        title,
        ingredients,
        steps,
      };
      addRecipe(newRecipe);
      setTitle('');
      setIngredients('');
      setSteps('');

      Swal.fire({
        title: 'Recipe Added!',
        text: 'Your recipe has been successfully added.',
        icon: 'success',
        confirmButtonText: 'OK',
      });
    } else {
      Swal.fire({
        title: 'Missing Fields',
        text: 'Please fill out all fields before adding a recipe.',
        icon: 'warning',
        confirmButtonText: 'OK',
      });
    }
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-lg mx-auto bg-white shadow-md rounded-lg w-full">
      <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-4">Add a New Recipe</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Recipe Name</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 px-4 py-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Ingredients</label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="mt-1 px-4 py-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">How to Make</label>
        <textarea
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="mt-1 px-4 py-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        onClick={handleAddRecipe}
        className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
      >
        Add Recipe
      </button>
    </div>
  );
};

export default RecipeAdd;