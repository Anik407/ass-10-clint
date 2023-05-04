import React from 'react';
import { Carousel } from 'flowbite-react';

const Banner1 = () => {
    return (
        <div className='md:my-10 shadow-2xl shadow-orange-300' >
            <div className=' grid grid-cols-1 md:grid-cols-2'>
                <div className=' p-5 md:p-36'>
                    <h1 className='my-2 text-4xl md:text-6xl font-bold'>
                        <span className='text-orange-400'> Cook's</span> <span className='text-lime-300'>Corner</span>
                    </h1>
                    <h2 className='text-2xl font-semibold'>Discover the Ultimate Destination for Foodies:    <span className='text-orange-400'> Cook's</span> <span className='text-lime-300'>Corner</span> - Your Go-To Site for Mouth-Watering Recipes, Culinary Tips, and Delicious Inspiration!</h2>
                </div>
                <div className="h-56  lg:h-96">
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
        </div>
    );
};

export default Banner1;