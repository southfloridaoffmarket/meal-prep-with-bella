import React from 'react';
import RecipeCard from './RecipeCard';
import '../styles/RecipeList.css';

// Import images
import tuscanChickenImg from '../assets/tuscan-chicken.jpg';
import chiliImg from '../assets/chili.jpg';
import macAndCheeseImg from '../assets/mac-and-cheese.jpg';
import japchaeImg from '../assets/japchae.jpg';
import burgerImg from '../assets/burger.jpg';
import turkeyMeatballsImg from '../assets/turkey-meatballs.webp';
import marinaraImg from '../assets/marinara.jpg';

const recipes = [
  {
    id: 'tuscan-chicken',
    title: 'Creamy Tuscan Chicken',
    image: tuscanChickenImg,
    description: 'A delicious creamy chicken dish with sun-dried tomatoes and spinach.'
  },
  {
    id: 'classic-chili',
    title: 'Classic Chili',
    image: chiliImg,
    description: 'The best classic chili recipe with ground beef and beans.'
  },
  {
    id: 'mac-and-cheese',
    title: 'Baked Mac and Cheese',
    image: macAndCheeseImg,
    description: 'Creamy, cheesy, and perfectly baked mac and cheese.'
  },
  {
    id: 'japchae',
    title: 'Japchae (Korean Glass Noodle Stir Fry)',
    image: japchaeImg,
    description: 'Traditional Korean glass noodle stir fry with vegetables.'
  },
  {
    id: 'burger-fries',
    title: 'Burger and Fries Meal Prep',
    image: burgerImg,
    description: 'Healthy burger and fries meal prep for the week.'
  },
  {
    id: 'turkey-meatballs',
    title: 'Easy Turkey Meatballs',
    image: turkeyMeatballsImg,
    description: 'Simple and delicious turkey meatballs recipe.'
  },
  {
    id: 'cocktail-meatballs',
    title: 'Cocktail Meatballs',
    image: 'https://cafedelites.com/wp-content/uploads/2018/12/Cocktail-Meatballs-IMAGE-1.jpg',
    description: 'Perfect party appetizer with sweet and tangy sauce.'
  },
  {
    id: 'meatloaf',
    title: 'Classic Meatloaf',
    image: 'https://www.thewholesomedish.com/wp-content/uploads/2019/02/The-Best-Classic-Meatloaf-550-500x375.jpg',
    description: 'The best classic meatloaf recipe with a sweet glaze.'
  },
  {
    id: 'seven-layer-dip',
    title: 'Seven Layer Dip II',
    image: 'https://www.allrecipes.com/thmb/1Hx7J6yT4Unw79zF8mfnZO1uQ8M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/23176-seven-layer-dip-ii-1x1-1-2000-9a9b0c8c0c1c4c1c8c0c1c4c1c8c0c1c.jpg',
    description: 'A delicious layered dip with refried beans, guacamole, sour cream, and more.'
  },
  {
    id: 'mexican-picadillo',
    title: 'Mexican Picadillo',
    image: 'https://www.chilipeppermadness.com/wp-content/uploads/2020/09/Mexican-Picadillo-Recipe.jpg',
    description: 'Traditional Mexican ground beef dish with potatoes, carrots, and raisins.'
  },
  {
    id: 'instant-pot-beef-stew',
    title: 'Instant Pot Beef Stew',
    image: 'https://www.wellplated.com/wp-content/uploads/2018/01/Instant-Pot-Beef-Stew-Recipe.jpg',
    description: 'Hearty beef stew made quickly in the Instant Pot with tender meat and vegetables.'
  },
  {
    id: 'tallarines-verdes',
    title: 'Tallarines Verdes con Lomo',
    image: 'https://buenazo.cronosmedia.glr.pe/original/2021/11/19/6197c8c3c2c6c0001c3c6c2c.jpg',
    description: 'Peruvian green pasta with tender beef, made with a creamy basil sauce.'
  },
  {
    id: 'homemade-marinara',
    title: 'Homemade Marinara Sauce',
    image: marinaraImg,
    description: 'Classic Italian marinara sauce made with San Marzano tomatoes.'
  }
];

const RecipeList: React.FC = () => {
  return (
    <div className="recipe-list">
      <div className="recipe-grid">
        {recipes.map(recipe => (
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