import React from "react";
// import { redirect, useParams } from "react-router";
import { useNavigate } from "react-router";
import main from "../../assets/main.jpg";
import "./styles.css";

const HomePage = () => {
   const navigate = useNavigate();

    const moveToLogin = () => {
        console.log("Merge");
        navigate("./auth");
    }

  return (
    <div className="Auth-form-container">
       <img className="imgStyles" src={main} alt="Logo" />
       <div className="d-grid gap-2 mt-3">
       <button type="submit" className="btn btn-primary" onClick={moveToLogin}>
                Sign In
        </button>
        </div>
    </div>
  );
}

export default HomePage;