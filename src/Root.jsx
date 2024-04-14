import { Outlet } from "react-router-dom";
import FirebaseProvider from "./FirebaseProvider/FirebaseProvider";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./Pages/Footer/Footer";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;