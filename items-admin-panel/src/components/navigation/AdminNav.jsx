
import { RegularNav } from "./RegularNav";

export function AdminNav() {
    return (
        <>
            <RegularNav/>
            <li>
                <a className="btn highlighted" href="/">Assigned</a>
            </li>
        </>

    );
}