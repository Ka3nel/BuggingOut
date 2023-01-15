import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import user from "../../assets/user.png";
import "./styles.css";

const NavbarComponent = (props) => {
  // const history = useHistory();
  const navigate = useNavigate();
  const refreshComponent = () => {
    window.location.reload();
  };

  return (
    <div className={"bootstrap-navbar"}>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <Link to={"/"} className={"navbar-brand"}>
          BuggingOut
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li
              // className={`nav-item ${
              //   history.location.pathname === "/bugtrail-v3" ? "active" : ""
              // }`}
            >
              <Link to={"/bugtrail-v3"} className={"nav-link"}>
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li
              // className={`nav-item ${
              //   history.location.pathname === "/bugtrail-v3/register-and-login"
              //     ? "active"
              //     : ""
              // }`}
            >
              {!props.user.email && (
                <Link
                  to={"/bugtrail-v3/register-and-login"}
                  className={"nav-link"}
                >
                  Login and Register
                </Link>
              )}
            </li>
            <li>
              {props.user.email && (
                <div
                  className={"nav-link"}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    // auth.signOut();
                    navigate("/");
                    refreshComponent();
                  }}
                >
                  Logout
                </div>
              )}
            </li>
          </ul>
          <span className="ml-auto d-flex justify-content-end">
            {/* {currentUser.email ? `Hi, ${currentUser.displayName}` : ""} */}
            <img className="imgStyle" src={user} alt="Logo" />
          </span>
        </div>
      </nav>
    </div>
  );
};

export default NavbarComponent;
