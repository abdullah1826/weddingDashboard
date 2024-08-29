import React, { useEffect, useRef, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { IoAdd } from "react-icons/io5";
import { MdCancel, MdOutlineCancel } from "react-icons/md";
import ImageCropperModal from "./Cropper";
import CustomSwitch from "./CustomSwitch";
import Instructions from "./Instructions";

const Accomodation = ({ cardData, setCardData, uploadImage }) => {
  // console.log(cardData);
  const [Accomodations, setAccomodations] = useState(cardData?.accomodation);

  useEffect(() => {
    setAccomodations(cardData.accomodation);
  }, [cardData.accomodation]);

  const pushNewSection = () => {
    const newSection = { name: "", description: "", bookingUrl: "" };
    setAccomodations([...Accomodations, newSection]);
    setCardData({ ...cardData, accomodation: [...Accomodations, newSection] });
  };

  const removeSection = (index) => {
    if (index > -1 && index < Accomodations.length) {
      const updatedArray = [
        ...Accomodations?.slice(0, index),
        ...Accomodations?.slice(index + 1),
      ];
      setAccomodations(updatedArray);
      setCardData({ ...cardData, accomodation: updatedArray });
    }
  };

  const handleInputChange = (index, field, value) => {
    const updatedAccomodations = [...Accomodations];
    updatedAccomodations[index][field] = value;
    setAccomodations(updatedAccomodations);
    setCardData({ ...cardData, accomodation: updatedAccomodations });
  };

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

  const handleCropComplete = (croppedAreaPixels) => {
    uploadImage(croppedAreaPixels, (url) => {
      setCardData({ ...cardData, accomodationBackground: url });
    });
  };

  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };
  const handleHideShow = (check) => {
    setCardData({ ...cardData, hideAccomodation: check });
  };
  return (
    <div className="w-[100%] mt-12">
      <div className="w-[20%] flex justify-between items-center">
        <p className="text-[#4C6156] text-[24px] font-[600] ">Accomodation</p>
        <CustomSwitch
          check={cardData?.hideAccomodation}
          setCheck={handleHideShow}
        />
        <Instructions />
      </div>
      {/* <h2 className="font-[700] text-[38px] text-[#4C6156]">Accomodation</h2> */}

      {Accomodations?.map((elm, i) => (
        <div className="w-[100%]  mt-5 p-5 border rounded-md relative" key={i}>
          {i !== 0 && (
            <MdCancel
              className="absolute right-[-8px] top-[-8px] text-2xl text-[#4C6156] cursor-pointer"
              onClick={() => removeSection(i)}
            />
          )}
          <div className="w-[100%] flex justify-between">
            <div className="w-[100%]">
              <p className="font-[600] text-[#4B5563] text-[15px]">
                Hotel Name
              </p>
              <input
                type="text"
                className="outline-none w-[100%] h-[40px] rounded-[6px] border border-[#D1D5DB] p-2"
                value={elm.name}
                onChange={(e) => handleInputChange(i, "name", e.target.value)}
              />
            </div>
          </div>

          <div className="w-[100%] mt-3">
            <div className="w-[100%]">
              <p className="font-[600] text-[#4B5563] text-[15px]">
                Booking Url
              </p>
              <input
                type="text"
                className="outline-none w-[100%] h-[40px] rounded-[6px] border border-[#D1D5DB] p-2"
                value={elm.bookingUrl}
                onChange={(e) =>
                  handleInputChange(i, "bookingUrl", e.target.value)
                }
              />
            </div>
          </div>

          <div className="w-[100%] mt-3">
            <p className="font-[600] text-[#4B5563] text-[15px]">Description</p>
            <textarea
              className="outline-none w-[100%] h-[60px] rounded-[6px] border border-[#D1D5DB] p-2"
              value={elm.description}
              onChange={(e) =>
                handleInputChange(i, "description", e.target.value)
              }
            ></textarea>
          </div>
        </div>
      ))}

      <div
        className="w-[100%] bg-[#E6F8EE] h-[55px] rounded-[8px] mt-3 flex justify-center items-center gap-2 cursor-pointer"
        onClick={pushNewSection}
      >
        <IoAdd className="text-[#4C6156] text-3xl" />
        <p className="text-[#4C6156] font-[600]">Add New Section</p>
      </div>

      <div className="w-[100%] flex flex-col items-center">
        <p className="text-[#4C6156] text-[24px] font-[600] mt-5 w-[100%]">
          Background Image
        </p>
        {cardData.accomodationBackground ? (
          <div className="w-[606px] h-[300px] relative">
            <MdOutlineCancel
              className="text-3xl absolute right-[-10px] cursor-pointer top-[-10px]"
              onClick={() =>
                setCardData({ ...cardData, accomodationBackground: "" })
              }
            />
            <img
              src={cardData.accomodationBackground}
              className="w-[100%] h-[100%] object-cover"
              alt="Background"
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

export default Accomodation;
