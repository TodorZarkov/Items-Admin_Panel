import { useEffect, useState } from "react";
import s from "./StatusButton.module.css"
import { useServiceWithAuth } from "../../../hooks/useServiceWithAuth";
import { ticketServiceFactory } from "../../../services/ticketService";

export function StatusButton({
    id,
    userId, 
    isAssignee,
    currentStatus,
    onChangeStatus
}) {
    const ticketService = useServiceWithAuth(ticketServiceFactory);

    const [assigned, setAssigned] = useState(isAssignee);
    const [ticketStatus, setTicketStatus] = useState(currentStatus);
    const [loading, setLoading] = useState(false);

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
                    setTicketStatus("Assign" );
                    onChangeStatus("Assign");
                });
        } else {
            ticketService.update(id, { "statusId": 3 })
                .then(() => {
                    setLoading(true);
                    setTicketStatus("Close");
                    onChangeStatus("Close");
                });
        }

    }
    
    let buttonContent = "Loading";
    let frameClass = `${s.frame}`;

    if (assigned !== undefined && !loading) {
        if(ticketStatus === "Close"){
            buttonContent = "CLOSED";
            frameClass = `${s.frameStatic}`;
            setLoading(true);
        }else if (assigned === true && ticketStatus !== "Close") {
            buttonContent = "Close Ticket!";
        } else {
            buttonContent = "Assign To Self!";
        }
        frameClass = "";
    } else if(loading && ticketStatus === "Close") {
        buttonContent = "CLOSED";
        frameClass = `${s.frameStatic}`;
    }

    return (
        <div className={s.container}>
            <p className={s.label} >
                Status: {ticketStatus.toUpperCase()}
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