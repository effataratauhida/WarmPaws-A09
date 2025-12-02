import React, { useState } from 'react';
import errorImg from '../../assets/errorImg.jpg'
import { useSpring, animated } from '@react-spring/web';
import { useNavigate } from 'react-router';


const Error = () => {

    const navigate = useNavigate();

    // useSpring
 
    const [hovered, setHovered] = useState(false);
    const buttonAnimation = useSpring({
        from: { opacity: 0, transform: 'scale(0.9)' },
        to: { 
            opacity: 1, 
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
        },
        config: { tension: 200, friction: 10 },
    });

    const handleGoBack = () => {
        navigate('/'); 
    };

    return (
        <>
        <title>Error - 404 </title>
          
           <div >
            <div className='max-w-11/12 mx-auto flex flex-col items-center justify-center py-10'>
                <img src={errorImg} alt="" className='h-1/12 w-1/3'  />
            <div className='mt-2 text-center'>
                <h1 className='text-[#001931] font-semibold text-3xl'>Oops, page not found!</h1>
                <p className='text-[#627382] text-lg mt-3'>The page you are looking for is not available.</p>
                
                <animated.button 
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={handleGoBack}
                style={buttonAnimation}
                className='mt-4 font-semibold text-base text-white rounded-sm py-3 px-8
                bg-gradient-to-r from-[#1E2E4F] to-[#395886] cursor-pointer 
                hover:scale-105 hover:border-2  hover:border-[#1E2E4F] hover:bg-none hover:text-[#1E2E4F] '>Go Back!
                </animated.button>
                
            </div>
        </div>
           </div>
           
        </>
    );
};

export default Error;