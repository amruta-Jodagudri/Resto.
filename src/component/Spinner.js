import React from 'react';
import spin from '../img/Loader.gif.gif';

const Spinner = () => {
  return (
    <div class="card text-center text-bg-light">
      <img src={spin} alt='loading' style={{height:'490px',width:'580px',marginTop:'90px',marginLeft:'400px'}}/>
    </div>
  );
}

export default Spinner;
