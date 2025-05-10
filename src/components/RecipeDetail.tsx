import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/RecipeDetail.css';
import {recipes} from "../data/recipes.ts";

const RecipeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const recipe = recipes[id || ''];

  if (!recipe) {
    return <div className="recipe-not-found">Recipe not found</div>;
  }

  return (
    <div className="recipe-detail">
      <div className="recipe-header">
        <h1>{recipe.title}</h1>
        {/*<img src={recipe.image} alt={recipe.title} />*/}
      </div>
      
      <div className="recipe-info">
        <div className="recipe-meta">
          <div className="meta-item">
            <span className="label">Prep Time:</span>
            <span className="value">{recipe.prepTime}</span>
          </div>
          <div className="meta-item">
            <span className="label">Cook Time:</span>
            <span className="value">{recipe.cookTime}</span>
          </div>
          <div className="meta-item">
            <span className="label">Servings:</span>
            <span className="value">{recipe.servings}</span>
          </div>
        </div>
      </div>

      <div className="recipe-description">
        <p>{recipe.description}</p>
      </div>

      <div className="recipe-content">
        <div className="ingredients">
          <h2>Ingredients</h2>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div className="instructions">
          <h2>Instructions</h2>
          <ol>
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail; 