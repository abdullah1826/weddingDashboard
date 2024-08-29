import React, { useEffect, useRef, useState } from "react";
import { IoAdd } from "react-icons/io5";
import { MdCancel, MdOutlineCancel } from "react-icons/md";
import ImageCropperModal from "./Cropper";
import { IoMdAdd } from "react-icons/io";
import CustomSwitch from "./CustomSwitch";
import Instructions from "./Instructions";

const Itinerary = ({ cardData, setCardData, uploadImage }) => {
  // -----------------------------------image cropper functionality--------------------------------------
  const [image, setImage] = useState(null);
  const [open, setOpen] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        setOpen(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addItineraryImg = (url) => {
    console.log(url);
    setCardData({ ...cardData, itineraryBg: url });
  };

  const handleCropComplete = (croppedAreaPixels) => {
    // console.log("Cropped area pixels:", croppedAreaPixels);
    uploadImage(croppedAreaPixels, addItineraryImg);

    // Further processing of cropped image can be done here
  };

  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  // console.log(cardData?.itinerary);
  const [e1, setE1] = useState(cardData?.itinerary?.event1?.activities);
  const [e2, setE2] = useState(cardData?.itinerary?.event2?.activities);
  const [e3, setE3] = useState(cardData?.itinerary?.event3?.activities);
  const [e4, setE4] = useState(cardData?.itinerary?.event4?.activities);

  useEffect(() => {
    setE1(cardData?.itinerary?.event1?.activities);
    setE2(cardData?.itinerary?.event2?.activities);
    setE3(cardData?.itinerary?.event3?.activities);
    setE4(cardData?.itinerary?.event4?.activities);
  }, [cardData?.itinerary?.event1?.activities]);

  // console.log();

  const pushNewSection = (state, setState, eventNumber) => {
    const newSection = { title: "", description: "", time: "" };
    setState([...state, newSection]);
    updateCardData([...state, newSection], eventNumber);
  };

  const removeSection = (index, state, setState, eventNumber) => {
    const updatedArray = state.filter((_, i) => i !== index);
    setState(updatedArray);
    updateCardData(updatedArray, eventNumber);
  };

  const updateCardData = (updatedActivities, eventNumber) => {
    setCardData((prevCardData) => ({
      ...prevCardData,
      itinerary: {
        ...prevCardData.itinerary,
        [`event${eventNumber}`]: {
          ...prevCardData.itinerary[`event${eventNumber}`],
          activities: updatedActivities,
        },
      },
    }));
  };

  const renderEventSections = (eventSections, state, setState, eventNumber) =>
    eventSections.map((elm, i) => (
      <div key={i} className="w-[100%] mt-5 p-5 border rounded-md relative">
        <MdCancel
          className="absolute right-[-8px] top-[-8px] text-2xl text-[#4C6156] cursor-pointer"
          onClick={() => removeSection(i, state, setState, eventNumber)}
        />
        <div className="w-[100%] flex justify-between">
          <div className="w-[49%]">
            <p className="font-[600] text-[#4B5563] text-[15px]">
              Section Title
            </p>
            <input
              type="text"
              value={elm.title}
              onChange={(e) => {
                const updatedState = [...state];
                updatedState[i].title = e.target.value;
                setState(updatedState);
                updateCardData(updatedState, eventNumber);
              }}
              className="outline-none w-[100%] h-[40px] rounded-[6px] border border-[#D1D5DB] p-2"
            />
          </div>
          <div className="w-[49%]">
            <p className="font-[600] text-[#4B5563] text-[15px]">
              Section Time
            </p>
            <input
              type="time"
              value={elm.time}
              onChange={(e) => {
                const updatedState = [...state];
                updatedState[i].time = e.target.value;
                setState(updatedState);
                updateCardData(updatedState, eventNumber);
              }}
              className="outline-none w-[100%] h-[40px] rounded-[6px] border border-[#D1D5DB] p-2"
            />
          </div>
        </div>
        <div className="w-[100%] mt-3">
          <p className="font-[600] text-[#4B5563] text-[15px]">
            Section Description
          </p>
          <textarea
            value={elm.description}
            onChange={(e) => {
              const updatedState = [...state];
              updatedState[i].description = e.target.value;
              setState(updatedState);
              updateCardData(updatedState, eventNumber);
            }}
            className="outline-none w-[100%] h-[60px] rounded-[6px] border border-[#D1D5DB] p-2"
          ></textarea>
        </div>
      </div>
    ));

  const renderEvent = (eventName, eventState, setEventState, eventNumber) => (
    <div className="w-[100%]">
      <p className="text-[#4C6156] text-[24px] font-[600] mt-5">{eventName}</p>

      <div className="w-[100%] flex justify-between mt-3">
        <div className="w-[30%]">
          <p className="font-[600] text-[#4B5563] text-[15px]">Event Title</p>
          <input
            type="text"
            value={cardData?.itinerary[`event${eventNumber}`]?.title}
            onChange={(e) =>
              setCardData((prevCardData) => ({
                ...prevCardData,
                itinerary: {
                  ...prevCardData.itinerary,
                  [`event${eventNumber}`]: {
                    ...prevCardData.itinerary[`event${eventNumber}`],
                    title: e.target.value,
                  },
                },
              }))
            }
            className="outline-none w-[100%] h-[40px] rounded-[6px] border border-[#D1D5DB] p-2"
          />
        </div>

        <div className="w-[30%]">
          <p className="font-[600] text-[#4B5563] text-[15px]">Event Date</p>
          <input
            type="date"
            value={cardData?.itinerary[`event${eventNumber}`]?.date}
            onChange={(e) =>
              setCardData((prevCardData) => ({
                ...prevCardData,
                itinerary: {
                  ...prevCardData.itinerary,
                  [`event${eventNumber}`]: {
                    ...prevCardData.itinerary[`event${eventNumber}`],
                    date: e.target.value,
                  },
                },
              }))
            }
            className="outline-none w-[100%] h-[40px] rounded-[6px] border border-[#D1D5DB] p-2"
          />
        </div>

        <div className="w-[30%]">
          <p className="font-[600] text-[#4B5563] text-[15px]">Event Time</p>
          <input
            type="time"
            value={cardData?.itinerary[`event${eventNumber}`]?.time}
            onChange={(e) =>
              setCardData((prevCardData) => ({
                ...prevCardData,
                itinerary: {
                  ...prevCardData.itinerary,
                  [`event${eventNumber}`]: {
                    ...prevCardData.itinerary[`event${eventNumber}`],
                    time: e.target.value,
                  },
                },
              }))
            }
            className="outline-none w-[100%] h-[40px] rounded-[6px] border border-[#D1D5DB] p-2"
          />
        </div>
      </div>

      {renderEventSections(eventState, eventState, setEventState, eventNumber)}

      <div
        className="w-[100%] bg-[#E6F8EE] h-[55px] rounded-[8px] mt-3 flex justify-center items-center gap-2 cursor-pointer"
        onClick={() => {
          pushNewSection(eventState, setEventState, eventNumber);
        }}
      >
        <IoAdd className="text-[#4C6156] text-3xl" />
        <p className="text-[#4C6156] font-[600]">Add New Section</p>
      </div>
    </div>
  );

  const handleHideShow = (check) => {
    setCardData({ ...cardData, hideItinerary: check });
  };

  return (
    <div className="w-[100%] mt-12">
      <div className="w-[20%] flex justify-between items-center">
        <p className="text-[#4C6156] text-[24px] font-[600] ">Itinerary</p>
        <CustomSwitch
          check={cardData?.hideItinerary}
          setCheck={handleHideShow}
        />
        <Instructions />
      </div>

      {renderEvent("Event 1", e1, setE1, 1, "event1")}
      {renderEvent("Event 2", e2, setE2, 2, "event2")}
      {renderEvent("Event 3", e3, setE3, 3, "event3")}
      {renderEvent("Event 4", e4, setE4, 4, "event4")}

      <div className="w-[100%] flex flex-col items-center">
        <p className="text-[#4C6156] text-[24px] font-[600] mt-5 w-[100%]">
          Background Image
        </p>
        {cardData?.itineraryBg ? (
          <div className="w-[606px] h-[300px] relative">
            <MdOutlineCancel
              className="text-3xl absolute right-[-10px] cursor-pointer top-[-10px] "
              onClick={() => setCardData({ ...cardData, itineraryBg: "" })}
            />
            <img
              src={cardData?.itineraryBg}
              className="w-[100%] h-[100%] object-cover"
            />
          </div>
        ) : (
          <div className="w-[606px] h-[300px] border border-dashed bg-[#E6F8EE] border-[#4C6156] flex justify-center items-center">
            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={handleClick}
            >
              <div className="h-[50px] w-[50px] bg-white rounded-full flex justify-center items-center">
                <IoMdAdd className="text-2xl" />
              </div>
              <p className="text-center text-sm font-[500] mt-1">Add photo</p>
            </div>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <ImageCropperModal
              open={open}
              handleClose={handleClose}
              imageSrc={image}
              onCropComplete={handleCropComplete}
              aspect={16 / 9}
              uploadImage={uploadImage}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Itinerary;
