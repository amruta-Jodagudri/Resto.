import React from 'react';
import spin from '../img/Loader.gif.gif';
import './Spinner.css';

const Spinner = () => {
  return (
    <div className="spinner-container">
      <img src={spin} alt='loading' className="spinner-image" />
    </div>
  );
}

export default Spinner;
