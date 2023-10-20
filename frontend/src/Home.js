import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import "./auth/login.css";

import { GoogleLogout } from "react-google-login";

const clientId =
  "752320888262-ddt7775fqt8hdkpaedqgh7tj4g6t6f3d.apps.googleusercontent.com";

const Home = (props) => {
  // const [user, setUser] = useState(null);

  // const getUser = async () => {
  //   const res = await axios.get("/api/auth", {
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem("token")}`,
  //     },
  //   });
  //   setUser(res.data);
  // };
  // useEffect(() => {
  //   getUser();
  // }, []);

  const onSuccess = () => {
    console.log("Logout Successful!");
    window.location.href = "/";
  };

  //   if (!localStorage.getItem("token")) {
  //     props.history.push("/");
  //   }
  return (
    <div className="homebk">
      <div className="App">
        <header className="App-header">
          <div class="headerx">
            <h1 id="title">White Light </h1>

            <hr></hr>
          </div>

          <div class="area"></div>
          <nav class="main-menu">
            <br></br> <br></br> <br></br> <br></br>
            <ul>
              <li>
                <a href="/home">
                  {/* <img src={logo} className="App-logo" alt="logo" /> */}
                  <img src={require("./images/logo.png")} />
                  <span class="nav-text">White Light</span>
                </a>
              </li>
              <br></br>
              <li>
                <a href="/home">
                  <i class="fa fa-home fa-2x"></i>
                  <span class="nav-text">Dashboard</span>
                </a>
              </li>
              <li class="has-subnav">
                <a href="/EmpData">
                  <i class="fa fa-laptop fa-2x"></i>
                  <span class="nav-text">Employee</span>
                </a>
              </li>
              <li class="has-subnav">
                <a href="/DeptData">
                  <i class="fa fa-list fa-2x"></i>
                  <span class="nav-text">Department</span>
                </a>
              </li>
              <li class="has-subnav">
                <a href="/ProjectData">
                  <i class="fa fa-folder-open fa-2x"></i>
                  <span class="nav-text">Projects</span>
                </a>
              </li>
              <li>
                <a href="/FinancialDetails">
                  <i class="fa fa-bar-chart-o fa-2x"></i>
                  <span class="nav-text">Financial</span>
                </a>
              </li>
              <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>{" "}
              <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>{" "}
              <br></br>
            </ul>
            <ul class="logout">
              {/* <li>
                <a onClick={logout}>
                  <i class="fa fa-power-off fa-2x"></i>
                  <span class="nav-text">Logout</span>
                </a>
              </li> */}
              <li>
                <div class="logout-button">
                  <a href="/">
                    <GoogleLogout
                      clientId={clientId}
                      buttonText="Logout"
                      onSuccess={onSuccess}
                    />
                  </a>
                </div>
              </li>
            </ul>
          </nav>
        </header>

        <body>
          <center>Copyright © White light All rights reserved.</center>
        </body>
      </div>

      <body></body>
    </div>
  );
};

export default Home;
