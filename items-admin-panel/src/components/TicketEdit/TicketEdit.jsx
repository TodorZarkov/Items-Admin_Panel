import { useParams } from "react-router-dom";
import { useContext } from "react";
import { useForm } from "../../hooks/useForm";
import { TicketContext } from "../../contexts/TicketContext";
import { BackButton } from "../navigation/BackButton/BackButton";
import { useEffect } from "react";
import { useServiceWithAuth } from "../../hooks/useServiceWithAuth";
import { ticketServiceFactory } from "../../services/ticketService";

export function TicketEdit() {
    const { ticketId } = useParams();

    const { ticketTypes, onTicketEditByUser } = useContext(TicketContext);

    const ticketService = useServiceWithAuth(ticketServiceFactory);
    
    const { values, onChangeHandler, onSubmitHandler, changeValues } = useForm({
        "title":'',
        "description":'',
        "ticketType":'',
        "picture":'',
        "file":'',
    }, onTicketEditByUser);

    useEffect(() => {
        //TODO: ERROR HANDLING 
        ticketService.getOne(ticketId)
            .then((result) => {
                let currentType = ticketTypes
                .find((t) => t.name === result.ticketType);
                
                changeValues({
                    "title": result.title,
                    "description": result.description ? result.description : "",
                    "ticketType": currentType ? currentType.id : "",
                    "picture": "",
                    "file": `data:image/jpeg;base64,${result.snapShot}`
                })
            });
    }, [ticketId]);

    return (
        <form className="create-form" onSubmit={onSubmitHandler}>
            <div className="create-input-wrapper">
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    value={values.title}
                    onChange={onChangeHandler}
                />
            </div>
            <div className="create-input-wrapper description">
                <label htmlFor="description">Description:</label>
                <textarea
                    name="description"
                    id="description"
                    value={values.description}
                    onChange={onChangeHandler}
                />
            </div>
            <div className="create-form-buttons">
                <BackButton />
                <button className="btn create" type="submit">Edit</button>
            </div>
            <div className="create-input-wrapper">
                <label htmlFor="type">Type:</label>
                <select
                    name="ticketType"
                    id="type"
                    value={values.ticketType}
                    onChange={onChangeHandler}
                >
                    {
                        ticketTypes.map(tt => (
                            <option
                                key={tt.id}
                                value={tt.id}
                            >{tt.name}</option>
                        ))
                    }
                    <option value="">Unknown</option>
                </select>
            </div>
            <div className="create-input-wrapper">
                <input
                    className="file-input"
                    type="file"
                    name="picture"
                    value={values.picture}
                    onChange={onChangeHandler}
                    style={{
                        backgroundImage: `url(${values.file})`
                    }}
                />
            </div>
        </form>
    );
}