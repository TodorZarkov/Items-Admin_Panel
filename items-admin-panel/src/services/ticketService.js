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

    async function update(id, data) {
        const  result = await api.patch(`${uri}/${id}`, data);
        return result;
    }


    async function getOne(id) {
        const result = await api.get(`${uri}/${id}`);
        return result;
    }

    async function del(id) {
        const result = await api.delete(`${uri}/${id}`)
        return result;
    }

    async function edit(data,id) {
        const result = await api.put(`${uri}/${id}`,data);
        return result;
    }

    return {
        all,
        allTypes,
        create,
        update,
        getOne,
        del,
        edit
    };
}