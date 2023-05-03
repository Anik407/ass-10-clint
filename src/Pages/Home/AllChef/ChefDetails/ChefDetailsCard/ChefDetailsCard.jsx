import React, { useState } from 'react';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from "react-icons/Fa";
import { FcLike } from "react-icons/Fc";
import { toast } from 'react-toastify';
import LazyLoad from 'react-lazy-load';




const ChefDetailsCard = ({ cooks }) => {

    const [active, setActive] = useState(false)

    const HandelLike = () => {
        
        setActive(true)
        toast("Favorite Successfully add");
    
    }

    const { name, img, ingredients, method, rating } = cooks
    return (
        <div className='shadow-2xl p-5 rounded-lg'>
            
            <div >
                <LazyLoad >
                <img className='rounded-lg' src={img} alt="" />
                </LazyLoad>
            </div>
            <div>
                <h2 className='text-4xl py-2 font-semibold'> {name}</h2>
            </div>
            <div className=' grid grid-cols-1 md:grid-cols-2 md:p-10'>
                <div >
                    <p className='py-4 text-2xl font-bold text-slate-600'>ingredient</p>
                    {ingredients.map((ingredient, index) => (
                        <p className='font-semibold text-neutral-600' key={index}> {ingredient} </p>
                    ))}
                </div>
                <div>
                    <p className='py-4 text-2xl font-bold text-slate-600'>Cooking method</p>
                    {
                        method.map((meth, index) => (
                            <p key={index} >
                                {meth}
                            </p>
                        ))
                    }
                </div>
            </div>

            <div className='flex  justify-between py-5'>

                <div > <p className='text-2xl'>
                    <Rating
                        placeholderRating={rating}
                        emptySymbol={<FaRegStar className='text-orange-300'></FaRegStar>}
                        placeholderSymbol={<FaStar  className='text-orange-300'></FaStar>}
                        fullSymbol={<FaStar  className='text-orange-300'></FaStar>} /> {rating}
                </p>
                </div>

                <div>
                    <button onClick={HandelLike} disabled={active} > {
                        active ? <button class=" cursor-not-allowed">
                        <FcLike className='text-5xl'></FcLike>
                        </button> : <>
                            <button class="bg-transparent hover:bg-blue-500
                        text-blue-700 font-semibold hover:text-white 
                        py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                ADD TO Favorite
                            </button> </>

                    } </button>
                </div>
            </div>
        </div>
    );
};

export default ChefDetailsCard;