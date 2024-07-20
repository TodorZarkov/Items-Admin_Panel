import { CreateTicket } from "./components/CreateTicket"
import { Header } from "./components/Header"
import { Login } from "./components/Login"
import { Register } from "./components/Register"
import { Tickets } from "./components/Tickets"


function App() {

  return (

    <>
      {/* DETAILS */}
      <Header />
      <main >
        <Tickets/>
        {/* <Register/> */}
        {/* <Login/> */}
        {/* <CreateTicket/> */}
      </main>
     
      <footer></footer>
    </>
  )
}

export default App
