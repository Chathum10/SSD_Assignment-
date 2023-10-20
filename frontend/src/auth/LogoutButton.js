import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId =
  "752320888262-ddt7775fqt8hdkpaedqgh7tj4g6t6f3d.apps.googleusercontent.com";

function LogoutButton() {
  const onSuccess = () => {
    console.log("Logout Successful!");
    window.location.href = "/";
  };

  return (
    <div align="center">
      <a href="/">
        <GoogleLogout
          clientId={clientId}
          buttonText="Logout"
          onSuccess={onSuccess}
        />
      </a>
    </div>
  );
}

export default LogoutButton;
