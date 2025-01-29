import { create } from 'zustand';

export interface Recipe {  // Add export here
  id: number;
  title: string;
  ingredients: string;
  steps: string;
}

interface RecipeStore {
  recipes: Recipe[];
  addRecipe: (newRecipe: Recipe) => void;
}

export const useRecipeStore = create<RecipeStore>((set) => ({
  recipes: [],
  addRecipe: (newRecipe) => set((state) => ({
    recipes: [...state.recipes, newRecipe]
  })),
}));
