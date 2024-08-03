import { useEffect, useState } from "react";
import s from "./AfflictedButton.module.css"
import { useServiceWithAuth } from "../../../hooks/useServiceWithAuth";
import { ticketServiceFactory } from "../../../services/ticketService";

export function AfflictedButton({
    iHaveSameProblem,
    id,
    withSameProblem }) {
    const ticketService = useServiceWithAuth(ticketServiceFactory);

    const [toggle, setToggle] = useState(iHaveSameProblem);
    const [loading, setLoading] = useState(false);
    const [countSame, setSame] = useState(withSameProblem);

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
                setSame((state) => (toggle?--state:++state));
            });
    }

    let buttonContent = "Loading";
    let frameClass = `${s.frame}`;
    if (toggle !== undefined && !loading) {
        if (toggle === true) {
            buttonContent = "Not Me!";
        } else {
            buttonContent = "Me too!";
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