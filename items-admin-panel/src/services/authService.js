import * as api from './serverApi'

const loginEndpoint = '/Login';
const registerEndpoint = '/Register';

export async function login(loginData) {
    const token = await api.post(loginEndpoint, loginData);
    return token;
}

export async function register(registerData) {
    const token = await api.post(registerEndpoint, registerData);
    return token;
}