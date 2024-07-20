import { Link } from "react-router-dom";

export function SecondaryNav() {
    return (
        <ul role="list">
            <li><Link className="btn secondary" to="/units">Units</Link></li>
            <li><Link className="btn secondary" to="/">Categories</Link></li>
            <li><Link className="btn secondary" to="/">Currencies</Link></li>
            <li><Link className="btn secondary" to="/">Admins</Link></li>
        </ul>
    );
}