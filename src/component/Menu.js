import React from 'react';
import MenuItem from './MenuItem';
import menuData from './menuData';

const Menu = () => {
  return (
    <div className="menu" style={{marginTop:'70px'}}>
      {menuData.map((category, index) => (
        <div key={index} className="menu-category">
          <h3 className='text-center' style={{fontWeight:'bold',backgroundColor:'grey',color:'white'}}>{category.name}</h3>
          <div className="menu-items">
            {category.items.map((item, itemIndex) => (
              <MenuItem key={itemIndex} {...item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
