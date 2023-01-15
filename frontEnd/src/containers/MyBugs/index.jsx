import React from "react";
import "./styles.css";
import ViewBugsComponent from "../../components/ViewBugsComponent";

// const MyBugs = () => {
//     const bugs = useBugs();
//     console.log(bugs);
//     return (
//         <div>
//             <h1>MyBugs</h1>
//         </div>
//     );
// }

// export default MyBugs;


const MyBugs = () => {
    // let { bugId } = useParams();
    // const currentUser= useContext(CurrentUserContext);
  
    // const [refresh, setRefresh] = useState(true);
    // const [projectId, setProjectId] = useState("");
    // const [usersList, setUsersList] = useState([]);
    // const [assignee, setAssignee] = useState({
    //   id: "",
    //   displayName: "",
    //   email: "",
    // });
    // const [status, setStatus] = useState("");
    // const [bug, setBug] = useState({
    //   id: "",
    //   description: "",
    //   status: "",
    //   commitLink: "",
    // });
  
    // const handleChangeAssignee = (
    //   event
    // ) => {
    //   usersList.forEach((user) => {
    //     if (user.displayName === event.target.value) {
    //       setAssignee(user);
    //     }
    //   });
    // };
  
    // const handleSubmitAssignee = (event) => {
    //   event.preventDefault();
    //   const status = assignee ? "assigned" : "unassigned";
  
    //   let logsArray = [];
  
    
    // };
  
    // const refreshComponent = () => {
    //   setRefresh((prevState) => !prevState);
    // };
  
    // const handleChangeStatus = (event) => {
    //   setStatus(event.target.value);
    // };
  
    // const handleSubmitStatus = (event) => {
    //   event.preventDefault();
  
    //   let logsArray = [];
   
    // };
  
 
  
    return (
      <div
        className={"pt-3 pb-3 pl-2 pr-2 mt-5 mr-3 ml-3 mb-5"}
        style={{ minHeight: "81vh" }}
      >
        <ViewBugsComponent

        />
    
      </div>
    );
  };
  
  export default MyBugs;
  