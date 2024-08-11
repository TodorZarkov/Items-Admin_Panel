import { createContext } from "react";
import { useNavigate } from "react-router-dom";

import { jwtDecode } from "jwt-decode";

import { authFactory } from "../services/authService";
import { useLocalStorage } from "../hooks/useLocalStorage";


export const AuthContext = createContext();

export function AuthProvider({ children }) {

    const navigate = useNavigate();
    const [auth, setAuth] = useLocalStorage("auth",{});
    const { login, register } = authFactory({});

    async function onLoginSubmit(data) {
        try {
            const result = await login(data);
            const claims = jwtDecode(result.token);
            const token = result.token;
            setAuth({ token, claims });

            navigate('/');
        } catch (err) {
            //TODO: ADD ADEQUATE LOGIN FAIL ERROR PAGE
            console.log("TODO: ADD ADEQUATE LOGIN FAIL ERROR PAGE")
            console.log(err);
        }

    }

    async function onRegisterSubmit(data) {
        try {
            const { rePassword, ...registerData } = data;
            //TODO: VALIDATE PROPERLY
            if (rePassword !== registerData.password) {
                return;
            }
            const result = await register(registerData);
            const token = result.token;
            const claims = jwtDecode(token)
            setAuth({ token, claims });

            navigate('/');
        } catch (err) {
            //TODO: ADD ADEQUATE REGISTER FAIL ERROR PAGE
            console.log("TODO: ADD ADEQUATE REGISTER FAIL ERROR PAGE")
            console.log(err);
        }
    }

    async function onLogout() {
        setAuth({});
        //TODO: LOGOUT ON THE SERVER
    }

    const authContext = {
        onLogout,
        onRegisterSubmit,
        onLoginSubmit,
        ...auth
    };

    return (
        <AuthContext.Provider value={{...authContext}}>
            {children}
        </AuthContext.Provider>
    );
}