import React from "react";
import { useNavigate } from "react-router";
import main from "../../assets/main.jpg";
import "./styles.css";
import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";

const HomePage = () => {
  const navigate = useNavigate();

   const moveToLogin = () => {
       console.log("Merge");
       navigate("./auth");
   }

 return (
   <div className="Home-container">
     <NavbarComponent user={null}/>
     <div className="Elements">
       <div className="Arrange">
         <h1 className="h1">Welcome<br></br>to<mark className="salmon">BuggingOut</mark></h1>
         <div className="btn-group">
           <button type="submit" className="button" onClick={moveToLogin}>Sign In</button>
         </div>
       </div>
       <div className="imgAlign">
         <img className="imgStyles" src={main} />
       </div>
     </div>
     <FooterComponent/>
   </div>
 );
}

export default HomePage;