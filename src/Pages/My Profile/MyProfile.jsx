import React, {  useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const MyProfile = () => {
    const {user} = useContext(AuthContext);

    
    return (
        <div className='bg-[#D5DEEF] py-20'>
                
                <div className='max-w-11/12 mx-auto'>
                <div className="flex items-center justify-center gap-10 px-10 py-10   ">
                    <img src={user.photoURL || 'https://via.placeholder.com/150'}  alt="" 
                    className= 'w-60 h-60 rounded-sm' />
                    <div>
                        <h3 className='font-medium text-xl mb-2'>Name: {user.displayName || "Not Available"} </h3>
                        <hr className='border-[#1E2E4F]' />
                        <h3 className='font-medium text-xl my-2'>Email: {user && user.email}</h3>
                        <hr className='border-[#1E2E4F]' />
                        <button className=' cursor-pointer rounded-sm mt-4
                        hover:scale-105 hover:border-2  hover:border-[#1E2E4F] hover:bg-none
                        bg-gradient-to-r from-[#1E2E4F] to-[#395886]  
                        gap-1.5 md:gap-2.5 py-2 px-3 md:py-2 md:px-6
                        text-white hover:text-[#1E2E4F] font-semibold text-base'>
                        Update Profile</button>
                    </div>
                </div>
            
            </div>
            
            


            

         


        </div>
    );
};

export default MyProfile;