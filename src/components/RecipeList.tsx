import React, { useState } from 'react';
import { Recipe } from '../store/useRecipeStore'; // Assuming the Recipe interface is exported

interface RecipeListProps {
  recipes: Recipe[];
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes }) => {
  const [activeRecipe, setActiveRecipe] = useState<number | null>(null);

  const handleRecipeClick = (id: number) => {
    setActiveRecipe(activeRecipe === id ? null : id);
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-gray-800 text-center">Explore Recipes</h2>
      {recipes.length > 0 ? (
        <div className="w-full max-w-6xl mx-auto">
          <div className="flex flex-col space-y-4">
            {recipes.map((recipe) => (
              <div key={recipe.id} className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-2xl mx-auto">
                <div
                  className="cursor-pointer hover:bg-gray-50 px-4 py-3 sm:px-6"
                  onClick={() => handleRecipeClick(recipe.id)}
                >
                  <div className="text-base sm:text-lg text-indigo-600">{recipe.title}</div>
                </div>

                {activeRecipe === recipe.id && (
                  <div className="bg-gray-50 p-4 sm:p-6">
                    <div className="mt-2 sm:mt-4">
                      <h4 className="font-medium text-lg text-gray-700">Ingredients</h4>
                      <p className="text-gray-600 break-words overflow-hidden text-sm sm:text-base">{recipe.ingredients}</p>
                    </div>

                    <div className="mt-2 sm:mt-4">
                      <h4 className="font-medium text-lg text-gray-700">How to Make</h4>
                      <p className="text-gray-600 break-words overflow-hidden text-sm sm:text-base">{recipe.steps}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-base sm:text-lg text-gray-600 text-center">No recipes added yet. Start by adding one!</p>
      )}
    </div>
  );
};

export default RecipeList;