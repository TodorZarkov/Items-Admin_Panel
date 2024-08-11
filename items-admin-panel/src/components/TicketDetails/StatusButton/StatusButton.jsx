import { useEffect, useState } from "react";
import s from "./StatusButton.module.css"
import { useServiceWithAuth } from "../../../hooks/useServiceWithAuth";
import { ticketServiceFactory } from "../../../services/ticketService";

export function StatusButton({
    isAssignee,
    id,
    currentStatus,
    userId }) {
    const ticketService = useServiceWithAuth(ticketServiceFactory);

    const [assigned, setAssigned] = useState(isAssignee);
    const [loading, setLoading] = useState(false);
    const [ticketStatus, setTicketStatus] = useState(currentStatus);

    useEffect(() => {
        setAssigned(isAssignee);
        setTicketStatus(currentStatus);
    }, [isAssignee, currentStatus]);

    function onStatusChange() {
        setLoading(true)
        if (assigned !== true) {
            ticketService.update(id, { "assigneeId": userId })
                .then(() => {
                    setAssigned(true);
                    setLoading(false);
                    setTicketStatus({ id: 2, name: "assign" }); //todo: set/get these dynamically!!! no magic classes!!!
                });
        } else {
            ticketService.update(id, { "statusId": 3 })
                .then(() => {
                    setLoading(true);
                    setTicketStatus({ id: 3, name: "close" });
                });
        }

    }
console.log(ticketStatus.name)
    let buttonContent = "Loading";
    let frameClass = `${s.frame}`;
    if (assigned !== undefined && !loading) {
        if(ticketStatus.name === "close"){
            buttonContent = "CLOSED";
            frameClass = `${s.frameStatic}`;
            setLoading(true);
        }else if (assigned === true && ticketStatus.name !== "close") {
            buttonContent = "Close Ticket!";
        } else {
            buttonContent = "Assign To Self!";
        }
        frameClass = "";
    } else if(loading && ticketStatus.name === "close") {
        buttonContent = "CLOSED";
        frameClass = `${s.frameStatic}`;
    }

    return (
        <div className={s.container}>
            <p className={s.label} >
                Status: {ticketStatus.name.toUpperCase()}
            </p>
            <div className={frameClass}>
                <button
                    type="button"
                    className={`${s.btn} ${assigned ? "" : s.notAssigned}`}
                    onClick={onStatusChange}
                    disabled={assigned === undefined || loading ? true : false}
                >{buttonContent}</button>
            </div>
        </div>


    )
}