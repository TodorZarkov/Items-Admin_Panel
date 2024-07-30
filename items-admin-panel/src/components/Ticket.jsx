import { Link } from "react-router-dom";

export function Ticket({ticket}) {

    return(
        <li>
          <ul className="row" role="list">
            <li className="date">
              {ticket.created}
            </li>
            <li className="vertical-txt">
              <p>{ticket.severity}</p>
            </li>
            <li className="vertical-txt">
              <p>{ticket.withSameProblem}</p>
            </li>
            <li className="vertical-txt">{ticket.type}</li>
            <li className="prev-img">
              <a href="/">
                <img src={`data:image/jpeg;base64,${ticket.snapShot}`} alt="" />
              </a>
            </li>
            <li className="prev-content">
              <Link to={`/tickets/${ticket.id}/details`}>
                <p>{ticket.title}</p>
              </Link>
            </li>
          </ul>
        </li>
    );
}