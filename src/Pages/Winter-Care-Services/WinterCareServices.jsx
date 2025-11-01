import React, { useContext, useEffect } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import ratingsIcon from '../../assets/icon-ratings.png'
import winterTips from '../../assets/winter-tips1.jpg'
import petDentist1 from '../../assets/pet-dentist1.jpg'
import vet from '../../assets/vet.jpg'
import dogGroomer from '../../assets/dog-groomer.jpg'
import catGroomer from '../../assets/cat-groomer.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AuthContext } from '../../provider/AuthProvider';


const WinterCareServices = () => {
 
    const services = useLoaderData();

    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const handleViewDetails = (id) => {
    if (user) {
      navigate(`/serviceDetails/${id}`);
    } else {
      navigate('/auth/login', { state: { from: `/serviceDetails/${id}` } });
    }
    };

    useEffect(() => {
        AOS.init({
        duration: 1000, 
        once: true,
       });
    }, []);
 
       return (
        <div className='bg-[#D5DEEF] '>
            <div className='max-w-11/12 mx-auto md:py-14 py-10'>
                <h2 className='text-3xl md:text-5xl font-bold text-[#31487A] text-center '>Popular Winter Care Services</h2>

                {/*  card layout */}
            <div className='md:pt-14 pt-10'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                {services.map((service) => (
                    <div key={service.serviceId}   data-aos="fade-up"
                    className='bg-white p-4 rounded-sm  lg:min-h-[500px] min-h-[360px] 
                    flex flex-col justify-between'>
                            <div>
                                <img src={service.image} alt="" className='w-full rounded-lg  h-[200px] lg:h-[300px]'/>

                                <h2 className='font-bold lg:text-lg text-base text-[#31487A] mt-3 lg:mt-4 '>{service.serviceName}</h2>

                                <div className='flex items-center justify-between mt-3 lg:mt-4'>
                                    {/* ratings */}
                                <button className='flex items-center bg-[#D5DEEF]  gap-2  py-1.5 px-2.5 rounded-sm'>
                                    <p className='font-medium text-sm md:text-base text-[#31487A]'>Ratings: {service.rating}</p>
                                    <img src={ratingsIcon} alt="" className='w-4 h-4'/>
                                </button>
                                {/* price */}
                                <button className='bg-[#D5DEEF] py-1.5 px-2.5 rounded-sm'>
                                      <p className='font-medium text-sm md:text-base text-[#26658C]'>Price: ${service.price}</p>
                                </button>
                                </div>
                            </div>
                            

                                <button  onClick={() => handleViewDetails(service.serviceId)}
                                   className='mt-3 lg:mt-4  text-white hover:scale-105 cursor-pointer rounded-sm 
                                    bg-gradient-to-r from-[#1E2E4F] to-[#395886] text-sm md:text-base
                                     py-2 px-3 lg:py-3 lg:px-4 w-full'
                                > View Details
                                </button>
                    </div>
                ))}
            </div>
            </div>
          </div>

            {/* Winter Care Tips for Pets section */}

            <h2 className='text-3xl md:text-5xl font-bold text-[#31487A] text-center '>Winter Care Tips for Pets</h2>
            <div className='mt-10 md:mt-14 bg-white py-7 md:py-14'   data-aos="fade-up">
                <div className='max-w-11/12 mx-auto flex flex-col lg:flex-row justify-center items-center gap-7 md:gap-10'>
                       <img src={winterTips} alt="" className='lg:w-[500px] lg:h-[600px] rounded-sm ' />
                <div>
                    <ul>
                        <li>
                            <h4 className='font-bold text-lg md:text-xl text-[#31487A]'>Limit Outdoor Time</h4>
                            <p className='mt-2 font-semibold text-sm md:text-base text-[#2d3a4f]'>Avoid keeping your pet outside for long periods during extreme cold. Short, frequent walks are better.</p>
                        </li>
                        <li>
                            <h4 className='font-bold text-lg md:text-xl text-[#31487A] mt-5'>Keep Them Warm</h4>
                            <p className='mt-2 font-semibold text-sm md:text-base text-[#2d3a4f]'>Make sure your pet has a warm, dry place to sleep — use soft blankets or heated beds to protect them from the cold.</p>
                        </li>
                        <li>
                            <h4 className='font-bold text-lg md:text-xll text-[#31487A] mt-5'>Protect Their Paws</h4>
                            <p className='mt-2 font-semibold text-sm md:text-base text-[#2d3a4f]'>Ice, snow, and salt can harm paws — use pet booties or clean their feet after walks.</p>
                        </li>
                        <li>
                            <h4 className='font-bold text-lg md:text-xl text-[#31487A] mt-5'>Moisturize Skin & Paws</h4>
                            <p className='mt-2 font-semibold text-sm md:text-base text-[#2d3a4f]'>Cold air can dry out skin. Use vet-approved moisturizers to prevent cracking.</p>
                        </li>
                        <li>
                            <h4 className='font-bold text-lg md:text-xl text-[#31487A] mt-5'>Maintain a Healthy Diet</h4>
                            <p className='mt-2 font-semibold text-sm md:text-base text-[#2d3a4f]'>Adjust their diet slightly to match their energy needs — pets may need more calories in cold weather.</p>
                        </li>
                        <li>
                            <h4 className='font-bold text-lg md:text-xl text-[#31487A] mt-5'>Regular Grooming</h4>
                            <p className='mt-2 font-semibold text-sm md:text-base text-[#2d3a4f]'>Don’t skip grooming — clean fur traps heat better and keeps skin healthy.</p>
                        </li>
                    </ul>
                </div>
                </div>
                
            </div>  


            {/* Meet Our Expert Vets section */}
            <div className='max-w-11/12 mx-auto'>
                      <h2  
                      className='text-3xl md:text-5xl font-bold text-[#31487A] text-center pt-10 md:pt-20'>Meet Our Expert Vets</h2>
            <p className='text-center mt-4 md:mt-8 font-semibold md:text-lg text-[#2d3a4f]'>Each specialist is dedicated to understanding your goals, ensuring treatments are tailored to your pets unique beauty needs</p>
            <div className='grid md:grid-cols-4 gap-4 mt-10 grid-cols-1 sm:grid-cols-2 '
            data-aos="fade-up">
                <div className='bg-white p-4 rounded-sm text-center '>
                    <img src={petDentist1} alt="" className='rounded-sm w-full h-[280px]' />
                    <h4 className='font-semibold text-2xl mt-4 text-[#2d3a4f]'>Fabio Santoro</h4>
                    <p className='mt-2 font-semibold text-lg text-[#2d3a4f]'>Pet dentist</p>
                </div>
                <div className='bg-white p-4 rounded-sm text-center'>
                    <img src={vet} alt="" className='rounded-sm w-full h-[280px]' />
                    <h4 className='font-semibold text-2xl mt-4 text-[#2d3a4f]'>Marco De Luca</h4>
                    <p className='mt-2 font-semibold text-lg text-[#2d3a4f]'>Veterinarian</p>
                </div>
                <div className='bg-white p-4 rounded-sm text-center'>
                    <img src={dogGroomer} alt="" className='rounded-sm w-full h-[280px]' />
                    <h4 className='font-semibold text-2xl mt-4 text-[#2d3a4f]'>Martina Greco</h4>
                    <p className='mt-2 font-semibold text-lg text-[#2d3a4f]'>Dog groomer</p>
                </div>
                <div className='bg-white p-4 rounded-sm text-center'>
                    <img src={catGroomer} alt="" className='rounded-sm w-full h-[280px]' />
                    <h4 className='font-semibold text-2xl mt-4 text-[#2d3a4f]'>Enzo Romano</h4>
                    <p className='mt-2 font-semibold text-lg text-[#2d3a4f]'>Cat groomer</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default WinterCareServices;