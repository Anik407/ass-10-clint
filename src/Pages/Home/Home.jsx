import React from 'react';
import Banner from './Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import AllChef from './AllChef/AllChef';

const Home = () => {
    const chef = useLoaderData();
   
    return (
        <div>
            <Banner></Banner>
            <AllChef chef={chef}></AllChef>
            This is home
        </div>
    );
};

export default Home;