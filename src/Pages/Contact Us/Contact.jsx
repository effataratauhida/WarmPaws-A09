import React from 'react';

const Contact = () => {
    return (
        <div className='bg-[#D5DEEF] pt-10 pb-20'>
           
                <h2 className='text-3xl md:text-5xl font-bold text-[#31487A] text-center '>Have a questions?
                    <br />
                    Contact us now</h2>
                <div className='bg-white mt-10 '>
                    <div className='max-w-11/12 mx-auto py-10 flex items-center justify-between '>
                    <div>
                        <h3 className='text-3xl font-bold text-[#31487A]'>We Are Always Available For You & Your Pets</h3>
                    <h4 className='my-4 text-xl font-bold text-[#31487A]'>Information:</h4>
                    
                    {/* call */}

                    <div className='flex gap-2 items-center mt-5 text-xl font-semibold text-[#31487A]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-icon lucide-phone"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>
                    <p>+123 8989 444</p>
                    </div>
 
                    {/* location */}
                    <div className='flex gap-2 items-center mt-5 text-xl font-semibold text-[#31487A]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
                    <p>256 Avenue, Newyork City</p>
                    </div>

                     {/* email address*/}
                     <div className='flex gap-2 items-center mt-5 text-xl font-semibold text-[#31487A]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>

                        <p>info@gmail.com</p>
                     </div>
                    </div>
                    

                     {/* form */}

                     <div>
                        <h3 className='text-3xl font-bold text-[#31487A]'>Get In Touch</h3>
                        <form action="">
                            <input type="text" placeholder='Name' className='mt-5 px-5 py-3 bg-[#D5DEEF] rounded-sm shadow-sm text-blue-950 w-full'/>
                            <input type="email" placeholder='Email' 
                            className='mt-5 px-5 py-3 bg-[#D5DEEF] rounded-sm shadow-sm text-blue-950 w-full'/>
                            <textarea name="" id="" placeholder='Write Message' className='mt-5 px-5 py-3 bg-[#D5DEEF] rounded-sm shadow-sm text-blue-950 w-full'></textarea>

                            <button 
                             className='hover:scale-105 cursor-pointer rounded-sm mt-5
                                bg-gradient-to-r from-[#1E2E4F] to-[#395886]  flex items-center justify-center gap-1.5 md:gap-2.5 py-2 px-3 md:py-3 md:px-4 w-full'>
                    
                                <p className='text-white font-semibold text-base'>Send Us Message</p>

                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-right-icon lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
                            </button>
                        </form>
                     </div>
                    
                </div>
           </div>
        </div>
    );
};

export default Contact;