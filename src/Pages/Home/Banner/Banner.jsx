import { Carousel } from 'flowbite-react';
import React from 'react';

const Banner = () => {
    return (
        <div  className='m-5 slider'>
        <div className="h-56 md:h-[1200px]">
  <Carousel>
    <img 
      src="https://img.freepik.com/premium-photo/stir-fry-chicken-zucchini-sweet-peppers-green-onion_2829-3740.jpg?w=1380"
      alt="..."
    />
    <img
      src="https://img.freepik.com/premium-photo/fried-rice-with-vegetables-plate_202769-219.jpg?w=996"
      alt="..."
    />
    <img
      src="https://img.freepik.com/free-photo/thai-food-fried-noodle-with-pork-soy-sauce-vegetable_1150-27841.jpg?w=996&t=st=1683114619~exp=1683115219~hmac=8b82a9cf258e3328c95ef06f55de30d15adefb517836bf407b88418547eb1c20"
      alt="..."
    />
    <img
      src="https://img.freepik.com/free-photo/pad-thai-white-plate-with-lemon-eggs-seasoning-wooden-table_1150-21208.jpg?w=996&t=st=1683114633~exp=1683115233~hmac=8f9ed6e1e3b4c6918109991a355ecf43f6066272b91bc61b41bb112cc3fd7e02"
      alt="..."
    />
    <img
      src="https://img.freepik.com/premium-photo/rice-with-pork-leg_45583-810.jpg?w=996"
      alt="..."
    />
  </Carousel>
</div>
        </div>
    );
};

export default Banner;