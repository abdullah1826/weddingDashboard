import React from "react";
import { CgColorPicker } from "react-icons/cg";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const SelectFonts = ({ cardData, setCardData }) => {
  return (
    <div className="w-[100%] mt-12">
      <p className="text-[#4C6156] text-[24px] font-[600] ">Select Fonts</p>
      <div className="w-[100%] h-[100px] border rounded-md mt-2 flex justify-around items-center flex-wrap">
        <div
          className="w-[22%] h-[70px] rounded-full border flex justify-center items-center font-[500] text-2xl cursor-pointer relative"
          style={{ fontFamily: "Poppins" }}
          onClick={() => setCardData({ ...cardData, font: "Poppins" })}
        >
          {cardData.font === "Poppins" && (
            <RiVerifiedBadgeFill className="absolute top-0 right-0 text-[#4C6156]" />
          )}
          Poppins
        </div>
        <div
          className="w-[22%] h-[70px] rounded-full border flex justify-center items-center font-[500] text-2xl cursor-pointer relative"
          style={{ fontFamily: "Montaga" }}
          onClick={() => setCardData({ ...cardData, font: "Montaga" })}
        >
          {cardData.font === "Montaga" && (
            <RiVerifiedBadgeFill className="absolute top-0 right-0 text-[#4C6156]" />
          )}
          Montaga
        </div>
        <div
          className="w-[22%] h-[70px] rounded-full border flex justify-center items-center font-[500] text-2xl cursor-pointer relative"
          style={{ fontFamily: "Parisienne" }}
          onClick={() => setCardData({ ...cardData, font: "Parisienne" })}
        >
          {cardData.font === "Parisienne" && (
            <RiVerifiedBadgeFill className="absolute top-0 right-0 text-[#4C6156]" />
          )}
          Parisienne
        </div>
        <div
          className="w-[22%] h-[70px] rounded-full border flex justify-center items-center font-[500] text-2xl cursor-pointer relative"
          style={{ fontFamily: "SUSE" }}
          onClick={() => setCardData({ ...cardData, font: "SUSE" })}
        >
          {cardData.font === "SUSE" && (
            <RiVerifiedBadgeFill className="absolute top-0 right-0 text-[#4C6156]" />
          )}
          SUSE
        </div>

        {/* <div className="w-[22%] h-[70px] rounded-full border"></div>
        <div className="w-[22%] h-[70px] rounded-full border"></div>
        <div className="w-[22%] h-[70px] rounded-full border"></div>
        <div className="w-[22%] h-[70px] rounded-full border"></div> */}
      </div>
    </div>
  );
};

export default SelectFonts;
