import React from 'react';

import slide1 from '../../assets/slide1.webp'
import slide2 from '../../assets/slide2.jpg'
import slide3 from '../../assets/slide3.jpg'
import slide4 from '../../assets/slide4.jpg'


const HeroSlider = () => {
    return (
        <div className='bg-[#D5DEEF]'>
            <div className='max-w-11/12 mx-auto pt-20'>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src={slide1} className="w-full h-[450px]" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={slide2} className="w-full h-[450px]" />
                </div>
                <div id="item3" className="carousel-item w-full h-[450px]">
                    <img src={slide3} className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src={slide4} className="w-full h-[450px]" />
                </div>
            </div> 
            <div className="flex w-full justify-center gap-2 py-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
            </div>
        </div>
    );
};

export default HeroSlider;