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
import { formatDateTime } from "../../services/utils";
import { OptionsButton } from "./OptionsButton/OptionsButton";
import { StatusButton } from "./StatusButton/StatusButton"

export function TicketDetails() {
    const { claims } = useContext(AuthContext);

    const ticketService = useServiceWithAuth(ticketServiceFactory);

    const { ticketId } = useParams();

    const [ticket, setTicket] = useState({});
    const [severities, setSetSeverities] = useState([{ name: "0", value: 0 }, { name: "1", value: 1 }, { name: "2", value: 2 }, { name: "3", value: 3 }]);
    const [ticketTypes, setTypes] = useState([{ name: "Loading", value: "" }]);
    const [loading,setLoading] = useState({type:false, severity:false})

    console.log(ticketTypes)
    useEffect(() => {
        //TODO: ERROR HANDLING 
        ticketService.getOne(ticketId)
            .then((result) => setTicket(result));
        ticketService.allTypes()
            .then((result) => setTypes(result.map(tt => ({ name: tt.name, value: tt.id }))));
    }, [ticketId]);

    function changeWithSameProblem(count) {
        setTicket(state => ({
            ...state,
            withSameProblem: count,
            iHaveSameProblem: !state.iHaveSameProblem
        }));
    };

    function changeStatus(status) {
        if (status == "Assign") {
            setTicket((state) => ({
                ...state,
                assigneeId: claims.nameid,
                assigneeName: claims.email,
                assignerId: claims.nameid,
                assignerName: claims.email,
                ticketStatus: status,
                modified: formatDateTime(new Date()),
            }));
        } else {
            setTicket((state) => ({
                ...state,
                ticketStatus: status,
                modified: formatDateTime(new Date()),
            }));
        }
    };

    function changeSeverity(option) {
        setLoading(state => ({...state, severity: true}));

        ticketService.update(ticketId, { "severity": option.value })
            .then(() => {
                setTicket((state) => ({
                    ...state, 
                    severity: option.value,
                    modified: formatDateTime(new Date()),
                }));
                setLoading(state => ({...state, severity: false}));
            });
    };

    function changeType(option) {
        setLoading(state => ({...state, type: true}));

        ticketService.update(ticketId, { "typeId": option.value })
            .then(() => {
                setTicket((state) => ({
                    ...state, 
                    ticketType: option.name,
                    modified: formatDateTime(new Date()),
                }));
                setLoading(state => ({...state, type: false}));
            });
    }

    let showStatusButton =
        claims
        && claims.role
        && claims.role === "Admin"
        && (ticket.ticketStatus == "Open"
            || ticket.assigneeId == claims.nameid);

    let showEditDelete =
        claims
        && claims.nameid === ticket.authorId
        && !ticket.assigneeId
        && ticket.withSameProblem < 1
    console.log(ticket);
    console.log(claims);
    return (
        <article className={s.container}>
            <h3 className={s.title}>{ticket.title}</h3>
            <img
                className={s.img}
                src={`data:image/jpeg;base64,${ticket.snapShot}`}></img>
            <section>
                <ul role='list' className={s.infoContainer}>

                    <li className={s.li}>Created: {ticket.created}</li>
                    <li className={s.li}>Modified: {ticket.modified}</li>

                    <li className={s.li}>Author: {ticket.authorName}</li>
                    {(claims && claims.nameid !== ticket.authorId ? (<>
                        <WatchButton
                            id={ticketId}
                            subscribed={ticket.subscribed}
                            subscribers={ticket.subscribers} />
                        {(ticket.ticketStatus !== "Close" &&
                            <AfflictedButton
                                id={ticketId}
                                iHaveSameProblem={ticket.iHaveSameProblem}
                                withSameProblem={ticket.withSameProblem}
                                onChangeWithSameProblem={changeWithSameProblem} />
                        )}


                        {(ticket.assignerName ? <li className={s.li}>Assigner: {ticket.assignerName}</li> : "")}

                        {(ticket.assigneeName ? <li className={s.li}>Assignee: {ticket.assigneeName}</li> : "")}
                    </>) : (<>
                        <li className={s.li}>{ticket.subscribers} watching!</li>
                        <li className={s.li}>{ticket.withSameProblem} with this problem!</li>
                    </>)
                    )}

                    {(showStatusButton ?
                        <StatusButton
                            id={ticketId}
                            userId={claims.nameid}
                            isAssignee={ticket.assigneeId == claims.nameid}
                            currentStatus={ticket.ticketStatus}
                            onChangeStatus={changeStatus}
                        />
                        :
                        <li className={s.li}>Status: {ticket.ticketStatus}</li>
                    )}


                    {(ticket.ticketStatus === "Assign"
                        && ticket.assigneeId === claims.nameid
                        ?
                        <>
                            <OptionsButton
                                title="Severity: "
                                defaultName={ticket.severity}
                                defaultValue={ticket.severity}
                                options={severities}
                                loading={loading.severity}
                                onSelect={changeSeverity}
                            />
                            <OptionsButton
                                title="Type: "
                                defaultName={ticket.ticketType}
                                defaultValue="1"
                                options={ticketTypes}
                                loading={loading.type}
                                onSelect={changeType}
                            />
                        </>
                        :
                        <>
                            <li className={s.li}>Severity: {ticket.severity}</li>
                            <li className={s.li}>Type: {ticket.ticketType}</li>
                        </>
                    )}

                </ul>

                <menu className={s.menuContainer}>
                    {(
                        showEditDelete &&
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