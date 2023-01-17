import React from "react";
import "./styles.css";
import ViewProjectsComponent from "../../components/ViewProjectsComponent";
import { useProjects } from "../../services/hooks/projects";
import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";


const Projects = () => {
  return (
    <div
      className={"pt-3 pb-3 pl-2 pr-2 mt-5 mr-3 ml-3 mb-5"}
      style={{ minHeight: "81vh" }}
    >
      <NavbarComponent user={null}/>
      <ViewProjectsComponent/>
      <FooterComponent/>
    </div>
  );
}

export default Projects;