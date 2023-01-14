import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const Dashboard = () => {

  return (
    <div className={"pt-3 pb-3 mt-5"} style={{minHeight: "86vh"}}>
    {/* {currentUser.email ? ( */}
    {true ? (
        <div className="card border-dark m-5">
          <h5 className="card-header text-white bg-dark">User Dashboard</h5>
          <div className="card-body">
            <div className="row">
              <div className="col-md-3 col-sm-12">
                <div className="card border-dark mb-3">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <Link
                        className={"link-font"}
                        to={"/dashboard/projects"}
                      >
                        {/* {currentUser.role === "TST" */}
                        {true
                          ? "Projects"
                          : "My Projects"}
                      </Link>
                    </li>
                    {/* {currentUser.role === "MP" ? ( */}
                    {true ? (
                      <li className="list-group-item">
                      <Link
                        className={"link-font"}
                        to={"/dashboard/new-project"}
                      >
                        Create A New Project
                      </Link>
                    </li>
                    ) : undefined}
                    <li className="list-group-item">
                      <Link
                        className={"link-font"}
                        to={"/dashboard/my-bugs"}
                      >
                        My Bugs
                      </Link>
                    </li>
                    <li className="list-group-item">
                      <Link
                        className={"link-font"}
                        to={"/dashboard/all-bugs"}
                      >
                        All Bugs
                      </Link>
                    </li>
                    <li className="list-group-item">
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
                    {/* {currentUser.displayName} */}
                    displayName
                  </h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <span className="badge badge-dark badge-pill">
                        User ID
                      </span>
                      {/* {currentUser.id} */}
                    </li>
                    <li className="list-group-item">
                      <span className="badge badge-dark badge-pill">Name</span>{" "}
                      {/* {currentUser.displayName} */}
                    </li>
                    <li className="list-group-item">
                      <span className="badge badge-dark badge-pill">Email</span>{" "}
                      {/* {currentUser.email} */}
                    </li>
                    <li className="list-group-item">
                      <span className="badge badge-dark badge-pill">
                        Role Assigned
                      </span>{" "}
                      {/* {currentUser.role} */}
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
};

export default Dashboard;
