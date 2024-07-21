import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

export function RegularNav() {

    const {claims} = useContext(AuthContext);
    let profileMessage = "Manage Profile";
    if (claims && claims.unique_name) {
        profileMessage = claims.unique_name;
    } else if(claims && claims.email){
        profileMessage = claims.email;
    }

    return (
        <>
            <p className="avatar dropdown ">
                <img className="dropbtn" src="/admin-logo.jpg" />
                <div className="dropdown-content">
                    <a href="/">{profileMessage}</a>
                    <a href="/">Change Picture</a>
                </div>
            </p>
            <li className="dropdown ">
                <button className="btn important dropbtn" type="button">Watched</button>
                <div className="dropdown-content">
                    <a href="/">Bugs</a>
                    <a href="/">Units</a>
                    <a href="/">Currencies</a>
                    <a href="/">Categories</a>
                    <a href="/">All</a>
                </div>
            </li>

            <li className="dropdown ">
                <button className="btn important dropbtn" type="button">My Tickets</button>
                <div className="dropdown-content">
                    <a href="/">Bugs</a>
                    <a href="/">Units</a>
                    <a href="/">Currencies</a>
                    <a href="/">Categories</a>
                    <a href="/">All</a>
                </div>
            </li>
            <li className="dropdown ">
                <button className="btn important dropbtn" type="button">Create</button>
                <div className="dropdown-content">
                    <a href="/">Bug</a>
                    <a href="/">Unit</a>
                    <a href="/">Currency</a>
                    <a href="/">Category</a>
                    <a href="/">Any</a>
                </div>
            </li>
        </>
    );
}