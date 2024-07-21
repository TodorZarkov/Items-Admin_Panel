import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { useContext, useEffect } from "react";


export function Logout() {
    const {onLogout} = useContext(AuthContext);

    useEffect(() => {
        onLogout();
    }, onLogout);

    return <Navigate to="/" />
}