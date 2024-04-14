
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <div className="text-center mt-72 space-y-6">
            <h2 className="text-9xl font-bold"> 404</h2>
            <p className="text-4xl">Not Found Page</p>
            <Link to="/"><button className="btn btn-active mt-14 ">Go Back</button></Link>
        </div>
    );
};

export default ErrorPage;