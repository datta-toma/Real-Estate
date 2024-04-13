import { useEffect, useState } from "react";
import EstateSection from "./EstateSection";
import AOS from "aos";
import "aos/dist/aos.css";


const Estate = () => {
    const [estates, setEstate] = useState([]);

    useEffect(() =>{
        fetch('data.json')
        .then(res =>res.json())
        .then(data =>setEstate(data));

        AOS.init();
    },[])
    
    return (
        <div>
            <h2 className="text-4xl font-bold text-center" data-aos="zoom-in">Natural Luxury</h2>
            <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:ml-32 mt-7 gap-4">
            {estates.map((estate, index) => (
          <div
            key={estate.id}
            className={`aos-init ${index % 2 === 0 ? 'fade-up-right' : 'fade-up-left'}`}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <EstateSection estate={estate}></EstateSection>
          </div>
        ))}
            </div>
          
        </div>
    );
};

export default Estate;