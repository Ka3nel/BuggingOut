import React from "react";
import { useParams } from "react-router";
import { getUserById } from "../../services/hooks/users";
import { useState, useEffect } from "react";

import "./styles.css";
import DashboardComponent from "../../components/DashboardComponent";
import NavbarComponent from "../../components/NavbarComponent";

const Dashboard = () => {
  const params = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    const dataFetch = async () => {
      const data = await getUserById(params["*"]);
      setData(data);
    };

    dataFetch();
  }, []);
  var currentUser = {
    createdAt: "",
    email: "",
    firstName: "",
    id: "",
    lastName: "",
    password: "",
    role: "",
    updatedAt: "",
  };
  if (data !== undefined) {
    currentUser = data;
  }

  return (
    <>
      <NavbarComponent user={currentUser}/>
      <DashboardComponent user={currentUser} />
    </>
  );
};

export default Dashboard;
