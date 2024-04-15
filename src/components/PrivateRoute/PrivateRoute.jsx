
import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();

    if(loading){
        return <span className="loading ml-96 loading-ring loading-lg"></span>
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