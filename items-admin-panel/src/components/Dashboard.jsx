import { Link } from "react-router-dom";

export function Dashboard() {
    return (
        <section className="nav">
            <ul role="list">
                <li><Link className="btn dash" to="/tickets/all">
                    <p>Opened</p>
                    <p>00005235861</p>
                </Link>
                </li>
                <li>
                    <Link className="btn dash" to="/tickets/opened">
                        <p>Assigned</p>
                        <p>214</p>
                    </Link>
                </li>
                <li>
                    <Link className="btn dash" to="/tickets/solved">
                        <p>Closed</p>
                        <p>65235861</p>
                    </Link>
                </li>
            </ul>
        </section>
    );
}