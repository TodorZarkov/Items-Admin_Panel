import { apiHost } from '../../settings/config'


async function request(
    method,
    {
        domain = apiHost,
        token,
        authHeader = "Authorization",
        tokenType = "Bearer"
    },
    uri,
    data) {

    let requestObj = {
        method,
        headers: { "Content-Type": "application/json" }
    }


    if (method === "post" || method === "put" || method === "patch") {
        if (data instanceof FormData) {
            delete requestObj.headers["Content-Type"];
            requestObj.body = data;
        } else {
            requestObj.body = JSON.stringify(data);
        }

    }
    if (token) {
        requestObj.headers[`${authHeader}`] = `${tokenType} ${token}`;
    }
    try {
        let response = await fetch(domain + uri, requestObj);

        if (response.status === 204) {
            return {};
        }

        if (!response.ok) {
            const err = await response.json();
            throw err;
        }

        let result = {};
        try {
            // if the 204 is forgotten, this  throws, so I will leave the  try-catch.
            result = await response.json();
        } catch (error) {
            console.log(error);
        }
            
        return result;

    } catch (error) {
        //TODO: SEE IF THERE IS TIMEOUT OR WRONG JSON
        throw error;
    }

}

export function serverApiFactory(config) {
    return {
        get: request.bind(null, "get", config),
        post: request.bind(null, "post", config),
        put: request.bind(null, "put", config),
        patch: request.bind(null, "patch", config),
        delete: request.bind(null, "delete", config),
    }
}