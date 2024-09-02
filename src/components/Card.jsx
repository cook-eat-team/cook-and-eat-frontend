import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../style/Card.css";

const Card = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {

    axios.get('http://localhost:8000/api/recipes/')
      .then(response => {
        console.log(response.data);
        setRecipes(response.data.recipes);
      })
      .catch(error => {
        console.error('Erreur', error);
      });
  }, []);


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="card card-compact bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{recipe.title}</h2>

            <p className='text-card'>{recipe.description}</p>
            <div className="card-actions justify-end">
              <button className="btn">
                <Link to={`/show-recipe/${recipe.id}`}>VOIR RECETTE</Link>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;

