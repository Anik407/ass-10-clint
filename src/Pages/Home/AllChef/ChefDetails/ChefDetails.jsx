import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FcLike } from "react-icons/Fc";
import { RxCookie } from "react-icons/Rx";
import { MdDateRange } from "react-icons/Md";
import ChefDetailsCard from './ChefDetailsCard/ChefDetailsCard';
import LazyLoad from 'react-lazy-load';



const ChefDetails = () => {
    const ChefBio = useLoaderData();

    const { chef_picture, bio, num_recipes, likes_num, years_of_experience, chef_name, recipes } = ChefBio;

    return (
        <section>
            <div className='mt-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 container mx-auto p-1'>

                <div>
                    <LazyLoad  threshold={0.95} onContentVisible={() => {console.log('loaded!')}}>
                        <img className='shadow-2xl shadow-lime-300   rounded-full shadow-2xl' src={chef_picture} alt="" />
                    </LazyLoad>
                </div>

                <div className='shadow-2xl shadow-lime-300   mx-3  rounded-lg p-5 md:p-28'>
                    <h1 className='text-2xl font-bold'>  {chef_name}</h1>
                    <p className='font-semibold text-slate-700'> {bio}</p>


                    <div className='flex py-3 text-lg '> <FcLike className='font-bold  text-2xl mx-2'></FcLike> <h4 className='font-bold'> Likes : {likes_num}</h4> </div>

                    <div className='flex'>
                        <RxCookie className='font-bold  text-2xl mx-2'></RxCookie>
                        <h4 className='font-bold'> num recipes : {num_recipes}</h4>
                    </div>

                    <div className='flex py-2'>
                        <MdDateRange className='font-bold  text-2xl mx-2'></MdDateRange>
                        <h4 className='font-semibold'> years of experience : {years_of_experience}</h4>
                    </div>
                </div>

            </div>


            <div className='my-10'>
                <h1 className='text-5xl text-center font-bold py-10'>Recipes</h1>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                    {recipes.map(cooks => <ChefDetailsCard cooks={cooks} key={cooks.name}></ChefDetailsCard>)}
                </div>

            </div>
        </section>
    );
};

export default ChefDetails;
