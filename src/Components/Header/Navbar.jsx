import React, {  useContext, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router';
import logo from '../../assets/logo.webp'
import '../Header/Header.css'
import { IoPersonCircle } from 'react-icons/io5';
import { useSpring, animated } from '@react-spring/web';
import { AuthContext } from '../../provider/AuthProvider';
import Register from './../../Pages/Register/Register';



const Navbar = () => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


     // useSpring for login btn
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

        // useSpring for register btn
        const [regHovered, setRegHovered] = useState(false);
        const regButtonAnimation = useSpring({
            from: { opacity: 0, transform: 'scale(0.9)' },
            to: { 
                opacity: 1, 
                transform: regHovered ? 'scale(1.05)' : 'scale(1)',
            },
            config: { tension: 200, friction: 10 },
        })
        const RegAnimatedLink = animated(Link);

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
                   <button 
                    onClick={() => {
                    if(user){
                        navigate("/myProfile");
                    } else {
                        navigate("/auth/login", { state: { from: "/myProfile" } });
                    }
                    }}
                    className={` ${
                      location.pathname === "/myProfile"
                      ? "text-[#395886] font-bold text-lg underline decoration-[#395886] underline-offset-4"
                      : "text-[#31487A] font-medium text-base"
                    }`}
                    >
                      My Profile
                    </button>
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
                           
                            <button 
                              onClick={() => {
                                if(user){
                                  navigate("/myProfile");
                                } else {
                                  navigate("/auth/login", { state: { from: "/myProfile" } });
                                }
                              }}
                              className={` ${
                                location.pathname === "/myProfile"
                                ? "text-[#395886] font-bold text-lg underline decoration-[#395886] underline-offset-4"
                                : "text-[#31487A] font-medium text-base"
                              }`}
                            >
                              My Profile
                            </button>
                        </li>
                        
                        
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                     {/* <IoPersonCircle size={40} /> */}
                     {/* for large and medium device */}
                    <div className="hidden md:flex gap-3">
                        <AnimatedLink 
                        to="/auth/login" 
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        style={buttonAnimation}  
                        className=' cursor-pointer rounded-sm bg-gradient-to-r from-[#1E2E4F] to-[#395886]
                        hover:border-[#1E2E4F] border-2 hover:bg-none text-white hover:text-[#1E2E4F] font-semibold text-base
                        gap-1.5 md:gap-2.5 py-2 px-3 md:py-2 md:px-6'>
                        Login
                    </AnimatedLink>
                    <RegAnimatedLink 
                        to="/auth/register" 
                        onMouseEnter={() => setRegHovered(true)}
                        onMouseLeave={() => setRegHovered(false)}
                        style={regButtonAnimation}
                        className=' cursor-pointer rounded-sm bg-gradient-to-r from-[#1E2E4F] to-[#395886] 
                        hover:border-[#1E2E4F] border-2 hover:bg-none text-white hover:text-[#1E2E4F] font-semibold text-base
                        gap-1.5 md:gap-2.5 py-2 px-3 md:py-2 md:px-6'>
                        Register
                    </RegAnimatedLink>
                    </div>

                   
                    
                    <div className="dropdown md:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-black ">
                            <IoPersonCircle size={40} />
                         </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-[#1E2E4F] rounded-box z-2 mt-3  p-2 shadow right-0 left-auto ">
                                <li >
                                    <AnimatedLink 
                                        to="/auth/login" 
                                        onMouseEnter={() => setHovered(true)}
                                        onMouseLeave={() => setHovered(false)}
                                        style={buttonAnimation}  
                                        className=' cursor-pointer rounded-sm  text-sm bg-white
                                        text-center  hover:border-[#1E2E4F] border-2  hover:bg-none  hover:text-[#1E2E4F]  
                                          py-1 px-3' >
                                        Login
                                    </AnimatedLink>
                                </li>
                                <li>
                                    <RegAnimatedLink 
                                        to="/auth/register" 
                                        onMouseEnter={() => setRegHovered(true)}
                                        onMouseLeave={() => setRegHovered(false)}
                                        style={regButtonAnimation}
                                        className='mt-2 cursor-pointer rounded-sm bg-white border-2
                                        hover:border-[#1E2E4F] hover:bg-none  hover:text-[#1E2E4F]  text-sm text-center
                                         py-1 px-3 '>
                                        Register
                                    </RegAnimatedLink>
                                </li>
                               
                
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>

    );
};

export default Navbar;