import React, { useRef, useState } from "react";
import ImageCropperModal from "./Cropper";
import { MdOutlineCancel } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import CustomSwitch from "./CustomSwitch";
import Instructions from "./Instructions";

const Details = ({ cardData, setCardData, handleChange, uploadImage }) => {
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

  const addVenueImgs = (url) => {
    console.log("venue working image", url);
    setCardData({
      ...cardData,
      detailImages: [...cardData?.detailImages, url],
    });
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
      setState({ ...cardData, detailImages: [...updatedArray] });
    }
  };

  const handleHideShow = (check) => {
    setCardData({ ...cardData, hideDetails: check });
  };

  return (
    <div className="w-[100%] mt-12">
      <div className="w-[20%] flex justify-between items-center">
        <p className="text-[#4C6156] text-[24px] font-[600] ">Details</p>
        <CustomSwitch check={cardData?.hideDetails} setCheck={handleHideShow} />
        <Instructions />
      </div>

      <div className="w-[100%] flex justify-between mt-6">
        <div className="w-[100%]">
          <p className="font-[600] text-[#4B5563] text-[15px]">
            {" "}
            Venue Map Button Description
          </p>
          <textarea
            value={cardData?.venueMapButtonDesc}
            name="venueMapButtonDesc"
            onChange={handleChange}
            className="outline-none w-[100%] h-[70px] rounded-[6px] border border-[#D1D5DB] p-2"
          ></textarea>
        </div>
      </div>

      <div className="w-[100%] flex justify-between mt-6">
        <div className="w-[100%]">
          <p className="font-[600] text-[#4B5563] text-[15px]">
            View Hotels Button Description
          </p>
          <textarea
            value={cardData?.viewHotelsButtonDesc}
            name="viewHotelsButtonDesc"
            onChange={handleChange}
            className="outline-none w-[100%] h-[70px] rounded-[6px] border border-[#D1D5DB] p-2"
          ></textarea>
        </div>
      </div>

      <div className="w-[100%] flex justify-between mt-6">
        <div className="w-[100%]">
          <p className="font-[600] text-[#4B5563] text-[15px]">
            See Our Favourite Button Description
          </p>

          <textarea
            value={cardData.seeFavouriteButtonDesc}
            name="seeFavouriteButtonDesc"
            onChange={handleChange}
            className="outline-none w-[100%] h-[70px] rounded-[6px] border border-[#D1D5DB] p-2"
          ></textarea>
        </div>
      </div>

      <p className="font-[600] text-[#4B5563] text-[15px] mt-3">Venue images</p>
      <div className="w-[100%] flex gap-3 mt-2">
        {cardData?.detailImages?.map((img, i) => {
          return (
            <div className="h-[100px] w-[100px] rounded-md relative">
              <MdOutlineCancel
                className="text-xl absolute right-[-10px] cursor-pointer top-[-10px]"
                onClick={() =>
                  removeImg(i, cardData?.detailImages, setCardData)
                }
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

export default Details;
