// FormRegister.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../config/axiosConfig'; // Importer depuis le fichier de configuration
import '../style/Register.css';

const FormRegister = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Les mots de passe ne correspondent pas.");
            return;
        }

        try {
            const response = await axios.post('/api/register', {
                name,
                email,
                password,
            });

            console.log('Enregistrement réussi:', response.data);
            navigate('/login');
        } catch (error) {
            console.error('Erreur lors de l’enregistrement:', error.response?.data || error.message);
            setError(error.response?.data?.message || 'Une erreur est survenue lors de l’enregistrement.');
        }
    };

    return (
        <div className="container-register">
            <form className="form-register" onSubmit={handleSubmit}>
                <h1 className="mb-20">S’enregistrer</h1>
                {error && <p className="error-message">{error}</p>}
                <input
                    type="text"
                    placeholder="Nom:"
                    className="input input-bordered w-full bg-inherit"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email:"
                    className="input input-bordered w-full bg-inherit"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Mot de passe:"
                    className="input input-bordered w-full bg-inherit"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Confirmation du mot de passe:"
                    className="input input-bordered w-full bg-inherit"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <button type="submit" className="btnForm mt-10 btn-register">
                    S’enregistrer
                </button>
                <button className="btnForm mt-10 btn-login">
                    <Link to="/login">Vous avez déjà un compte ? Se connecter</Link>
                </button>
            </form>
        </div>
    );
};

export default FormRegister;
