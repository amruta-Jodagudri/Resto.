import React from 'react';
import contactBG from '../img/contactBG.jpg';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="card text-bg-dark">
        <img src={contactBG} className="card-img" alt="Contact Background" />
        <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center">
          <div className="contact my-3">
            <div className="row row-cols-1 row-cols-md-3 g-4 contact-cards">
              <div className="col contact-card">
                <div className="card">
                  <div className="card-body text-center">
                    <h5 className="card-title font-weight-bold">FIND US</h5>
                    <p className="card-text">
                      <h6>121 Rock Street,</h6>
                      <h6>21 Avenue,</h6>
                      <h6>98765-80008</h6>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col contact-card">
                <div className="card">
                  <div className="card-body text-center">
                    <h5 className="card-title font-weight-bold">HOURS</h5>
                    <p className="card-text">
                      <h6>Monday-Saturday</h6>
                      <h7>9am-7pm</h7>
                      <h6>Sunday</h6>
                      <h7>10am-9pm</h7>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col contact-card">
                <div className="card">
                  <div className="card-body text-center">
                    <h5 className="card-title font-weight-bold">CALL US</h5>
                    <p className="card-text">
                      <h6>02327-45892</h6>
                      <h6>7836495030</h6>
                      <h6>9875043080</h6>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
