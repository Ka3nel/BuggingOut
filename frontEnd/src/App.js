import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./containers/Dashboard";

import Auth from "./containers/Auth";

import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./containers/HomePage";
import CreateNewProject from "./containers/CreateNewProject";
import MyBugs from "./containers/MyBugs";
import AllBugs from "./containers/AllBugs";
import Projects from "./containers/Projects";
import BugDetailsComponent from "./components/BugDetailsComponent";

class App extends React.Component {
  state = {
    data: null,
  };

  // componentDidMount() {
  //   this.callBackendAPI()
  //     .then((res) => this.setState({ data: res.express }))
  //     .catch((err) => console.log(err));
  // }
  // callBackendAPI = async () => {
  //   const response = await fetch("http://localhost:8080/api/projects");
  //   console.log(response);
  //   const body = await response.json();

  //   if (response.status !== 200) {
  //     throw Error(body.message);
  //   }
  //   return body;
  // };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/" element={<HomePage />} />
            <Route path="auth/dashboard/*" element={<Dashboard />} />
            <Route path="auth/dashboard/projects/*" element={<Projects />} />
            <Route path="auth/dashboard/new-project/*" element={<CreateNewProject />} />
            <Route path="auth/dashboard/my-bugs" element={<MyBugs />} />
            <Route path="auth/dashboard/my-bugs/*" element={<BugDetailsComponent />} />
            <Route path="auth/dashboard/all-bugs/*" element={<AllBugs />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
