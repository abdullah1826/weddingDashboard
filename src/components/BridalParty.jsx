import React, { useRef, useState } from "react";
import ImageCropperModal from "./Cropper";
import { MdOutlineCancel } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { IoIosAddCircleOutline } from "react-icons/io";
import men from "../images/men.jpg";
import women from "../images/women.jpg";
import CustomSwitch from "./CustomSwitch";

const BridalParty = ({ cardData, setCardData, handleChange, uploadImage }) => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [aspect, setAspect] = useState(1 / 1);
  const [selectedIndex, setSelectedIndex] = useState(null); // Track which section is being edited

  const handleFileChange = (event, index, type) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (index && type) {
          setImage(reader.result);
          setSelectedIndex({ index, type }); // Store the index and type (groomsMen or bridesMaids)
          setOpen(true);
        } else {
          setImage(reader.result);
          setOpen(true);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  console.log(cardData);

  const handleClose = () => {
    setOpen(false);
  };

  const addGroomeMenImgs = (url) => {
    const updatedGroomsMen = [...cardData.groomsMen];
    updatedGroomsMen[selectedIndex.index].image = url; // Update the image at the selected index
    setCardData({ ...cardData, groomsMen: updatedGroomsMen });
  };

  const addBrideMaidsImgs = (url) => {
    const updatedBridesMaids = [...cardData.bridesMaids];
    updatedBridesMaids[selectedIndex.index].image = url; // Update the image at the selected index
    setCardData({ ...cardData, bridesMaids: updatedBridesMaids });
  };

  const addBridalBgImg = (url) => {
    setCardData({ ...cardData, bridalBgImg: url });
  };

  const handleCropComplete = (croppedImageUrl) => {
    console.log("worked");
    if (selectedIndex && selectedIndex.type === "groomsMen") {
      console.log("groom");
      uploadImage(croppedImageUrl, addGroomeMenImgs);
    } else if (selectedIndex && selectedIndex.type === "bridesMaids") {
      console.log("bride");
      uploadImage(croppedImageUrl, addBrideMaidsImgs);
    } else {
      uploadImage(croppedImageUrl, addBridalBgImg);
    }
  };

  const fileInputRef = useRef(null);

  const fileInputRefbg = useRef(null);

  const handleClick = () => {
    fileInputRefbg.current.click();
    setAspect(16 / 9);
  };

  const pushNewSection = (type) => {
    const newSection = { name: "", image: "" };
    if (type === "groomsMen") {
      setCardData({
        ...cardData,
        groomsMen: [...cardData.groomsMen, newSection],
      });
    } else if (type === "bridesMaids") {
      setCardData({
        ...cardData,
        bridesMaids: [...cardData.bridesMaids, newSection],
      });
    }
  };

  const removeSection = (index, type) => {
    if (type === "groomsMen") {
      const updatedArray = [
        ...cardData.groomsMen.slice(0, index),
        ...cardData.groomsMen.slice(index + 1),
      ];
      setCardData({ ...cardData, groomsMen: updatedArray });
    } else if (type === "bridesMaids") {
      const updatedArray = [
        ...cardData.bridesMaids.slice(0, index),
        ...cardData.bridesMaids.slice(index + 1),
      ];
      setCardData({ ...cardData, bridesMaids: updatedArray });
    }
  };

  const handleHideShow = (check) => {
    setCardData({ ...cardData, hideBridalParty: check });
  };

  return (
    <div className="w-[100%] mt-12">
      <div className="w-[25%] flex justify-between items-center">
        <p className="text-[#4C6156] text-[24px] font-[600] ">Bridal Party</p>
        <CustomSwitch
          check={cardData?.hideBridalParty}
          setCheck={handleHideShow}
        />
      </div>

      {/* Grooms Men Section */}
      <p className="text-[#4C6156] text-[24px] font-[600] mt-3">Grooms Men</p>
      <div className="w-[100%] flex gap-3 mt-1">
        {cardData?.groomsMen?.map((elm, i) => (
          <div
            key={i}
            className="h-[150px] w-[150px] rounded-md relative border flex flex-col justify-center items-center"
          >
            <MdOutlineCancel
              className="text-xl absolute right-[-10px] cursor-pointer top-[-10px]"
              onClick={() => removeSection(i, "groomsMen")}
            />
            <div
              className="w-[100px] h-[100px] relative cursor-pointer"
              onClick={() => {
                fileInputRef.current.click(),
                  setSelectedIndex({ index: i, type: "groomsMen" });
              }}
            >
              <IoIosAddCircleOutline className="absolute top-[-5px] left-[-5px] text-xl" />
              <img
                src={elm?.image ? elm?.image : men}
                alt=""
                className="h-[100px] w-[100px] rounded-md"
              />
            </div>
            <input
              type="text"
              value={elm.name}
              onChange={(e) => {
                const updatedGroomsMen = [...cardData.groomsMen];
                updatedGroomsMen[i].name = e.target.value;
                setCardData({ ...cardData, groomsMen: updatedGroomsMen });
              }}
              className="outline-none border-b w-[75%] placeholder:text-xs mt-3 text-sm"
              placeholder="Name"
            />
          </div>
        ))}

        {cardData?.groomsMen?.length < 4 && (
          <div
            className="h-[150px] w-[150px] border rounded-md border-[#D1D5DB] flex justify-center items-center cursor-pointer"
            onClick={() => pushNewSection("groomsMen")}
          >
            <IoMdAdd className="text-5xl text-[#4B5563]" />
          </div>
        )}
      </div>

      {/* Brides Maids Section */}
      <p className="text-[#4C6156] text-[24px] font-[600] mt-3">Brides Maids</p>
      <div className="w-[100%] flex gap-3 mt-1">
        {cardData?.bridesMaids?.map((elm, i) => (
          <div
            key={i}
            className="h-[150px] w-[150px] rounded-md relative border flex flex-col justify-center items-center"
          >
            <MdOutlineCancel
              className="text-xl absolute right-[-10px] cursor-pointer top-[-10px]"
              onClick={() => removeSection(i, "bridesMaids")}
            />
            <div
              className="w-[100px] h-[100px] relative cursor-pointer"
              onClick={() => {
                fileInputRef.current.click(),
                  setSelectedIndex({ index: i, type: "bridesMaids" }),
                  setAspect(1 / 1);
              }}
            >
              <IoIosAddCircleOutline className="absolute top-[-5px] left-[-5px] text-xl" />
              <img
                src={elm?.image ? elm?.image : women}
                alt=""
                className="h-[100px] w-[100px] rounded-md"
              />
            </div>
            <input
              type="text"
              value={elm.name}
              onChange={(e) => {
                const updatedBridesMaids = [...cardData.bridesMaids];
                updatedBridesMaids[i].name = e.target.value;
                setCardData({ ...cardData, bridesMaids: updatedBridesMaids });
              }}
              className="outline-none border-b w-[75%] placeholder:text-xs mt-3 text-sm"
              placeholder="Name"
            />
          </div>
        ))}
        {cardData?.bridesMaids?.length < 4 && (
          <div
            className="h-[150px] w-[150px] border rounded-md border-[#D1D5DB] flex justify-center items-center cursor-pointer"
            onClick={() => pushNewSection("bridesMaids")}
          >
            <IoMdAdd className="text-5xl text-[#4B5563]" />
          </div>
        )}
      </div>

      <div className="w-[100%] flex flex-col items-center">
        <p className="text-[#4C6156] text-[24px] font-[600] mt-5 w-[100%]">
          Background Image
        </p>
        {cardData?.bridalBgImg ? (
          <div className="w-[606px] h-[300px] relative">
            <MdOutlineCancel
              className="text-3xl absolute right-[-10px] cursor-pointer top-[-10px] "
              onClick={() => setCardData({ ...cardData, bridalBgImg: "" })}
            />
            <img
              src={cardData?.bridalBgImg}
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
              ref={fileInputRefbg}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </div>
        )}
      </div>

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={(e) =>
          handleFileChange(e, selectedIndex?.index, selectedIndex?.type)
        }
      />
      <ImageCropperModal
        open={open}
        handleClose={handleClose}
        imageSrc={image}
        onCropComplete={handleCropComplete}
        aspect={aspect}
      />
    </div>
  );
};

export default BridalParty;
