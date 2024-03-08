import React from 'react';
import discount from '../img/discoount.jpg';
import healthy from '../img/best.jpg';
import delivery from "../img/delivery.jpg";
import aboutBG from "../img/landing1BG.jpg";

const About = () => {
  return (
    <div>
        <div className="card text-bg-dark">
        <img src={aboutBG} style={{height:'850px',width:'100%',filter:'blur(9px'}} className="card-img" alt="..."/>
        <div className="card-img-overlay text-center">
            <h1 className="card-title" style={{fontWeight:'bold',paddingTop:'80px',color:'white'}}>About Us</h1>
            <div className='text-center' style={{paddingLeft:'15%',width:'1100px',paddingTop:'20px'}}>
            <p className="card-text">Welcome to Resto. where every meal tells a story. We embarked on a culinary adventure with a simple mission: to bring exceptional flavors to your doorstep.A passion for quality ingredients, and a commitment to making dining experiences extraordinary.
            At our Resto. we believe in more than just delivering meals; we aim to deliver moments of joy, comfort, and satisfaction.</p>
            </div>
            <h2 className="card-title" style={{fontWeight:'bold',paddingTop:'40px'}}>Bringing the World to Your Table !!</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4" style={{paddingTop:'20px'}}>
            <div className="col">
                    <div className="card">
                    <img src={discount} style={{height:'200px'}} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h3 className="card-title" style={{fontWeight:'bold'}}>Best Discount %</h3>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <img src={healthy} style={{height:'200px'}} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h3 className="card-title" style={{fontWeight:'bold'}}>Healthy Food</h3>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <img src={delivery} style={{height:'200px'}} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h3 className="card-title" style={{fontWeight:'bold'}}>Fast Delivery</h3>
                    </div>
                    </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    );
}

export default About;
