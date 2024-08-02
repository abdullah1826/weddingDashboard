import React, { useState } from "react";
import { IoAdd } from "react-icons/io5";
import { MdCancel } from "react-icons/md";

const Contact = () => {
  const [Contact, setContact] = useState([
    { title: "", description: "", number: "" },
  ]);

  const pushNewSection = (state, setState) => {
    setState([...state, { title: "", description: "", number: "" }]);
  };

  const removeSection = (index, state, setState) => {
    if (index > -1 && index < state.length) {
      const updatedArray = [
        ...state.slice(0, index),
        ...state.slice(index + 1),
      ];
      console.log(updatedArray);
      setState(updatedArray);
    }
  };
  return (
    <div className="w-[100%] mt-12">
      <h2 className="font-[700] text-[38px] text-[#4C6156]">
        {" "}
        Contact Details
      </h2>

      {Contact?.map((elm, i) => {
        return (
          <div className="w-[100%]  mt-5 p-5 border rounded-md relative">
            {i != 0 && (
              <MdCancel
                className="absolute right-[-8px] top-[-8px] text-2xl text-[#4C6156] cursor-pointer"
                onClick={() => removeSection(i, Contact, setContact)}
              />
            )}
            <div className="w-[100%] flex justify-between">
              <div className="w-[49%]">
                <p className="font-[600] text-[#4B5563] text-[15px]">Title</p>
                <input
                  type="text"
                  name=""
                  id=""
                  className="outline-none w-[100%] h-[40px] rounded-[6px] border border-[#D1D5DB] p-2"
                />
              </div>

              <div className="w-[49%]">
                <p className="font-[600] text-[#4B5563] text-[15px]">
                  Contact Number
                </p>
                <input
                  type="text"
                  name=""
                  id=""
                  className="outline-none w-[100%] h-[40px] rounded-[6px] border border-[#D1D5DB] p-2"
                />
              </div>
            </div>
            <div className="w-[100%] mt-3">
              <p className="font-[600] text-[#4B5563] text-[15px]">
                Description
              </p>
              <textarea
                name=""
                id=""
                className="outline-none w-[100%] h-[60px] rounded-[6px] border border-[#D1D5DB] p-2 "
              ></textarea>
            </div>
            {/* <div className="w-[30%]">
            <p className="font-[600] text-[#4B5563] text-[15px]">
              Event Time
            </p>
            <input
              type="text"
              name=""
              id=""
              className="outline-none w-[100%] h-[40px] rounded-[6px] border border-[#D1D5DB] p-2"
            />
          </div> */}
          </div>
        );
      })}

      <div
        className="w-[100%] bg-[#E6F8EE] h-[55px] rounded-[8px] mt-3 flex justify-center items-center gap-2 cursor-pointer"
        onClick={() => {
          pushNewSection(Contact, setContact);
        }}
      >
        <IoAdd className="text-[#4C6156] text-3xl" />
        <p className="text-[#4C6156] font-[600]">Add New Section</p>
      </div>
    </div>
  );
};

export default Contact;
