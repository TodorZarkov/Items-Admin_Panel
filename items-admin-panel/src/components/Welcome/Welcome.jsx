import { Link } from "react-router-dom";
import { host } from "../../../settings/config";
import s from "./Welcome.module.css"

import { TicketContext } from "../../contexts/TicketContext";
import { useContext } from "react";

export function Welcome() {
    const {ticketsData} = useContext(TicketContext);
    return (
        <main className={s.welcomeContainer}>
            <h2 className={s.header}>Welcome to Items Admin Panel</h2>
            <Link to={"/tickets"}>
                <p className={s.centralMessage}>ALL TICKETS: {ticketsData.totalCount}</p>
            </Link>
            <a href={host}>Go to Items instead</a>
        </main>
    );
}