import React from "react";
import AuthImage from "../components/AuthImage";
import AuthInput from "../components/AuthInput";
import signupImg from "../images/signup.png";

const Signup = () => {
  return (
    <div className="w-[100%] h-[100vh] flex">
      <AuthImage img={signupImg} />
      <AuthInput isSignin={false} />
    </div>
  );
};

export default Signup;
