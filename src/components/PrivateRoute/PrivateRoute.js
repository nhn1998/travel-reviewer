import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(authContext)
    const location = useLocation()
    if(loading){
        <button className="btn btn-square loading"></button>
    }
    if(user){
        return children;
    }
    return <Navigate state={{from:location}} replace></Navigate>
};

export default PrivateRoute;