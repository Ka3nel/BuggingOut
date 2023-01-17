import React from "react";
import "./styles.css";
import AllBugsComponent from "../../components/AllBugsComponent";
import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";

const AllBugs = () => {

    return (
        <div>
            <div
        className={"pt-3 pb-3 pl-2 pr-2 mt-5 mr-3 ml-3 mb-5"}
        style={{ minHeight: "81vh" }}
      >
        <NavbarComponent user={null}/>
        <AllBugsComponent/>
        <FooterComponent/>
    
      </div>
        </div>
    );
}

export default AllBugs;