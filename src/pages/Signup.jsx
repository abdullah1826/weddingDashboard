import React, { useState } from "react";
import AuthImage from "../components/AuthImage";
import AuthInput from "../components/AuthInput";
import signupImg from "../images/signup.png";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Signup = () => {
  let baseUrl = import.meta.env.VITE_BASE_URL;
  console.log(baseUrl);
  const [loading, setLoading] = useState(false);
  const [auth, setAuth] = useState({
    email: "",
    password: "",
  });

  // -------------------------------------------------------Email validator--------------------------------------------------

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return emailRegex.test(email);
  };

  const handleSignup = () => {
    setLoading(true);
    if (!isValidEmail(auth?.email)) {
      toast.error("Please enter a valid email");
      setLoading(false);
      return;
    }
    axios
      .post(`${baseUrl}/auth/register`, {
        email: auth?.email,
        password: auth?.password,
      })
      .then((res) => {
        console.log("the response", res.data);
        if (res?.data?.status === true) {
          toast.success(res?.data?.msg);
          setLoading(false);
          navigate("/dashboard/signin");
          toast.success(res?.data?.msg);
          setAuth({ email: "", password: "" });
        } else {
          toast.error(res?.data?.msg);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
        setLoading(false);
      });
  };

  return (
    <div className="w-[100%] h-[100vh] flex">
      <Toaster />
      <AuthImage img={signupImg} />
      <AuthInput
        isSignin={false}
        auth={auth}
        setAuth={setAuth}
        handleFunction={handleSignup}
        loading={loading}
      />
    </div>
  );
};

export default Signup;
