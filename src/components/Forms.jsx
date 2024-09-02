import React, { useState } from 'react';
import axios from 'axios';

const CreatRecipe = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    time: '',
    serving: '',
    ustensils: '',
    appliance: '',
    ingredients: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8000/api/recipes', formData, {
      headers: {
        'Content-Type': 'application/json',
       
      },
    })
    .then(response => {
      console.log('Recette créée avec succès:', response.data);
    })
    .catch(error => {
      console.error('Erreur lors de la création de la recette:', error.response.data);
    });
  };


};

export default CreatRecipe;
