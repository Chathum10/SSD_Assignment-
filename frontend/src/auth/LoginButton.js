import React from "react";
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";

const LoginButton = () => {
  const history = useHistory();

  const responseGoogle = (response) => {
    if (response.profileObj) {
      // Handle successful authentication, e.g., set user state, redirect, etc.
      console.log("Authentication succeeded", response.profileObj);
      // Redirect to the home page
      history.push("/CreateEmpData");
    } else {
      // Handle authentication failure, e.g., show an error message
      console.error("Authentication failed", response.error);
      console.log("Auth Failed");
    }
  };

  return (
    <div align="center">
      <GoogleLogin
        clientId="752320888262-53ufcjpttu2jhcntfe6ds35bvgef0nce.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default LoginButton;
