import { serverApiFactory } from "./serverApi";

const uri = "/Tickets";

export function ticketServiceFactory(config) {
    const api = serverApiFactory(config);

    async function all() {
        const result = await api.get(uri);
        return result;
    };

    async function allTypes() {
        const result = await api.get(`${uri}/Types`);
        return result;
    };

    async function create(data) {
        const result = await api.post(uri,data);
        return result;
    }


    return {
        all,
        allTypes,
        create,
    };
}