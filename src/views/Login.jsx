import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); 
  const navigate = useNavigate(); 
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8000/api/login', {
      email,
      password,
    })
    .then(response => {
      console.log(response);

      login();

      const { token } = response.data;

      localStorage.setItem('token', token);

      console.log('Login successful:', response.data);


      navigate('/');
    })
    .catch(error => {
      setError(error.response?.data?.message || 'An error occurred while logging in.');
      console.error('Error logging in:', error.response?.data || error.message);
    });
  };

  return (
    <form onSubmit={handleLogin}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Email" 
        required 
      />
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="Password" 
        required 
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
