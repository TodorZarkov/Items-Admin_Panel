import { createContext, useState, useEffect } from "react";
import { useServiceWithAuth } from "../hooks/useServiceWithAuth";
import { ticketServiceFactory } from "../services/ticketService";
import { blobToBase64, formatDateTime } from "../services/utils";
import { useNavigate } from "react-router-dom";

export const TicketContext = createContext();

export function TicketProvider({ children }) {
    
    const navigate = useNavigate();
    const ticketService = useServiceWithAuth(ticketServiceFactory);
    const [ticketsData, setTickets] = useState({});
    const [ticketTypes, setTicketTypes] = useState([]);

    useEffect(() => {
        ticketService.all()
          .then((result) => setTickets(result));
    
        ticketService.allTypes()
          .then((result) => setTicketTypes(result));
    
      }, []);

      async function onTicketSubmit(data) {

        const file = await fetch(data.file).then((res) => res.blob());
        let formData = new FormData();
        formData.append("Title", `${data.title}`);
        formData.append("Description", `${data.description}`);
        formData.append("TypeId", `${data.ticketType}`);
        formData.append("SnapShot", file);
    
        const { id } = await ticketService.create(formData);
    
        const base64Snapshot = await blobToBase64(file);
        setTickets(state => ({
          totalCount: (++state.totalCount),
          tickets: [...state.tickets, {
            created: formatDateTime(new Date()),
            id: id,
            severity: 0,
            snapShot: base64Snapshot,
            status: "Open",
            title: data.title,
            type: (ticketTypes.find((t) => t.id === data.ticketType)).name,
            withSameProblem: 0,
          }]
        }))
        //todo:navigate to my tickets
        navigate('/tickets/all');
      };

      async function onTicketDelete(id) {

        try {
          await ticketService.del(id);
    
          setTickets((state) => ({
            totalCount: (--state.totalCount),
            tickets: (state.tickets.filter(t => t.id !== id))
          })
          );
    
          navigate('/tickets/all');
        } catch (error) {
          console.log(error);
          alert(Object.values(error)[0][0]);
        }
    
    
    
      };
    
      async function onToggleWthSameProblem(id, count) {
        setTickets(state => ({
          totalCount: state.totalCount,
          tickets: (state.tickets.map(t => (t.id !== id ? t : ({
            ...t,
            withSameProblem: count
          }))))
        }))
      };
    
      async function onTicketEditByUser(data) {
        
        const file = await fetch(data.file).then((res) => res.blob());
        let formData = new FormData();
        formData.append("Title", `${data.title}`);
        formData.append("Description", `${data.description}`);
        formData.append("TypeId", `${data.ticketType}`);
        formData.append("SnapShot", file);
    
        await ticketService.edit(formData,data.id);
    
        const base64Snapshot = await blobToBase64(file);
    
        setTickets(state => ({
          totalCount: state.totalCount,
          tickets: state.tickets.map(t => (t.id !== data.id ? t : {
            ...t,
            snapShot: base64Snapshot,
            title: data.title,
            type: (ticketTypes.find((t) => t.id == data.ticketType)).name
          }))
        }))
        //todo:navigate to my tickets
        navigate('/tickets/all');
      };

      function onChangeType(id, type) {
        setTickets(state => ({
          totalCount: state.totalCount,
          tickets: (state.tickets.map(t => (t.id !== id ? t : ({
            ...t,
            type: type,
          })))),
        }));
      };

      function onChangeSeverity(id, severity) {
        setTickets(state => ({
          totalCount: state.totalCount,
          tickets: (state.tickets.map(t => (t.id !== id ? t : ({
            ...t,
            severity: severity,
          })))),
        }));
      };

      function onChangeStatus(id, newStatus) {
        setTickets(state => ({
          totalCount: state.totalCount,
          tickets: (state.tickets.map(t => (t.id !== id ? t : ({
            ...t,
            status: newStatus,
          })))),
        }));
      };
      
console.log(ticketsData)
      const ticketContext = {
        ticketsData,
        ticketTypes,
        onTicketSubmit,
        onTicketDelete,
        onToggleWthSameProblem,
        onTicketEditByUser,
        onChangeType,
        onChangeSeverity,
        onChangeStatus
      };

    return (
        <TicketContext.Provider value={{...ticketContext}}>
            {children}
        </TicketContext.Provider>
    );
};