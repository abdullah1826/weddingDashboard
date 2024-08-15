import React, { useRef, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import ImageCropperModal from "./Cropper";
import { MdOutlineCancel } from "react-icons/md";

const Header = ({ cardData, setCardData, handleChange, uploadImage }) => {
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

  const addBannerImg = (url) => {
    console.log(url);
    setCardData({ ...cardData, headerImage: url });
  };

  const handleCropComplete = (croppedAreaPixels) => {
    // console.log("Cropped area pixels:", croppedAreaPixels);
    uploadImage(croppedAreaPixels, addBannerImg);

    // Further processing of cropped image can be done here
  };

  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="w-[100%]">
      <p className="text-[#4C6156] text-[24px] font-[600] mt-5">Header</p>
      <div className="w-[100%] flex justify-between mt-3">
        <div className="w-[24%]">
          <p className="font-[600] text-[#4B5563] text-[15px]">Bride Name</p>
          <input
            type="text"
            name="brideName"
            onChange={handleChange}
            value={cardData?.brideName}
            className="outline-none w-[100%] h-[40px] rounded-[6px] border border-[#D1D5DB] p-2"
          />
        </div>

        <div className="w-[24%]">
          <p className="font-[600] text-[#4B5563] text-[15px]">Groom Name</p>
          <input
            type="text"
            name="groomName"
            onChange={handleChange}
            value={cardData?.groomName}
            className="outline-none w-[100%] h-[40px] rounded-[6px] border border-[#D1D5DB] p-2"
          />
        </div>

        <div className="w-[48%]">
          <p className="font-[600] text-[#4B5563] text-[15px]">
            Welcomming Text
          </p>
          <input
            type="text"
            name="welcomeText"
            onChange={handleChange}
            value={cardData?.welcomeText}
            className="outline-none w-[100%] h-[40px] rounded-[6px] border border-[#D1D5DB] p-2"
          />
        </div>
      </div>

      <div className="w-[100%] flex justify-between mt-7">
        <div className="w-[50%]">
          <p className="font-[600] text-[#4B5563] text-[15px]">Location</p>
          <input
            type="text"
            name="location"
            onChange={handleChange}
            value={cardData?.location}
            className="outline-none w-[100%] h-[40px] rounded-[6px] border border-[#D1D5DB] p-2"
          />
        </div>

        <div className="w-[48%]">
          <p className="font-[600] text-[#4B5563] text-[15px]">Date</p>
          <input
            type="date"
            name="eventDate"
            onChange={handleChange}
            value={cardData?.eventDate}
            className="outline-none w-[100%] h-[40px] rounded-[6px] border border-[#D1D5DB] p-2"
          />
        </div>
      </div>

      <div className="w-[100%] flex flex-col items-center">
        <p className="text-[#4C6156] text-[24px] font-[600] mt-5 w-[100%]">
          Header Image
        </p>
        {cardData?.headerImage ? (
          <div className="w-[606px] h-[300px] relative">
            <MdOutlineCancel
              className="text-3xl absolute right-[-10px] cursor-pointer top-[-10px] "
              onClick={() => setCardData({ ...cardData, headerImage: "" })}
            />
            <img
              src={cardData?.headerImage}
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
  );
};

export default Header;
