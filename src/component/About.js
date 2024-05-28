import React from 'react';
import healthy from '../img/best.jpg';
import delivery from "../img/delivery.jpg";
import discount from '../img/discoount.jpg';
import aboutBG from "../img/landing1BG.jpg";
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <img src={aboutBG} className="about-bg-img" alt="Background" />
            <div className="about-overlay">
                <h1 className="about-title">About Us</h1>
                <div className="about-text">
                    <p>Welcome to Resto. where every meal tells a story. We embarked on a culinary adventure with a simple mission: to bring exceptional flavors to your doorstep. A passion for quality ingredients, and a commitment to making dining experiences extraordinary. At our Resto, we believe in more than just delivering meals; we aim to deliver moments of joy, comfort, and satisfaction.</p>
                </div>
                <h2 className="about-subtitle">Bringing the World to Your Table !!</h2>
                <div className="about-cards-container">
                    <div className="card about-card">
                        <img src={discount} className="card-img-top" alt="Discount" />
                        <div className="card-body">
                            <h3 className="card-title about-card-title">Best Discount %</h3>
                        </div>
                    </div>
                    <div className="card about-card">
                        <img src={healthy} className="card-img-top" alt="Healthy" />
                        <div className="card-body">
                            <h3 className="card-title about-card-title">Healthy Food</h3>
                        </div>
                    </div>
                    <div className="card about-card">
                        <img src={delivery} className="card-img-top" alt="Delivery" />
                        <div className="card-body">
                            <h3 className="card-title about-card-title">Fast Delivery</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
