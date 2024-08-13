import { useContext, useEffect, useState } from "react";
import s from "./AfflictedButton.module.css"
import { useServiceWithAuth } from "../../../hooks/useServiceWithAuth";
import { ticketServiceFactory } from "../../../services/ticketService";
import { TicketContext } from "../../../contexts/TicketContext";

export function AfflictedButton({
    iHaveSameProblem,
    id,
    withSameProblem,
    onChangeWithSameProblem }) {

    const ticketService = useServiceWithAuth(ticketServiceFactory);

    const [toggle, setToggle] = useState(iHaveSameProblem);
    const [loading, setLoading] = useState(false);
    const [countSame, setSame] = useState(withSameProblem);

    const { onToggleWthSameProblem } = useContext(TicketContext);

    useEffect(() => {
        setToggle(state => state = iHaveSameProblem);
        setSame(state => state = withSameProblem);
    }, [iHaveSameProblem, withSameProblem]);

    function onToggle() {
        setLoading(state => state = true)
        ticketService.update(id, { "toggleSameProblem": true })
            .then(() => {
                setToggle(state => !state);
                setLoading(state => state = false);
                let count = countSame;
                count = (toggle ? --count : ++count)
                setSame(count);
                onToggleWthSameProblem(id, count);
                onChangeWithSameProblem(count);
            });
    }

    let buttonContent = "Loading";
    let frameClass = `${s.frame}`;
    if (toggle !== undefined && !loading) {
        if (toggle === true) {
            buttonContent = "Remove Me!";
        } else {
            buttonContent = "Add Me!";
        }
        frameClass = "";
    }

    return (
        <div className={s.container}>
            <p className={s.label} >
                {countSame} with this problem!
            </p>
            <div className={frameClass}>
                <button
                    type="button"
                    className={`${s.btn} ${toggle ? "" : s.notAfflicted}`}
                    onClick={onToggle}
                    disabled={toggle === undefined || loading ? true : false}
                >{buttonContent}</button>
            </div>
        </div>


    )
}