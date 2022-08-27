import { useState } from "react";

export default function NavBarComponent() {
  const [showMenu, setShowMenu] = useState(false);
  const [showMenuFeatures, setShowMenuFeatures] = useState(false);
  const [showMenuHistory, setShowMenuHistory] = useState(false);

  const clickHandler = () => {
    setShowMenu(!showMenu);
  };

  return (
    <section className="section-nav">
      <nav className="nav-row">
        <div>
          <img src="/images/logo.svg" alt="" />
        </div>
        <div>
          <img src="/images/icon-menu.svg" alt="" onClick={clickHandler} />
        </div>
      </nav>
      {showMenu && (
        <div className="inner-menu">
          <div className="inner-menu-container">
          <div className="close-icon">
          <img src="/images/icon-close-menu.svg" alt="" onClick={clickHandler} />
        </div>
            <ul>
              <li>
                Features{" "}
                {showMenuFeatures ? (
                  <img
                    src="/images/icon-arrow-up.svg"
                    alt=""
                    onClick={() => setShowMenuFeatures(!showMenuFeatures)}
                    style={{paddingLeft:'1em'}}
                  />
                ) : (
                  <img
                    src="/images/icon-arrow-down.svg"
                    alt=""
                    onClick={() => setShowMenuFeatures(!showMenuFeatures)}
                    style={{paddingLeft:'1em'}}
                  />
                )}
                {showMenuFeatures && (
                  <ul className="test">
                    <li>
                      <img src="/images/icon-todo.svg" alt="" /> Todo List
                    </li>
                    <li>
                      <img src="/images/icon-calendar.svg" alt="" /> Calendar
                    </li>
                    <li>
                      <img src="/images/icon-reminders.svg" alt="" /> Reminders
                    </li>
                    <li>
                      <img src="/images/icon-planning.svg" alt="" /> Planning
                    </li>
                  </ul>
                )}
              </li>
            </ul>
            <ul>
              <li>
                Company{" "}
                {showMenuHistory ? (
                  <img
                    src="/images/icon-arrow-up.svg"
                    alt=""
                    onClick={() => setShowMenuHistory(!showMenuHistory)}
                    style={{paddingLeft:'1em'}}
                  />
                ) : (
                  <img
                    src="/images/icon-arrow-down.svg"
                    alt=""
                    onClick={() => setShowMenuHistory(!showMenuHistory)}
                    style={{paddingLeft:'1em'}}
                  />
                )}
                {showMenuHistory && (
                  <ul>
                    <li>History</li>
                    <li>Our Team</li>
                    <li>Blog</li>
                  </ul>
                )}
              </li>
            </ul>
            <ul>
              <li>Careers</li>
              <li>About</li>
            </ul>
            <div>
              <p>Login</p>
              <button>Register</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
