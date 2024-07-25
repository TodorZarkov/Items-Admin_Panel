import { serverApiFactory } from "./serverApi";

const uri = "/Tickets";

export function ticketServiceFactory(config) {
    const api = serverApiFactory(config);

    async function all() {
        const result = await api.get(uri);
        return result;
    }


    return {
        all,
    };
}