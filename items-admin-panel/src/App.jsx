

function App() {

  return (
    <>
      <header>
        <nav className="nav" >
          <p >
            <a className="avatar" href="/">
              <img src="/example-images/threading-bug.png" />
            </a>
          </p>
          <ul role="list">

            <li><a className="btn highlighted" href="/">Assigned</a></li>
            <li><a className="btn important " href="/">Watched</a></li>
            <li><a className="btn important " href="/">My Tickets</a></li>
            <li><a className="btn important " href="/">Create</a></li>
          </ul>
        </nav>
        <nav className="nav" >
          <ul role="list">
            <li><a className="btn secondary" href="/">Units</a></li>
            <li><a className="btn secondary" href="/">Categories</a></li>
            <li><a className="btn secondary" href="/">Currencies</a></li>
            <li><a className="btn secondary" href="/">Admins</a></li>
          </ul>
        </nav>
        <section>
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
        <section>
          <form action="">
            <button>T</button>
            <button>S</button>
            <button>U</button>
            <button>T</button>
            <input type="search" placeholder="SEARCH" />
          </form>
          <ul role="list">
            <li>
              <ul role="list">
                <li>
                  <p>14:35</p>
                  <p>18</p>
                  <p>Jan</p>
                  <p>`24</p>
                </li>
                <li>
                  <p>3</p>
                </li>
                <li>
                  <p>358720</p>
                </li>
                <li>bug</li>
                <li>
                  <a href="/">
                    <img src="/example-images/threading-bug.png" alt="" />
                  </a>
                </li>
                <li>
                  <p>Doesn’t redirect after login. Goes to the main page every time. Doesn’t autofill properly the lo...</p>
                </li>
              </ul>
            </li>
            <li>
              <ul role="list">
                <li>
                  <p>14:35</p>
                  <p>18</p>
                  <p>Jan</p>
                  <p>`24</p>
                </li>
                <li>
                  <p>3</p>
                </li>
                <li>
                  <p>358720</p>
                </li>
                <li>bug</li>
                <li>
                  <a href="/">
                    <img src="/example-images/threading-bug.png" alt="" />
                  </a>
                </li>
                <li>
                  <p>Doesn’t redirect after login. Goes to the main page every time. Doesn’t autofill properly the lo...</p>
                </li>
              </ul>
            </li>
          </ul>
        </section>
      </main>
      <footer></footer>
    </>
  )
}

export default App
