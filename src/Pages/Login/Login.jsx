import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className='bg-[#D5DEEF] '>
            <div className='max-w-11/12 mx-auto flex justify-center mt-20 '>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                    <h2 className='font-bold text-2xl text-center text-[#304c77]'>Welcome Back</h2>
                    <p className='text-center text-[#304c77] mt-2'>Welcome back! Please enter your details.</p>
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn bg-gradient-to-r from-[#1E2E4F] to-[#395886] text-white mt-4">Login</button>
          <button className='btn mt-4 w-full px-4 py-3'><FcGoogle size={24} /> Continue with Google</button>

          <p className='text-center text-[#304c77] text-base font-medium mt-2'>Don't have an account?{" "}<Link 
          to='/auth/register' className='text-red-600'>Register Now</Link></p>
        </fieldset>
      </div>
    </div>
            </div>
        </div>
    );
};

export default Login;