import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    return (
        <div className='bg-[#D5DEEF]'>
            <div className='max-w-11/12 mx-auto'>
                 <div className='bg-white'>
                    <h2>Welcome Back</h2>
                    <p>Welcome back! Please enter your details.</p>
                    <form action="">
                        <label htmlFor="">Email</label>
                        <input type="email" name="" id="" placeholder='Email' className='px-5 py-3 rounded-sm shadow-sm text-blue-950 w-full' />

                        <label htmlFor="" className='mt-4'>Password</label>
                        <input type="password" name="" id="" placeholder='Password' className='px-5 py-3 rounded-sm shadow-sm text-accent w-full'/>
                        <p>Forgot password?</p>

                        <button 
                             className='hover:scale-105 cursor-pointer rounded-sm mt-5
                                bg-gradient-to-r from-[#1E2E4F] to-[#395886]  text-center py-2 px-3 md:py-3 md:px-4 w-full'>
                    
                                <p className='text-white font-semibold text-base'>Login</p>
                        </button>
                        <button className='btn-outline w-full px-4 py-3'><FcGoogle size={24} /> Continue with Google</button>
                    </form>
                 </div>
            </div>
        </div>
    );
};

export default Login;