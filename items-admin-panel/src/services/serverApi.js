import {apiHost} from '../../settings/config'

const domain = apiHost;
//depends on:
//-auth.token (the Base64 JWT without the "Bearer" word)

async function request(method, uri, data) {
    let requestObj = {
        method,
        headers: { "Content-Type": "application/json" }
    }


    if (method === "post" || method === "put" || method === "patch") {
        requestObj.body = JSON.stringify(data);
    }
    if (auth) {
        requestObj.headers["Authorization"] = `Bearer ${auth.token}`;
    }
    console.log('from server api before fetch, auth: ', auth);
    try {
        let response = await fetch(domain + uri, requestObj);

        if (response.status === 204) {
            return {};
        }

        if (!response.ok) {
            if(response.status === 403) {
                //TODO: NO PLACE FOR AUTH LOGIC HERE
                localStorage.removeItem("auth");
            }
            const err = await response.json();
            throw err;
        }

        let result = await response.json();
        return result;

    } catch (error) {
        //TODO: SEE IF THERE IS TIMEOUT OR WRONG JSON
        throw error;
    }

}

export let get = request.bind(null, "get");
export let post = request.bind(null, "post");
export let put = request.bind(null, "put");
export let del = request.bind(null, "delete");
export let auth = null;