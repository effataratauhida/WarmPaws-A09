import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../assets/logo.webp'
import '../Header/Header.css'
import { IoPersonCircle } from 'react-icons/io5';
import { useSpring, animated } from '@react-spring/web';


const Navbar = () => {

    // useSpring
    
        const [hovered, setHovered] = useState(false);
        const buttonAnimation = useSpring({
            from: { opacity: 0, transform: 'scale(0.9)' },
            to: { 
                opacity: 1, 
                transform: hovered ? 'scale(1.05)' : 'scale(1)',
            },
            config: { tension: 200, friction: 10 },
        })
    const AnimatedLink = animated(Link);

    return (
        <div className='bg-white'>
            <div className="navbar max-w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-black ">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"  fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
        <ul
        tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li >
                    <NavLink to='/' >Home</NavLink>
                </li>
                <li>
                    <NavLink to='/services' >Services</NavLink>
                </li>
                <li>
                    <NavLink to='/myProfile'>My Profile</NavLink>
                </li>
                
        </ul>
                    </div>
                    <Link to='/' className="flex items-center gap-1 hover:scale-105 ">
                        <img className='md:w-10 md:h-10 w-7 h-7' src={logo} alt="" />
                      <h2 className='text-[#26658C] font-bold text-lg'>
                     WarmPaws <br /> 
                     <p className='text-base font-normal'>Pet Care in Winter</p>
                     </h2>
                     
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex items-center gap-8 ">
                        <li >
                            <NavLink to='/' >Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/services'>Services</NavLink>
                        </li>
                        <li>
                            <NavLink to='/myProfile' >My Profile</NavLink>
                        </li>
                        
                        
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    <IoPersonCircle size={40} />

                    <AnimatedLink 
                    to="/auth/login" 
                        onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                style={buttonAnimation}  
                        className=' cursor-pointer rounded-sm 
                        border-2 border-[#1E2E4F]
                        gap-1.5 md:gap-2.5 py-2 px-3 md:py-2 md:px-6'>
                            <p className='text-[#1E2E4F] font-semibold text-base'> Login</p>
                    </AnimatedLink>
                    <Link 
                    to="/auth/register" 
                        className=' cursor-pointer rounded-sm 
                        hover:scale-105 hover:border-2  hover:border-[#1E2E4F] hover:bg-none
                        bg-gradient-to-r from-[#1E2E4F] to-[#395886] flex items-center 
                        gap-1.5 md:gap-2.5 py-2 px-3 md:py-2 md:px-6
                        text-white hover:text-[#1E2E4F] font-semibold text-base'>
                            Register
                    </Link>
                    
                </div>
            </div>
        </div>

    );
};

export default Navbar;