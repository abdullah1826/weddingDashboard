import React from "react";
import { CgColorPicker } from "react-icons/cg";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const SelectColor = ({ cardData, setCardData }) => {
  return (
    <div className="w-[100%] mt-12">
      <p className="text-[#4C6156] sm:text-[24px] font-[600] ">Background Color</p>
      <div className="w-[100%] h-[80px] border rounded-md mt-2 flex justify-around items-center">
        <label htmlFor="colorpick">
          <div className="sm:w-[50px] sm:h-[50px] h-[25px] w-[25px] border rounded-full bg-[#4C6156] flex justify-center items-center">
            <CgColorPicker className="text-white sm:text-2xl" />
          </div>
        </label>
        <input
          type="color"
          style={{ display: "none" }}
          id="colorpick"
          onChange={(e) =>
            setCardData({ ...cardData, bgColor: e.target.value })
          }
          value={cardData?.bgColor}
        />
        <div
          className="sm:w-[50px] sm:h-[50px] h-[25px] w-[25px] border rounded-full relative bg-[#D9D9D9]"
          onClick={() => setCardData({ ...cardData, bgColor: "#D9D9D9" })}
        >
          {cardData.bgColor === "#D9D9D9" && (
            <RiVerifiedBadgeFill className="text-[#4C6156] top-[-3px] right-[-5px] absolute text-xl" />
          )}
        </div>
        <div
          className="sm:w-[50px] sm:h-[50px] h-[25px] w-[25px] border rounded-full relative bg-[#6C3D3D]"
          onClick={() => setCardData({ ...cardData, bgColor: "#6C3D3D" })}
        >
          {cardData.bgColor === "#6C3D3D" && (
            <RiVerifiedBadgeFill className="text-[#4C6156] top-[-3px] right-[-5px] absolute text-xl" />
          )}
        </div>
        <div
          className="sm:w-[50px] sm:h-[50px] h-[25px] w-[25px] border rounded-full relative bg-[#835252]"
          onClick={() => setCardData({ ...cardData, bgColor: "#835252" })}
        >
          {cardData.bgColor === "#835252" && (
            <RiVerifiedBadgeFill className="text-[#4C6156] top-[-3px] right-[-5px] absolute text-xl" />
          )}
        </div>
        <div
          className="sm:w-[50px] sm:h-[50px] h-[25px] w-[25px] border rounded-full relative bg-[#DF0E0E]"
          onClick={() => setCardData({ ...cardData, bgColor: "#DF0E0E" })}
        >
          {cardData.bgColor === "#DF0E0E" && (
            <RiVerifiedBadgeFill className="text-[#4C6156] top-[-3px] right-[-5px] absolute text-xl" />
          )}
        </div>

        <div
          className="sm:w-[50px] sm:h-[50px] h-[25px] w-[25px] border rounded-full relative bg-[#11637D]"
          onClick={() => setCardData({ ...cardData, bgColor: "#11637D" })}
        >
          {cardData.bgColor === "#11637D" && (
            <RiVerifiedBadgeFill className="text-[#4C6156] top-[-3px] right-[-5px] absolute text-xl" />
          )}
        </div>
        <div
          className="sm:w-[50px] sm:h-[50px] h-[25px] w-[25px] border rounded-full relative bg-[#FFFFFF]"
          onClick={() => setCardData({ ...cardData, bgColor: "#FFFFFF" })}
        >
          {cardData.bgColor === "#FFFFFF" && (
            <RiVerifiedBadgeFill className="text-[#4C6156] top-[-3px] right-[-5px] absolute text-xl" />
          )}
        </div>
        <div
          className="sm:w-[50px] sm:h-[50px] h-[25px] w-[25px] border rounded-full relative bg-[#5E12BE]"
          onClick={() => setCardData({ ...cardData, bgColor: "#5E12BE" })}
        >
          {cardData.bgColor === "#5E12BE" && (
            <RiVerifiedBadgeFill className="text-[#4C6156] top-[-3px] right-[-5px] absolute text-xl" />
          )}
        </div>
        <div
          className="sm:w-[50px] sm:h-[50px] h-[25px] w-[25px] border rounded-full relative bg-[#602AFB]"
          onClick={() => setCardData({ ...cardData, bgColor: "#602AFB" })}
        >
          {cardData.bgColor === "#602AFB" && (
            <RiVerifiedBadgeFill className="text-[#4C6156] top-[-3px] right-[-5px] absolute text-xl" />
          )}
        </div>
        <div
          className="sm:w-[50px] sm:h-[50px] h-[25px] w-[25px] border rounded-full relative bg-[#9CC546]"
          onClick={() => setCardData({ ...cardData, bgColor: "#9CC546" })}
        >
          {cardData.bgColor === "#9CC546" && (
            <RiVerifiedBadgeFill className="text-[#4C6156] top-[-3px] right-[-5px] absolute text-xl" />
          )}
        </div>
      </div>
      <p className="text-[#4C6156] sm:text-[24px] font-[600] mt-6 sm:mt-0 ">Text Color</p>
      <div className="w-[100%] h-[80px] border rounded-md mt-2 flex justify-around items-center">
        <label htmlFor="tcolorpick">
          <div className="sm:w-[50px] sm:h-[50px] h-[25px] w-[25px] border rounded-full bg-[#4C6156] flex justify-center items-center">
            <CgColorPicker className="text-white sm:text-2xl" />
          </div>
        </label>
        <input
          type="color"
          style={{ display: "none" }}
          id="tcolorpick"
          onChange={(e) =>
            setCardData({ ...cardData, textColor: e.target.value })
          }
          value={cardData?.textColor}
        />
        <div
          className="sm:w-[50px] sm:h-[50px] h-[25px] w-[25px] border rounded-full relative bg-[#D9D9D9]"
          onClick={() => setCardData({ ...cardData, textColor: "#D9D9D9" })}
        >
          {cardData.textColor === "#D9D9D9" && (
            <RiVerifiedBadgeFill className="text-[#4C6156] top-[-3px] right-[-5px] absolute text-xl" />
          )}
        </div>
        <div
          className="sm:w-[50px] sm:h-[50px] h-[25px] w-[25px] border rounded-full relative bg-[#6C3D3D]"
          onClick={() => setCardData({ ...cardData, textColor: "#6C3D3D" })}
        >
          {cardData.textColor === "#6C3D3D" && (
            <RiVerifiedBadgeFill className="text-[#4C6156] top-[-3px] right-[-5px] absolute text-xl" />
          )}
        </div>
        <div
          className="sm:w-[50px] sm:h-[50px] h-[25px] w-[25px] border rounded-full relative bg-[#835252]"
          onClick={() => setCardData({ ...cardData, textColor: "#835252" })}
        >
          {cardData.textColor === "#835252" && (
            <RiVerifiedBadgeFill className="text-[#4C6156] top-[-3px] right-[-5px] absolute text-xl" />
          )}
        </div>
        <div
          className="sm:w-[50px] sm:h-[50px] h-[25px] w-[25px] border rounded-full relative bg-[#DF0E0E]"
          onClick={() => setCardData({ ...cardData, textColor: "#DF0E0E" })}
        >
          {cardData.textColor === "#DF0E0E" && (
            <RiVerifiedBadgeFill className="text-[#4C6156] top-[-3px] right-[-5px] absolute text-xl" />
          )}
        </div>

        <div
          className="sm:w-[50px] sm:h-[50px] h-[25px] w-[25px] border rounded-full relative bg-[#11637D]"
          onClick={() => setCardData({ ...cardData, textColor: "#11637D" })}
        >
          {cardData.textColor === "#11637D" && (
            <RiVerifiedBadgeFill className="text-[#4C6156] top-[-3px] right-[-5px] absolute text-xl" />
          )}
        </div>
        <div
          className="sm:w-[50px] sm:h-[50px] h-[25px] w-[25px] border rounded-full relative bg-[#FFFFFF]"
          onClick={() => setCardData({ ...cardData, textColor: "#FFFFFF" })}
        >
          {cardData.textColor === "#FFFFFF" && (
            <RiVerifiedBadgeFill className="text-[#4C6156] top-[-3px] right-[-5px] absolute text-xl" />
          )}
        </div>
        <div
          className="sm:w-[50px] sm:h-[50px] h-[25px] w-[25px] border rounded-full relative bg-[#5E12BE]"
          onClick={() => setCardData({ ...cardData, textColor: "#5E12BE" })}
        >
          {cardData.textColor === "#5E12BE" && (
            <RiVerifiedBadgeFill className="text-[#4C6156] top-[-3px] right-[-5px] absolute text-xl" />
          )}
        </div>
        <div
          className="sm:w-[50px] sm:h-[50px] h-[25px] w-[25px] border rounded-full relative bg-[#602AFB]"
          onClick={() => setCardData({ ...cardData, textColor: "#602AFB" })}
        >
          {cardData.textColor === "#602AFB" && (
            <RiVerifiedBadgeFill className="text-[#4C6156] top-[-3px] right-[-5px] absolute text-xl" />
          )}
        </div>
        <div
          className="sm:w-[50px] sm:h-[50px] h-[25px] w-[25px] border rounded-full relative bg-[#9CC546]"
          onClick={() => setCardData({ ...cardData, textColor: "#9CC546" })}
        >
          {cardData.textColor === "#9CC546" && (
            <RiVerifiedBadgeFill className="text-[#4C6156] top-[-3px] right-[-5px] absolute text-xl" />
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectColor;
