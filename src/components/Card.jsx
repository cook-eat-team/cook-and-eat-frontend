// import "../style/Card.css"
// import { Link } from 'react-router-dom';

// const Card = () =>{
//     return <>
//     <div className="card card-compact bg-base-100 w-96 shadow-xl">
//     <figure>
//       <img
//         src="../images/Tartiflette.jpg"
//         alt="Tartiflette" />
//     </figure>
//     <div className="card-body">
//       <h2 className="card-title">Tartiflette</h2>
//       <p class='text-card'>Commencer par cuire les pommes de terre dans l'eau bouillante. Puis épluchez les et coupez les en rondelles. Émincer les oignons puis les faire dorer dans du beurre. Ajouter le jambon fumé coupé en en morceaux ainsi que les pommes de terres. Salez, poivrez à votre gout ( et celui de vos convives ) Laissez cuisiner durant environ 10 minutes puis ajouter le vin blanc. Après 5 minutes, mettre le tout dans un plat à gratin. Coupez le reblochon, soit en tranches, soit le couper en 2 dans le sens de l'épaisseur et recouvrir les pommes de terre. Cuire au four (environ 220°) durant 25 minutes. C'est prêt !</p>
//       <div className="card-actions justify-space-between items-center">
//         <p>60min - 4 personnes</p>
//         <button className="btn"><Link to="/show-recipe">VOIR RECETTE</Link></button>
//       </div>
//     </div>
//   </div></>
// }
// export default Card;



import React, { useEffect, useState } from "react";
import axios from "axios";

const Card = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8889/api/recipes")
      .then((response) => {
        console.log(response.data);
        setRecipes(response.data.recipes);
      })
      .catch((error) => {
        console.error("Erreur", error);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="card card-compact bg-base-100 w-96 shadow-xl"
        >
          <figure>
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{recipe.title}</h2>
            <p>{recipe.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Voir la recette</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
