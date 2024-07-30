import { useParams } from "react-router-dom";

export function TicketDetails() {
    const { ticketId } = useParams();
    return (
        <article>
            <h3>Ticket title of {ticketId}</h3>
            <img src="/example-images/threading-bug.png"></img>
            <section>
                <ul role='list'>
                    <li>Type: Bug</li>
                    <li>Status: Assign</li>
                    <li>Severity: 0</li>
                    <li>Afflicted Users: 2158</li>
                    <li>Watchers: 24</li>
                    <li>Created: 15:38, 01 Jun `24</li>
                    <li>Modified: 22:01, 02 Jun `24</li>
                </ul>
                <menu>
                    <button type="button">Watch</button>
                    <button type="button">Have Same Problem</button>
                    <button type="button">Back</button>
                </menu>
            </section>
            <footer>
                <h5>Description:</h5>
                <p>A bug tracking system or defect tracking  system is a software application that keeps track of reported software  bugs in software development projects. It may be regarded as a type of issue tracking system. Many  bug tracking systems, such as those used by most open-source software  pro</p>
            </footer>
        </article>
    );
}