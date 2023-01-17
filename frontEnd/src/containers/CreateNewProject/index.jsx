import React from "react";
import "./styles.css";
import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";

const CreateNewProject = () => {

    return (
        <div>
            <NavbarComponent user={null}/>
            <h1>CreateNewProject</h1>
            <FooterComponent/>
        </div>
    );
}

export default CreateNewProject;