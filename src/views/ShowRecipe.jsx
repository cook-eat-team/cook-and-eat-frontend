import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../style/ShowRecipe.css';

const ShowRecipe = () => {
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
                setRecipe(response.data.recipes); // Assurez-vous de récupérer l'objet recipes
            })
            .catch(error => {
                console.error('Erreur', error);
            });
    }, [id]);

    if (!recipe) {
        return <p>Chargement...</p>;
    }

    // Destructurer les propriétés avec des valeurs par défaut
    const {
        title = 'Titre non disponible',
        time = 'N/A',
        serving = 'N/A',
        image = '',
        description = 'Description non disponible',
        ingredients = [],
        ustensils = ''
    } = recipe;

    return (
        <div className='container'>
            <div className='title'>
                <h1>{title}</h1>
            </div>
            <div className='description-title'>
                {time ? `${time} min` : 'Temps non spécifié'} . {serving ? `${serving} personnes` : 'Portions non spécifiées'}
            </div>
            <div
                style={{
                    backgroundImage: `url(${image || '/default-image.jpg'})`, // Fournissez une image par défaut si `image` est null
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                className='rounded-[20px] h-64 w-full flex items-center justify-center'
            >
            </div>
            <div className='block-text'>
                <div className='instructions'>
                    <h2>INSTRUCTIONS</h2>
                    <p>{description}</p>
                </div>
                <div className='block'>
                    <div className='internal-block ingredients'>
                        <h4>INGRÉDIENTS</h4>
                        <ul className='list-disc pl-5 space-y-2 text-gray-700'>
                            {ingredients.map((ingredient) => (
                                    <li key={ingredient.id}>{ingredient.title}</li>
                                ))}
                        </ul>
                    </div>
                    <div className='internal-block ustensils'>
                        <h4>L'ÉQUIPEMENT DONT VOUS AVEZ BESOIN</h4>
                        <ul className='list-disc pl-5 space-y-2 text-gray-700'>
                            <li>{ustensils}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowRecipe;
