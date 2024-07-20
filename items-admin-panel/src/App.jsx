import { Route, Routes } from "react-router-dom"
import { CreateTicket } from "./components/CreateTicket"
import { Header } from "./components/Header"
import { Login } from "./components/Login"
import { Register } from "./components/Register"
import { Tickets } from "./components/Tickets"


function App() {

  return (
    <>
      <Routes>
        {/* DETAILS */}
        <Route path="/" element={
          <>
            <Header />
            <Tickets />
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
        <Route path="/create" element={<CreateTicket/> } />
      </Routes>

      <footer></footer>
    </>
  );
}

export default App
