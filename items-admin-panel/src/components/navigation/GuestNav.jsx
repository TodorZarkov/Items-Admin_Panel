import { Link } from "react-router-dom";

export function GuestNav() {
    const path = location.pathname;

    if (path == '/login') {
        return (
            <li >
                <Link className="btn register" to="/register">Register</Link>
            </li>
        );

    } else if (path == '/register') {
        return (
            <li >
                <Link className="btn login" to="/login">Login</Link>
            </li>
        );

    } else {
        return (
            <>
                <li >
                    <Link className="btn register" to="/register">Register</Link>
                </li>
                <li >
                    <Link className="btn login" to="/login">Login</Link>
                </li>
            </>
        );


    }
}