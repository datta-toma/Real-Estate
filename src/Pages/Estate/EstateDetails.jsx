import { useLoaderData, useParams } from "react-router-dom";


const EstateDetails = () => {
    const details = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const detail = details.find((detail) => detail.id === idInt);
    // const {estate_title} = detail;
    console.log(detail)
   
    return (
        <div className="flex flex-col lg:flex-row justify-center max-w-7xl gap-12 mx-auto mt-10">
            <div className=" mt-28 ">
                <img className="h-1/2" src={detail.image} alt="img"></img>
            </div>
            <div className="mt-28 space-y-3">
                <h2 className="text-5xl font-medium">{detail.estate_title}</h2>
                <p className="mt-3 text-2xl font-medium"> {detail.segment_name}</p>
                <p className=" font-normal w-72">{detail.description}</p>
                <hr></hr>
                <h5 className="flex gap-4 text-xl">Location: <p className="font-bold">{detail.location}</p></h5>
               <h5 className="flex gap-4 text-xl">Facilities: <p className="font-bold">{detail.facilities.join(" , ")}</p></h5>
               <h5 className="flex gap-4 text-xl">Area: <p className="font-bold">{detail.area  }</p></h5>
               <h5 className="flex gap-4 text-xl">Price: <p className="font-bold">{detail.price}</p></h5>
               <h5 className="flex gap-4 text-xl">Status: <p className="font-bold border p-1 rounded-lg">{detail.status}</p></h5>
                <div>
                                          
               

                    
                </div>
            </div>
        </div>
    );
};

export default EstateDetails;