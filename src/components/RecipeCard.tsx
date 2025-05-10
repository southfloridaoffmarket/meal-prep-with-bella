import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/RecipeCard.css';

interface RecipeCardProps {
  id: string;
  title: string;
  image: string;
  description: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ id, title, image, description }) => {
  return (
    <Link to={`/recipe/${id}`} className="recipe-card">
      <div className="recipe-card-image">
        <img src={image} alt={title} />
      </div>
      <div className="recipe-card-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default RecipeCard; 