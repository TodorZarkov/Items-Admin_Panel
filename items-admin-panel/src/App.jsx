import './App.css'
import { Aside } from './components/Aside/Aside'
import { MainContent } from './components/Content/MainContent'
import { ContentHeader } from './components/ContentHeader/ContentHeader'
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
        
        <footer className="main-footer">
          <div className="pull-right hidden-xs">
            <b>Version</b> 2.0
          </div>
          <strong>Copyright &copy; 2014-2015 <a href="http://almsaeedstudio.com">Almsaeed Studio</a>.</strong> All rights reserved.
        </footer>
      </div>
  )
}

export default App
