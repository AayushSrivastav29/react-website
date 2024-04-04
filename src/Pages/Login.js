import React from "react";
import Template from "../Components/Template";
import loginImg from "../Assests/loginImg.jpg";

const Login = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Welcome Back"
      desc1="Build skills for today, tomorrow, & beyond."
      desc2="Education to future-proof your career"
      image={loginImg}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
};

export default Login;
