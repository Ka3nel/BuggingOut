import React from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { getBugById } from "../../services/hooks/bugs";
import { useEffect } from "react";

const BugDetailsAllComponent = () => {
  const params = useParams();

  const [data, setData] = useState();
  useEffect(() => {
    const dataFetch = async () => {
      const data = await getBugById(params["*"]);
      setData(data);
    };

    dataFetch();
  }, []);
  var bug = {
    id: "",
    description: "",
    status: "",
    commitLink: "",
    createdAt: "",
    updatedAt: "",
    userId: "",
    projectId: "",
  };
  if (data !== undefined) {
    bug = data;
  }

return(
    <div>
        <h2 className={"text-center"}>
          Bug Details {" "}
        </h2>
        
        <div className="card border-dark mb-5">
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-start">
              <span className={"badge badge-dark"}>ID</span>
               {bug.id}
            </li>
            <li className="list-group-item d-flex justify-content-start">
              <span className={"badge badge-dark"}>Description</span>{" "}
                {bug.description}
            </li>
            <li className="list-group-item d-flex justify-content-start">
              <span className={"badge badge-dark"}>Status</span> 
              {bug.status}
            </li>
            <li className="list-group-item d-flex justify-content-start">
              <span className={"badge badge-dark"}>Commit link</span>{" "}
              {bug.commitLink}
            </li>
            <li className="list-group-item d-flex justify-content-start">
              <span className={"badge badge-dark"}>Created At</span>{" "}
              {bug.createdAt}
            </li>
            <li className="list-group-item d-flex justify-content-start">
              <span className={"badge badge-dark"}>Updated At</span>{" "}
              {bug.updatedAt}
            </li>
            <li className="list-group-item d-flex justify-content-start">
              <span className={"badge badge-dark"}>User Id</span>{" "}
              {bug.userId}
            </li>
            <li className="list-group-item d-flex justify-content-start">
              <span className={"badge badge-dark"}>Project Id</span>{" "}
              {bug.projectId}
            </li>
            
          </ul>
        </div>
    </div>
);

}

export default BugDetailsAllComponent;