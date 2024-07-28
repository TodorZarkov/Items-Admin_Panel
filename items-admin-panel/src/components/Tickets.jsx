import { useEffect, useState } from "react";
import { useServiceWithAuth } from "../hooks/useServiceWithAuth"
import { ticketServiceFactory } from "../services/ticketService";
import { Ticket } from "./Ticket";

export function Tickets() {

  const ticketService = useServiceWithAuth(ticketServiceFactory);

  const [ticketsData, setTickets] = useState({});

  useEffect(() => {
    ticketService.all().
      then((result) => setTickets(result));

  }, [])

  console.log(ticketsData.tickets);

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

        <li >
          <ul className="row" role="list">
            <li>
              <p>14:35</p>
              <p>18</p>
              <p>Jan</p>
              <p>`24</p>
            </li>
            <li className="vertical-txt">
              <p>3</p>
            </li>
            <li className="vertical-txt">
              <p>4558720</p>
            </li>
            <li className="vertical-txt">bug</li>
            <li className="prev-img">
              <a href="/">
                <img src="/example-images/threading-bug.png" alt="" />
              </a>
            </li>
            <li className="prev-content">
              <a href="/">
                <p>Doesn’t redirect after login. Goes to the main page every time. Doesn’t autofill properly the lo...</p>
              </a>

            </li>
          </ul>
        </li>

        <li >
          <ul className="row" role="list">
            <li>
              <p>14:35</p>
              <p>18</p>
              <p>Jan</p>
              <p>`24</p>
            </li>
            <li className="vertical-txt">
              <p>3</p>
            </li>
            <li className="vertical-txt">
              <p>4558720</p>
            </li>
            <li className="vertical-txt">bug</li>
            <li className="prev-img">
              <a href="/">
                <img src="/example-images/threading-bug.png" alt="" />
              </a>
            </li>
            <li className="prev-content">
              <a href="/">
                <p>Doesn’t redirect after login. Goes to the main page every time. Doesn’t autofill properly the lo...</p>
              </a>

            </li>
          </ul>
        </li>

        <li >
          <ul className="row" role="list">
            <li>
              <p>14:35</p>
              <p>18</p>
              <p>Jan</p>
              <p>`24</p>
            </li>
            <li className="vertical-txt">
              <p>3</p>
            </li>
            <li className="vertical-txt">
              <p>4558720</p>
            </li>
            <li className="vertical-txt">bug</li>
            <li className="prev-img">
              <a href="/">
                <img src="/example-images/threading-bug.png" alt="" />
              </a>
            </li>
            <li className="prev-content">
              <a href="/">
                <p>Doesn’t redirect after login. Goes to the main page every time. Doesn’t autofill properly the lo...</p>
              </a>

            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
}