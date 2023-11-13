import './App.css'
import { Aside } from './components/Aside/Aside'
import { MainContent } from './components/Content/MainContent'
import { ContentHeader } from './components/ContentHeader/ContentHeader'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'

function App() {

  return (
      <div className="wrapper
                               sidebar-collapse sidebar-open"> 

        <Header></Header>

        {/* <Aside></Aside> */}

        <main className="content-wrapper">

          <ContentHeader></ContentHeader>
          <MainContent></MainContent>

        </main>
        
        <Footer></Footer>
      </div>
  )
}

export default App
