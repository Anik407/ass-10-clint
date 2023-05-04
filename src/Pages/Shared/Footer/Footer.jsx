import React from 'react';

const Footer = () => {
    return (


        <footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
            <div class="w-full max-w-screen-xl  mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
                        <img
                            src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148987940.jpg?w=826&t=st=1683024078~exp=1683024678~hmac=49adf532af0306b29a02744b0bc49a571dcd2b3c2f177305218c05cdd0a99bab"

                            class="h-8 mr-3" alt="Flowbite Logo" />
                 <h1 className='text-2xl'>       <span className='text-orange-400'> Cook's</span> <span className='text-lime-300'>Corner</span></h1>

                    </a>
                    <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                        </li>
                        <li>
                            <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Cook's
                    Corner</a>. All Rights Reserved.</span>
            </div>
        </footer>


    );
};

export default Footer;