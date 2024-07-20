import { useParams } from "react-router-dom";

export function TicketDetails() {
    const {ticketId} = useParams();
    return(
        <h4>Ticket Details of {ticketId}</h4>
    );
}