import React from 'react';
import { Link } from 'react-router-dom';
import { FcLike } from "react-icons/Fc";
import { RxCookie } from "react-icons/Rx";
import { MdDateRange } from "react-icons/Md";
import LazyLoad from 'react-lazy-load';

const ChefCards = ({ cd }) => {

    const { id, chef_picture, bio, num_recipes, likes_num, years_of_experience, chef_name } = cd;

    return (
        <div className='shadow-2xl'>
            <div
                style={{ height: '750px' }}
                className=" max-w-2xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
                <LazyLoad  >
                    <img className="rounded-t-lg" src={chef_picture} />
                </LazyLoad>
                <div className="p-5">
                    <a href="/">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {chef_name}
                        </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {bio}     </p>

                    <div className='flex py-3 text-lg'> <FcLike className='font-bold  text-2xl mx-2'></FcLike> <h4 className='font-bold'> Likes : {likes_num}</h4> </div>

                    <div className='flex'>
                        <RxCookie className='font-bold  text-2xl mx-2'></RxCookie>
                        <h4 className='font-bold'> num recipes : {num_recipes}</h4>
                    </div>

                    <div className='flex py-2'>
                        <MdDateRange className='font-bold  text-2xl mx-2'></MdDateRange>
                        <h4 className='font-semibold'> years of experience : {years_of_experience}</h4>
                    </div>

                    <Link

                        to={`/dashes/${id}`}

                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center
                    text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Read more
                        <svg
                            aria-hidden="true"
                            className="w-4 h-4 ml-2 -mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 
                            0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ChefCards;
