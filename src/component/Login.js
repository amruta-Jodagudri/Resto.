import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginBG from '../img/loginBG.webp';
import './Login.css';

const Login = () => {
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const handleOnClick = (e) => {
    e.preventDefault();
    setText('');
    alert("Logged in successfully!");
    navigate('/');
  };

  return (
    <div className="login-container">
      <div className="card text-bg-dark login-card">
        <img src={LoginBG} className="card-img login-bg-img" alt="Login Background" />
        <div className="card-img-overlay login-overlay">
          <h2 className="card-title text-center login-title">Login to Resto.</h2>
          <div className="login-form-container">
            <form onSubmit={handleOnClick}>
              <div className="row mb-3">
                <div className="col">
                  <input type="text" className="form-control" placeholder="First name" aria-label="First name" required />
                </div>
                <div className="col">
                  <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" required />
                </div>
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="E-mail Address" aria-label="Email" required />
                <div id="emailHelp" className="form-text" style={{ color: 'white' }}>We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <input type="password" className="form-control" placeholder="Password" aria-label="Password" required />
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary">Sign-in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
