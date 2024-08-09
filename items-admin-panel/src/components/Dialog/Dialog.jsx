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
                <form method="dialog">
                    <button
                        type="button"
                        onClick={onPositive}
                    >Delete</button>
                    <button
                        type="button"
                        onClick={onNegative}

                    >Cancel</button>
                </form>
               
            </dialog>
            </div>

    );
}