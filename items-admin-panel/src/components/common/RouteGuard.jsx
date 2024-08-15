import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";



export const RouteGuard = ({
    children,
}) => {
    const {token} = useContext(AuthContext);
    
    if (!token) {
        return <Navigate to="/login" />;
    }

    return children ? children : <Outlet />
};