import React, { use } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const MyProfile = () => {
    const {user} = use(AuthContext);

    
    return (
        <div className='bg-[#D5DEEF] pt-10 pb-20'>
            <div className='bg-white'>
                <div className='max-w-11/12 mx-auto'>
                <div className="flex items-center justify-center gap-10  py-10">
                    <img src=''  alt="" className='bg-red-500 w-30 h-40' />
                    <div>
                        <h3 className='font-semibold text-xl'>Name: </h3>
                        
                        <h3 className='font-semibold text-xl '>Email: {user && user.email}</h3>
                        
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
            


            

         


        </div>
    );
};

export default MyProfile;