import React, { useState, useEffect } from 'react';
// import 'animate.css'; 
import './banner.css';

import slide from "../../assets/slide1.jpg";
import slide1 from "../../assets/slide2.jpg";
import slide2 from "../../assets/slide3.jpg";
import slide3 from "../../assets/slide4.png";

const Banner = () => {
    const slides = [slide, slide1, slide2, slide3];
    const [currentSlide, setCurrentSlide] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(Slider => (Slider + 1) % slides.length);
        }, 3000); 

        return () => clearInterval(interval);
    }, [slides.length]);


    return (
        <div className="carousel w-full">
            <div className="carousel-item relative w-full animate__animated animate__fadeIn ">
                <img src={slides[currentSlide]} className="w-full md:h-3/4 rounded-lg" />
                <div className="absolute fade-out  flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href={`#slide${currentSlide === 4 ? 1 : currentSlide + 1}`} ></a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
