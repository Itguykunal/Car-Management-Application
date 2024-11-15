import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signupUser } from '../services/api'; // Ensure the correct import path


function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    try {
      const response = await signupUser({ email, password }); // Call signupUser from api.js
      console.log('Signup successful:', response);
      navigate('/login'); // Navigate to the login page after successful signup
    } catch (error) {
      console.error('Signup failed:', error);
      alert('Signup failed. Please try again.');
    }
  };

  return (
    <div className="container signup-page">
      <form onSubmit={handleSignUp}>
        <br /><br /><br />
        <h1>Sign Up</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
        <br /><br />
      </form>
    </div>
  );
}

export default Signup;
