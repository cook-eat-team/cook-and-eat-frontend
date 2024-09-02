import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../style/ShowRecipe.css';

const ShowRecipeComponent = () => {
    const [recipe, setRecipe] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/recipes/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })
            .then(response => {
                console.log('Data from API:', response.data);
                setRecipe(response.data.recipes);
            })
            .catch(error => {
                console.error('Erreur', error);
            });
    }, [id]);

    if (!recipe) {
        return <p>Chargement...</p>;
    }

    const imageUrl = `http://localhost:3000/${recipe.image}`;

    return (
        <div className='container'>
            <div className='title'>
                <h1>{recipe.title}</h1>
            </div>
            <div className='description-title'>
                {recipe.time ? `${recipe.time} min` : 'Temps non spécifié'} . {recipe.serving ? `${recipe.serving} personnes` : 'Portions non spécifiées'}
            </div>
            <img
                src={imageUrl}
                alt=''
                className='rounded-[20px] h-64 w-full flex items-center justify-center object-cover'
            />
            

            <div className='block-text'>
                <div className='instructions'>
                    <h2>INSTRUCTIONS</h2>
                    <p>{recipe.description}</p>
                </div>
                <div className='block'>
                    <div className='internal-block ingredients'>
                        <h4>INGRÉDIENTS</h4>
                        <ul className='list-disc pl-5 space-y-2 text-gray-700'>
                            {recipe.ingredient.length > 0 ? (
                                recipe.ingredient.map(ing => (
                                    <li key={ing.id}>
                                        {ing.title} - {ing.pivot.quantity} {ing.pivot.unit}
                                    </li>
                                ))
                            ) : (
                                <li>Aucun ingrédient spécifié</li>
                            )}
                        </ul>
                    </div>
                    <div className='internal-block ustensils'>
                        <h4>L'ÉQUIPEMENT DONT VOUS AVEZ BESOIN</h4>
                        <ul className='list-disc pl-5 space-y-2 text-gray-700'>
                            <li>{recipe.ustensils}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowRecipeComponent;
