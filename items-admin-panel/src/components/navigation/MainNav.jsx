import { AdminNav } from "./AdminNav";
import { GuestNav } from "./GuestNav";
import { RegularNav } from "./RegularNav";

import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export function MainNav() {
    const { claims } = useContext(AuthContext);

    let content = <></>;
    if (!claims) {
        content = <GuestNav />;
    } else if (claims.role == "Admin") {
        content = <AdminNav />;
    } else if (claims.role == "SuperAdmin") {
        content = <AdminNav />;//<SuperAdminNav/>;
    } else {
        content = <RegularNav/>;
    }

    return (
        <ul role="list">
            {content}
        </ul>
    );
}