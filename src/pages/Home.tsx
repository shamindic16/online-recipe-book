import AddRecipe from './AddRecipe'

import React, { useState } from 'react';
import { useRecipeStore } from '../store/useRecipeStore';
import RecipeList from '../components/RecipeList';

const Home = () => {
  const [activeTab, setActiveTab] = useState<string>('add');
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-indigo-500 to-purple-600 text-white font-oswald">
      {/* Header Section */}
      <div className="top-10 text-center mt-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold drop-shadow-lg">
          Welcome to <span className="text-yellow-300">Recipe App</span>
        </h1>
        <p className="text-lg sm:text-xl mt-2 text-gray-100">
          Share and explore delicious recipes effortlessly!
        </p>
      </div>

      {/* Tab Buttons */}
      <div className="flex items-center justify-center mt-6">
        <button
          onClick={() => setActiveTab('add')}
          className={`${
            activeTab === 'add'
              ? 'bg-yellow-300 text-gray-800'
              : 'bg-gray-800 text-yellow-300'
          } px-6 py-2 rounded-l-lg font-semibold`}
        >
          Add Recipe
        </button>
        <button
          onClick={() => setActiveTab('explore')}
          className={`${
            activeTab === 'explore'
              ? 'bg-yellow-300 text-gray-800'
              : 'bg-gray-800 text-yellow-300'
          } px-6 py-2 rounded-r-lg font-semibold`}
        >
          Explore Recipes
        </button>
      </div>

      {/* Content Section */}
      <div className="flex-1 w-full mt-6 p-6">
  <div className="flex items-center justify-center w-full h-full bg-gray-200 rounded-lg shadow-lg text-gray-800 flex-col">
    {activeTab === 'add' ? (
      <div className="flex flex-col items-center justify-between w-full h-full p-6 overflow-y-auto">
        <h2 className="text-3xl font-bold mb-4">Add Your Recipe</h2>
        <AddRecipe />
      </div>
    ) : (
      <div className="flex flex-col w-full h-full p-6 overflow-y-auto">
        <RecipeList recipes={recipes} />
      </div>
    )}
  </div>
</div>

    </div>
  );
};

export default Home;
