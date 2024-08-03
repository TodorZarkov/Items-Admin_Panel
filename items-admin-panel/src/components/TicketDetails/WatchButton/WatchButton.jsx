import { useEffect, useState } from "react";
import s from "./WatchButton.module.css"
import { useServiceWithAuth } from "../../../hooks/useServiceWithAuth";
import { ticketServiceFactory } from "../../../services/ticketService";

export function WatchButton({
    subscribed,
    id,
    subscribers }) {
    const ticketService = useServiceWithAuth(ticketServiceFactory);

    const [toggle, setToggle] = useState(subscribed);
    const [loading, setLoading] = useState(false);
    const [countSubscribers, setSubscribers] = useState(subscribers);

    useEffect(() => {
        setToggle(state => state = subscribed);
        setSubscribers(state => state = subscribers);
    }, [subscribed, subscribers]);

    function onToggle() {
        setLoading(state => state = true)
        ticketService.update(id, { "toggleSubscribe": true })
            .then(() => {
                setToggle(state => !state);
                setLoading(state => state = false);
                setSubscribers((state) => (toggle?--state:++state));
            });
    }

    let buttonContent = "Loading";
    let frameClass = `${s.frame}`;
    if (toggle !== undefined && !loading) {
        if (toggle === true) {
            buttonContent = "Unwatch";
        } else {
            buttonContent = "Watch!";
        }
        frameClass = "";
    }
    
    return (
        <div className={s.container}>
            <p className={s.label} >
                {countSubscribers} subscribers!
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