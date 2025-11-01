import React, { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router';
import ratingsIcon from '../../assets/icon-ratings.png'
import petService from '../../assets/petService.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {

   const services = useLoaderData();

   useEffect(() => {
        AOS.init({
        duration: 1000, 
        once: true,
       });
    }, []);

   return (
        <div className='bg-[#D5DEEF] py-7 md:py-10'>
            <div className='max-w-11/12 mx-auto'>
            <h2 className='text-3xl md:text-5xl font-bold text-[#31487A] text-center'>Our Services</h2>
             
             <div data-aos="fade-up"
             className='flex flex-col lg:flex-row gap-5 mt-7 lg:mt-14 h-600px'>
                <img src={petService} alt="" className='lg:w-1/3 md:h-[400px] lg:h-[500px]   rounded-sm ' />
                <div>
                    <ul>
                        <li>
                            <h4 className='font-bold text-lg md:text-xl text-[#31487A]'>Grooming & Fur Maintenance</h4>
                            <p className='mt-1 font-semibold text-sm md:text-base text-[#2d3a4f]'>Winter-appropriate grooming, trimming long fur if needed, and regular brushing to keep their coat healthy and warm.</p>
                        </li>
                        <li>
                            <h4 className='font-bold text-lg md:text-xl text-[#31487A] mt-3'>Indoor Heating & Warm Bedding</h4>
                            <p className='mt-1 font-semibold text-sm md:text-base text-[#2d3a4f]'>Ensuring pets have warm, cozy sleeping areas with blankets or heated beds during winter.</p>
                        </li>
                        <li>
                            <h4 className='font-bold text-lg md:text-xl text-[#31487A] mt-3'>Winter Bathing & Skin Care</h4>
                            <p className='mt-1 font-semibold text-sm md:text-base text-[#2d3a4f]'>Reducing bath frequency to prevent dry skin and using pet-safe moisturizers to maintain healthy skin.</p>
                        </li>
                        <li>
                            <h4 className='font-bold text-lg md:text-xl text-[#31487A] mt-3'>Health Checkups & Vaccinations</h4>
                            <p className='mt-1 font-semibold text-sm md:text-base text-[#2d3a4f]'>Routine veterinary checkups for cold-related illnesses like respiratory infections. Vaccinations and preventive care to boost immunity.</p>
                        </li>
                        <li>
                            <h4 className='font-bold text-lg md:text-xl text-[#31487A] mt-3'>Exercise & Outdoor Safety Guidance</h4>
                            <p className='mt-1 font-semibold text-sm md:text-base text-[#2d3a4f]'>Advising on short, safe outdoor walks and avoiding slippery or frozen surfaces.</p>
                        </li>
                        <li>
                            <h4 className='font-bold text-lg md:text-xl text-[#31487A] mt-3'>Winter Pet Health Consultation</h4>
                            <p className='mt-1 font-semibold text-sm md:text-base text-[#2d3a4f]'>Personalized advice on nutrition, hydration, and exercise routines tailored for winter.</p>
                        </li>
                    </ul>
                </div>
             </div>

            <div className=' pt-14'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                {services.map((service) => (
                    <div key={service.serviceId} data-aos="fade-up"
                        className='bg-white p-4 rounded-sm min-h-[360px] lg:min-h-[500px] flex flex-col justify-between'>
                        <div>
                             <img src={service.image} alt="" className='w-full rounded-lg h-[200px] lg:h-[300px]'/>

                                <h2 className='font-bold lg:text-lg text-base text-[#31487A] mt-2 lg:mt-4'>{service.serviceName}</h2>

                                <div className='flex items-center justify-between mt-2 lg:mt-4'>
                                    {/* ratings */}
                                <button className='flex items-center bg-[#D5DEEF] text-[#26658C] gap-2 py-1 px-2  
                                lg:py-1.5 lg:px-2.5 rounded-sm'>
                                    <p className='font-medium text-base'>Ratings: {service.rating}</p>
                                    <img src={ratingsIcon} alt="" className='w-4 h-4'/>
                                </button>
                                {/* price */}
                                <button className='bg-[#D5DEEF] py-1 px-2 lg:py-1.5 lg:px-2.5 rounded-sm'>
                                      <p className='font-medium text-base text-[#26658C]'>Price: ${service.price}</p>
                                </button>
                                </div>
                        </div>
                        
                        <Link to={`/serviceDetails/${service.serviceId}`}>
                                     <button className='mt-4  text-white hover:scale-105 cursor-pointer rounded-sm 
                                    bg-gradient-to-r from-[#1E2E4F] to-[#395886] 
                                     py-2 px-3 lg:py-3 lg:px-4 w-full'>View Details</button>
                                
                        </Link>
                                
                                
                    </div>
                ))}
            </div>
            </div>
            </div>
        </div>
    );
};

export default Services;