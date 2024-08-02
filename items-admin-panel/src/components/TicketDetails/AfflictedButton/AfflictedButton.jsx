import { useEffect, useState } from "react";
import s from "./AfflictedButton.module.css"
import { useServiceWithAuth } from "../../../hooks/useServiceWithAuth";
import { ticketServiceFactory } from "../../../services/ticketService";

export function AfflictedButton({
    iHaveSameProblem, 
    id}) {
    const ticketService = useServiceWithAuth(ticketServiceFactory);

    const [toggle, setToggle] = useState(iHaveSameProblem);
    useEffect(() => {
        setToggle(state => state = iHaveSameProblem);
    }, [iHaveSameProblem]);

    function onToggle() {
        try {
            ticketService.update(id, {"toggleSameProblem": true})
            .then(()=>setToggle(state => !state));
        } catch (err) {
            setError(state => state = true);
        }
       
    }
    return(
        <button 
                type="button"
                className={`${s.btn} ${toggle ? "" : s.notAfflicted}`}
                onClick={onToggle}
        >
            {(toggle ?"I don't have same problem":"I Have Same Problem")}
        </button>
    )
}