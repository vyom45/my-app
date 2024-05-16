import React from 'react';
import Productsidebar from './Productsidebar';

const Productcard = () => {
  return (
    <div className="flex">
      <Productsidebar/>
      <div className="w-[1000px]">
        <div className="w-[404px] h-[227px]">
          <div class>
            <img src='https://images.meesho.com/images/products/400300304/duwjh_400.webp' alt='shirt'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productcard;
