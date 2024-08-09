import { useState } from "react";
import s from "./DeleteButton.module.css"
import { Dialog } from "../../Dialog/Dialog";


export function DeleteButton() {

    const [renderDialog, setRenderDialog] = useState(false);

    function onDeleteClick(e) {
        setRenderDialog(true);
    };

    function onConfirmClick(e) {
        setRenderDialog(false);
        console.log("confirmed")
    };

    function onCancelClick(e) {
        setRenderDialog(false);
        console.log("canceled")
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