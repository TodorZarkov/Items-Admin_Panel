import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TicketContext } from "../contexts/TicketContext";
import s from "./Dashboard.module.css"

export function Dashboard() {

    const { ticketsData } = useContext(TicketContext);
    const [state, setState] = useState({
        buttons: [{ name: "Open", pressed: false }, { name: "Assign", pressed: false }, { name: "Close", pressed: false }],
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

    function onPressButton(button) {
        setState((state) => ({
            ...state,
            buttons: state
                .buttons
                .map(b => (b.name === button ? { ...b, pressed: true } : { ...b, pressed: false }))
        }));
    }

    return (
        <section className="nav">
            <ul role="list">
                <li><Link
                    className={`btn dash ${state.buttons[0].pressed ? s.pressed : ""}`}
                    onClick={() => onPressButton("Open")}
                    to="/tickets/Open">
                    <p>Opened</p>
                    <p>{state.countOpened}</p>
                </Link>
                </li>
                <li>
                    <Link
                        className={`btn dash ${state.buttons[1].pressed ? s.pressed : ""}`}
                        onClick={() => onPressButton("Assign")}
                        to="/tickets/Assign">
                        <p>Assigned</p>
                        <p>{state.countAssigned}</p>
                    </Link>
                </li>
                <li>
                    <Link
                        className={`btn dash ${state.buttons[2].pressed ? s.pressed : ""}`}
                        onClick={() => onPressButton("Close")}
                        to="/tickets/Close">
                        <p>Closed</p>
                        <p>{state.countClosed}</p>
                    </Link>
                </li>
            </ul>
        </section>
    );
}