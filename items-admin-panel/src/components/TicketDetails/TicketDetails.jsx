import { useParams } from "react-router-dom";
import { BackButton } from "../navigation/BackButton/BackButton";
import { AfflictedButton } from "./AfflictedButton/AfflictedButton";
import { useEffect, useState } from "react";
import { useServiceWithAuth } from "../../hooks/useServiceWithAuth";
import { ticketServiceFactory } from "../../services/ticketService";
import { WatchButton } from "./WatchButton/WatchButton";
import s from "./TicketDetails.module.css"

export function TicketDetails() {
    const ticketService = useServiceWithAuth(ticketServiceFactory);

    const { ticketId } = useParams();

    const [ticket, setTicket] = useState({});

    useEffect(() => {
        //TODO: ERROR HANDLING 
        ticketService.getOne(ticketId)
            .then((result) => setTicket(result));
    }, [])

    return (
        <article className={s.container}>
            <h3 className={s.title}>{ticket.title}</h3>
            <img
                className={s.img}
                src={`data:image/jpeg;base64,${ticket.snapShot}`}></img>
            <section>
                <ul role='list' className={s.infoContainer}>

                    <li>Created: {ticket.created}</li>
                    <li>Modified: {ticket.modified}</li>
                    <li>Type: {ticket.ticketType}</li>
                    <WatchButton
                        id={ticketId}
                        subscribed={ticket.subscribed}
                        subscribers={ticket.subscribers} />

                    <AfflictedButton
                        id={ticketId}
                        iHaveSameProblem={ticket.iHaveSameProblem}
                        withSameProblem={ticket.withSameProblem} />
                    <li>Status: {ticket.ticketStatus}</li>
                    <li>Severity: {ticket.severity}</li>
                </ul>
                <menu className={s.menuContainer}>

                    <BackButton />

                </menu>
            </section>
            <footer className={s.description}>
                <h5>Description:</h5>
                <p>{ticket.description}</p>
            </footer>
        </article>
    );
}