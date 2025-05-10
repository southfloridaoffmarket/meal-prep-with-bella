import React from 'react';
import RecipeCard from './RecipeCard';
import '../styles/RecipeList.css';
import {recipeList} from "../data/recipes.ts";

const RecipeList: React.FC = () => {
  return (
    <div className="recipe-list">
      <div className="recipe-grid">
        {recipeList.map(recipe => (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            title={recipe.title}
            image={recipe.image}
            description={recipe.description}
          />
        ))}
      </div>
    </div>
  );
};

export default RecipeList; 