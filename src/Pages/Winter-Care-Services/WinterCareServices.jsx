import React from 'react';
import { Link, useLoaderData } from 'react-router';
import ratingsIcon from '../../assets/icon-ratings.png'
import winterTips from '../../assets/winter-tips1.jpg'
import petDentist1 from '../../assets/pet-dentist1.jpg'
import vet from '../../assets/vet.jpg'
import dogGroomer from '../../assets/dog-groomer.jpg'
import catGroomer from '../../assets/cat-groomer.jpg'



const WinterCareServices = () => {
 
     const services = useLoaderData();

    
 
       return (
        <div className='bg-[#D5DEEF]'>
            <div className='max-w-11/12 mx-auto py-20'>
                <h2 className='text-3xl md:text-5xl font-bold text-[#31487A] text-center'>Popular Winter Care Services</h2>

                {/*  card layout */}
            <div className=' pt-14'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                {services.map((service) => (
                    <div key={service.serviceId} className='bg-white p-4 rounded-sm h-[680px] '>
                            <img src={service.image} alt="" className='w-full rounded-lg h-3/4'/>
                                <h2 className='font-bold text-xl text-[#31487A] mt-4'>{service.serviceName}</h2>
                                <div className='flex items-center justify-between mt-4'>
                                    {/* ratings */}
                                <button className='flex items-center bg-[#D5DEEF]  gap-2  py-1.5 px-2.5 rounded-sm'>
                                    <p className='font-medium text-base'>Ratings: {service.rating}</p>
                                    <img src={ratingsIcon} alt="" className='w-4 h-4'/>
                                </button>
                                {/* price */}
                                <button className='bg-[#D5DEEF] py-1.5 px-2.5 rounded-sm'>
                                      <p className='font-medium text-base text-[#26658C]'>Price: ${service.price}</p>
                                </button>
                                </div>
                                <Link to={`/serviceDetails/${service.serviceId}`}>
                                     <button className='mt-4  text-white hover:scale-105 cursor-pointer rounded-sm 
                                    bg-gradient-to-r from-[#1E2E4F] to-[#395886]
                                     py-2 px-3 md:py-3 md:px-4 w-full'>View Details</button>
                                
                                </Link>
                                
                                
                        </div>
                ))}
            </div>
            </div>

            {/* Winter Care Tips for Pets section */}

            <h2 className='text-3xl md:text-5xl font-bold text-[#31487A] text-center pt-20'>Winter Care Tips for Pets</h2>
            <div className='flex gap-5 mt-14'>
                <img src={winterTips} alt="" className='w-1/3 rounded-sm ' />
                <div>
                    <ul>
                        <li>
                            <h4 className='font-bold text-xl text-[#31487A]'>Limit Outdoor Time</h4>
                            <p className='mt-2 font-semibold text-base text-[#2d3a4f]'>Avoid keeping your pet outside for long periods during extreme cold. Short, frequent walks are better.</p>
                        </li>
                        <li>
                            <h4 className='font-bold text-xl text-[#31487A] mt-5'>Keep Them Warm</h4>
                            <p className='mt-2 font-semibold text-base text-[#2d3a4f]'>Make sure your pet has a warm, dry place to sleep — use soft blankets or heated beds to protect them from the cold.</p>
                        </li>
                        <li>
                            <h4 className='font-bold text-xl text-[#31487A] mt-5'>Protect Their Paws</h4>
                            <p className='mt-2 font-semibold text-base text-[#2d3a4f]'>Ice, snow, and salt can harm paws — use pet booties or clean their feet after walks.</p>
                        </li>
                        <li>
                            <h4 className='font-bold text-xl text-[#31487A] mt-5'>Moisturize Skin & Paws</h4>
                            <p className='mt-2 font-semibold text-base text-[#2d3a4f]'>Cold air can dry out skin. Use vet-approved moisturizers to prevent cracking.</p>
                        </li>
                        <li>
                            <h4 className='font-bold text-xl text-[#31487A] mt-5'>Maintain a Healthy Diet</h4>
                            <p className='mt-2 font-semibold text-base text-[#2d3a4f]'>Adjust their diet slightly to match their energy needs — pets may need more calories in cold weather.</p>
                        </li>
                        <li>
                            <h4 className='font-bold text-xl text-[#31487A] mt-5'>Regular Grooming</h4>
                            <p className='mt-2 font-semibold text-base text-[#2d3a4f]'>Don’t skip grooming — clean fur traps heat better and keeps skin healthy.</p>
                        </li>
                    </ul>
                </div>
            </div>


            {/* Meet Our Expert Vets section */}

            <h2 className='text-3xl md:text-5xl font-bold text-[#31487A] text-center pt-20'>Meet Our Expert Vets</h2>
            <p className='text-center mt-8 font-semibold text-lg text-[#2d3a4f]'>Each specialist is dedicated to understanding your goals, ensuring treatments are tailored to your pets unique beauty needs</p>
            <div className='grid lg:grid-cols-4 gap-4 mt-10 grid-cols-1 sm:grid-cols-2 '>
                <div className='bg-white p-4 rounded-sm text-center'>
                    <img src={petDentist1} alt="" className='rounded-sm' />
                    <h4 className='font-semibold text-2xl mt-4 text-[#2d3a4f]'>Fabio Santoro</h4>
                    <p className='mt-2 font-semibold text-lg text-[#2d3a4f]'>Pet dentist</p>
                </div>
                <div className='bg-white p-4 rounded-sm text-center'>
                    <img src={vet} alt="" className='rounded-sm' />
                    <h4 className='font-semibold text-2xl mt-4 text-[#2d3a4f]'>Marco De Luca</h4>
                    <p className='mt-2 font-semibold text-lg text-[#2d3a4f]'>Veterinarian</p>
                </div>
                <div className='bg-white p-4 rounded-sm text-center'>
                    <img src={dogGroomer} alt="" className='rounded-sm' />
                    <h4 className='font-semibold text-2xl mt-4 text-[#2d3a4f]'>Martina Greco</h4>
                    <p className='mt-2 font-semibold text-lg text-[#2d3a4f]'>Dog groomer</p>
                </div>
                <div className='bg-white p-4 rounded-sm text-center'>
                    <img src={catGroomer} alt="" className='rounded-sm' />
                    <h4 className='font-semibold text-2xl mt-4 text-[#2d3a4f]'>Enzo Romano</h4>
                    <p className='mt-2 font-semibold text-lg text-[#2d3a4f]'>Cat groomer</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default WinterCareServices;