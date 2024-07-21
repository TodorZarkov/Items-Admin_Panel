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


function App() {

  const [auth, setAuth] = useState();


  async function onLoginSubmit(e) {
    e.preventDefault();
    console.log(Object.fromEntries(new FormData(e.target)));
  }

  return (
    <AuthContext.Provider value={{onLoginSubmit}}>
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
            <Login onLoginSubmit={onLoginSubmit} />
          </>
        } />

        <Route path="/register" element={
          <>
            <Header />
            <Register />
          </>
        } />

        <Route path="/tickets/create" element={<TicketCreate />} />

        <Route path="/tickets/:ticketId/details" element={<TicketDetails />} />
      </Routes>

      <footer></footer>

    </AuthContext.Provider>
  );
}

export default App
