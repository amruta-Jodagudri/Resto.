import React from 'react';
import MenuItem from '../pages/MenuItem';
import menuData from '../pages/menuData';
import './Menu.css';

const Menu = () => {
  return (
    <div className="menu" >
      {menuData.map((category, index) => (
        <div key={index} className="menu-category">
          <h3 className='text-center category-title'>{category.name}</h3>
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

