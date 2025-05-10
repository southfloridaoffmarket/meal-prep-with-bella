import tuscanChickenImg from "../assets/tuscan-chicken.jpg";
import chiliImg from "../assets/chili.jpg";
import macAndCheeseImg from "../assets/mac-and-cheese.jpg";
import japchaeImg from "../assets/japchae.jpg";
import burgerImg from "../assets/burger.jpg";
import turkeyMeatballsImg from "../assets/turkey-meatballs.webp";
import meatballsImg from "../assets/cocktail-meatballs.jpg";
import meatloafImg from "../assets/meatloaf.jpg";
import layeredDipImg from "../assets/6-layer-dip.webp";
import picadilloImg from "../assets/picadillo.jpg";
import beefStewImg from "../assets/beef-stew.jpg";
import tallarinesVerdesImg from "../assets/tallarines-verdes.jpg";
import marinaraImg from "../assets/marinara.jpg";

interface Recipe {
    id: string;
    title: string;
    image: string;
    description: string;
    ingredients: string[];
    instructions: string[];
    prepTime: string;
    cookTime: string;
    servings: string;
}

export const recipeList = [
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
        image: meatballsImg,
        description: 'Perfect party appetizer with sweet and tangy sauce.'
    },
    {
        id: 'meatloaf',
        title: 'Classic Meatloaf',
        image: meatloafImg,
        description: 'The best classic meatloaf recipe with a sweet glaze.'
    },
    {
        id: 'seven-layer-dip',
        title: 'Seven Layer Dip II',
        image: layeredDipImg,
        description: 'A delicious layered dip with refried beans, guacamole, sour cream, and more.'
    },
    {
        id: 'mexican-picadillo',
        title: 'Mexican Picadillo',
        image: picadilloImg,
        description: 'Traditional Mexican ground beef dish with potatoes, carrots, and raisins.'
    },
    {
        id: 'instant-pot-beef-stew',
        title: 'Instant Pot Beef Stew',
        image: beefStewImg,
        description: 'Hearty beef stew made quickly in the Instant Pot with tender meat and vegetables.'
    },
    {
        id: 'tallarines-verdes',
        title: 'Tallarines Verdes con Lomo',
        image: tallarinesVerdesImg,
        description: 'Peruvian green pasta with tender beef, made with a creamy basil sauce.'
    },
    {
        id: 'homemade-marinara',
        title: 'Homemade Marinara Sauce',
        image: marinaraImg,
        description: 'Classic Italian marinara sauce made with San Marzano tomatoes.'
    }
];

export const recipes: { [key: string]: Recipe } = {
    'tuscan-chicken': {
        id: 'tuscan-chicken',
        title: 'Creamy Tuscan Chicken',
        image: tuscanChickenImg,
        description: 'A delicious creamy chicken dish with sun-dried tomatoes and spinach.',
        ingredients: [
            '2 boneless, skinless chicken breasts',
            '2/3 cup all-purpose flour',
            '3 1/2 tablespoons unsalted butter',
            '1/4 yellow onion, diced',
            '2 garlic cloves, minced',
            '1/4 cup sun-dried tomatoes, thinly sliced',
            '1 1/2 cups heavy cream',
            '3 ounces Parmesan, grated',
            '2 1/2 ounces spinach leaves',
            'Salt and pepper to taste'
        ],
        instructions: [
            'Slice each breast in half lengthwise, so you have 4 thinner breasts.',
            'Season each breast on each side with salt and pepper and dredge in flour, shaking off any excess.',
            'Melt 2 tablespoons butter in a skillet over medium heat.',
            'Add coated chicken and sear for about 3 minutes on each side.',
            'Remove chicken from skillet and set aside.',
            'Melt remaining butter and add onion and garlic. Sauté for 5 to 6 minutes.',
            'Add sun-dried tomatoes and continue to sauté for an additional 3 to 4 minutes.',
            'Stir cream into skillet and simmer until cream reduces slightly, about 4 minutes.',
            'Stir Parmesan into cream mixture until smooth and creamy.',
            'Add spinach to skillet and stir until spinach leaves have just wilted.',
            'Add chicken back into skillet, spoon some sauce over each piece and simmer for 3 to 4 minutes.'
        ],
        prepTime: '10 minutes',
        cookTime: '20 minutes',
        servings: '4 servings'
    },
    'classic-chili': {
        id: 'classic-chili',
        title: 'Classic Chili',
        image: chiliImg,
        description: 'The best classic chili recipe with ground beef and beans.',
        ingredients: [
            '1 tablespoon olive oil',
            '1 medium yellow onion, diced',
            '1 pound 90% lean ground beef',
            '2 1/2 tablespoons chili powder',
            '2 tablespoons ground cumin',
            '2 tablespoons granulated sugar',
            '2 tablespoons tomato paste',
            '1 tablespoon garlic powder',
            '1 1/2 teaspoons salt',
            '1/2 teaspoon ground black pepper',
            '1/4 teaspoon ground cayenne pepper',
            '1 1/2 cups beef broth',
            '1 (15 oz.) can petite diced tomatoes',
            '1 (16 oz.) can red kidney beans, drained and rinsed',
            '1 (8 oz.) can tomato sauce'
        ],
        instructions: [
            'Add the olive oil to a large soup pot and place it over medium-high heat for 2 minutes.',
            'Add the onion and cook for 5 minutes, stirring occasionally.',
            'Add the ground beef to the pot and break it apart with a wooden spoon.',
            'Add the chili powder, cumin, sugar, tomato paste, garlic powder, salt, pepper, and cayenne.',
            'Stir well and cook for 6-7 minutes until the beef is browned.',
            'Add the broth, diced tomatoes, kidney beans, and tomato sauce.',
            'Stir well and bring to a boil.',
            'Reduce the heat to low and simmer for 20-25 minutes, stirring occasionally.',
            'Remove from heat and let the chili rest for 5-10 minutes before serving.'
        ],
        prepTime: '15 minutes',
        cookTime: '35 minutes',
        servings: '6 servings'
    },
    'mac-and-cheese': {
        id: 'mac-and-cheese',
        title: 'Baked Mac and Cheese',
        image: macAndCheeseImg,
        description: 'Creamy, cheesy, and perfectly baked mac and cheese.',
        ingredients: [
            '1 lb. dried elbow pasta',
            '1/2 cup unsalted butter',
            '1/2 cup all purpose flour',
            '1 1/2 cups whole milk',
            '2 1/2 cups half and half',
            '4 cups grated medium sharp cheddar cheese',
            '2 cups grated Gruyere cheese',
            '1/2 Tbsp. salt',
            '1/2 tsp. black pepper',
            '1/4 tsp. paprika'
        ],
        instructions: [
            'Preheat oven to 325 degrees F and grease a 3 qt baking dish.',
            'Cook pasta according to package instructions.',
            'Melt butter in a large saucepan over medium heat.',
            'Add flour and whisk for 1 minute.',
            'Gradually add milk and half and half, whisking constantly.',
            'Cook for 3-4 minutes until thickened.',
            'Remove from heat and stir in cheeses, salt, pepper, and paprika.',
            'Add cooked pasta and stir to combine.',
            'Pour into prepared baking dish.',
            'Bake for 15 minutes, then broil for 3 minutes until top is golden brown.'
        ],
        prepTime: '20 minutes',
        cookTime: '30 minutes',
        servings: '8 servings'
    },
    'japchae': {
        id: 'japchae',
        title: 'Japchae (Korean Glass Noodle Stir Fry)',
        image: japchaeImg,
        description: 'Traditional Korean glass noodle stir fry with vegetables.',
        ingredients: [
            '8 oz sweet potato starch noodles',
            '1/2 lb spinach',
            '2 carrots, julienned',
            '1 onion, sliced',
            '4 oz mushrooms, sliced',
            '2 cloves garlic, minced',
            '3 tbsp soy sauce',
            '2 tbsp sesame oil',
            '1 tbsp sugar',
            '1 tbsp sesame seeds',
            'Salt and pepper to taste'
        ],
        instructions: [
            'Cook noodles according to package instructions.',
            'Blanch spinach in boiling water for 30 seconds, then rinse in cold water.',
            'Squeeze excess water from spinach and season with salt and sesame oil.',
            'Stir-fry carrots, onion, and mushrooms separately with a bit of oil.',
            'Mix soy sauce, sugar, and sesame oil in a small bowl.',
            'Combine all ingredients in a large bowl.',
            'Add the sauce mixture and toss well.',
            'Garnish with sesame seeds and serve.'
        ],
        prepTime: '30 minutes',
        cookTime: '20 minutes',
        servings: '4 servings'
    },
    'burger-fries': {
        id: 'burger-fries',
        title: 'Burger and Fries Meal Prep',
        image: burgerImg,
        description: 'Healthy burger and fries meal prep for the week.',
        ingredients: [
            '1 lb ground beef (90% lean)',
            '1 sweet potato, cut into fries',
            '1 tbsp olive oil',
            '1 tsp paprika',
            '1 tsp garlic powder',
            'Salt and pepper to taste',
            '4 whole wheat buns',
            'Lettuce, tomato, and onion for serving'
        ],
        instructions: [
            'Preheat oven to 425°F.',
            'Cut sweet potato into fries and toss with olive oil and seasonings.',
            'Bake fries for 20-25 minutes, flipping halfway.',
            'Form ground beef into 4 patties.',
            'Cook patties in a skillet over medium heat for 4-5 minutes per side.',
            'Assemble burgers with desired toppings.',
            'Divide into meal prep containers with fries.'
        ],
        prepTime: '15 minutes',
        cookTime: '30 minutes',
        servings: '4 servings'
    },
    'turkey-meatballs': {
        id: 'turkey-meatballs',
        title: 'Easy Turkey Meatballs',
        image: turkeyMeatballsImg,
        description: 'Simple and delicious turkey meatballs recipe.',
        ingredients: [
            '1 lb ground turkey',
            '1/2 cup breadcrumbs',
            '1/4 cup milk',
            '1 egg',
            '1/4 cup grated Parmesan cheese',
            '2 cloves garlic, minced',
            '1 tsp dried oregano',
            '1 tsp dried basil',
            'Salt and pepper to taste'
        ],
        instructions: [
            'Preheat oven to 400°F.',
            'Mix breadcrumbs and milk in a small bowl.',
            'Combine all ingredients in a large bowl.',
            'Form into 1-inch meatballs.',
            'Place on a baking sheet lined with parchment paper.',
            'Bake for 20-25 minutes until cooked through.'
        ],
        prepTime: '15 minutes',
        cookTime: '25 minutes',
        servings: '4 servings'
    },
    'cocktail-meatballs': {
        id: 'cocktail-meatballs',
        title: 'Cocktail Meatballs',
        image: 'https://cafedelites.com/wp-content/uploads/2018/12/Cocktail-Meatballs-IMAGE-1.jpg',
        description: 'Perfect party appetizer with sweet and tangy sauce.',
        ingredients: [
            '1 lb ground beef',
            '1/2 cup breadcrumbs',
            '1 egg',
            '1/4 cup milk',
            '1/4 cup grated onion',
            '1 tsp Worcestershire sauce',
            '1/2 tsp salt',
            '1/4 tsp pepper',
            '1 cup ketchup',
            '1/2 cup grape jelly',
            '1 tbsp Worcestershire sauce'
        ],
        instructions: [
            'Preheat oven to 350°F.',
            'Mix ground beef, breadcrumbs, egg, milk, onion, Worcestershire sauce, salt, and pepper.',
            'Form into 1-inch meatballs.',
            'Place on a baking sheet and bake for 20 minutes.',
            'Combine ketchup, grape jelly, and Worcestershire sauce in a saucepan.',
            'Heat sauce until jelly is melted.',
            'Add cooked meatballs to the sauce and simmer for 10 minutes.'
        ],
        prepTime: '20 minutes',
        cookTime: '30 minutes',
        servings: '6 servings'
    },
    'meatloaf': {
        id: 'meatloaf',
        title: 'Classic Meatloaf',
        image: 'https://www.thewholesomedish.com/wp-content/uploads/2019/02/The-Best-Classic-Meatloaf-550-500x375.jpg',
        description: 'The best classic meatloaf recipe with a sweet glaze.',
        ingredients: [
            '2 lbs ground beef',
            '1 onion, diced',
            '2 large eggs',
            '3 garlic cloves, minced',
            '3 tbsp ketchup',
            '3 tbsp fresh parsley, chopped',
            '3/4 cup Panko breadcrumbs',
            '1/3 cup milk',
            '1 1/2 tsp salt',
            '1/4 tsp ground black pepper',
            '1/2 tsp onion powder',
            '1/2 tsp garlic powder',
            '1/2 cup ketchup',
            '1 tbsp brown sugar',
            '1 tbsp red wine vinegar'
        ],
        instructions: [
            'Preheat oven to 350°F.',
            'Mix all meatloaf ingredients in a large bowl.',
            'Form into a loaf shape and place in a loaf pan.',
            'Mix glaze ingredients in a small bowl.',
            'Spread half the glaze over the meatloaf.',
            'Bake for 55 minutes.',
            'Spread remaining glaze over the meatloaf.',
            'Bake for 15 more minutes.',
            'Let rest for 10 minutes before slicing.'
        ],
        prepTime: '20 minutes',
        cookTime: '70 minutes',
        servings: '8 servings'
    },
    'seven-layer-dip': {
        id: 'seven-layer-dip',
        title: 'Seven Layer Dip II',
        image: 'https://www.allrecipes.com/thmb/1Hx7J6yT4Unw79zF8mfnZO1uQ8M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/23176-seven-layer-dip-ii-1x1-1-2000-9a9b0c8c0c1c4c1c8c0c1c4c1c8c0c1c.jpg',
        description: 'A delicious layered dip with refried beans, guacamole, sour cream, and more.',
        ingredients: [
            '1 (16 ounce) can refried beans',
            '1 (1 ounce) package taco seasoning mix',
            '1 (8 ounce) package cream cheese, softened',
            '1 (16 ounce) container sour cream',
            '1 (16 ounce) jar salsa',
            '1 large tomato, chopped',
            '1 green bell pepper, chopped',
            '1 bunch chopped green onions',
            '2 cups shredded Cheddar cheese',
            '1 (6 ounce) can sliced black olives, drained'
        ],
        instructions: [
            'In a medium bowl, blend the refried beans and taco seasoning.',
            'Spread the mixture onto a large serving platter.',
            'Mix the sour cream and cream cheese in a medium bowl. Spread over the refried beans.',
            'Top the layers with salsa. Place a layer of tomato, green bell pepper, green onions and lettuce over the salsa.',
            'Sprinkle the top with Cheddar cheese and garnish with black olives.'
        ],
        prepTime: '20 minutes',
        cookTime: '0 minutes',
        servings: '12 servings'
    },
    'mexican-picadillo': {
        id: 'mexican-picadillo',
        title: 'Mexican Picadillo',
        image: 'https://www.chilipeppermadness.com/wp-content/uploads/2020/09/Mexican-Picadillo-Recipe.jpg',
        description: 'Traditional Mexican ground beef dish with potatoes, carrots, and raisins.',
        ingredients: [
            '1 pound ground beef',
            '1 onion, diced',
            '2 cloves garlic, minced',
            '2 potatoes, diced',
            '2 carrots, diced',
            '1/4 cup raisins',
            '1/4 cup sliced green olives',
            '2 tablespoons tomato paste',
            '1 teaspoon ground cumin',
            '1 teaspoon dried oregano',
            'Salt and pepper to taste',
            '2 tablespoons olive oil'
        ],
        instructions: [
            'Heat olive oil in a large skillet over medium heat.',
            'Add onion and garlic, cook until softened.',
            'Add ground beef and cook until browned.',
            'Add potatoes and carrots, cook for 5 minutes.',
            'Stir in tomato paste, cumin, and oregano.',
            'Add raisins and olives.',
            'Cover and simmer for 20 minutes until vegetables are tender.',
            'Season with salt and pepper to taste.'
        ],
        prepTime: '15 minutes',
        cookTime: '30 minutes',
        servings: '4 servings'
    },
    'instant-pot-beef-stew': {
        id: 'instant-pot-beef-stew',
        title: 'Instant Pot Beef Stew',
        image: 'https://www.wellplated.com/wp-content/uploads/2018/01/Instant-Pot-Beef-Stew-Recipe.jpg',
        description: 'Hearty beef stew made quickly in the Instant Pot with tender meat and vegetables.',
        ingredients: [
            '2 pounds beef chuck, cut into 1-inch cubes',
            '1 onion, diced',
            '4 carrots, cut into chunks',
            '4 potatoes, cut into chunks',
            '2 cloves garlic, minced',
            '2 tablespoons tomato paste',
            '2 cups beef broth',
            '1 tablespoon Worcestershire sauce',
            '1 teaspoon dried thyme',
            '2 bay leaves',
            'Salt and pepper to taste',
            '2 tablespoons olive oil'
        ],
        instructions: [
            'Set Instant Pot to sauté mode and heat olive oil.',
            'Brown beef cubes in batches, then remove.',
            'Sauté onion and garlic until softened.',
            'Add tomato paste and cook for 1 minute.',
            'Add beef back to pot with remaining ingredients.',
            'Close lid and set to pressure cook for 35 minutes.',
            'Allow natural release for 10 minutes.',
            'Remove bay leaves and season to taste.'
        ],
        prepTime: '20 minutes',
        cookTime: '45 minutes',
        servings: '6 servings'
    },
    'tallarines-verdes': {
        id: 'tallarines-verdes',
        title: 'Tallarines Verdes con Lomo',
        image: 'https://buenazo.cronosmedia.glr.pe/original/2021/11/19/6197c8c3c2c6c0001c3c6c2c.jpg',
        description: 'Peruvian green pasta with tender beef, made with a creamy basil sauce.',
        ingredients: [
            '1 pound fettuccine pasta',
            '1 pound beef tenderloin, sliced',
            '2 cups fresh basil leaves',
            '1/2 cup evaporated milk',
            '1/4 cup walnuts',
            '1/4 cup Parmesan cheese',
            '2 cloves garlic',
            '1 onion, diced',
            '2 tablespoons olive oil',
            'Salt and pepper to taste'
        ],
        instructions: [
            'Cook pasta according to package instructions.',
            'In a blender, combine basil, milk, walnuts, cheese, and garlic. Blend until smooth.',
            'Heat olive oil in a large pan and cook beef until desired doneness.',
            'Add onion and cook until softened.',
            'Add the green sauce and cook for 5 minutes.',
            'Toss with cooked pasta.',
            'Season with salt and pepper to taste.'
        ],
        prepTime: '20 minutes',
        cookTime: '25 minutes',
        servings: '4 servings'
    },
    'homemade-marinara': {
        id: 'homemade-marinara',
        title: 'Homemade Marinara Sauce',
        image: marinaraImg,
        description: 'Classic Italian marinara sauce made with San Marzano tomatoes.',
        ingredients: [
            '2 (28-ounce) cans San Marzano tomatoes',
            '1/4 cup olive oil',
            '1 onion, diced',
            '4 cloves garlic, minced',
            '1/4 cup fresh basil, chopped',
            '1 teaspoon dried oregano',
            '1/2 teaspoon red pepper flakes',
            'Salt and pepper to taste',
            '1 tablespoon sugar (optional)'
        ],
        instructions: [
            'Heat olive oil in a large pot over medium heat.',
            'Add onion and cook until softened.',
            'Add garlic and cook for 1 minute.',
            'Crush tomatoes by hand and add to pot.',
            'Add basil, oregano, and red pepper flakes.',
            'Simmer for 30 minutes, stirring occasionally.',
            'Season with salt and pepper.',
            'Add sugar if needed to balance acidity.'
        ],
        prepTime: '10 minutes',
        cookTime: '30 minutes',
        servings: '6 servings'
    }
};
