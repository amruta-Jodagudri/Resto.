import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    window.close();
    navigate('/menu');
  }

  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const yearmonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const d = new Date();
  let day = weekday[d.getDay()];
  const date = d.getDate() + ' ' + yearmonth[d.getMonth()] + ', ' + d.getFullYear();

  const hour = d.getHours();
  const minutes = d.getMinutes();
  const seconds = d.getSeconds();
  const withZeroHr = hour < 10 ? `0${hour}` : hour;
  const withZeroMin = minutes < 10 ? `0${minutes}` : minutes;
  const withZeroSec = seconds < 10 ? `0${seconds}` : seconds;
  const Time = `${withZeroHr}:${withZeroMin}:${withZeroSec}`;

  const openTime = 9, closeTime = 22;
  const isOpen = hour >= openTime && hour <= closeTime;

  return (
    <div className="home-container">
      <div className="background-image"></div>
      <div className="overlay"></div>
      <div className="content">
        <h1 className="title">Welcome to Resto. Restaurant</h1>
        <p className="subtitle">Eat Healthy and Delicious Food</p>
        <button onClick={handleOnClick} className='btn btn-light mt-3'>
          Whats Cooking? <i className="fa-solid fa-bowl-chopsticks-noodles"></i>
        </button>
      </div>
      <div className="container mt-3 info-cards">
        <div className="row">
          <div className="col-md-6 mb-3">
            <div className="card bg-dark text-white text-center">
              <div className="card-body">
                <h5 className="card-title fa-solid fa-calendar-days"> {day} {date}</h5>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="card bg-dark text-white text-center">
              <div className="card-body">
                <h5 className="card-title fa-solid fa-clock"> {Time} --- {isOpen ? 'Resto. Open' : 'Resto. Closed'}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
