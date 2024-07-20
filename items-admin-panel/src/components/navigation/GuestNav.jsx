export function GuestNav() {
    const path = location.pathname;

    if (path == '/login') {
        return (
            <li >
                <a className="btn register" href="/">Register</a>
            </li>
        );

    } else if (path == '/register') {
        return (
            <li >
                <a className="btn login" href="/">Login</a>
            </li>
        );

    } else {
        return (
            <>
                <li >
                    <a className="btn register" href="/">Register</a>
                </li>
                <li >
                    <a className="btn login" href="/">Login</a>
                </li>
            </>
        );


    }
}