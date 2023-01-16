import React from "react";
import { useState } from "react";
import { useUsers } from "../../services/hooks/users";
import { useEffect } from "react";
import { useProjects } from "../../services/hooks/projects";
import { createBug } from "../../services/hooks/bugs";

const AddBugComponent = () => {
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState();
  const [commitLink, setCommitLink] = useState("");
  const [userId, setUserId] = useState("");
  const [projectId, setProjectId] = useState("");

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

      case "status":
        setStatus(value);
        break;

      case "commitLink":
        setCommitLink(value);
        break;

      case "userId":
        setUserId(value);
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
    const bug= {
        // id: uuidv4(),
        description: description,
        status: status,
        commitLink: commitLink,
        // createdAt: "",
        // updatedAt: "",
        userId: userId,
        projectId: projectId,
    }
    createBug(bug);
    //todo: display something after submit
  };

  return (
    <div
      className={"pt-3 pl-2 pr-2 mt-5 mr-3 ml-3"}
      style={{ minHeight: "86vh" }}
    >
      <h1 className={"text-center"}>Add Bug</h1>
      <form className={"mb-5"} onSubmit={handleSubmit}>
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
          <label htmlFor="defectPriority">Status</label>
          <select
            className="form-control"
            name="status"
            id="status"
            value={status}
            onChange={handleChange}
          >
            <option>--Select--</option>
            <option>Pending</option>
            <option>New</option>
            <option>Resolved</option>
            <option>(Feature) request</option>
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
        <div className="form-group">
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
        </div>
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
        <button type={"submit"} className={"btn btn-dark"}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBugComponent;
