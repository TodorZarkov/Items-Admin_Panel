import { Route, Routes } from "react-router-dom";
import { TicketProvider } from "./contexts/TicketContext";
import { AuthProvider } from "./contexts/AuthContext";

import { Welcome } from "./components/Welcome";
import { Header } from "./components/Header";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { Tickets } from "./components/Tickets";
import { TicketCreate } from "./components/TicketCreate";
import { TicketDetails } from "./components/TicketDetails/TicketDetails";
import { TicketEdit } from "./components/TicketEdit/TicketEdit";
import { Units } from "./components/Units";

function App() {

  return (
    <AuthProvider>
      <TicketProvider>
        <Routes>
          <Route path="/*" element={
            <>
              <Header />
              <Routes>
                <Route path="tickets" element={<Tickets />} />
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

          <Route path="/tickets/:ticketId/edit" element={<TicketEdit />} />
        </Routes>

        <footer></footer>
      </TicketProvider>
    </AuthProvider>
  );
}

export default App
