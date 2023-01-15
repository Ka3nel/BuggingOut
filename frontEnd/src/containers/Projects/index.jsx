import React from "react";
import "./styles.css";
import { useProjects } from "../../services/hooks/projects";

const Projects = () => {

    const projects = useProjects();
    console.log(projects);
    
    return (
        <div
        className={"pt-5 pb-3 pl-2 pr-2 mt-5 mr-3 ml-3 mb-5"}
        style={{ minHeight: "81vh" }}
      >
        <h2 className={"text-center"}>PROJECTS PAGE</h2>
        <table className="table table-bordered table-striped table-dark mb-5">
          <thead>
            <tr>
              <th scope="col">S.No.</th>
              <th scope="col">Project Name</th>
              <th scope="col">Project Status</th>
            </tr>
          </thead>
          <tbody>
            {/* {projectsList.map((project, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <Link
                      className={"text-white text-decoration-none"}
                      to={`/bugtrail-v3/project-details/${project.id}`}
                    >
                      {project.name}
                    </Link>
                  </td>
                  <td>{project.status}</td>
                </tr>
              );
            })} */}
          </tbody>
        </table>
      </div>
    );
}

export default Projects;