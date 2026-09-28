import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import Loading from '../layouts/Loading/Loading';

const ProtectRoute = ({ children, admin }) => {
    const { isAuthenticated, loading, user } = useSelector((state) => state.auth);

    if (loading) return <Loading />;

    if (!isAuthenticated) {
        return <Navigate to="/signIn" replace />
    }

    // not an admin -> send to their own profile (not back to an admin page)
    if (admin && user?.role !== "admin") {
        return <Navigate to="/user/settings-Profile" replace />;
    }

    return children;

}

export default ProtectRoute