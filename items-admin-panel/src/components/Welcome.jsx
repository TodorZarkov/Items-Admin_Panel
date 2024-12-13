import {host} from "../../settings/config";
export function Welcome() {
    return (
        <>
            <h2>Welcome to Items Admin Panel</h2>
            <a href={host}>Go to Items instead</a>
            <p>TODO: MAKE IT PRETTIER</p>
        </>
    );
}