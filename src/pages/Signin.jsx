import React, { useState } from "react";
import AuthImage from "../components/AuthImage";
import AuthInput from "../components/AuthInput";
import signinImg from "../images/signin.png";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";

const Signin = () => {
  let baseUrl = import.meta.env.VITE_BASE_URL;
  const [loading, setLoading] = useState(false);
  const [auth, setAuth] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // -------------------------------------------------------Email validator--------------------------------------------------

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return emailRegex.test(email);
  };

  const handleSignIn = async () => {
    setLoading(true);
    if (!isValidEmail(auth?.email)) {
      toast.error("Please enter a valid email");
      setLoading(false);
      return;
    }
    axios
      .post(`${baseUrl}/auth/login`, {
        email: auth?.email,
        password: auth?.password,
      })
      .then(async (res) => {
        console.log("the response", res);
        if (res?.data?.status === true) {
          setLoading(false);
          localStorage.setItem("weddId", res?.data?.token);
          toast.success(res.data.msg);
          navigate("/");
          window.location.reload();
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        toast.error(err.response.data.message);
      });
    console.log("api end working......");
  };
  let screenWidth=window.innerWidth
  return (
    <div className="w-[100%] h-[100vh] flex">
      <Toaster />
      {screenWidth > 440 &&
      <AuthImage img={signinImg} />
      }
      <AuthInput
        isSignin={true}
        auth={auth}
        setAuth={setAuth}
        handleFunction={handleSignIn}
        loading={loading}
      />
    </div>
  );
};

export default Signin;
