import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Estate from "../Estate/Estate";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div >
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <Estate></Estate>
            {/* <Footer></Footer> */}
           
        </div>
    );
};

export default Home;