import { useState } from "react";
import s from "./Dialog.module.css"


export function Dialog({
    open,
    message,
    onPositive,
    onNegative
}) {

    return (
        <div 
        className={`${s.wrapper} ${!open && s.hide}`}
        onClick={onNegative}>
        
            <dialog
                className={s.dialog}
                open={open}
                onClick={e => e.stopPropagation()}
            >
                
                <p>{message}</p>
                <form method="dialog" className={s.form}>
                    <button
                        className={s.btnConfirm}
                        type="button"
                        onClick={onPositive}
                    >CONFIRM</button>
                    <button
                        className={s.btnCancel}
                        type="button"
                        onClick={onNegative}

                    >CANCEL</button>
                </form>
               
            </dialog>
            </div>

    );
}