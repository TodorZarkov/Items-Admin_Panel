export function Dashboard() {
    return(
        <section className="nav">
                <ul role="list">
                    <li><a className="btn dash" href="/">
                        <p>Reported</p>
                        <p>00005235861</p></a></li>
                    <li><a className="btn dash" href="/"><p>Opened</p><p>214</p></a></li>
                    <li><a className="btn dash" href="/"><p>Solved</p><p>65235861</p></a></li>
                </ul>
            </section>
    );
}