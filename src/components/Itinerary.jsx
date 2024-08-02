import React, { useState } from "react";
import { IoAdd } from "react-icons/io5";
import { MdCancel } from "react-icons/md";

const Itinerary = () => {
  const [e1, setE1] = useState([]);
  const [e2, setE2] = useState([]);
  const [e3, setE3] = useState([]);
  const [e4, setE4] = useState([]);

  console.log(e1);

  const pushNewSection = (state, setState) => {
    setState([...state, { title: "", description: "", time: "" }]);
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
      <h2 className="font-[700] text-[38px] text-[#4C6156]">Itinerary</h2>
      <div className="w-[100%]">
        <p className="text-[#4C6156] text-[24px] font-[600] mt-5">Event 1</p>

        <div className="w-[100%] flex justify-between mt-3">
          <div className="w-[30%]">
            <p className="font-[600] text-[#4B5563] text-[15px]">Event Title</p>
            <input
              type="text"
              name=""
              id=""
              className="outline-none w-[100%] h-[40px] rounded-[6px] border border-[#D1D5DB] p-2"
            />
          </div>

          <div className="w-[30%]">
            <p className="font-[600] text-[#4B5563] text-[15px]">Event Date</p>
            <input
              type="text"
              name=""
              id=""
              className="outline-none w-[100%] h-[40px] rounded-[6px] border border-[#D1D5DB] p-2"
            />
          </div>

          <div className="w-[30%]">
            <p className="font-[600] text-[#4B5563] text-[15px]">Event Time</p>
            <input
              type="text"
              name=""
              id=""
              className="outline-none w-[100%] h-[40px] rounded-[6px] border border-[#D1D5DB] p-2"
            />
          </div>
        </div>

        {e1?.map((elm, i) => {
          return (
            <div className="w-[100%]  mt-5 p-5 border rounded-md relative">
              <MdCancel
                className="absolute right-[-8px] top-[-8px] text-2xl text-[#4C6156] cursor-pointer"
                onClick={() => removeSection(i, e1, setE1)}
              />
              <div className="w-[100%] flex justify-between">
                <div className="w-[49%]">
                  <p className="font-[600] text-[#4B5563] text-[15px]">
                    Section Title
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="outline-none w-[100%] h-[40px] rounded-[6px] border border-[#D1D5DB] p-2"
                  />
                </div>

                <div className="w-[49%]">
                  <p className="font-[600] text-[#4B5563] text-[15px]">
                    Section Date
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
                  Section Description
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
            pushNewSection(e1, setE1);
          }}
        >
          <IoAdd className="text-[#4C6156] text-3xl" />
          <p className="text-[#4C6156] font-[600]">Add New Section</p>
        </div>
      </div>

      <div className="w-[100%]">
        <p className="text-[#4C6156] text-[24px] font-[600] mt-5">Event 2</p>

        <div className="w-[100%] flex justify-between mt-3">
          <div className="w-[30%]">
            <p className="font-[600] text-[#4B5563] text-[15px]">Event Title</p>
            <input
              type="text"
              name=""
              id=""
              className="outline-none w-[100%] h-[40px] rounded-[6px] border border-[#D1D5DB] p-2"
            />
          </div>

          <div className="w-[30%]">
            <p className="font-[600] text-[#4B5563] text-[15px]">Event Date</p>
            <input
              type="text"
              name=""
              id=""
              className="outline-none w-[100%] h-[40px] rounded-[6px] border border-[#D1D5DB] p-2"
            />
          </div>

          <div className="w-[30%]">
            <p className="font-[600] text-[#4B5563] text-[15px]">Event Time</p>
            <input
              type="text"
              name=""
              id=""
              className="outline-none w-[100%] h-[40px] rounded-[6px] border border-[#D1D5DB] p-2"
            />
          </div>
        </div>

        {e2?.map((elm, i) => {
          return (
            <div className="w-[100%]  mt-5 p-5 border rounded-md relative">
              <MdCancel
                className="absolute right-[-8px] top-[-8px] text-2xl text-[#4C6156] cursor-pointer"
                onClick={() => removeSection(i, e2, setE2)}
              />
              <div className="w-[100%] flex justify-between">
                <div className="w-[49%]">
                  <p className="font-[600] text-[#4B5563] text-[15px]">
                    Section Title
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="outline-none w-[100%] h-[40px] rounded-[6px] border border-[#D1D5DB] p-2"
                  />
                </div>

                <div className="w-[49%]">
                  <p className="font-[600] text-[#4B5563] text-[15px]">
                    Section Date
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
                  Section Description
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
            pushNewSection(e3, setE3);
          }}
        >
          <IoAdd className="text-[#4C6156] text-3xl" />
          <p className="text-[#4C6156] font-[600]">Add New Section</p>
        </div>
      </div>

      <div className="w-[100%]">
        <p className="text-[#4C6156] text-[24px] font-[600] mt-5">Event 3</p>

        <div className="w-[100%] flex justify-between mt-3">
          <div className="w-[30%]">
            <p className="font-[600] text-[#4B5563] text-[15px]">Event Title</p>
            <input
              type="text"
              name=""
              id=""
              className="outline-none w-[100%] h-[40px] rounded-[6px] border border-[#D1D5DB] p-2"
            />
          </div>

          <div className="w-[30%]">
            <p className="font-[600] text-[#4B5563] text-[15px]">Event Date</p>
            <input
              type="text"
              name=""
              id=""
              className="outline-none w-[100%] h-[40px] rounded-[6px] border border-[#D1D5DB] p-2"
            />
          </div>

          <div className="w-[30%]">
            <p className="font-[600] text-[#4B5563] text-[15px]">Event Time</p>
            <input
              type="text"
              name=""
              id=""
              className="outline-none w-[100%] h-[40px] rounded-[6px] border border-[#D1D5DB] p-2"
            />
          </div>
        </div>

        {e3?.map((elm, i) => {
          return (
            <div className="w-[100%]  mt-5 p-5 border rounded-md relative">
              <MdCancel
                className="absolute right-[-8px] top-[-8px] text-2xl text-[#4C6156] cursor-pointer"
                onClick={() => removeSection(i, e3, setE3)}
              />
              <div className="w-[100%] flex justify-between">
                <div className="w-[49%]">
                  <p className="font-[600] text-[#4B5563] text-[15px]">
                    Section Title
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="outline-none w-[100%] h-[40px] rounded-[6px] border border-[#D1D5DB] p-2"
                  />
                </div>

                <div className="w-[49%]">
                  <p className="font-[600] text-[#4B5563] text-[15px]">
                    Section Date
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
                  Section Description
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
            pushNewSection(e3, setE3);
          }}
        >
          <IoAdd className="text-[#4C6156] text-3xl" />
          <p className="text-[#4C6156] font-[600]">Add New Section</p>
        </div>
      </div>

      <div className="w-[100%]">
        <p className="text-[#4C6156] text-[24px] font-[600] mt-5">Event 4</p>

        <div className="w-[100%] flex justify-between mt-3">
          <div className="w-[30%]">
            <p className="font-[600] text-[#4B5563] text-[15px]">Event Title</p>
            <input
              type="text"
              name=""
              id=""
              className="outline-none w-[100%] h-[40px] rounded-[6px] border border-[#D1D5DB] p-2"
            />
          </div>

          <div className="w-[30%]">
            <p className="font-[600] text-[#4B5563] text-[15px]">Event Date</p>
            <input
              type="text"
              name=""
              id=""
              className="outline-none w-[100%] h-[40px] rounded-[6px] border border-[#D1D5DB] p-2"
            />
          </div>

          <div className="w-[30%]">
            <p className="font-[600] text-[#4B5563] text-[15px]">Event Time</p>
            <input
              type="text"
              name=""
              id=""
              className="outline-none w-[100%] h-[40px] rounded-[6px] border border-[#D1D5DB] p-2"
            />
          </div>
        </div>

        {e4?.map((elm, i) => {
          return (
            <div className="w-[100%]  mt-5 p-5 border rounded-md relative">
              <MdCancel
                className="absolute right-[-8px] top-[-8px] text-2xl text-[#4C6156] cursor-pointer"
                onClick={() => removeSection(i, e4, setE4)}
              />
              <div className="w-[100%] flex justify-between">
                <div className="w-[49%]">
                  <p className="font-[600] text-[#4B5563] text-[15px]">
                    Section Title
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="outline-none w-[100%] h-[40px] rounded-[6px] border border-[#D1D5DB] p-2"
                  />
                </div>

                <div className="w-[49%]">
                  <p className="font-[600] text-[#4B5563] text-[15px]">
                    Section Date
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
                  Section Description
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
            pushNewSection(e4, setE4);
          }}
        >
          <IoAdd className="text-[#4C6156] text-3xl" />
          <p className="text-[#4C6156] font-[600]">Add New Section</p>
        </div>
      </div>
    </div>
  );
};

export default Itinerary;
