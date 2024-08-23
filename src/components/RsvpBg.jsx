import React, { useRef, useState } from "react";
import ImageCropperModal from "./Cropper";
import { MdOutlineCancel } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";

const RsvpBg = ({ cardData, setCardData, uploadImage }) => {
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
  const [img, setimg] = useState("");

  const addRsvpImg = (url) => {
    console.log(url);
    setCardData({ ...cardData, rsvpBgImage: url });
  };

  const handleCropComplete = (croppedAreaPixels) => {
    uploadImage(croppedAreaPixels, addRsvpImg);
  };

  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="w-[100%]">
      <div className="w-[100%] flex flex-col items-center">
        <p className="text-[#4C6156] text-[24px] font-[600] mt-5 w-[100%]">
          Rsvp Image
        </p>
        {cardData?.rsvpBgImage ? (
          <div className="w-[606px] h-[300px] relative">
            <MdOutlineCancel
              className="text-3xl absolute right-[-10px] cursor-pointer top-[-10px] "
              onClick={() => setCardData({ ...cardData, rsvpBgImage: "" })}
            />
            <img
              src={cardData?.rsvpBgImage}
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

export default RsvpBg;
