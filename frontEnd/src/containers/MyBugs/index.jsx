import React from "react";
import "./styles.css";
import { useBugs } from "../../services/hooks/bugs";

const MyBugs = () => {
    const bugs = useBugs();
    console.log(bugs);
    return (
        <div>
            <h1>MyBugs</h1>
        </div>
    );
}

export default MyBugs;