import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div>
            <div className='bg-[#D5DEEF] '>
                
            <div className='max-w-11/12 mx-auto flex justify-center mt-10 '>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                    <h2 className='font-bold text-2xl text-center text-[#304c77]'>Register Your Account</h2>
                    
        <div className="card-body">
        <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input type="text" className="input" placeholder="Name" /> 
            {/* Photo URL */}
            <label className="label">Photo URL</label>
            <input type="text" className="input" placeholder="Photo URL" />
            {/* Email */}
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          {/* Password */}
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          
          <button className="btn bg-gradient-to-r from-[#1E2E4F] to-[#395886] text-white mt-4">Register</button>
          <button className='btn mt-4 w-full px-4 py-3'><FcGoogle size={24} /> Continue with Google</button>

          <p className='text-center text-[#304c77] text-base font-medium mt-2'>Already have an account?{" "} <Link to='/auth/login' className='text-red-600'>Login</Link></p>
        </fieldset>
      </div>
    </div>
            </div> 
        </div>
        </div>
    );
};

export default Register;