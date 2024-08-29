import React from "react";
import { Tooltip } from "@mui/material";
import { FaQuestionCircle } from "react-icons/fa";
const Instructions = ({ instruction }) => {
  return (
    <div>
      <Tooltip title="Toggle the switch to show or hide this section on the website.">
        <div>
          <FaQuestionCircle className="cursor-pointer text-[#4C6156]" />
        </div>
      </Tooltip>
    </div>
  );
};

export default Instructions;
