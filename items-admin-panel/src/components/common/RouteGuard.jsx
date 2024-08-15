import { Navigate, Outlet } from "react-router-dom";

import {token, claims} from "../../contexts/AuthContext"


export const RouteGuard = ({
    children,
}) => {
    const { isAuthenticated } = useAuthContext();
    
    if (!token) {
        return <Navigate to="/login" />;
    }

    return children ? children : <Outlet />
};