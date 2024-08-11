import { useContext} from "react";
import { Ticket } from "./Ticket";
import { TicketContext } from "../contexts/TicketContext";

export function Tickets() {

  const {ticketsData} = useContext(TicketContext);

  return (
    <section className="all-container">
      <form className="filter" action="">
        <button className="btn small invisible" type="button">T</button>
        <button className="btn small invisible" type="button">S</button>
        <button className="btn small invisible" type="button">U</button>
        <button className="btn small invisible" type="button">T</button>
        <input className="btn small invisible search" type="search" placeholder="SEARCH" />
      </form>
      <ul role="list">
        {
          ticketsData.tickets && ticketsData.tickets.map(t => (
            <Ticket key={t.id} ticket={t}/>
          ))
        }
      </ul>
    </section>
  );
}