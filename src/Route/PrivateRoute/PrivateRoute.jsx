import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'flowbite-react';

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    const location = useLocation()

    if (loader) {
        return <Spinner aria-label="Default status example" />
    }
    if (user) {
        return children
    }
    return (
        <Navigate state={{ from: location }} to='/login'></Navigate>
    );
};

export default PrivateRoute;