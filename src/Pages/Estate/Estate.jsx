import { useEffect, useState } from "react";
import EstateSection from "./EstateSection";


const Estate = () => {
    const [estates, setEstate] = useState([]);

    useEffect(() =>{
        fetch('data.json')
        .then(res =>res.json())
        .then(data =>setEstate(data));
        
    },[])
    
    return (
        <div>
            <h2 className="text-4xl font-bold text-center ">Natural Luxury</h2>
            <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4">
            {
            estates.map(estate =><EstateSection key={estate.id} estate={estate}></EstateSection>)
           }
            </div>
          
        </div>
    );
};

export default Estate;