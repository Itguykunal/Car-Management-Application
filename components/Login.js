import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Importing CSS for styling

function Login() {
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    // Handle sign-in logic here, e.g., making API calls
  };

  const handleBuyBusinessEmails = (e) => {
    e.preventDefault();
    window.open("#", "_blank"); // Replace '#' with the actual link
  };

  return (
    <div className="login-page">
      <div className="logo-container">
        <img src="logo.png" alt="Logo" id="logo" />
      </div>

      <div className="container" id="container">
        <form onSubmit={handleSignIn}>
          <h1>Sign In</h1>
          <div className="social-icons">
            <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
          <span>or use your email and password</span>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <span><a href="#">Get support</a></span>
          <button type="submit">Sign In</button>
          <br />
          <div className="or-container">
            <hr className="line" />
            <span>OR</span>
            <hr className="line" />
          </div>
          <button id="b2" onClick={handleBuyBusinessEmails}>Buy Business Emails</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
