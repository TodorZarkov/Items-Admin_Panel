import { serverApiFactory } from './serverApi'

export function authFactory(config) {
    const api = serverApiFactory(config);

    const loginEndpoint = '/Login';
    const registerEndpoint = '/Register';

    async function login(loginData) {
        const token = await api.post(loginEndpoint, loginData);
        return token;
    }

    async function register(registerData) {
        const token = await api.post(registerEndpoint, registerData);
        return token;
    }
    return {
        login,
        register,
    }
}