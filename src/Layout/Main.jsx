import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <div className='shadow-2xl shadow-lime-100  '>  
                <Header></Header></div>
            <Outlet></Outlet>
            <ToastContainer />
            <Footer></Footer>
        </div>
    );
};

export default Main;