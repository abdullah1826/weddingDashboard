import { Box, Modal } from "@mui/material";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Allert = ({ allertModal, handleallertModal, text, func }) => {
  const style2 = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    height: 130,
    bgcolor: "white",
    // border: '2px solid #000',
    boxShadow: 24,
    border: "none",
    outline: "none",
    borderRadius: "18px",
    // p: "32px",
  };
  return (
    <Modal
      open={allertModal}
      onClose={() => handleallertModal()}
      aria-labelledby="allertModal-allertModal-title"
      aria-describedby="allertModal-allertModal-description"
    >
      <Box sx={style2}>
        <div className="h-[100%] w-[100%] flex flex-col items-center">
          <p className="text-center font-[500] mt-[30px] w-[90%] ">{text}</p>
          <div className="w-[100%] flex justify-center items-center mt-2">
            <div
              className="h-[30px] w-[70px] rounded-full border flex justify-center items-center text-sm mr-[5px] cursor-pointer"
              onClick={() => handleallertModal()}
            >
              Cancel
            </div>
            <div
              className="h-[30px] w-[70px] rounded-full border flex justify-center items-center text-sm ml-[5px] bg-[#4C6156] text-white cursor-pointer"
              onClick={() => {
                func(), handleallertModal();
              }}
            >
              Sure
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default Allert;
