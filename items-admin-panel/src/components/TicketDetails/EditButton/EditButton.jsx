import { useNavigate } from "react-router-dom";
import s from "./EditButton.module.css"





export function EditButton({
    id
}) {
    const navigate = useNavigate();
    
    function onEditClick(e) {
        navigate(`/tickets/${id}/edit`)
    }

    return (
        <button
            className={s.btn}
            type="button"
            onClick={onEditClick}
        >EDIT</button>
    );
}