import React from 'react';

const Banner1 = () => {
    return (
        <div className='my-10' >
            <div className=' grid grid-cols-1 md:grid-cols-2'>
                <div className=' p-5 md:p-36'>
                    <h1 className='my-2 text-4xl md:text-6xl font-bold'>
                   <span className='text-orange-400'> Cook's</span> <span className='text-lime-300'>Corner</span>
                    </h1>
                    <h2 className='text-2xl font-semibold'>Discover the Ultimate Destination for Foodies:    <span className='text-orange-400'> Cook's</span> <span className='text-lime-300'>Corner</span> - Your Go-To Site for Mouth-Watering Recipes, Culinary Tips, and Delicious Inspiration!</h2>
                </div>
                <div>
                    <img src="https://img.freepik.com/free-photo/impressed-young-handsome-cook-chef-uniform-standing-white-wall-pointing-with-hand-it-isolated-orange-wall-with-copy-space_141793-101494.jpg?size=626&ext=jpg" alt="" />                </div>
            </div>
        </div>
    );
};

export default Banner1;