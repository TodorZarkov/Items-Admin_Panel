import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useServiceWithAuth } from "../hooks/useServiceWithAuth";
import { ticketServiceFactory } from "../services/ticketService";
import { useForm } from "../hooks/useForm";
import { TicketContext } from "../contexts/TicketContext";
import { BackButton } from "./navigation/BackButton";

export function TicketCreate() {
  const navigate = useNavigate();
  const {type} = useParams();

  const {ticketTypes, onTicketSubmit} = useContext(TicketContext);
  console.log(ticketTypes);

  const{values, onChangeHandler, onSubmitHandler} = useForm({

  }, onTicketSubmit);

  return (
    <form className="create-form" onSubmit={onSubmitHandler}>
      <div className="create-input-wrapper">
        <label htmlFor="title">Title:</label>
        <input type="text" name="title" id="title" />
      </div>
      <div className="create-input-wrapper description">
        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          id="description" />
      </div>
      <div className="create-form-buttons">
        <BackButton/>
        <button className="btn register" type="submit">Create</button>
      </div>
      <div className="create-input-wrapper">
        <label htmlFor="type">Type:</label>
        <select name="type" id="type" >
          <option value="bug">Bug</option>
          <option value="bug">Unit</option>
          <option value="bug">Currency</option>
          <option value="bug">Category</option>
        </select>
      </div>
      <div className="create-input-wrapper">
        <input className="file-input" type="file" >
        </input>
      </div>
    </form>
  );
}