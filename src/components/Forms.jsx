import React, { useState } from 'react';
import axios from 'axios';

const CreatRecipe = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: null, 
    time: '',
    serving: '',
    ustensils: '',
    appliance: '',
    ingredients: [],
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === 'file') {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach(key => {
      if (Array.isArray(formData[key])) {
        formData[key].forEach((item, index) => {
          data.append(`${key}[]`, item);
        });
      } else {
        data.append(key, formData[key]);
      }
    });

    axios.post('http://localhost:8000/api/recipes', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(response => {
      console.log('Recette créée avec succès:', response.data);
    })
    .catch(error => {
      if (error.response && error.response.data) {
        console.error('Erreur lors de la création de la recette:', error.response.data);
      } else {
        console.error('Erreur lors de la création de la recette:', error.message);
      }
    });
  };

  return (
    <div className="formRecipe">
      <h1>CRÉER UNE RECETTE</h1>
      <form onSubmit={handleSubmit}>
        <div className="formRecipe-block">
          <div className="formRecipe-block-1 block">
            <input type="text" name="title" placeholder="Nom:" className="input input-bordered w-full" onChange={handleChange} />
            <input type="text" name="serving" placeholder="Nombre de personnes:" className="input input-bordered w-full" onChange={handleChange} />
            <input type="text" name="time" placeholder="Temps:" className="input input-bordered w-full" onChange={handleChange} />
            <input type="text" name="description" placeholder="Description:" className="input input-bordered w-full" onChange={handleChange} />
            <input type="text" name="appliance" placeholder="Appareil:" className="input input-bordered w-full" onChange={handleChange} />
            <input type="text" name="ustensils" placeholder="Ustensiles:" className="input input-bordered w-full" onChange={handleChange} />
          </div>

          <div className="formRecipe-block-2 block">
            <div className="formRecipe-internal-blobk-2-1">
              <input type="text" name="quantity" placeholder="Quantité:" className="input input-bordered w-full" onChange={handleChange} />
            </div>

            <div className="formRecipe-block-3">
              <div className="formRecipe-internal-block-3-1">
                <input type="text" name="ingredients" placeholder="Ingrédients:" className="input input-bordered w-full semi-block" onChange={handleChange} />
              </div>
              <div className="formRecipe-internal-block-3-2">
                <select name="unit" className="select select-bordered w-full" onChange={handleChange}>
                  <option value="">Unité:</option>
                  <option value="g">g</option>
                  <option value="ml">ml</option>
                  <option value="cs">cs (cuillère à soupe)</option>
                  <option value="cf">cf (cuillère à café)</option>
                </select>
              </div>
            </div>
            <div className="formRecipe-block-4">
              <input type="file" name="image" className="file-input w-full max-w-xs" onChange={handleChange} />
            </div>
          </div>
        </div>
        <button type="submit" className="btnForm">Créer la recette</button>
      </form>
    </div>
  );
};

export default CreatRecipe;
