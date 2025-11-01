import React from 'react';
import '../Footer/Footer.css'
import logo from '../../assets/logo.webp'
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className='  bg-[#1E2E4F]'>
                <div className='max-w-11/12 mx-auto py-8 grid grid-cols-2 md:grid-cols-4 gap-4'>
                    <div>
                    <Link to='/' className="flex items-center gap-2 ">
                        <img className='md:w-14 md:h-14 w-7 h-7 bg-white rounded-full' src={logo} alt="" />
                      <h2 className='text-white font-bold text-2xl'>
                     WarmPaws <br /> 
                     <p className='mt-1 text-base font-normal text-white'>Pet Care in Winter</p>
                     </h2>
                     
                    </Link>

                    {/* social links */}
                       <div className='mt-6 text-white flex gap-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-youtube-icon lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter-icon lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                       </div>
                    </div>
                    <div  >
                        <h5>Services</h5>
                        <ul className='mt-3'>
                            <li ><a href="/" >Dental Care</a></li>
                            <li><a href="/">Care for Puppy</a></li>
                            <li><a href="/">Pet Grooming</a></li>
                            <li><a href="/">Veterinary Service</a></li>

                        </ul>
                    </div>
                    <div >  
                        <h5>Our Pages</h5>
                        <ul className='mt-3'>
                            <li><a href="/">About us</a></li>
                            <li><a href="/">Contact us</a></li>
                            <li><a href="/">Services</a></li>
                            <li><a href="/">Our Team</a></li>
                            
                        </ul>
                    </div>
                    <div >
                        <h5>Legal</h5>
                        <ul className='mt-3'>
                            <li><a href="/">Terms of use</a></li>
                            <li><a href="/">Privacy policy</a></li>
                            <li><a href="/">Cookie policy</a></li>
                            <li><a href="/">Copyright Policy</a></li>
                            
                        </ul>
                    </div>
                   
                </div>
            </footer>
    );
};

export default Footer;