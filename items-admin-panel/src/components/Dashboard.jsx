import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { TicketContext } from "../contexts/TicketContext";
import s from "./Dashboard.module.css"

export function Dashboard() {

    const { ticketsData } = useContext(TicketContext);
    const [state, setState] = useState({
        countOpened: 0,
        countAssigned: 0,
        countClosed: 0,
    });

    useEffect(() => {
        if (ticketsData.tickets) {
            setState(state => ({
                ...state,
                countOpened: count(ticketsData.tickets, t => (t.status === "Open")),
                countAssigned: count(ticketsData.tickets, t => (t.status === "Assign")),
                countClosed: count(ticketsData.tickets, t => (t.status === "Close")),
            }));
        }

    }, [ticketsData])

    function count(arr, condition) {
        let c = 0;

        arr.forEach(element => {
            if (condition(element)) {
                c += 1;
            }
        });

        return c;
    }

    return (
        <section className="nav">
            <ul role="list">
                <li>
                    <NavLink
                        className={({ isActive }) => isActive ? `btn dash ${s.pressed}` : 'btn dash'}
                        to="/tickets/Open">
                        <p>Opened</p>
                        <p>{state.countOpened}</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => isActive ? `btn dash ${s.pressed}` : 'btn dash'}
                        to="/tickets/Assign">
                        <p>Assigned</p>
                        <p>{state.countAssigned}</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => isActive ? `btn dash ${s.pressed}` : 'btn dash'}
                        to="/tickets/Close">
                        <p>Closed</p>
                        <p>{state.countClosed}</p>
                    </NavLink>
                </li>
            </ul>
        </section>
    );
}