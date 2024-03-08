import React from 'react';
import { useNavigate } from 'react-router-dom';
import BG1 from '../img/landing2BG.jpg';

const Home = () => {
  const navigate = useNavigate();
  const HandleOnClick=()=>{
    window.close();
    navigate('/menu');
  }
  
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const yearmonth = ["Jan","Feb","Mar","Apr","June","Jul","Aug","Sep","Oct","Nov","Dec"];
  const d = new Date();
  let day = weekday[d.getDay()];
  const date = d.getDate() + ' ' + yearmonth[d.getMonth()] + ', ' +  d.getFullYear();

  const hour = d.getHours();
  const minutes = d.getMinutes();
  const seconds = d.getSeconds();
  const withZeroHr = hour < 10 ? `0${hour}` : hour;
  const withZeroMin = minutes <10 ? `0${minutes}`:minutes;
  const withZeroSec = seconds <10 ? `0${seconds}`:seconds;
  const Time = `${withZeroHr}:${withZeroMin}:${withZeroSec}`;

  const openTime = 9, closeTime = 22;
  const isOpen = hour >= openTime && hour <= closeTime;

  return (
    <div>
    <div className="row row-cols-1 row-cols-md-2 g-4" style={{paddingTop:'0px'}}>
    <div className="card text-bg-light">
        <img src={BG1} style={{filter:'blur(3px)',height:'560px',width:'1380px'}} className="card-img" alt="..."/>
        <div className="card-img-overlay" style={{paddingLeft:'80px',color:'white'}}>
          <h1 className="card-title"style={{fontWeight:'bold',textAlign:'center',paddingTop:'150px'}}>Welcome to Resto. Restaurant </h1>
          <p className="card-text" style={{fontsize:'5vh',fontWeight:'bold',textAlign:'center'}}>Eat Healthy and Delecious Food</p>
          <button onClick={HandleOnClick} className='bg-light' style={{color:'black',fontWeight:'bold',borderRadius:'4px',fontSize:'5vh',marginLeft:'150px',backgroundColor:'black'}}> Whats Cooking ?<i className="fa-solid fa-bowl-chopsticks-noodles"></i></button>
        </div>
    </div>
    </div>
    <div className="header">
    <div className="row row-cols-1 row-cols-md-2 g-4">
      <div className="col">
        <div className="card">
          <div className="card-body text-center" style={{height:'70px',backgroundColor:'black',color:'white'}}>
            <h5 className="card-title fa-solid fa-calendar-days"> { day} {date}</h5>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <div className="card-body text-center" style={{height:'70px',backgroundColor:'black',color:'white'}}>
            <h5 className="card-title fa-solid fa-clock" style={{fontStyle:'normal'}}> {Time} --- {isOpen ? 'Resto. Open':'Resto. Closed'}</h5>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Home;


