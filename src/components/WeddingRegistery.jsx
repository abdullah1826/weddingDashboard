import React, { useRef, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import ImageCropperModal from "./Cropper";
import { MdCancel, MdOutlineCancel } from "react-icons/md";
import { IoAdd } from "react-icons/io5";
import CustomSwitch from "./CustomSwitch";
import Instructions from "./Instructions";

const WeddingRegistery = ({
  cardData,
  setCardData,
  handleChange,
  uploadImage,
}) => {
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

  const addRegistryImgs = (url) => {
    console.log("venue working image", url);
    setCardData({ ...cardData, registryBg: url });
  };

  const handleCropComplete = (croppedAreaPixels) => {
    console.log("Cropped area pixels:", croppedAreaPixels);
    uploadImage(croppedAreaPixels, addRegistryImgs);
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

  const pushNewSection = () => {
    if (cardData?.registries?.length < 4) {
      const updatedFaqs = [...cardData?.registries, { title: "", url: "" }];
      setCardData({ ...cardData, registries: updatedFaqs });
    }
  };

  const removeSection = (index) => {
    const updatedFaqs = [
      ...cardData?.registries.slice(0, index),
      ...cardData?.registries.slice(index + 1),
    ];
    setCardData({ ...cardData, registries: updatedFaqs });
  };

  const handleQuestionChange = (index, value) => {
    const updatedFaqs = [...cardData?.registries];
    updatedFaqs[index].title = value;
    setCardData({ ...cardData, registries: updatedFaqs });
  };

  const handleAnswerChange = (index, value) => {
    const updatedFaqs = [...cardData?.registries];
    updatedFaqs[index].url = value;
    setCardData({ ...cardData, registries: updatedFaqs });
  };

  const handleHideShow = (check) => {
    setCardData({ ...cardData, hideRegistry: check });
  };

  return (
    <div className="w-[100%] mt-12">
      <div className="sm:w-[30%] flex sm:justify-between items-center">
        <p className="text-[#4C6156] sm:text-[24px] font-[600] ">
          Wedding Registry
        </p>
        <CustomSwitch
          check={cardData?.hideRegistry}
          setCheck={handleHideShow}
        />
        <Instructions />
      </div>

      <div className="w-[100%] flex justify-between mt-3">
        <div className="w-[100%]">
          <p className="font-[600] text-[#4B5563] text-[15px]">Title</p>
          <input
            required={!cardData?.hideRegistry}
            autoComplete={false}
            type="text"
            name="registeryTitle"
            onChange={handleChange}
            value={cardData.registeryTitle}
            className="outline-none w-[100%] h-[40px] rounded-[6px] border border-[#D1D5DB] p-2"
          />
        </div>
      </div>
      <div className="w-[100%] flex justify-between mt-6">
        <div className="w-[100%]">
          <p className="font-[600] text-[#4B5563] text-[15px]">Description</p>
          <textarea
            required={!cardData?.hideRegistry}
            autoComplete={false}
            value={cardData.registeryDescription}
            name="registeryDescription"
            onChange={handleChange}
            className="outline-none w-[100%] h-[70px] rounded-[6px] border border-[#D1D5DB] p-2"
          ></textarea>
        </div>
      </div>

      {cardData?.registries?.map((faq, i) => (
        <div key={i} className="w-[100%] mt-5 p-5 border rounded-md relative">
          <MdCancel
            className="absolute right-[-8px] top-[-8px] text-2xl text-[#4C6156] cursor-pointer"
            onClick={() => removeSection(i)}
          />

          <div className="w-[100%] flex justify-between">
            <div className="w-[100%]">
              <p className="font-[600] text-[#4B5563] text-[15px]">Title</p>
              <input
                required={!cardData?.hideRegistry}
                autoComplete={false}
                type="text"
                value={faq.title}
                onChange={(e) => handleQuestionChange(i, e.target.value)}
                className="outline-none w-[100%] h-[40px] rounded-[6px] border border-[#D1D5DB] p-2"
              />
            </div>
          </div>
          <div className="w-[100%] mt-3">
            <p className="font-[600] text-[#4B5563] text-[15px]">Url</p>
            <input
              required={!cardData?.hideRegistry}
              autoComplete={false}
              type="url"
              value={faq.url}
              onChange={(e) => handleAnswerChange(i, e.target.value)}
              className="outline-none w-[100%] h-[40px] rounded-[6px] border border-[#D1D5DB] p-2"
            />
          </div>
        </div>
      ))}

      <div
        className="w-[100%] bg-[#E6F8EE] h-[55px] rounded-[8px] mt-3 flex justify-center items-center gap-2 cursor-pointer"
        onClick={pushNewSection}
      >
        <IoAdd className="text-[#4C6156] text-3xl" />
        <p className="text-[#4C6156] font-[600]">Add New Title</p>
      </div>

      <div className="w-[100%] flex flex-col items-center">
        <p className="text-[#4C6156] sm:text-[24px] font-[600] mb-3 sm:mb-0 mt-5 w-[100%]">
          Wedding Registry background Image
        </p>
        {cardData?.registryBg ? (
          <div className="sm:w-[606px] sm:h-[300px] w-[100%] relative">
            <MdOutlineCancel
              className="text-3xl absolute right-[-10px] cursor-pointer top-[-10px] "
              onClick={() => setCardData({ ...cardData, registryBg: "" })}
            />
            <img
              src={cardData?.registryBg}
              className="w-[100%] h-[100%] object-cover"
            />
          </div>
        ) : (
          <div className="sm:w-[606px] sm:h-[300px] w-[100%] h-[200px] border border-dashed bg-[#E6F8EE] border-[#4C6156] flex justify-center items-center">
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

export default WeddingRegistery;
