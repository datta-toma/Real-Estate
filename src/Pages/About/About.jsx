import { Helmet } from "react-helmet-async";
import { FaSquareFacebook, FaInstagram  } from "react-icons/fa6";


const About = () => {
    return (
       <div>
        <Helmet>
            <title>About Us</title>
        </Helmet>
         <div className="mt-10">
             <h2 className="text-center text-4xl font-bold " data-aos="fade-up">Here is a tribute to good life!</h2>
            <div className="flex flex-col md:flex-row gap-10 justify-center mt-20">
               

                <div data-aos="fade-right">
                <div className="h-96 carousel carousel-vertical rounded-box ">
                <div className="carousel-item h-full">
                        <img src="https://i.postimg.cc/MHVz2z4z/img-4.avif" />
                    </div> 
                    <div className="carousel-item h-full">
                        <img src="https://i.postimg.cc/G2sCGcbv/img-5.avif" />
                    </div> 
                    <div className="carousel-item h-full">
                        <img src="https://i.postimg.cc/Y0bmFfr4/img-1.webp" /> 
                    </div> 
                    <div className="carousel-item h-full">
                        <img src="https://i.postimg.cc/c4vJTNTk/img-2.jpg" />
                    </div> 
                    <div className="carousel-item h-full">
                        <img src="https://i.postimg.cc/wvbps1Kq/img-3.webp" />
                    </div>    
                 </div>
                    <div className="mt-7">
                        <p>An escape from busy Bangalore is available in Bangalore itself! Natures Luxuri ensures<br></br> your stay and play in our resort as an unique experience in the lap of extravaganza filled <br></br>with joy and peace. We value your vacation and break from your routine and support you<br></br> in creating memorable moments of luxurious stay and fun together at Natures Luxuri.</p>
                     </div>
                </div>
               
               <div data-aos="fade-left">
                <p className="font-medium text-xl">We Conduct Lots Of Events &<br></br> Functions.<br></br>
                    We Will Keep You Posted</p>
                    <div className="flex gap-2 mt-5">
                    <FaSquareFacebook className="text-3xl"></FaSquareFacebook>
                    <FaInstagram className="text-3xl"></FaInstagram>
                    </div>
                   
               </div>


             
            </div>
        </div>
       </div>
    );
};

export default About;
