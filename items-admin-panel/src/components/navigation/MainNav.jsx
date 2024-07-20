import { AdminNav } from "./AdminNav";
import { GuestNav } from "./GuestNav";
import { RegularNav } from "./RegularNav";

export function MainNav() {
    return(
        <ul role="list">
                   {/* <RegularNav/> */}
                   {/* <AdminNav/> */}
                    <GuestNav/>
                </ul>
    );
}