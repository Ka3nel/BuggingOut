import React from "react";
import { Link } from "react-router-dom";
import coding from "../../assets/coding.png";
import malware from "../../assets/malware.png";
import virus from "../../assets/virus.png";
import "./styles.css";

const DashboardComponent = (props) => {
    console.log(props.user.id);
    return(
        <div className={"pt-3 pb-3 mt-5"} style={{minHeight: "86vh"}}>
    {props.user.email ? (
        <div className="card border-dark m-5">
          <h5 className="card-header text-white bg-dark">User Dashboard</h5>
          <div className="card-body">
            <div className="row">
              <div className="col-md-3 col-sm-12">
                <div className="card border-dark mb-3">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-start">
                      <Link
                        className={"link-font"}
                        to={"/auth/dashboard/projects"}
                      >
                        <img className="imgStyle" src={coding} alt="Logo" />
                        {props.user.role === "TST"
                          ? "Projects"
                          : "My Projects"}
                      </Link>
                    </li>
                    {props.user.role === "MP" ? (
                      <li className="list-group-item d-flex justify-content-start">
                      <Link
                        className={"link-font"}
                        to={"/auth/dashboard/new-project"}
                      >
                        Create A New Project
                      </Link>
                    </li>
                    ) : undefined}
                    <li className="list-group-item d-flex justify-content-start">
                      <Link
                        className={"link-font"}
                        to={"/auth/dashboard/my-bugs"}
                      >
                        <img className="imgStyle" src={malware} alt="Logo" />
                        My Bugs
                      </Link>
                    </li>
                    <li className="list-group-item d-flex justify-content-start">
                      <Link
                        className={"link-font"}
                        to={"/auth/dashboard/all-bugs"}
                      >
                        <img className="imgStyle" src={virus} alt="Logo" />
                        All Bugs
                      </Link>
                    </li>
                    <li className="list-group-item d-flex justify-content-start">
                      {/* <Link
                        className={"link-font"}
                        to={"/bugtrail-v3/view-tickets?type=assigned-to-me"}
                      >
                        Bugs Assigned To Me
                      </Link> */}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-9 col-sm-12">
                <div className="card border-dark">
                  <h5 className="card-header text-white bg-dark">
                    {props.user.firstName} {props.user.lastName}
                  </h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-start">
                      <span className="badge">
                        User ID  
                      </span>
                      {props.user.id}
                    </li>
                    <li className="list-group-item d-flex justify-content-start">
                      <span className="badge badge-dark badge-pill">First Name</span>{" "}
                       {props.user.firstName}
                    </li>
                    <li className="list-group-item d-flex justify-content-start">
                      <span className="badge badge-dark badge-pill">Last Name</span>{" "}
                       {props.user.lastName}
                    </li>
                    <li className="list-group-item d-flex justify-content-start">
                      <span className="badge badge-dark badge-pill">Email</span>{" "}
                      {props.user.email}
                    </li>
                    <li className="list-group-item d-flex justify-content-start">
                      <span className="badge badge-dark badge-pill">
                        Role Assigned
                      </span>{" "}
                      {props.user.role}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h2 className={"text-center"}>
          Welcome to Outliers Bug Tracker. Please register or login
          to continue.
        </h2>
      )}
    
    </div>
    );
}


export default DashboardComponent