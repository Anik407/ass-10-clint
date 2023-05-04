import React from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const Registration  = () => {
    return (
        <div>
             <section className="bg-gray-50 dark:bg-gray-900 mt-5">
                <div className="shadow-2xl shadow-lime-300  py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
                    <div className="flex flex-col justify-center">

                    <LazyLoad>
                    <img className='w-96 md:ms-24 shadow-2xl shadow-lime-300  '
                            src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148987940.jpg?w=826&t=st=1683024078~exp=1683024678~hmac=49adf532af0306b29a02744b0bc49a571dcd2b3c2f177305218c05cdd0a99bab" alt="Flowbite Logo" />
                    </LazyLoad>
                        <h1 className="ps-14 md:ps-24 mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">   <span className='text-orange-400'> Cook's</span> <span className='text-lime-300'>Corner</span></h1>
                    
                    </div>
                    <div className=''>
                        <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                Log In to    <span className='text-orange-400'> Cook's</span> <span className='text-lime-300'>Corner</span>
                            </h2>
                            <form className="mt-8 space-y-6" action="#">
                            <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                                    <input type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your name" required />
                                </div>
                                <div>
                                    <label htmlFor="Photo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Photo</label>
                                    <input type="Photo" name="Photo" id="Photo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Photo Url" required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                    <input type="password" name="password" id="password" placeholder="Password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                               
                                <Link type="submit" className="w-full px-5 py-3 text-base font-medium text-center text-white bg-lime-400 rounded-lg hover:bg-lime-500 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 shadow-2xl">Registration</Link>
                                <div className="  text-sm font-medium text-gray-900 dark:text-white">
                                    Already have an account ?  <a className=" text-blue-600 hover:underline dark:text-blue-500">Log In</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Registration;