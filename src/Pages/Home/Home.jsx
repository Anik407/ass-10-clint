import React from 'react';
import Banner from './Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import AllChef from './AllChef/AllChef';
import Banner1 from '../Banner1/Banner1';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    const chef = useLoaderData();
   
    return (
        <div>
         <Banner1></Banner1>
            <AllChef chef={chef}></AllChef>
            <Gallery></Gallery>
            <Banner></Banner>
       
        </div>
    );
};

export default Home;