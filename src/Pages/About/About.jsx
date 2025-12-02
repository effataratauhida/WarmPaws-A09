import React from 'react';
import mission from '../../assets/mission.png'
import chooseUs from '../../assets/choose.png'
const About = () => {
    return (
        <div className='bg-[#D5DEEF] py-7 md:py-10'>
            <title>About Us</title>
            <div className='max-w-11/12 mx-auto'>
            {/* <h2 className='text-3xl md:text-5xl font-bold text-[#31487A] text-center'>About Us</h2>
            <h3 className='text-lg mt-3  text-[#31487A] text-center'>Dedicated to protecting pets from the cold, WarmPaws combines care, comfort, and love for your four-legged family members.Winter can be harsh—but WarmPaws is here to ensure your pets stay warm, safe, and happy all season long.</h3> */}
            <div >
                <h2 className='text-4xl  font-bold text-[#31487A] text-center'>Our Mission</h2>
                <div className='mt-8 flex gap-5'>
                    <img src={mission} alt="" className='h-fit w-1/3 rounded-sm' />
                      <div >
                        <ul>
                            <li>
                                <h4 className='font-bold text-lg md:text-xl text-[#31487A]'>Providing warmth and care during harsh conditions</h4>
                        <p className='mt-1 mb-3 font-semibold text-sm md:text-base text-[#2d3a4f]'>Ensuring pets have access to proper shelter, bedding, and clothing during extreme weather conditions like winter or heavy rain, so they remain healthy and comfortable.</p>
                            </li>
                            <li>
                                <h4 className='font-bold text-lg md:text-xl text-[#31487A]'>Promoting responsible pet care</h4>
                        <p className='mt-1 mb-3 font-semibold text-sm md:text-base text-[#2d3a4f]'>Educating pet owners about proper nutrition, regular exercise, grooming, and medical check-ups, emphasizing the long-term well-being of pets.</p>
                            </li>
                            <li>
                                <h4 className='font-bold text-lg md:text-xl text-[#31487A]'>Raising awareness about pet safety</h4>
                        <p className='mt-1 mb-3 font-semibold text-sm md:text-base text-[#2d3a4f]'>Sharing tips on how to keep pets safe from accidents, harmful substances, and environmental hazards both at home and outdoors.</p>
                            </li>
                            <li>
                                <h4 className='font-bold text-lg md:text-xl text-[#31487A]'>Encouraging adoption and rescue initiatives</h4>
                        <p className='mt-1 mb-3 font-semibold text-sm md:text-base text-[#2d3a4f]'>Supporting adoption programs and rescue efforts to provide loving homes for stray, abandoned, or neglected animals.</p>
                            </li>
                            <li>
                                <h4 className='font-bold text-lg md:text-xl text-[#31487A]'>Building a supportive pet-loving community</h4>
                        <p className='mt-1 font-semibold text-sm md:text-base text-[#2d3a4f]'>Creating a platform where pet owners can share experiences, learn from each other, and find reliable resources for pet care, fostering a culture of compassion and responsibility.</p>
                            </li>
                            
                        </ul>
                      </div>
                </div>
            </div>

            {/* why choose us */}
            <div className='my-12'>
                <h2 className='text-4xl  font-bold text-[#31487A] text-center'>
                    Why Choose Us</h2>
                    <div className='mt-8 flex gap-5'>
                        <div >
                        <ul>
                            <li>
                                <h4 className='font-bold text-lg md:text-xl text-[#31487A]'>Providing warmth and care during harsh conditions</h4>
                        <p className='mt-1 mb-3 font-semibold text-sm md:text-base text-[#2d3a4f]'>Ensuring pets have access to proper shelter, bedding, and clothing during extreme weather conditions like winter or heavy rain, so they remain healthy and comfortable.</p>
                            </li>
                            <li>
                                <h4 className='font-bold text-lg md:text-xl text-[#31487A]'>Promoting responsible pet care</h4>
                        <p className='mt-1 mb-3 font-semibold text-sm md:text-base text-[#2d3a4f]'>Educating pet owners about proper nutrition, regular exercise, grooming, and medical check-ups, emphasizing the long-term well-being of pets.</p>
                            </li>
                            <li>
                                <h4 className='font-bold text-lg md:text-xl text-[#31487A]'>Raising awareness about pet safety</h4>
                        <p className='mt-1 mb-3 font-semibold text-sm md:text-base text-[#2d3a4f]'>Sharing tips on how to keep pets safe from accidents, harmful substances, and environmental hazards both at home and outdoors.</p>
                            </li>
                            <li>
                                <h4 className='font-bold text-lg md:text-xl text-[#31487A]'>Encouraging adoption and rescue initiatives</h4>
                        <p className='mt-1 mb-3 font-semibold text-sm md:text-base text-[#2d3a4f]'>Supporting adoption programs and rescue efforts to provide loving homes for stray, abandoned, or neglected animals.</p>
                            </li>
                            <li>
                                <h4 className='font-bold text-lg md:text-xl text-[#31487A]'>Building a supportive pet-loving community</h4>
                        <p className='mt-1 font-semibold text-sm md:text-base text-[#2d3a4f]'>Creating a platform where pet owners can share experiences, learn from each other, and find reliable resources for pet care, fostering a culture of compassion and responsibility.</p>
                            </li>
                            
                        </ul>
                      </div>
                      <img src={chooseUs} alt="" className='h-fit w-1/3 rounded-sm' />
                    </div>
            </div>



            </div>
        </div>
    );
};

export default About;