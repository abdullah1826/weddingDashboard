import React from "react";
import AuthImage from "../components/AuthImage";
import AuthInput from "../components/AuthInput";
import signinImg from "../images/signin.png";

const Signin = () => {
  return (
    <div className="w-[100%] h-[100vh] flex">
      <AuthImage img={signinImg} />
      <AuthInput isSignin={true} />
    </div>
  );
};

export default Signin;
