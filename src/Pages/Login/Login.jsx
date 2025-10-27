import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import { AuthContext } from '../../provider/AuthProvider';
import app from '../../firebase/firebase.config';

const Login = () => {

  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [error, setError] = useState('');
  
//  email , password login
  const handleLogin = async (e) => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email,password);

      setError('')
      
      try {
        const result =  await signInWithEmailAndPassword(auth, email, password);
        setUser(result.user);
        toast.success('Login successfully!');
        setTimeout(() => {
          navigate(from, { replace: true });
          }, 1500);
        } 
        catch (error) {
          console.log(error.message);
          setError(error.message);
        }
      };

  //  Google login
      const handleGoogleLogin = async () => {
        try {
          const result = await signInWithPopup(auth, provider);
          setUser(result.user);
          toast.success('Logged in with Google!');
          navigate(from, { replace: true });
        } 
        catch (error) {
          toast.error(error.message);
        }
      };

       return (
        <div className='bg-[#D5DEEF] '>

         <div className='max-w-11/12 mx-auto flex justify-center mt-5 pb-5'>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                    <h2 className='font-bold text-2xl text-center text-[#304c77]'>Welcome Back!</h2>
                    <p className='text-center text-[#304c77] mt-2'>Please enter your details to login.</p>

                  <form 
                  onSubmit={handleLogin}
                  className="card-body">
                  <fieldset className="fieldset">

                    {/* email */}
                    <label className="label">Email</label>
                    <input required name='email'
                    type="email" className="input" placeholder="Email" />
                    
                    {/* password */}
                    <label className="label">Password</label>
                    <input required name='password'
                    type="password" className="input" placeholder="Password" />

          <div><a className="link link-hover">Forgot password?</a></div>

          {
           error && <p className='text-red-500'>{error}</p>
        }

          <button type='submit'
          className="btn bg-gradient-to-r from-[#1E2E4F] to-[#395886] text-white mt-4">
            Login</button>

              <p className='text-center text-[#304c77] text-base font-medium mt-2'>or,</p>

          <button 
          onClick={handleGoogleLogin}
          className='btn mt-2 w-full px-4 py-3'>
            <FcGoogle size={24} /> 
            Continue with Google</button>

          <p className='text-center text-[#304c77] text-base font-medium mt-2'>Don't have an account?{" "}<Link 
          to='/auth/register' className='text-red-600 underline'>Register Now</Link></p>
        </fieldset>
      </form>
    </div>
            </div>
        </div>
    );
};

export default Login;