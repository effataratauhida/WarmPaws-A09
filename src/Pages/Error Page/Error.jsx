import React from 'react';
import Navbar from '../../Components/Header/Navbar';
import errorImg from '../../assets/errorImg.jpg'
import Footer from '../../Components/Footer/Footer';

const Error = () => {
    return (
        <>
           <Navbar></Navbar> 
           <div className='bg-[#D5DEEF]'>
            <div className='max-w-11/12 mx-auto flex flex-col items-center justify-center pt-10 pb-18'>
            <img src={errorImg} alt="" />
            <div className='mt-4 text-center'>
                <h1 className='text-[#001931] font-semibold text-4xl'>Oops, page not found!</h1>
                <p className='text-[#627382] text-xl mt-3'>The page you are looking for is not available.</p>
                
                <button 
                className='mt-4 font-semibold text-base text-white rounded-sm py-4 px-10
                bg-gradient-to-r from-[#1E2E4F] to-[#395886] cursor-pointer hover:scale-105'>Go Back!
                </button>
                
            </div>
        </div>
           </div>
           <Footer></Footer>
        </>
    );
};

export default Error;