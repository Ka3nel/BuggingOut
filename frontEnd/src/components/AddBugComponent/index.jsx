import React from "react";
import { useState } from "react";
import { useUsers } from "../../services/hooks/users";
import { useEffect } from "react";
import { useProjects } from "../../services/hooks/projects";
import { createBug } from "../../services/hooks/bugs";
import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";
import "./styles.css";

const AddBugComponent = () => {
  const [description, setDescription] = useState("");
  const [commitLink, setCommitLink] = useState("");
  //const [userId, setUserId] = useState("");
  const [projectId, setProjectId] = useState("");
  const [severity, setSeverity] = useState("");
  const [priority, setPriority] = useState("");

  //users and projects
  const [data, setData] = useState();
  const [dataProjects, setDataProjects] = useState();
  useEffect(() => {
    const dataFetch = async () => {
      const data = await useUsers();
      setData(data);
    };
    const dataFetchProjects = async () => {
      const dataProjects = await useProjects();
      setDataProjects(dataProjects);
    };

    dataFetch();
    dataFetchProjects();
  }, []);

  var users = [
    {
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      role: "",
      createdAt: "",
      updatedAt: "",
    },
  ];

  var projects = [
    {
      id: "",
      repository: "",
      createdAt: "",
      updatedAt: "",
    },
  ];
  if (data !== undefined) {
    users = data;
  }
  if (dataProjects !== undefined) {
    projects = dataProjects;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "description":
        setDescription(value);
        break;

      case "severity":
        setSeverity(value);
        break;

      case "commitLink":
        setCommitLink(value);
        break;

      case "priority":
        setPriority(value);
        break;

      case "projectId":
        setProjectId(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const bug = {
      // id: uuidv4(),
      description: description,
      status: "",
      severity: severity,
      priority: priority,
      commitLink: commitLink,
      userId: "",
      // createdAt: "",
      // updatedAt: "",
      projectId: projectId,
    }
    createBug(bug);
    //todo: display something after submit
  };

  return (
    <div
      className={"pt-5 pl-2 pr-2 mt-5 mr-3 ml-3 form"}
      style={{ minHeight: "86vh" }}>
      <NavbarComponent user={null} />
      <h1 className={"text-center"}>Add Bug</h1>
      <form className={"mb-5 pt-3"} onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="defectDescription">Description</label>
          <textarea
            className="form-control"
            name="description"
            id="description"
            placeholder="Write a detailed description of the issue here..."
            rows={3}
            value={description}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="defectPriority">Severity</label>
          <select
            className="form-control"
            name="severity"
            id="severity"
            value={severity}
            onChange={handleChange}
          >
            <option>--Select--</option>
            <option>Light</option>
            <option>Moderate</option>
            <option>Fatal</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="defectPriority">Priority</label>
          <select
            className="form-control"
            name="priority"
            id="priority"
            value={priority}
            onChange={handleChange}
          >
            <option>--Select--</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="defectImage">Commit Link</label>
          <input
            type="text"
            name="commitLink"
            className="form-control"
            onChange={handleChange}
            id="commitLink"
          />
        </div>
        {/* <div className="form-group">
          <label htmlFor="defectPriority">User</label>
          <select
            className="form-control"
            name="userId"
            id="userId"
            value={userId}
            onChange={handleChange}
          >
            <option>--Select--</option>
            {users.map((user) => (
              //   <option>{user.firstName + " " + user.lastName}</option>
              <option key={user.id}>{user.id}</option>
            ))}
          </select>
        </div> */}
        <div className="form-group">
          <label htmlFor="defectPriority">Project</label>
          <select
            className="form-control"
            name="projectId"
            id="projectId"
            value={projectId}
            onChange={handleChange}
          >
            <option>--Select--</option>
            {projects.map((project) => (
              <option key={project.id}>{project.id}</option>
            ))}
          </select>
        </div>
        <button type={"submit"} className={"btn btn-dark btnSubmit"}>
          Submit
        </button>
      </form>
      <FooterComponent />
    </div>
  );
};

export default AddBugComponent;
