import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useRef } from 'react';
import { auth } from '../../firebase/firebase.config';
import toast from 'react-hot-toast';
import { useLocation } from 'react-router';


const ForgotPassword = () => {

    const emailRef = useRef();
    const location = useLocation();

    const initialEmail = location.state?.initialEmail || '';

      const handleResetPassword = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        
        sendPasswordResetEmail(auth, email)
        .then(() => {
            toast.success('Password reset link sent!')
            setTimeout(() => {
                //Redirect the user to Gmail
            window.open('https://mail.google.com', '_blank');
            }, 1000);
            
            
        })
        .catch((error) => {
            toast.error(error.message || 'Failed to send reset email.');
        })
    } 

    return (
        <div className='bg-[#D5DEEF]' >
            <title>Forget Password</title>
            <div className='max-w-11/12 mx-auto flex justify-center mt-5 py-20'>
                 <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl px-5 py-5">
                    <form onSubmit={handleResetPassword}>
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                                <input required 
                                name='email'
                                type="email" 
                                className="input" 
                                ref={emailRef}
                                defaultValue = {initialEmail}
                                placeholder="Email" />
                            <button  type='submit'
                                className="btn hover:scale-105
                                bg-gradient-to-r from-[#1E2E4F] to-[#395886] text-white mt-4">Reset</button>    
                        </fieldset>
                    </form>
                 </div>
            </div>
            
        </div>
    );
};

export default ForgotPassword;