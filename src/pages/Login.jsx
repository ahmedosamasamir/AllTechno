import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import google from "../components/imgs/login/google.jpg"
import facebook from "../components/imgs/login/facebook.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log({ username, password, rememberMe });
  };

  const handleGoogleLogin = () => {
    // Google OAuth logic here
    console.log("Logging in with Google...");
  };

  const handleFacebookLogin = () => {
    // Facebook OAuth logic here
    console.log("Logging in with Facebook...");
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="input-field1">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-field2">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="options">
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Remember me
          </label>
          <a href="/forgot-password" className="forgot-password">
            Forgot password?
          </a>
        </div>
        <button type="submit" className="login-bttn">Login</button>

        {/* Social login buttons */}
        

        <p className="register-link">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
