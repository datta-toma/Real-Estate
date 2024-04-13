import React, { useState, useEffect } from 'react';
import './banner.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import slide from "../../assets/slide1.jpg";
import slide1 from "../../assets/slide2.jpg";
import slide2 from "../../assets/slide3.jpg";
import slide3 from "../../assets/slide4.jpg";

const Banner = () => {
    const slides = [slide, slide1, slide2, slide3];
    const [currentSlide, setCurrentSlide] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(Slider => (Slider + 1) % slides.length);
        }, 3000); 

        return () => clearInterval(interval);
    }, [slides.length]);

    useEffect(() => {
        AOS.init();
    }, []);


    return (
        <div >
        <div className="carousel-item relative w-full  animate__animated animate__fadeIn" data-aos="fade-up">
            <div className="w-screen  rounded-lg">
            <img src={slides[currentSlide]} className='lg:w-full lg:h-4/5'  />
            </div>
            <div className="absolute  flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slides${currentSlide === 4 ? 1 : currentSlide + 1}`} ></a>
            </div>
        </div>
        
        
    </div>
        
        
    );
};

export default Banner;
