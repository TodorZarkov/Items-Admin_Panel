import { useContext } from "react";
import { Ticket } from "./Ticket";
import { TicketContext } from "../contexts/TicketContext";
import { useParams } from "react-router-dom";

export function Tickets() {

  const { ticketsData } = useContext(TicketContext);

  const { filter } = useParams();

  let filteredData = ticketsData.tickets ? ticketsData.tickets : [];
  if (filteredData && filter) {
    filteredData = filteredData
    .filter((t) => t.status === filter);
  }

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
          filteredData.map(t => (
            <Ticket key={t.id} ticket={t} />
          ))
        }
      </ul>
    </section>
  );
}