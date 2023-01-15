
import React, { useState } from "react"
import "./styles.css"
import { createUser, useUsers } from "../../services/hooks/users";
import { useNavigate } from "react-router";

const Auth = () => {
  // const users = useUsers();
  // const capitalizeUsers = async () => {
  //   const users = await useUsers()
  //   Promise.all(
  //     users.map(async (user) => {
  //       const email = user.email;
  //       const pass = user.password;
  //       console.log(user);
  //     })
  //   )

  // }
  // capitalizeUsers();

  const navigate = useNavigate();
  let [authMode, setAuthMode] = useState("signin")
  // const [isSubmitted, setIsSubmitted] = useState(false);
  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  const register = async (event) => {
    event.preventDefault();
    const user = {
      "firstName": event.target.firstName.value,
      "lastName": event.target.lastName.value,
      "email": event.target.email.value,
      "password": event.target.password.value,
      "role": "undefined"
    }
      createUser(user);
      window.location.reload(false);
  }

  const login = async (event) => {
    event.preventDefault();
    const users = await useUsers()
 
    const email = event.target.email.value;
    const pass = event.target.password.value;
    
    Promise.all(
      users.map(async (user) => {
        //find user and compare
        if(user){
          if(user.email === email && user.password === pass) {
            // setIsSubmitted(true);
            navigate(`dashboard/${user.id}`);
          }else{
           //to invalid email and pass handler
          }
        }
      }))
  }


  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={login}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                name="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={register}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>First Name</label>
            <input
              type="firstName"
              name="firstName"
              className="form-control mt-1"
              placeholder="Biju"
            />
          </div>
          <div className="form-group mt-3">
            <label>Last Name</label>
            <input
              type="lastName"
              name="lastName"
              className="form-control mt-1"
              placeholder="Costel"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Auth;