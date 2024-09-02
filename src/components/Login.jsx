import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8000/api/login', {
      email,
      password,
    })
    .then(response => {
      const { token } = response.data;

      localStorage.setItem('token', token);

      console.log('Login successful:', response.data);
    })
    .catch(error => {
      console.error('Error logging in:', error.response?.data || error.message);
    });
  };

  return (
    <form onSubmit={handleLogin}>
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
