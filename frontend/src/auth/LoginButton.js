import React from "react";
import { GoogleLogin } from "react-google-login";

const clientId =
  "752320888262-ddt7775fqt8hdkpaedqgh7tj4g6t6f3d.apps.googleusercontent.com";

const LoginButton = () => {
  const [isGoogleLoginOpen, setIsGoogleLoginOpen] = useState(false);
  const onSuccess = (res) => {
    console.log("Login Success! Current user: ", res.profileObj);
    setIsGoogleLoginOpen(false);
    window.location.href = "/home";
  };

  const onFailure = (res) => {
    console.log("Login Failed! res: ", res);
  };

  return (
    <div align="center">
      <button onClick={() => setIsGoogleLoginOpen(true)}>
        Login with Google
      </button>
      {isGoogleLoginOpen && (
        <div className="google-login-popup">
          <GoogleLogin
            clientId={clientId}
            buttonText="Login with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
          />
        </div>
      )}
      <br />
    </div>
  );
};

export default LoginButton;
