export function Header() {
    return (
        <header className="nav ">
            <nav className="nav" >
                <ul role="list">
                    <p className="avatar dropdown ">
                        <img className="dropbtn" src="/admin-logo.jpg" />
                        <div className="dropdown-content">
                            <a href="/">Menage Profile</a>
                            <a href="/">Change Picture</a>
                        </div>
                    </p>
                    <li>
                        <a className="btn highlighted" href="/">Assigned</a>
                    </li>
                    <li className="dropdown ">
                        <button className="btn important dropbtn" type="button">Watched</button>
                        <div className="dropdown-content">
                            <a href="/">Bugs</a>
                            <a href="/">Units</a>
                            <a href="/">Currencies</a>
                            <a href="/">Categories</a>
                            <a href="/">All</a>
                        </div>
                    </li>
                    <li className="dropdown ">
                        <button className="btn important dropbtn" type="button">My Tickets</button>
                        <div className="dropdown-content">
                            <a href="/">Bugs</a>
                            <a href="/">Units</a>
                            <a href="/">Currencies</a>
                            <a href="/">Categories</a>
                            <a href="/">All</a>
                        </div>
                    </li>
                    <li className="dropdown ">
                        <button className="btn important dropbtn" type="button">Create</button>
                        <div className="dropdown-content">
                            <a href="/">Bug</a>
                            <a href="/">Unit</a>
                            <a href="/">Currency</a>
                            <a href="/">Category</a>
                            <a href="/">Any</a>
                        </div>
                    </li>
                    <li  className="not-render">
                        <a className="btn register" href="/">Register</a>
                    </li>
                    <li  className="not-render">
                        <a className="btn login" href="/">Login</a>
                    </li>
                </ul>
                <ul role="list">
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
    );
}