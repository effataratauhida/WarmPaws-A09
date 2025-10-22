import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../assets/logo.webp'
import '../Header/Header.css'

const Navbar = () => {
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
                <li>
                    <NavLink to='/contact'>Contact Us</NavLink>
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
                        <li>
                             <NavLink to='/contact'>Contact Us</NavLink>
                       </li>
                        
                    </ul>
                </div>
                <div className="navbar-end">
                    <button  
                    className='hover:scale-105 cursor-pointer rounded-sm 
                    bg-gradient-to-r from-[#1E2E4F] to-[#395886] flex items-center 
                    gap-1.5 md:gap-2.5 py-2 px-3 md:py-3 md:px-4'>
                    {/* <img src= {gitImg} alt="" /> */}
                    <p className='text-white font-semibold text-base'> Login / Register</p>
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Navbar;