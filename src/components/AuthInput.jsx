import React, { useState } from "react";
import fb from "../images/fb.png";
import google from "../images/google.png";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";

const AuthInput = ({ isSignin, auth, setAuth, handleFunction, loading }) => {
  const naviget = useNavigate();

  const [show, setshow] = useState(false);




  return (
    <div className="h-[100%] sm:w-[40%] w-[100%] flex justify-center items-center">
      <div className="sm:w-[82%] h-[100%] w-[100%] sm:h-[90%]  sm:rounded-[65px] shadow-xl border flex justify-center items-center">
        <div className="sm:w-[90%] w-[100%] sm:h-[84%] sm:justify-start justify-center  flex flex-col items-center">
          <h2 className="text-[26px] font-[400]">The Welcome Pass</h2>
          <p className="font-[600] text-[20px] text-[#333333] mt-4">
            {isSignin ? "Sign in" : "Sign up"}
          </p>
          <input
            type="text"
            className="outline-none w-[90%] border h-[55px] rounded-[8px] border-[#B4B4B4] pl-2 mt-3"
            placeholder="Enter your email address"
            value={auth.email}
            onChange={(e) => setAuth({ ...auth, email: e.target.value })}
          />
          <div className="w-[90%] mt-3 h-[55px] relative flex items-center">
            <input
              type={show ? "text" : "password"}
              className="outline-none w-[100%] border h-[100%]  rounded-[8px] border-[#B4B4B4] pl-2 "
              placeholder="Enter password"
              value={auth.password}
              onChange={(e) => setAuth({ ...auth, password: e.target.value })}
            />
            {!show ? (
              <FiEye
                className="absolute text-[#4C6156] text-xl right-3"
                onClick={() => setshow(true)}
              />
            ) : (
              <FiEyeOff
                className="absolute text-[#4C6156] text-xl right-3"
                onClick={() => setshow(false)}
              />
            )}
          </div>

          {/* {isSignin && (
            <div className="w-[90%] flex justify-end mt-1">
              <p className="font-[400] text-[14px] text-[#333333] cursor-pointer">
                Forgot Password?
              </p>
            </div>
          )} */}
          <button
            className="outline-none w-[90%] border h-[55px] rounded-[8px] bg-[#4C6156]  mt-2 text-white"
            onClick={() => handleFunction()}
          >
            {loading ? (
              <CircularProgress color="inherit" size="30px" />
            ) : isSignin ? (
              "Sign in"
            ) : (
              "Sign up"
            )}
          </button>
          <div className="outline-none w-[90%] border h-[55px] rounded-[8px] border-[#B4B4B4]  mt-3 text-white flex justify-center items-center gap-2 cursor-pointer">
            <img src={fb} alt="facebook" className="h-[27px] w-[27px]" />
            <p className="text-[#8F8F8F] font-[400] ">Continue with Facebook</p>
          </div>
          <div className="outline-none w-[90%] border h-[55px] rounded-[8px] border-[#B4B4B4]  mt-3 text-white flex justify-center items-center gap-2 cursor-pointer">
            <img src={google} alt="facebook" className="h-[27px] w-[27px]" />
            <p className="text-[#8F8F8F] font-[400] ">Continue with Google</p>
          </div>
          {isSignin ? (
            <p className="font-[400] text-[16px] text-center mt-3">
              Don't have an account yet?{" "}
              <span
                className="text-[#4C6156] text-[16px] font-[600] underline cursor-pointer"
                onClick={() => naviget("/signup")}
              >
                Request Access.
              </span>
            </p>
          ) : (
            <p className="font-[400] text-[16px] mt-3">
              Already have an account yet?{" "}
              <span
                className="text-[#4C6156] text-[16px] font-[600] underline cursor-pointer"
                onClick={() => naviget("/signin")}
              >
                Login
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthInput;
