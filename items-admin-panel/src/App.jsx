import { Route, Routes } from "react-router-dom"
import { TicketCreate } from "./components/TicketCreate"
import { Header } from "./components/Header"
import { Login } from "./components/Login"
import { Register } from "./components/Register"
import { Tickets } from "./components/Tickets"
import { TicketDetails } from "./components/TicketDetails"
import { Units } from "./components/Units"
import { Welcome } from "./components/Welcome"
import { useState } from "react";
import { AuthContext } from "./contexts/AuthContext"
import {authFactory} from "./services/authService"
import { useNavigate } from "react-router-dom"
import { jwtDecode } from "jwt-decode"
import { Logout } from "./components/Logout"


function App() {

  const navigate = useNavigate();



  //----------------------------------------------------------
  const [auth, setAuth] = useState();
  const {login, register} = authFactory({});

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


  return (
    <AuthContext.Provider value={{ ...authContext }}>
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

        <Route path="/tickets/create" element={<TicketCreate />} />

        <Route path="/tickets/:ticketId/details" element={<TicketDetails />} />
      </Routes>

      <footer></footer>
    </AuthContext.Provider>
  );
}

export default App
