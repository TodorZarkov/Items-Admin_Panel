import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import {apiHost} from '../../settings/config'

export function useServiceWithAuth(serviceFactory) {
    const {token} = useContext(AuthContext);

    const config = {
        token,
        domain: apiHost,
        authHeader: "Authorization",
        tokenType: "Bearer",
    };

    const service = serviceFactory(config);
    return service;
}