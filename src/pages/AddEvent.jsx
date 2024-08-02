import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { IoAdd } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import Venue from "../components/Venue";
import Itinerary from "../components/Itinerary";
import Accomodation from "../components/Accomodation";
import Transport from "../components/Transport";
import TihingToDo from "../components/TihingToDo";
import Faq from "../components/Faq";
import Contact from "../components/Contact";

const AddEvent = () => {
  return (
    <div className="w-[100%] h-[100vh] flex">
      <Sidebar />
      <div className="w-[78%] h-[100%] border flex flex-col items-center overflow-y-scroll">
        <div className="w-[100%] h-[80px] border-b shadow-lg"></div>
        <div className="w-[90%] h-[20px] mt-8">
          <h2 className="font-[700] text-[38px] text-[#4C6156]">Events</h2>
          <div className="w-[100%]">
            <p className="text-[#4C6156] text-[24px] font-[600] mt-5">Header</p>
            <div className="w-[100%] flex justify-between mt-3">
              <div className="w-[24%]">
                <p className="font-[600] text-[#4B5563] text-[15px]">
                  Bride Name
                </p>
                <input
                  type="text"
                  name=""
                  id=""
                  className="outline-none w-[100%] h-[40px] rounded-[6px] border border-[#D1D5DB] p-2"
                />
              </div>

              <div className="w-[24%]">
                <p className="font-[600] text-[#4B5563] text-[15px]">
                  Groom Name
                </p>
                <input
                  type="text"
                  name=""
                  id=""
                  className="outline-none w-[100%] h-[40px] rounded-[6px] border border-[#D1D5DB] p-2"
                />
              </div>

              <div className="w-[48%]">
                <p className="font-[600] text-[#4B5563] text-[15px]">
                  Welcomming Text
                </p>
                <input
                  type="text"
                  name=""
                  id=""
                  className="outline-none w-[100%] h-[40px] rounded-[6px] border border-[#D1D5DB] p-2"
                />
              </div>
            </div>

            <div className="w-[100%] flex justify-between mt-7">
              {/* <div className="w-[24%]">
                <p className="font-[600] text-[#4B5563] text-[15px]">
                  Select Date
                </p>
                <input
                  type="text"
                  name=""
                  id=""
                  className="outline-none w-[100%] h-[40px] rounded-[6px] border border-[#D1D5DB] p-2"
                />
              </div>

              <div className="w-[24%]">
                <p className="font-[600] text-[#4B5563] text-[15px]">
                  Select Time
                </p>
                <input
                  type="text"
                  name=""
                  id=""
                  className="outline-none w-[100%] h-[40px] rounded-[6px] border border-[#D1D5DB] p-2"
                />
              </div> */}

              <div className="w-[50%]">
                <p className="font-[600] text-[#4B5563] text-[15px]">
                  Location
                </p>
                <input
                  type="text"
                  name=""
                  id=""
                  className="outline-none w-[100%] h-[40px] rounded-[6px] border border-[#D1D5DB] p-2"
                />
              </div>
            </div>

            <div className="w-[100%] flex flex-col items-center">
              <p className="text-[#4C6156] text-[24px] font-[600] mt-5 w-[100%]">
                Header Image
              </p>

              <div className="w-[506px] h-[300px] border border-dashed bg-[#E6F8EE] border-[#4C6156] flex justify-center items-center">
                <div className="flex flex-col items-center cursor-pointer">
                  <div className="h-[50px] w-[50px] bg-white rounded-full flex justify-center items-center">
                    <IoMdAdd className="text-2xl" />
                  </div>
                  <p className="text-center text-sm font-[500] mt-1">
                    Add photo
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="w-[100%] flex justify-between mt-7">
              <div className="w-[24%]">
                <p className="font-[600] text-[#4B5563] text-[15px]">
                  How Many Guest Will Attend
                </p>
                <input
                  type="text"
                  name=""
                  id=""
                  className="outline-none w-[100%] h-[40px] rounded-[6px] border border-[#D1D5DB] p-2"
                />
              </div>

              <div className="w-[24%]">
                <p className="font-[600] text-[#4B5563] text-[15px]">
                  Menu Item 1
                </p>
                <input
                  type="text"
                  name=""
                  id=""
                  className="outline-none w-[100%] h-[40px] rounded-[6px] border border-[#D1D5DB] p-2"
                />
              </div>

              <div className="w-[24%]">
                <p className="font-[600] text-[#4B5563] text-[15px]">
                  Menu Item 2
                </p>
                <input
                  type="text"
                  name=""
                  id=""
                  className="outline-none w-[100%] h-[40px] rounded-[6px] border border-[#D1D5DB] p-2"
                />
              </div>

              <div className="w-[24%]">
                <p className="font-[600] text-[#4B5563] text-[15px]">
                  Menu Item 3
                </p>
                <input
                  type="text"
                  name=""
                  id=""
                  className="outline-none w-[100%] h-[40px] rounded-[6px] border border-[#D1D5DB] p-2"
                />
              </div>
            </div> */}
          </div>
          <Venue />
          <Itinerary />
          <Accomodation />
          <Transport />
          <TihingToDo />
          <Faq />
          <Contact />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
