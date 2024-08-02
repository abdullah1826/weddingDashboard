import React from "react";

const Venue = () => {
  return (
    <div className="w-[100%] mt-12">
      <h2 className="font-[700] text-[38px] text-[#4C6156]">Venue</h2>
      <div className="w-[100%] flex justify-between mt-3">
        <div className="w-[49%]">
          <p className="font-[600] text-[#4B5563] text-[15px]">Text</p>
          <input
            type="text"
            name=""
            id=""
            className="outline-none w-[100%] h-[40px] rounded-[6px] border border-[#D1D5DB] p-2"
          />
        </div>

        <div className="w-[49%]">
          <p className="font-[600] text-[#4B5563] text-[15px]">Location</p>
          <input
            type="text"
            name=""
            id=""
            className="outline-none w-[100%] h-[40px] rounded-[6px] border border-[#D1D5DB] p-2"
          />
        </div>
      </div>
      <div className="w-[100%] flex justify-between mt-6">
        <div className="w-[49%]">
          <p className="font-[600] text-[#4B5563] text-[15px]">Date</p>
          <input
            type="date"
            name=""
            id=""
            className="outline-none w-[100%] h-[40px] rounded-[6px] border border-[#D1D5DB] p-2"
          />
        </div>

        <div className="w-[49%]">
          <p className="font-[600] text-[#4B5563] text-[15px]">Time</p>
          <input
            type="time"
            name=""
            id=""
            className="outline-none w-[100%] h-[40px] rounded-[6px] border border-[#D1D5DB] p-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Venue;
