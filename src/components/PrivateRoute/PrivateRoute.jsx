
import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();
    console.log(location)
    if(loading){
        return <span className=" ml-96 mt-8 loading loading-ring loading-lg"></span>
    }

    if (!user){
        return <Navigate to="/login" state={location?.pathname || "/"}></Navigate>
    }
    return (
        <div>
           {children}
        </div>
    );
};

export default PrivateRoute;