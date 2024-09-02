// src/config/axiosConfig.js
import axios from 'axios';

// Configurer l'URL de base pour Axios
axios.defaults.baseURL = 'http://localhost:8000'; // Modifiez cette URL selon votre serveur

// Configurer pour envoyer les cookies avec chaque requête
axios.defaults.withCredentials = true;

// Récupérer le cookie CSRF avant d'envoyer d'autres requêtes
axios.get('/sanctum/csrf-cookie').then(() => {
  console.log('CSRF cookie configuré');
}).catch(error => {
  console.error('Erreur lors de la configuration du cookie CSRF:', error);
});

export default axios;
