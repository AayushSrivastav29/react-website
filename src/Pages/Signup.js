import React from "react";
import Template from "../Components/Template";
import signupImg from "../Assests/signupImg.avif";

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Join the millions learning to code with Udemy for free!"
      desc1="Build skills for today, tomorrow, & beyond."
      desc2="Education to future-proof your career."
      image={signupImg}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
};

export default Signup;
