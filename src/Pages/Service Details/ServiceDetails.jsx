import React, { useEffect, useState } from 'react';
import serviceImg from '../../assets/serviceImg.jpg'
import { useLoaderData, useLocation, useParams } from 'react-router';
import ratingsIcon from '../../assets/icon-ratings.png'
import { toast, ToastContainer } from 'react-toastify';

const ServiceDetails = () => {

    const location = useLocation();
    const services = useLoaderData();
    const { id } = useParams();
    
    const service = services.find( service => service.serviceId === parseInt(id));

    if (!service) {
    return (
        <div className='text-center py-20 bg-[#D5DEEF]'>
            <h2 className='text-4xl font-bold text-[#123277]'>404 - Service Not Found!</h2>
            <p className='mt-4 text-lg text-[#31487A]'>Data loading failed.....</p>
        </div>
    );
}

    const [name, setName] = useState('');
    const [email, setEmail] = useState(''); 
       
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSubmit = (e) => {
    e.preventDefault(); 
    toast.success("Service booked successfully!");

    // form data clear
    setName('');
    setEmail('');
    };          

    return (
         <div className='bg-[#D5DEEF] pt-6 md:pt-10 pb-20'>

            <h2 className='text-3xl md:text-5xl font-bold text-[#31487A] text-center'>Service in Details</h2>

                <div className=' mt-10 py-10 bg-white'>
                    <div className='max-w-11/12 mx-auto'>
                {/* show the details of service */}
                  
                  <div className=' flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10  '>
                     <img src={service.image} alt="" className='w-[400px] h-[400px] rounded-sm ' />
                     <div>
                        <h2 className='font-bold text-3xl text-[#31487A]'>{service.category}</h2>
                        <h2 className='font-bold text-xl text-[#586991] mt-4'>{service.serviceName}</h2>
                        <h3 className='mt-2 text-lg font-medium text-[#586991] '>{service.providerName}</h3>
                        <h4 className='mt-2 text-lg font-medium text-[#586991] '>{service.providerEmail}</h4>
                        <div className='flex items-center gap-4 mt-4'>
                            {/* ratings */}
                            <button className='flex items-center text-[#26658C] bg-[#D5DEEF] gap-2  py-1.5 px-2.5 rounded-sm'>
                                <p className='font-medium text-lg'>Ratings: {service.rating}</p>
                                <img src={ratingsIcon} alt="" className='w-4 h-4'/>
                            </button>
                            {/* price */}
                            <button className='bg-[#D5DEEF] py-1.5 px-2.5 rounded-sm'>
                                <p className='font-medium text-lg text-[#26658C]'>Price: ${service.price}</p>
                            </button>
                            </div>
                        <p className='mt-2 text-xl font-medium text-[#586991]'>Slot Available: <span className='font-bold text-2xl'>{service.slotsAvailable}</span> </p>
                        <p className='mt-2 text-lg font-medium text-[#586991]'>{service.description}</p>
                     </div>
                  </div>
                 </div>
               </div>
                {/* book service */}

                <h4 className='text-3xl md:text-5xl font-bold text-[#31487A] pt-10 text-center'>Book Service</h4>
                <div className='flex flex-col-reverse md:flex-row items-center justify-center gap-5 pt-8  md:pt-16'>
                    
                    <div className='bg-white py-16 px-20 rounded-sm'>
                        <h3 className='font-semibold text-2xl text-[#31487A] '>Request a Schedule</h3>
                        <p className='mt-2 font-semibold text-base text-[#2d3a4f]'>Your email address will not be published</p>
                        <form>

                            <input type="text" placeholder='Full Name' 
                            value={name} onChange={(e) => setName(e.target.value)}
                            className='mt-5 px-5 py-3 bg-[#D5DEEF] rounded-sm shadow-sm text-blue-950 w-full'/>
                            <br />

                            <input type="email" placeholder='Email' 
                            value={email} onChange={(e) => setEmail(e.target.value)}
                            className='mt-5 px-5 py-3 bg-[#D5DEEF] rounded-sm shadow-sm text-blue-950 w-full'/>

                            <button onClick={handleSubmit}
                             className='hover:scale-105 cursor-pointer rounded-sm mt-5
                                bg-gradient-to-r from-[#1E2E4F] to-[#395886]  flex items-center justify-center gap-1.5 md:gap-2.5 py-2 px-3 md:py-3 md:px-4 w-full'>
                    
                                <p className='text-white font-semibold text-base'>Book Now</p>

                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-right-icon lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
                            </button>
                        </form>
                        </div>
                                {/* img */}
                        <img src={serviceImg} alt="" className='h-[350px] md:w-1/3 md:h-[400px] rounded-sm' />
                </div>

                <ToastContainer 
                    position="top-right"
                    autoClose={3000} // 3 seconds
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            
        </div>
        
    );
};

export default ServiceDetails;