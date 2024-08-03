import { useEffect, useState } from "react";
import s from "./AfflictedButton.module.css"
import { useServiceWithAuth } from "../../../hooks/useServiceWithAuth";
import { ticketServiceFactory } from "../../../services/ticketService";

export function AfflictedButton({
    iHaveSameProblem,
    id }) {
    const ticketService = useServiceWithAuth(ticketServiceFactory);

    const [toggle, setToggle] = useState(iHaveSameProblem);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setToggle(state => state = iHaveSameProblem);
    }, [iHaveSameProblem]);

    function onToggle() {
        setLoading(state => state = true)
        ticketService.update(id, { "toggleSameProblem": true })
            .then(() => {
                setToggle(state => !state);
                setLoading(state => state = false)});
    }

    let buttonContent = "Loading";
    let frameClass = `${s.frame}`;
    if (toggle !== undefined && !loading) {
        if (toggle === true) {
            buttonContent = "I don't have same problem";
        } else {
            buttonContent = "I Have Same Problem";
        }
        frameClass = "";
    }
    return (
        <div className={frameClass}>
            <button
                type="button"
                className={`${s.btn} ${toggle ? "" : s.notAfflicted}`}
                onClick={onToggle}
                disabled={toggle === undefined || loading ? true : false}
            >{buttonContent}</button>
        </div>

    )
}