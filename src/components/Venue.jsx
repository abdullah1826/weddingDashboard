import React, { useRef, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import ImageCropperModal from "./Cropper";
import { MdOutlineCancel } from "react-icons/md";

const Venue = ({ cardData, setCardData, handleChange, uploadImage }) => {
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
  const [imgs, setimgs] = useState([]);

  const addVenueImgs = (url) => {
    console.log("venue working image", url);
    setCardData({ ...cardData, venueImages: [...cardData?.venueImages, url] });
  };

  const handleCropComplete = (croppedAreaPixels) => {
    console.log("Cropped area pixels:", croppedAreaPixels);
    uploadImage(croppedAreaPixels, addVenueImgs);

    // Further processing of cropped image can be done here
  };

  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const removeImg = (index, state, setState) => {
    if (index > -1 && index < state.length) {
      const updatedArray = [
        ...state.slice(0, index),
        ...state.slice(index + 1),
      ];
      setState({ ...cardData, venueImages: [...updatedArray] });
    }
  };

  // venueImages: []

  return (
    <div className="w-[100%] mt-12">
      <h2 className="font-[700] text-[38px] text-[#4C6156]">Venue</h2>
      <div className="w-[100%] flex justify-between mt-3">
        <div className="w-[49%]">
          <p className="font-[600] text-[#4B5563] text-[15px]">Venue Name</p>
          <input
            type="text"
            name="venueName"
            onChange={handleChange}
            value={cardData.venueName}
            className="outline-none w-[100%] h-[40px] rounded-[6px] border border-[#D1D5DB] p-2"
          />
        </div>

        <div className="w-[49%]">
          <p className="font-[600] text-[#4B5563] text-[15px]">Location</p>
          <input
            type="text"
            name="venueLocation"
            onChange={handleChange}
            value={cardData.venueLocation}
            className="outline-none w-[100%] h-[40px] rounded-[6px] border border-[#D1D5DB] p-2"
          />
        </div>
      </div>
      <div className="w-[100%] flex justify-between mt-6">
        <div className="w-[100%]">
          <p className="font-[600] text-[#4B5563] text-[15px]">Description</p>
          <textarea
            value={cardData.venueDescription}
            name="venueDescription"
            onChange={handleChange}
            className="outline-none w-[100%] h-[70px] rounded-[6px] border border-[#D1D5DB] p-2"
          ></textarea>
        </div>
      </div>
      <p className="font-[600] text-[#4B5563] text-[15px] mt-3">Venue images</p>
      <div className="w-[100%] flex gap-3 mt-2">
        {cardData?.venueImages?.map((img, i) => {
          return (
            <div className="h-[100px] w-[100px] rounded-md relative">
              <MdOutlineCancel
                className="text-xl absolute right-[-10px] cursor-pointer top-[-10px]"
                onClick={() => removeImg(i, cardData?.venueImages, setCardData)}
              />
              <img
                src={img}
                alt=""
                key={i}
                className="h-[100px] w-[100px] rounded-md"
              />
            </div>
          );
        })}
        <div
          className="h-[100px] w-[100px] border rounded-md border-[#D1D5DB] flex justify-center items-center cursor-pointer"
          onClick={handleClick}
        >
          <IoMdAdd className="text-5xl text-[#4B5563]" />
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
          aspect={1 / 1}
        />
      </div>
    </div>
  );
};

export default Venue;
