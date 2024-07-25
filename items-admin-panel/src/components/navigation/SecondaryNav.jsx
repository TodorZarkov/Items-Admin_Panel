import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

export function SecondaryNav() {

    const {claims} = useContext(AuthContext);


    return (
        <ul role="list">
            <li><Link className="btn secondary" to="/units">Units</Link></li>
            <li><Link className="btn secondary" to="/">Categories</Link></li>
            <li><Link className="btn secondary" to="/">Currencies</Link></li>
            {claims && claims.role && claims.role == "SuperAdmin" &&
            (<li><Link className="btn secondary" to="/">Admins</Link></li>)}
        </ul>
    );
}