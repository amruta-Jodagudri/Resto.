import React from 'react';

const MenuItem = ({ name, price, image }) => {
  return (
    <div className="menu-item">
      {image && <img src={image} alt={name} className="item-image" />}
      <div className="item-details">
        <span className="item-name"><h3>{name}</h3></span>
        <span className="item-price">{price}</span>
        <div>
        <button className='cart' style={{height:'38px',width:'160px',border:'2px solid green',borderRadius:'7px', bottom:'0px'}}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
