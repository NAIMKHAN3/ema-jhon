import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContex } from './UserContext';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContex)
    if (loading) {
        return <div>Loading......</div>
    }
    if (user && user.uid) {
        return children;
    }

    return (
        <Navigate to='/log-in'></Navigate>
    );
};

export default PrivateRoute;