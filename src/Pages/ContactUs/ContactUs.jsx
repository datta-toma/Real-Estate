import { Helmet } from "react-helmet-async";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const ContactUs = () => {
    return (
        <div>
            <Helmet>
                <title>Contact Us</title>
            </Helmet>
            <div className="flex flex-col md:flex-row gap-14 justify-center mt-28">
                <div className="w-80">
                    
                        <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "400px" }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={[51.505, -0.09]}>
                        <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                   </Marker>
             </MapContainer>
                    
                
                </div>

                <div>
                    <h2 className="text-5xl font-bold">Contact Information</h2>
                    <div className="mt-10">
                        <div className="text-xl font-medium shadow-2xl rounded-lg p-4">
                            <h2>Address: No 24/1,2,3/25, Gollahalli</h2>
                            <p>Village, Bannergahatta Road,</p>
                            <p>Bengaluru( Urban ) - 5600083</p>
                        </div>

                        <div className="text-xl font-medium shadow-2xl rounded-lg p-4  mt-5">
                           <p>Phone:+91-6366369126</p>
                           <p className="ml-14">+91-6366369438</p>
                        </div>

                        <div className="text-xl font-medium shadow-2xl rounded-lg p-4 mt-5">
                            <p>Email: info@naturesluxuri.in</p>
                        </div>
                    </div>
                </div>
           
            </div>
        </div>
    );
};

export default ContactUs;