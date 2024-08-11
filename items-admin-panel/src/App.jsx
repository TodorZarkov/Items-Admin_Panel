import { Route, Routes } from "react-router-dom";
import { TicketCreate } from "./components/TicketCreate";
import { Header } from "./components/Header";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Tickets } from "./components/Tickets";
import { TicketDetails } from "./components/TicketDetails/TicketDetails";
import { Units } from "./components/Units";
import { Welcome } from "./components/Welcome";
import { useState } from "react";
import { AuthContext } from "./contexts/AuthContext";
import { authFactory } from "./services/authService";
import { ticketServiceFactory } from "./services/ticketService";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { Logout } from "./components/Logout";
import { useEffect } from "react";
import { TicketContext } from "./contexts/TicketContext";
import { blobToBase64, formatDateTime } from "./services/utils";
import { TicketEdit } from "./components/TicketEdit/TicketEdit";


function App() {

  const navigate = useNavigate();

  //auth state --------------------------------------------------
  const [auth, setAuth] = useState();
  const { login, register } = authFactory({});

  async function onLoginSubmit(data) {
    try {
      const result = await login(data);
      const claims = jwtDecode(result.token);
      const token = result.token;
      setAuth({ token, claims });

      navigate('/');
    } catch (err) {
      //TODO: ADD ADEQUATE LOGIN FAIL ERROR PAGE
      console.log("TODO: ADD ADEQUATE LOGIN FAIL ERROR PAGE")
      console.log(err);
    }

  }

  async function onRegisterSubmit(data) {
    try {
      const { rePassword, ...registerData } = data;
      //TODO: VALIDATE PROPERLY
      if (rePassword !== registerData.password) {
        return;
      }
      const result = await register(registerData);
      const token = result.token;
      const claims = jwtDecode(token)
      setAuth({ token, claims });

      navigate('/');
    } catch (err) {
      //TODO: ADD ADEQUATE REGISTER FAIL ERROR PAGE
      console.log("TODO: ADD ADEQUATE REGISTER FAIL ERROR PAGE")
      console.log(err);
    }
  }

  async function onLogout() {
    setAuth({});
    //TODO: LOGOUT ON THE SERVER
  }

  const authContext = {
    onLogout,
    onRegisterSubmit,
    onLoginSubmit,
    ...auth
  };
  //--------------------------------------------------

  //ticket state ---------------------------------------------
  const ticketService = ticketServiceFactory({ ...auth });

  const [ticketsData, setTickets] = useState({});
  const [ticketTypes, setTicketTypes] = useState([]);

  useEffect(() => {
    ticketService.all()
      .then((result) => setTickets(result));

    ticketService.allTypes()
      .then((result) => setTicketTypes(result));

  }, [])

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
  }

  async function onTicketDelete(id) {

    try {
      await ticketService.del(id);

      setTickets((state) => ({
        totalCount: (--state.totalCount),
        tickets: (state.tickets.filter(t => t.id !== id))})
      );

      navigate('/tickets/all');
    } catch (error) {
        console.log(error);
        alert(Object.values(error)[0][0]);
    }

    
    
  }

  async function onToggleWthSameProblem(id, toggle) {
    setTickets(state => ({
      totalCount: state.totalCount,
      tickets: (state.tickets.map(t => (t.id !== id?t:({
        ...t,
        withSameProblem: (toggle?--t.withSameProblem:++t.withSameProblem)
      }))))
    }))
  }

  async function onTicketEditByUser(data) {
    console.log(data);
  }

  const ticketContext = {
    ticketsData,
    ticketTypes,
    onTicketSubmit,
    onTicketDelete,
    onToggleWthSameProblem,
    onTicketEditByUser
  };
  //----------------------------------------------------------

  return (
    <AuthContext.Provider value={{ ...authContext }}>
      <TicketContext.Provider value={{ ...ticketContext }}>
        <Routes>
          {/* DETAILS */}
          <Route path="/*" element={
            <>
              <Header />
              <Routes>
                <Route path="tickets/:filter" element={<Tickets />} />
                <Route path="units" element={<Units />} />
                <Route path="/" element={<Welcome />} />
              </Routes>
            </>
          } />

          <Route path="/login" element={
            <>
              <Header />
              <Login />
            </>
          } />

          <Route path="/register" element={
            <>
              <Header />
              <Register />
            </>
          } />

          <Route path="/logout" element={<Logout />} />

          <Route path="/tickets/create/:type" element={<TicketCreate />} />

          <Route path="/tickets/:ticketId/details" element={<TicketDetails />} />

          <Route path="/tickets/:ticketId/edit" element={<TicketEdit/>} />
        </Routes>

        <footer></footer>
      </TicketContext.Provider>
    </AuthContext.Provider>
  );
}

export default App
