import React from "react";
import { useState } from "react";
import { createProject } from "../../services/hooks/projects";
import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";
import { useNavigate } from "react-router";
import "./styles.css";

const AddProjectComponent = () => {
    const navigate = useNavigate();
  const [name, setName] = useState("");
  const [repository, setRepository] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;

      case "repository":
        setRepository(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const project = {
      name: name,
      repository: repository,
    }
    createProject(project);
    navigate(-1);
  };

  return (
    <div
      className={"pt-5 pl-2 pr-2 mt-5 mr-3 ml-3 form"}
      style={{ minHeight: "86vh" }}>
      <NavbarComponent user={null} />
      <h1 className={"text-center"}>Add Project</h1>
      <form className={"mb-5 pt-3"} onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="defectDescription">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            placeholder="Name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="defectDescription">Repository</label>
          <input
            type="text"
            className="form-control"
            name="repository"
            id="repository"
            placeholder="Repository Link"
            value={repository}
            onChange={handleChange}
          />
        </div>
        <button type={"submit"} className={"btn btn-dark btnSubmit"}>
          Submit
        </button>
      </form>
      <FooterComponent />
    </div>
  );
};

export default AddProjectComponent;
