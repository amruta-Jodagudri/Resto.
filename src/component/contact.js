import React from 'react';
import contactBG from '../img/contactBG.jpg';

const contact = () => {
  return (
    <div>
      <div class="card text-bg-dark">
        <img src={contactBG} class="card-img" alt="..." style={{marginTop:'70px',height:'565px',width:'100%',filter:'blur(2px'}}/>
        <div class="card-img-overlay">
          <div className="contact my-3">
            <div class="row row-cols-1 row-cols-md-3 g-4" style={{marginTop:'190px',marginLeft:'130px'}}>
              <div class="col" style={{width:'353px'}}>
                <div class="card">
                  <div class="card-body text-center">
                    <h5 class="card-title" style={{fontWeight:'bold'}}>FIND US</h5>
                    <p class="card-text"><h6>121 Rock Street,</h6><h6>21 Avenue,</h6><h6>98765-80008</h6></p>
                  </div>
                </div>
              </div>
              <div class="col" style={{width:'353px'}}>
                <div class="card">
                  <div class="card-body text-center">
                    <h5 class="card-title" style={{fontWeight:'bold'}}>HOURS</h5>
                    <p class="card-text"><h6>Monday-Saturday</h6><h7>9am-7pm</h7><h6>Sunday</h6><h7>10am-9pm</h7></p>
                  </div>
                </div>
              </div>
              <div class="col" style={{width:'353px'}}>
                <div class="card">
                  <div class="card-body text-center">
                    <h5 class="card-title" style={{fontWeight:'bold'}}>CALL US</h5>
                    <p class="card-text"><h6>02327-45892</h6><h6>7836495030</h6><h6>9875043080</h6></p>
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

export default contact;
