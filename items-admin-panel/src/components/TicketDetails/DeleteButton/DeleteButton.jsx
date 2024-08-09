import { useContext, useState } from "react";
import s from "./DeleteButton.module.css"
import { Dialog } from "../../Dialog/Dialog";
import { TicketContext } from "../../../contexts/TicketContext";


export function DeleteButton({
    ticketId,
}) {

    const [renderDialog, setRenderDialog] = useState(false);

    const {onTicketDelete} = useContext(TicketContext);

    function onDeleteClick(e) {
        setRenderDialog(true);
    };

    function onConfirmClick(e) {
        setRenderDialog(false);
        onTicketDelete(ticketId);
    };

    function onCancelClick(e) {
        setRenderDialog(false);
    };

    return (
        <>
            <button
                className={s.btn}
                type="button"
                onClick={onDeleteClick}
            >DEL</button>

            <Dialog
                open={renderDialog}
                message="SURE DELETE TICKET?"
                onPositive={onConfirmClick}
                onNegative={onCancelClick}
            />
        </>

    );
}