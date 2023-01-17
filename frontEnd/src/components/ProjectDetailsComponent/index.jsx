import React from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { getProjectById, updateProject} from "../../services/hooks/projects";
import { useEffect } from "react";

const ProjectDetailsComponent = (props) => {
  const params = useParams();
  const [projectName, setProjectName] = useState("");
  const [repository, setRepository] = useState("");

  const [data, setData] = useState();
  useEffect(() => {
    const dataFetch = async () => {
      const data = await getProjectById(params["*"]);
      setData(data);
    };

    dataFetch();
  }, []);
  var project = {
    id:"",
    repository: "",
    createdAt: "",
    updatedAt: "",
    name: "",
  };
  if (data !== undefined) {
    project = data;
  }


  const handleCommentChange = (
    event
  ) => {
    const { name, value } = event.target;
    switch (name) {
      case "projectName":
        setProjectName(value);
        break;

      case "repository":
        setRepository(value);
        break;

      default:
        break;
    }
  };
  
  const handleSubmitComment = (event) => {
    event.preventDefault();
    const newProject = {
      id: project.id,
      repository: event.target.repository.value,
      createdAt: project.createdAt,
      updatedAt: project.updatedAt,
      name: event.target.projectName.value,
    }
    
    updateProject(project.id, newProject);
  };

return(
    <div>
        <h2 className={"text-center"}>
          Project Details {" "}
        </h2>
        <div className="card border-dark mb-5">
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-start">
              <span className={"badge badge-dark"}>ID</span>
               {project.id}
            </li>
            <li className="list-group-item d-flex justify-content-start">
              <span className={"badge badge-dark"}>Name</span>{" "}
                {project.name}
            </li>
            <li className="list-group-item d-flex justify-content-start">
              <span className={"badge badge-dark"}>Repository</span> 
              {project.repository}
            </li>
            <li className="list-group-item d-flex justify-content-start">
              <span className={"badge badge-dark"}>Created At</span>{" "}
              {project.createdAt}
            </li>
            <li className="list-group-item d-flex justify-content-start">
              <span className={"badge badge-dark"}>Updated At</span>{" "}
              {project.updatedAt}
            </li>
          </ul>
        </div>
        {}
        <form onSubmit={handleSubmitComment}>
          <div className="form-group">
            <label htmlFor="ticketComment">Add Name</label>
            <input
              type="text"
              className={"form-control"}
              name="projectName"
              id="projectName"
              placeholder={"Enter the new project name here..."}
              value={projectName}
              onChange={handleCommentChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="ticketComment">Add Repository Link</label>
            <input
              type="text"
              className={"form-control"}
              name="repository"
              id="repository"
              placeholder={"Enter the new link here..."}
              value={repository}
              onChange={handleCommentChange}
            />
          </div>
          <button className="btn btn-dark">Submit</button>
        </form>
    </div>
);

}

export default ProjectDetailsComponent;