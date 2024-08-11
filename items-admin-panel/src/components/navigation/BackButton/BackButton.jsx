import {useNavigate } from "react-router-dom";
import s from "./BackButton.module.css"
export function BackButton() {
    const navigate = useNavigate();

    function clickHandle(e) {
        e.preventDefault();
        navigate(-1);
    }

    return (
        <button
            className={s.back}
            type="button"
            onClick={clickHandle}>Back</button>
    );
}