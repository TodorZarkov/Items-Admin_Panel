import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";



export const RouteGuard = ({
    children,
}) => {
    const { claims, token } = useContext(AuthContext);
    
    if (!token) {
        return <Navigate to="/login" />;
    }

    return children ? children : <Outlet />
};