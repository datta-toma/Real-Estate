import { Outlet } from "react-router-dom";
import FirebaseProvider from "./FirebaseProvider/FirebaseProvider";
import Navbar from "./components/Navbar/Navbar";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
           
            <Outlet></Outlet>
        </div>
    );
};

export default Root;