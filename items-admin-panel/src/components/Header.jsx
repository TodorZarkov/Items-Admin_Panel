import { Dashboard } from "./Dashboard";
import { SecondaryNav } from "./navigation/SecondaryNav"
import { MainNav } from "./navigation/MainNav";

export function Header() {
    return (
        <header className="nav ">
            <nav className="nav" >
                <MainNav/>
                {/* <SecondaryNav/> */}
            </nav>
            <Dashboard/>
        </header>
    );
}