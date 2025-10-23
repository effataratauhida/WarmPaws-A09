import React from 'react';

import WinterCareServices from '../Winter-Care-Services/WinterCareServices';
import HeroSlider from './../../Components/Hero Slider/HeroSlider';
import Contact from '../Contact Us/Contact';

const Home = () => {
    return (
        <div >
            <HeroSlider></HeroSlider>
            <WinterCareServices></WinterCareServices>
            <Contact></Contact>
        </div>
            
        
    );
};

export default Home;