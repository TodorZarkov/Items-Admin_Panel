import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import {apiHost} from '../../settings/config'

export function useServiceWithAuth(serviceFactory) {
    const {token} = useContext(AuthContext);

    const config = {
        token,
        domain: apiHost,
        authHeader: "Authorize",
        tokenType: "Bearer",
    };

    const service = serviceFactory(config);
    return service;
}