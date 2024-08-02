import React from "react";

const Transport = () => {
  return (
    <div className="w-[100%] mt-12">
      <h2 className="font-[700] text-[38px] text-[#4C6156]">Transport</h2>
      <div className="w-[100%]">
        <p className="text-[#4C6156] text-[24px] font-[600] mt-5">
          Transport 1
        </p>
        <div className="w-[100%] flex justify-between mt-3">
          <div className="w-[100%]">
            <p className="font-[600] text-[#4B5563] text-[15px]">
              Transport Name
            </p>
            <input
              type="text"
              name=""
              id=""
              className="outline-none w-[100%] h-[40px] rounded-[6px] border border-[#D1D5DB] p-2"
            />
          </div>
        </div>

        <div className="w-[100%] flex mt-4">
          <div className="w-[100%]">
            <p className="font-[600] text-[#4B5563] text-[15px]">Description</p>
            <textarea
              name=""
              id=""
              className="outline-none w-[100%] h-[80px] rounded-[6px] border border-[#D1D5DB] p-2"
            ></textarea>
          </div>
        </div>
      </div>

      <div className="w-[100%]">
        <p className="text-[#4C6156] text-[24px] font-[600] mt-5">
          Transport 2
        </p>
        <div className="w-[100%] flex justify-between mt-3">
          <div className="w-[100%]">
            <p className="font-[600] text-[#4B5563] text-[15px]">
              Transport Name
            </p>
            <input
              type="text"
              name=""
              id=""
              className="outline-none w-[100%] h-[40px] rounded-[6px] border border-[#D1D5DB] p-2"
            />
          </div>
        </div>

        <div className="w-[100%] flex mt-4">
          <div className="w-[100%]">
            <p className="font-[600] text-[#4B5563] text-[15px]">Description</p>
            <textarea
              name=""
              id=""
              className="outline-none w-[100%] h-[80px] rounded-[6px] border border-[#D1D5DB] p-2"
            ></textarea>
          </div>
        </div>
      </div>

      <div className="w-[100%]">
        <p className="text-[#4C6156] text-[24px] font-[600] mt-5">
          Transport 3
        </p>
        <div className="w-[100%] flex justify-between mt-3">
          <div className="w-[100%]">
            <p className="font-[600] text-[#4B5563] text-[15px]">
              Transport Name
            </p>
            <input
              type="text"
              name=""
              id=""
              className="outline-none w-[100%] h-[40px] rounded-[6px] border border-[#D1D5DB] p-2"
            />
          </div>
        </div>

        <div className="w-[100%] flex mt-4">
          <div className="w-[100%]">
            <p className="font-[600] text-[#4B5563] text-[15px]">Description</p>
            <textarea
              name=""
              id=""
              className="outline-none w-[100%] h-[80px] rounded-[6px] border border-[#D1D5DB] p-2"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transport;
