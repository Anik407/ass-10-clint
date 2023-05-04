import { Carousel } from 'flowbite-react';
import React from 'react';

const Banner = () => {
  return (
    <div className='m-5 slider'>
      <div className='text-center my-5 font-bold'>
        <h1 className='text-amber-400 text-5xl'>Eid Spacial Hot Offers !</h1>
      </div>
      <div className="h-56  lg:h-96">
        <Carousel>

        <img
            src='https://img.freepik.com/free-psd/food-menu-restaurant-facebook-cover-template_120329-1680.jpg?w=1060&t=st=1683208413~exp=1683209013~hmac=bb0959a9dbecf4e9477bb06ee91a37782b8903117b48b72c03a466ceb206c8c0' alt="..."
          />
          <img
            src='https://img.freepik.com/premium-vector/special-eid-al-fitr-food-menu-facebook-cover-banner_611904-107.jpg' alt="..."
          />
        
          <img
            src='https://img.freepik.com/free-psd/food-menu-restaurant-facebook-cover-template_120329-1688.jpg?w=1060&t=st=1683208494~exp=1683209094~hmac=01f00fde615d558eff57d161c0e75f44ddc938900483f843c0cac3f2c876f27d' alt="..."
          />
          <img
            src='https://img.freepik.com/premium-psd/super-grocery-sale-social-media-banner_120329-251.jpg' alt="..."
          />
          <img
            src='https://img.freepik.com/premium-psd/food-menu-design-restaurant-social-media-cover-template-psd_635028-19.jpg' alt="..."
          />
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;