import React, { useRef, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import ImageCropperModal from "./Cropper";
import { MdOutlineCancel } from "react-icons/md";
import CustomSwitch from "./CustomSwitch";
import { MdCancel } from "react-icons/md";
import Instructions from "./Instructions";

const Header = ({ cardData, setCardData, handleChange, uploadImage }) => {
  // -----------------------------------image cropper functionality--------------------------------------
  const [image, setImage] = useState(null);
  const [open, setOpen] = useState(false);
  const [isLogo, setIsLogo] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setIsLogo(false);
        setImage(reader.result);
        setOpen(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogoFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setIsLogo(true);
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

  const addLogoImg = (url) => {
    setCardData({ ...cardData, logo: url });
    setIsLogo(false);
  };

  const handleCropComplete = (croppedAreaPixels) => {
    // console.log("Cropped area pixels:", croppedAreaPixels);
    if (isLogo) {
      uploadImage(croppedAreaPixels, addLogoImg);
    } else {
      uploadImage(croppedAreaPixels, addBannerImg);
    }

    // Further processing of cropped image can be done here
  };

  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleHideShow = (check) => {
    setCardData({ ...cardData, hidebanner: check });
  };

  console.log(open);

  return (
    <div className="w-[100%] mt-5">
      <div className="w-[20%] flex justify-between items-center">
        <p className="text-[#4C6156] text-[24px] font-[600] ">Header</p>
        <CustomSwitch check={cardData?.hidebanner} setCheck={handleHideShow} />
        <Instructions />
      </div>

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

      <div className="w-[100%] flex justify-between mt-7">
        {/* <div className="w-[50%]">
          <p className="font-[600] text-[#4B5563] text-[15px]">Location</p>
          <input
            type="text"
            name="location"
            onChange={handleChange}
            value={cardData?.location}
            className="outline-none w-[100%] h-[40px] rounded-[6px] border border-[#D1D5DB] p-2"
          />
        </div> */}

        <div className="w-[50%]">
          <p className="font-[600] text-[#4B5563] text-[15px]">Time</p>
          <input
            type="time"
            value={cardData?.time}
            name="time"
            onChange={handleChange}
            className="outline-none w-[100%] h-[40px] rounded-[6px] border border-[#D1D5DB] p-2"
          />
        </div>

        <div className="w-[50%] flex justify-center items-center gap-2">
          {/* <p className="font-[600] text-[#4B5563] text-[15px]">Add logo</p> */}
          <div className="h-[40px] rounded-[6px] border border-[#D1D5DB] flex items-center pl-2 mb-4 ">
            <input type="file" onChange={handleLogoFileChange} />
          </div>
          {cardData?.logo ? (
            <div className="h-[100px] w-[100px] rounded-md relative border">
              <MdOutlineCancel
                className="text-xl absolute right-[-10px] cursor-pointer top-[-10px]"
                onClick={() => setCardData({ ...cardData, logo: "" })}
              />
              <img
                src={cardData?.logo}
                alt=""
                className="h-[100px] w-[100px] rounded-md"
              />
            </div>
          ) : (
            <div className="h-[100px] w-[100px] rounded-md relative border flex justify-center items-center text-[#4B5563]">
              Logo
            </div>
          )}
        </div>
      </div>

      <div className="w-[100%] flex flex-col items-center">
        <p className="text-[#4C6156] text-[24px] font-[600] mt-5 w-[100%]">
          Header Image
        </p>
        {cardData?.headerImage ? (
          <div className="w-[606px] h-[300px] relative">
            <MdCancel
              className="text-3xl absolute right-[-10px] cursor-pointer top-[-10px] text-[#4C6156]"
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
      <ImageCropperModal
        open={open}
        handleClose={handleClose}
        imageSrc={image}
        onCropComplete={handleCropComplete}
        aspect={isLogo ? 1 / 1 : 16 / 9}
        uploadImage={uploadImage}
      />
    </div>
  );
};

export default Header;
