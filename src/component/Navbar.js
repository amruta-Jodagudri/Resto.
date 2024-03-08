import React from 'react';
import { Link } from 'react-router-dom';
import myLogo from '../img/logo.jpeg';

const Navbar=()=> {
  return (
    <div className='Navbar'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <header>
          <img className="logo1" src={myLogo}/>
          <Link className="navbar-brand" to="/" style={{fontWeight:'bold',color:'white',paddingLeft:'20px',fontSize:'8vh'}}>Resto.</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{color:'white',fontWeight:'bold',marginLeft:'130px'}}>
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/menu">Menu</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item1">
                <Link className="nav-link" to="/Login">Login</Link>
              </li>
            </ul>
          </div>
          <div className="icons">
            <Link to="#" className="fas fa-search" id="search"></Link>
            <Link to="#" className="fas fa-heart"></Link>
            <Link to="#" className="fas fa-shopping-cart"></Link>
          </div>
        </header>
        </div>
        </nav>
    </div>
  );
}

export default Navbar;
