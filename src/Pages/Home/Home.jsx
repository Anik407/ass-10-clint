import React from 'react';
import Banner from './Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import AllChef from './AllChef/AllChef';

const Home = () => {
    const chef = useLoaderData();
   
    return (
        <div>
         
            <AllChef chef={chef}></AllChef>
            <Banner></Banner>
       
        </div>
    );
};

export default Home;