export function Tickets() {
    return(
        <section className="all-container">
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
    );
}