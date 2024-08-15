import React, { useRef, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { IoAdd } from "react-icons/io5";
import { MdCancel, MdOutlineCancel } from "react-icons/md";
import ImageCropperModal from "./Cropper";

const PlacesWeLove = ({ cardData, setCardData, uploadImage }) => {
  const { placesWeLove, placesBackground } = cardData;

  const pushNewSection = () => {
    const updatedPlaces = [...placesWeLove, { name: "", description: "" }];
    setCardData({ ...cardData, placesWeLove: updatedPlaces });
  };

  const removeSection = (index) => {
    const updatedPlaces = [
      ...placesWeLove.slice(0, index),
      ...placesWeLove.slice(index + 1),
    ];
    setCardData({ ...cardData, placesWeLove: updatedPlaces });
  };

  // Image cropper functionality
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

  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleCropComplete = (croppedAreaPixels) => {
    uploadImage(croppedAreaPixels, (url) => {
      setCardData({ ...cardData, placesBackground: url });
    });
  };

  return (
    <div className="w-[100%] mt-12">
      <h2 className="font-[700] text-[38px] text-[#4C6156]">Places We Love</h2>

      {placesWeLove.map((place, i) => (
        <div key={i} className="w-[100%] mt-5 p-5 border rounded-md relative">
          {i !== 0 && (
            <MdCancel
              className="absolute right-[-8px] top-[-8px] text-2xl text-[#4C6156] cursor-pointer"
              onClick={() => removeSection(i)}
            />
          )}
          <div className="w-[100%] flex justify-between">
            <div className="w-[100%]">
              <p className="font-[600] text-[#4B5563] text-[15px]">
                Place Name
              </p>
              <input
                type="text"
                value={place.name}
                onChange={(e) => {
                  const updatedPlaces = [...placesWeLove];
                  updatedPlaces[i].name = e.target.value;
                  setCardData({ ...cardData, placesWeLove: updatedPlaces });
                }}
                className="outline-none w-[100%] h-[40px] rounded-[6px] border border-[#D1D5DB] p-2"
              />
            </div>
          </div>
          <div className="w-[100%] mt-3">
            <p className="font-[600] text-[#4B5563] text-[15px]">Description</p>
            <textarea
              value={place.description}
              onChange={(e) => {
                const updatedPlaces = [...placesWeLove];
                updatedPlaces[i].description = e.target.value;
                setCardData({ ...cardData, placesWeLove: updatedPlaces });
              }}
              className="outline-none w-[100%] h-[60px] rounded-[6px] border border-[#D1D5DB] p-2"
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

        {placesBackground ? (
          <div className="w-[606px] h-[300px] relative mt-2">
            <MdOutlineCancel
              className="text-3xl absolute right-[-10px] cursor-pointer top-[-10px]"
              onClick={() => setCardData({ ...cardData, placesBackground: "" })}
            />
            <img
              src={placesBackground}
              className="w-[100%] h-[100%] object-cover"
            />
          </div>
        ) : (
          <div className="w-[606px] h-[300px] border border-dashed bg-[#E6F8EE] border-[#4C6156] flex justify-center items-center mt-2">
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
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PlacesWeLove;
