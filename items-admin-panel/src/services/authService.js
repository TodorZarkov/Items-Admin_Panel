import * as api from './serverApi'

const endpoint = '/Login';

export async function login(loginData) {
    const token = await api.post(endpoint, loginData);
    return token;
}