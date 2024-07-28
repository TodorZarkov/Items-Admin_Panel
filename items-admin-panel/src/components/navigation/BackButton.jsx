import {useNavigate } from "react-router-dom";

export function BackButton() {
    const navigate = useNavigate();

    function clickHandle(e) {
        e.preventDefault();
        navigate(-1);
    }

    return (
        <button
            className="btn login"
            type="button"
            onClick={clickHandle}>Back</button>
    );
}