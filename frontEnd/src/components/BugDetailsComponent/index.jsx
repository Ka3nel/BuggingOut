import React from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { getBugById, updateBug } from "../../services/hooks/bugs";
import { useEffect } from "react";

const BugDetailsComponent = (props) => {
  const params = useParams();
  const [comment, setComment] = useState("");
  const [statusBug, setStatusBug] = useState("");
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

  const handleCommentChange = (
    event
  ) => {
    const { name, value } = event.target;
    switch (name) {
      case "statusBug":
        setStatusBug(value);
        break;

      case "comment":
        setComment(value);
        break;

      default:
        break;
    }
  };
  
  const handleSubmitComment = (event) => {
    event.preventDefault();
    const newBug = {
      id: bug.id,
      description: bug.description,
      status: event.target.statusBug.value,
      commitLink: event.target.comment.value,
      createdAt: bug.createdAt,
      updatedAt: bug.updatedAt,
      userId: bug.userId,
      projectId: bug.projectId,
    }
    
    updateBug(bug.id, newBug);
  };

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
        <form onSubmit={handleSubmitComment}>
          <div className="form-group">
            <label htmlFor="ticketComment">Add Commit Link</label>
            <textarea
              className={"form-control"}
              name="comment"
              id="comment"
              placeholder={"Enter your comment here..."}
              rows={3}
              value={comment}
              onChange={handleCommentChange}
            />
          </div>
          <div className="form-group">
          <label htmlFor="defectPriority">Status</label>
          <select
            className="form-control"
            name="statusBug"
            id="statusBug"
            value={statusBug}
            onChange={handleCommentChange}
          >
            <option>--Select--</option>
            <option>New</option>
            <option>Pending</option>
            <option>Solved</option>
            <option>Active</option>
          </select>
        </div>
          
          <button className="btn btn-dark">Submit</button>
        </form>
    </div>
);

}

export default BugDetailsComponent;