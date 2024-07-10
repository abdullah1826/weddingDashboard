import React from "react";
import { HiMiniUsers } from "react-icons/hi2";
import { MdWindow } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="w-[22%] h-[100%] bg-[#4C6156] flex flex-col items-center">
      <div className="w-[80%] mt-10 font-[400] text-[26px] text-[#FFFFFF] text-center">
        LOGODUMMY
      </div>

      <div className="w-[80%] mt-[70px] ">
        <div className="w-[100%] flex items-center gap-2 h-[53px] border-b border-[#FFFFFF] text-[#FFFFFF] cursor-pointer">
          <HiMiniUsers className=" text-3xl" />
          <p className="text-[17px] font-[400]">All Users</p>
        </div>

        <div className="w-[100%] flex items-center gap-2 h-[53px] border-b border-[#FFFFFF] text-[#FFFFFF] mt-6 cursor-pointer">
          <MdWindow className=" text-3xl" />
          <p className="text-[17px] font-[400]">Events</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
