import { useParams } from "react-router-dom";
import { BackButton } from "../navigation/BackButton/BackButton";
import { AfflictedButton } from "./AfflictedButton/AfflictedButton";
import { useContext, useEffect, useState } from "react";
import { useServiceWithAuth } from "../../hooks/useServiceWithAuth";
import { ticketServiceFactory } from "../../services/ticketService";
import { WatchButton } from "./WatchButton/WatchButton";
import s from "./TicketDetails.module.css"
import { AuthContext } from "../../contexts/AuthContext";
import { DeleteButton } from "./DeleteButton/DeleteButton";
import { EditButton } from "./EditButton/EditButton";
import { TicketContext } from "../../contexts/TicketContext";

export function TicketDetails() {
    const { claims } = useContext(AuthContext);

    const ticketService = useServiceWithAuth(ticketServiceFactory);

    const { ticketId } = useParams();

    const [ticket, setTicket] = useState({});

    const { ticketsData } = useContext(TicketContext);
    let countWithSameProblem = 0;
    if (ticketsData && ticketsData.tickets) {
        countWithSameProblem = ticketsData
        .tickets
        .find(t => t.id == ticketId)
        .withSameProblem;
    }

    useEffect(() => {
        //TODO: ERROR HANDLING 
        ticketService.getOne(ticketId)
            .then((result) => setTicket(result));
    }, []);
  
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
                    <li>Author: {ticket.authorName}</li>
                    {(claims ? (<>
                        <WatchButton
                            id={ticketId}
                            subscribed={ticket.subscribed}
                            subscribers={ticket.subscribers} />

                        <AfflictedButton
                            id={ticketId}
                            iHaveSameProblem={ticket.iHaveSameProblem}
                            withSameProblem={ticket.withSameProblem} />

                        {(ticket.assignerName ? <li>Assigner: {ticket.assignerName}</li> : "")}

                        {(ticket.assigneeName ? <li>Assignee: {ticket.assigneeName}</li> : "")}
                    </>) : (<>
                        <li>{ticket.subscribers} watching!</li>
                        <li>{ticket.withSameProblem} with this problem!</li>
                    </>)


                    )}

                    <li>Status: {ticket.ticketStatus}</li>
                    <li>Severity: {ticket.severity}</li>
                </ul>
                <menu className={s.menuContainer}>
                    {(
                        claims &&
                        claims.nameid === ticket.authorId &&
                        !ticket.assigneeId &&
                        countWithSameProblem < 1 &&
                        //TODO: DECIDE WETHER TO SHOW (ACTIVATE) WATCH AND SAME PROBLEM BUTTONS WHEN AUTHOR!
                        <>
                            <DeleteButton ticketId={ticketId} />
                            <EditButton ticketId={ticketId} />
                        </>

                    )}

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