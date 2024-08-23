import React, { useState } from "react";
import { HiMiniUsers } from "react-icons/hi2";
import { MdWindow } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { RiLogoutBoxFill } from "react-icons/ri";
import Allert from "./Modals/Allert";

const Sidebar = () => {
  const navigate = useNavigate();
  const [allertModal, setallertModal] = useState(false);
  const handleallertModal = () => {
    setallertModal(!allertModal);
  };
  const handleLogout = () => {
    localStorage.removeItem("weddId");
    navigate("/signin");
  };
  return (
    <div className="w-[22%] h-[100%] bg-[#4C6156] flex flex-col items-center relative">
      <Allert
        allertModal={allertModal}
        handleallertModal={handleallertModal}
        text="Are you sure to logout?"
        func={handleLogout}
      />
      <div className="w-[90%] mt-10 font-[400] text-[26px] text-[#FFFFFF] text-center">
        The Wellcome Pass
      </div>

      <div className="w-[80%] mt-[70px]">
        <div
          className="w-[100%] flex items-center gap-2 h-[53px] border-b border-[#FFFFFF] text-[#FFFFFF] cursor-pointer"
          onClick={() => navigate("/")}
        >
          <HiMiniUsers className=" text-3xl" />
          <p className="text-[17px] font-[400]">All Users</p>
        </div>

        <div
          className="w-[100%] flex items-center gap-2 h-[53px] border-b border-[#FFFFFF] text-[#FFFFFF] mt-6 cursor-pointer"
          onClick={() => navigate("/event")}
        >
          <MdWindow className=" text-3xl" />
          <p className="text-[17px] font-[400]">Events</p>
        </div>

        <div
          className="w-[100%] flex items-center gap-2 h-[53px] border-b border-[#FFFFFF] text-[#FFFFFF] mt-6 cursor-pointer "
          onClick={() => handleallertModal()}
        >
          <RiLogoutBoxFill className=" text-3xl" />
          <p className="text-[17px] font-[400]">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
