import React from "react";
import fb from "../images/fb.png";
import google from "../images/google.png";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

const AuthInput = ({ isSignin, auth, setAuth, handleFunction, loading }) => {
  const naviget = useNavigate();

  return (
    <div className="h-[100%] w-[40%] flex justify-center items-center">
      <div className="w-[82%] h-[90%]  rounded-[65px] shadow-xl border flex justify-center items-center">
        <div className="w-[90%] h-[84%]  flex flex-col items-center">
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
          <input
            type="text"
            className="outline-none w-[90%] border h-[55px] rounded-[8px] border-[#B4B4B4] pl-2 mt-3"
            placeholder="Enter password"
            value={auth.password}
            onChange={(e) => setAuth({ ...auth, password: e.target.value })}
          />
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
            <p className="font-[400] text-[16px] mt-3">
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
