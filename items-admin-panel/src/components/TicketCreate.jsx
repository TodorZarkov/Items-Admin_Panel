import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useServiceWithAuth } from "../hooks/useServiceWithAuth";
import { ticketServiceFactory } from "../services/ticketService";
import { useForm } from "../hooks/useForm";
import { TicketContext } from "../contexts/TicketContext";
import { BackButton } from "./navigation/BackButton/BackButton";

export function TicketCreate() {
  const { type } = useParams();

  const { ticketTypes, onTicketSubmit } = useContext(TicketContext);
  console.log(ticketTypes);
  console.log(type);

  const wantedType = ticketTypes.find((t) => t.name == type);
  const { values, onChangeHandler, onSubmitHandler } = useForm({
    "title": "",
    "description": "",
    "ticketType": wantedType ? wantedType.id : "",
    "picture": "",
    "file":"/upload-bg.svg"
  }, onTicketSubmit);

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
        <button className="btn register" type="submit">Create</button>
      </div>
      <div className="create-input-wrapper">
        <label htmlFor="type">Type:</label>
        <select
          name="ticketType"
          id="type"
          defaultValue={values.ticketType}
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