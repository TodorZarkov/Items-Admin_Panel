import { useParams } from "react-router-dom";
import { BackButton } from "../navigation/BackButton/BackButton";
import { AfflictedButton } from "./AfflictedButton/AfflictedButton";
import { useEffect, useState } from "react";
import { useServiceWithAuth } from "../../hooks/useServiceWithAuth";
import { ticketServiceFactory } from "../../services/ticketService";

export function TicketDetails() {
    const ticketService = useServiceWithAuth(ticketServiceFactory);

    const { ticketId } = useParams();

    const [ticket, setTicket] = useState({});

    useEffect(() => {
        //TODO: ERROR HANDLING 
        ticketService.getOne(ticketId)
            .then((result) => setTicket(result));
    }, [])
    console.log(ticket)
    return (
        <article>
            <h3>{ticket.title}</h3>
            <img src="/example-images/threading-bug.png"></img>
            <section>
                <ul role='list'>
                    <li>Type: {ticket.ticketType}</li>
                    <li>Status: {ticket.ticketStatus}</li>
                    <li>Severity: {ticket.severity}</li>
                    <li>Afflicted Users: {ticket.withSameProblem}</li>
                    <li>Watchers: {ticket.subscribers}</li>
                    <li>Created: {ticket.created}</li>
                    <li>Modified: {ticket.modified}</li>
                </ul>
                <menu>
                    <button type="button">Watch</button>
                    <AfflictedButton
                        id={ticketId}
                        iHaveSameProblem={ticket.iHaveSameProblem}
                        withSameProblem={ticket.withSameProblem} />
                    <BackButton />
                </menu>
            </section>
            <footer>
                <h5>Description:</h5>
                <p>{ticket.description}</p>
            </footer>
        </article>
    );
}