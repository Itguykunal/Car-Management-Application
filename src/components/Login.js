import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { loginUser } from '../services/api';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    console.log('Sign In button clicked'); // Debug line to confirm the function is called

    try {
      const response = await loginUser({ email, password });
      console.log('Login response:', response); // Check if response is as expected

      // Assuming the response has a token or success status
      if (response.token) {
        // Save token to localStorage/sessionStorage for later API requests
        localStorage.setItem('token', response.token);
        navigate('/cars');
      } else {
        console.error('No token received from login response');
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please check your credentials and try again.');
    }
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className="container" id="container">
      <form onSubmit={handleSignIn}>
        <br></br>
        <br></br>
        <h1>Sign in</h1>
        <div className="social-icons">
          <a href="#" className="icon"><i className="fab fa-google-plus-g"></i></a>
          <a href="#" className="icon"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="icon"><i className="fab fa-github"></i></a>
          <a href="#" className="icon"><i className="fab fa-linkedin-in"></i></a>
        </div>
        <span>or use your email and password</span>
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
        <button type="submit">Sign In</button>
        <div className="or-container">
          <hr className="line" />
          <span>OR</span>
          <hr className="line" />
        </div>
        <button id="b2" onClick={handleSignUp}>Sign Up</button>
      </form>
    </div>
  );
}

export default Login;
