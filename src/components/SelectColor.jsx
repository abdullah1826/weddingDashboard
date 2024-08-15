import React from "react";
import { CgColorPicker } from "react-icons/cg";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const SelectColor = ({ cardData, setCardData }) => {
  return (
    <div className="w-[100%] mt-12">
      <h2 className="font-[700] text-[30px] text-[#4C6156]">
        Select Bacground Color
      </h2>
      <div className="w-[100%] h-[80px] border rounded-md mt-2 flex justify-around items-center">
        <div className="w-[50px] h-[50px] border rounded-full bg-[#4C6156] flex justify-center items-center">
          <CgColorPicker className="text-white text-2xl" />
        </div>
        <div
          className="w-[50px] h-[50px] border rounded-full relative bg-[#D9D9D9]"
          onClick={() => setCardData({ ...cardData, bgColor: "#D9D9D9" })}
        >
          {cardData.bgColor === "#D9D9D9" && (
            <RiVerifiedBadgeFill className="text-[#4C6156] top-[-3px] right-[-5px] absolute text-xl" />
          )}
        </div>
        <div
          className="w-[50px] h-[50px] border rounded-full relative bg-[#6C3D3D]"
          onClick={() => setCardData({ ...cardData, bgColor: "#6C3D3D" })}
        >
          {cardData.bgColor === "#6C3D3D" && (
            <RiVerifiedBadgeFill className="text-[#4C6156] top-[-3px] right-[-5px] absolute text-xl" />
          )}
        </div>
        <div
          className="w-[50px] h-[50px] border rounded-full relative bg-[#835252]"
          onClick={() => setCardData({ ...cardData, bgColor: "#835252" })}
        >
          {cardData.bgColor === "#835252" && (
            <RiVerifiedBadgeFill className="text-[#4C6156] top-[-3px] right-[-5px] absolute text-xl" />
          )}
        </div>
        <div
          className="w-[50px] h-[50px] border rounded-full relative bg-[#DF0E0E]"
          onClick={() => setCardData({ ...cardData, bgColor: "#DF0E0E" })}
        >
          {cardData.bgColor === "#DF0E0E" && (
            <RiVerifiedBadgeFill className="text-[#4C6156] top-[-3px] right-[-5px] absolute text-xl" />
          )}
        </div>

        <div
          className="w-[50px] h-[50px] border rounded-full relative bg-[#11637D]"
          onClick={() => setCardData({ ...cardData, bgColor: "#11637D" })}
        >
          {cardData.bgColor === "#11637D" && (
            <RiVerifiedBadgeFill className="text-[#4C6156] top-[-3px] right-[-5px] absolute text-xl" />
          )}
        </div>
        <div
          className="w-[50px] h-[50px] border rounded-full relative bg-[#FFFFFF]"
          onClick={() => setCardData({ ...cardData, bgColor: "#FFFFFF" })}
        >
          {cardData.bgColor === "#FFFFFF" && (
            <RiVerifiedBadgeFill className="text-[#4C6156] top-[-3px] right-[-5px] absolute text-xl" />
          )}
        </div>
        <div
          className="w-[50px] h-[50px] border rounded-full relative bg-[#5E12BE]"
          onClick={() => setCardData({ ...cardData, bgColor: "#5E12BE" })}
        >
          {cardData.bgColor === "#5E12BE" && (
            <RiVerifiedBadgeFill className="text-[#4C6156] top-[-3px] right-[-5px] absolute text-xl" />
          )}
        </div>
        <div
          className="w-[50px] h-[50px] border rounded-full relative bg-[#602AFB]"
          onClick={() => setCardData({ ...cardData, bgColor: "#602AFB" })}
        >
          {cardData.bgColor === "#602AFB" && (
            <RiVerifiedBadgeFill className="text-[#4C6156] top-[-3px] right-[-5px] absolute text-xl" />
          )}
        </div>
        <div
          className="w-[50px] h-[50px] border rounded-full relative bg-[#9CC546]"
          onClick={() => setCardData({ ...cardData, bgColor: "#9CC546" })}
        >
          {cardData.bgColor === "#9CC546" && (
            <RiVerifiedBadgeFill className="text-[#4C6156] top-[-3px] right-[-5px] absolute text-xl" />
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectColor;
