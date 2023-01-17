import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useBugs } from "../../services/hooks/bugs";
import { useNavigate } from "react-router";
import "./styles.css";


const ViewBugsComponent = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  useEffect(() => {
    const dataFetch = async () => {
      const data = await useBugs();
      setData(data);
    };

    dataFetch();
  }, []);

  var bugs = [{
    id: "",
    description: "",
    status: "",
    commitLink: "",
    createdAt: "",
    updatedAt: "",
    userId: "",
    projectId: "",
  }];
  if (data !== undefined) {
    bugs = data;
  }

  const [currentId, setCurrentId] = useState("");
  const assumeBug = (id) => {
      setCurrentId(id);
  }

  const resolveBug = (id) => {
    if(currentId == id){
      navigate(currentId);
    }
  }

  return (
    <div
      className="pt-3 pb-3 pl-2 pr-2 mt-5 mr-3 ml-3 mb-5"
      style={{ minHeight: "81vh" }}
    >
      <h2 className={"text-center"}>My Bugs</h2>
      {bugs.length > 0 ? (
        <table className="table table-bordered" id="myTable">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Bug Id</th>
              <th scope="col">Project Id</th>
              <th scope="col">Commit Link</th>
              <th scope="col">Status</th>
              <th scope="col">Solve</th>
              <th scope="col">Assume</th>
            </tr>
          </thead>
          <tbody className={"text-white"}>
            {bugs.map((bug, index) => (
            <tr
            key={index}
            >
              <th scope="row">{index + 1}</th>
              <td>
                <Link
                    className={"text-white"}
                    to={`${bug.id}`}
                  >
                    {bug.id}
                  </Link>
              </td>
              <td>
                  {bug.projectId}
                </td>
              <td>{bug.commitLink}</td>
                <td>{bug.status}</td>
                <td><button onClick={() => resolveBug(bug.id)}>Solve Bug</button></td>
                <td><button onClick={() => assumeBug(bug.id)}>Assume Bug</button></td>
            </tr>
            ))} 
          </tbody>
        </table>
      ) : (
        <h3 className={"text-center pt-5"}>No Bugs found</h3>
      )}
    </div>
  );
};

export default ViewBugsComponent;