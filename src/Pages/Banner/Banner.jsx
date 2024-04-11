import React, { useState, useEffect } from 'react';
import 'animate.css'; 

import slide from "../../assets/slide1.jpg";
import slide1 from "../../assets/slide2.jpg";
import slide2 from "../../assets/slide3.jpg";
import slide3 from "../../assets/slide4.jpg";

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(Slide => (Slide % 4) + 1);
        }, 3000); 

        return () => clearInterval(interval);
    }, []);

    const getSlide = (index) => {
        switch (index) {
            case 1:
                return slide;
            case 2:
                return slide1;
            case 3:
                return slide2;
            case 4:
                return slide3;
            default:
                return slide;
        }
    };

    return (
        <div className="carousel w-full mt-4">
            <div className="carousel-item relative w-full animate__animated animate__fadeIn">
                <img src={getSlide(currentSlide)} className="w-full md:h-3/4 rounded-lg" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href={`#slide${currentSlide === 1 ? 4 : currentSlide - 1}`} className="btn btn-circle">❮</a>
                    <a href={`#slide${currentSlide === 4 ? 1 : currentSlide + 1}`} className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
