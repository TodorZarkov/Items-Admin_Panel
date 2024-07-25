import { Dashboard } from "./Dashboard";
import { SecondaryNav } from "./navigation/SecondaryNav"
import { MainNav } from "./navigation/MainNav";

import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

export function Header() {

    const {claims} = useContext(AuthContext);

    return (
        <header className="nav ">
            <nav className="nav" >
                <MainNav/>
                {claims && claims.role &&
                (<SecondaryNav/>)}
            </nav>
            <Dashboard/>
        </header>
    );
}