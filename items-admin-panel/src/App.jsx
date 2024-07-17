

function App() {

  return (

    <>
      {/* DETAILS */}
      {/* CREATE */}
      <header className="nav">
        <nav className="nav" >
          <ul role="list">
            <p className="avatar dropdown not-render">
              <img className="dropbtn" src="/admin-logo.jpg" />
              <div className="dropdown-content">
                <a href="/">Menage Profile</a>
                <a href="/">Change Picture</a>
              </div>
            </p>
            <li className="not-render">
              <a className="btn highlighted" href="/">Assigned</a>
            </li>
            <li className="dropdown not-render">
              <button className="btn important dropbtn" type="button">Watched</button>
              <div className="dropdown-content">
                <a href="/">Bugs</a>
                <a href="/">Units</a>
                <a href="/">Currencies</a>
                <a href="/">Categories</a>
                <a href="/">All</a>
              </div>
            </li>
            <li className="dropdown not-render">
              <button className="btn important dropbtn" type="button">My Tickets</button>
              <div className="dropdown-content">
                <a href="/">Bugs</a>
                <a href="/">Units</a>
                <a href="/">Currencies</a>
                <a href="/">Categories</a>
                <a href="/">All</a>
              </div>
            </li>
            <li className="dropdown not-render">
              <button className="btn important dropbtn" type="button">Create</button>
              <div className="dropdown-content">
                <a href="/">Bug</a>
                <a href="/">Unit</a>
                <a href="/">Currency</a>
                <a href="/">Category</a>
                <a href="/">Any</a>
              </div>
            </li>
            <li  >
              <a className="btn register" href="/">Register</a>
            </li>
            <li  >
              <a className="btn login" href="/">Login</a>
            </li>
          </ul>
          <ul className="not-render" role="list">
            <li><a className="btn secondary" href="/">Units</a></li>
            <li><a className="btn secondary" href="/">Categories</a></li>
            <li><a className="btn secondary" href="/">Currencies</a></li>
            <li><a className="btn secondary" href="/">Admins</a></li>
          </ul>
        </nav>
        <section className="nav">
          <ul role="list">
            <li><a className="btn dash" href="/">
              <p>Reported</p>
              <p>00005235861</p></a></li>
            <li><a className="btn dash" href="/"><p>Opened</p><p>214</p></a></li>
            <li><a className="btn dash" href="/"><p>Solved</p><p>65235861</p></a></li>
          </ul>
        </section>
      </header>
      <main>
        <section className="not-render all-container">
          <form className="filter" action="">
            <button className="btn small invisible" type="button">T</button>
            <button className="btn small invisible" type="button">S</button>
            <button className="btn small invisible" type="button">U</button>
            <button className="btn small invisible" type="button">T</button>
            <input className="btn small invisible search" type="search" placeholder="SEARCH" />
          </form>
          <ul role="list">
            <li>
              <ul className="row" role="list">
                <li>
                  <p>14:35</p>
                  <p>18</p>
                  <p>Jan</p>
                  <p>`24</p>
                </li>
                <li className="vertical-txt">
                  <p>3</p>
                </li>
                <li className="vertical-txt">
                  <p>35872</p>
                </li>
                <li className="vertical-txt">bug</li>
                <li className="prev-img">
                  <a href="/">
                    <img src="/example-images/tall_image.png" alt="" />
                  </a>
                </li>
                <li className="prev-content">
                  <a href="/">
                    <p>Doesn’t redirect after login. Goes to the main page every time. Doesn’t autofill properly the lo... Doesn’t redirect after login. Goes to the main page every time. Doesn’t autofill properly the lo...Doesn’t redirect after login. Goes to the main page every time. Doesn’t autofill properly the lo...</p>
                  </a>
                </li>
              </ul>
            </li>

            <li >
              <ul className="row" role="list">
                <li>
                  <p>14:35</p>
                  <p>18</p>
                  <p>Jan</p>
                  <p>`24</p>
                </li>
                <li className="vertical-txt">
                  <p>3</p>
                </li>
                <li className="vertical-txt">
                  <p>4558720</p>
                </li>
                <li className="vertical-txt">bug</li>
                <li className="prev-img">
                  <a href="/">
                    <img src="/example-images/threading-bug.png" alt="" />
                  </a>
                </li>
                <li className="prev-content">
                  <a href="/">
                    <p>Doesn’t redirect after login. Goes to the main page every time. Doesn’t autofill properly the lo...</p>
                  </a>

                </li>
              </ul>
            </li>
          </ul>
        </section>
        <form className="register-form">
          <input type="email" name="email" placeholder="EMAIL"/>
          <input type="password" name="password" placeholder="SET STRONG PASSWORD"/>
          <input type="password" name="repassword" placeholder="CONFIRM PASSWORD"/>
          <button className="btn register danger" type="submit">Register</button>
        </form>
        <form className="register-form not-render">
          <input type="email" name="email" placeholder="EMAIL"/>
          <input type="password" name="password" placeholder="PASSWORD"/>
          <button className="btn login" type="submit">Login</button>
        </form>
        {/* LOGIN */}
        {/* REGISTER */}
      </main>
      <footer></footer>
    </>
  )
}

export default App
