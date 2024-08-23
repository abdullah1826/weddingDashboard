import React, { useState } from "react";
import AuthImage from "../components/AuthImage";
import AuthInput from "../components/AuthInput";
import signinImg from "../images/signin.png";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  let baseUrl = import.meta.env.VITE_BASE_URL;
  const [loading, setLoading] = useState(false);
  const [auth, setAuth] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSignIn = async () => {
    setLoading(true);
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
        } else {
          toast.error(res?.data?.msg);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.msg);
      });
    console.log("api end working......");
  };

  return (
    <div className="w-[100%] h-[100vh] flex">
      <Toaster />
      <AuthImage img={signinImg} />
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
