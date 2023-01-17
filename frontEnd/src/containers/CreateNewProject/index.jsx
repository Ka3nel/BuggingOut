import React from "react";
import "./styles.css";
import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";
import AddProjectComponent from "../../components/AddProjectComponent";

const CreateNewProject = () => {

    return (
        <div>
            <NavbarComponent user={null}/>
            <h1>Create A New Project</h1>
            <AddProjectComponent/>
            <FooterComponent/>
        </div>
    );
}

export default CreateNewProject;