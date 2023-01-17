import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useProjects } from "../../services/hooks/projects";
import { useNavigate } from "react-router";
import "./styles.css";

const ViewProjectsComponent = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  useEffect(() => {
    const dataFetch = async () => {
      const data = await useProjects();
      setData(data);
    };

    dataFetch();
  }, []);

  var projects = [{
    id: "",
    repository: "",
    createdAt: "",
    updatedAt: "",
    name: "",
  }];
  if (data !== undefined) {
    projects = data;
  }

    return (
        <div
        className={"pt-5 pb-3 pl-2 pr-2 mt-5 mr-3 ml-3 mb-5"}
        style={{ minHeight: "81vh" }}
      >
        <h2 className={"text-center"}>PROJECTS</h2>
        <table className="table table-bordered" id="myTable">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Project Name</th>
              <th scope="col">Project Repository</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <Link
                      className={"text-white"}
                      to={`${project.id}`}
                    >
                      {project.name}
                    </Link>
                  </td>
                  <td className={"text-white"}>{project.repository}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
}

export default ViewProjectsComponent;