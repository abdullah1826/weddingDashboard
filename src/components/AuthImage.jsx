import React from "react";

const AuthImage = ({ img }) => {
  return (
    <div className="h-[100%] w-[60%]">
      <img src={img} alt="bg" className="w-[100%] h-[100%]" />
    </div>
  );
};

export default AuthImage;
