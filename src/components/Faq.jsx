import React, { useRef, useState } from "react";
import { IoAdd } from "react-icons/io5";
import { MdCancel, MdOutlineCancel } from "react-icons/md";
import ImageCropperModal from "./Cropper";
import { IoMdAdd } from "react-icons/io";
import CustomSwitch from "./CustomSwitch";

const Faq = ({ cardData, setCardData, uploadImage }) => {
  const { faqs } = cardData;

  const pushNewSection = () => {
    const updatedFaqs = [...faqs, { qs: "", ans: "" }];
    setCardData({ ...cardData, faqs: updatedFaqs });
  };

  const removeSection = (index) => {
    const updatedFaqs = [...faqs.slice(0, index), ...faqs.slice(index + 1)];
    setCardData({ ...cardData, faqs: updatedFaqs });
  };

  const handleQuestionChange = (index, value) => {
    const updatedFaqs = [...faqs];
    updatedFaqs[index].qs = value;
    setCardData({ ...cardData, faqs: updatedFaqs });
  };

  const handleAnswerChange = (index, value) => {
    const updatedFaqs = [...faqs];
    updatedFaqs[index].ans = value;
    setCardData({ ...cardData, faqs: updatedFaqs });
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

  const addFaqImg = (url) => {
    console.log(url);
    setCardData({ ...cardData, faqImage: url });
  };

  const handleCropComplete = (croppedAreaPixels) => {
    // console.log("Cropped area pixels:", croppedAreaPixels);
    uploadImage(croppedAreaPixels, addFaqImg);

    // Further processing of cropped image can be done here
  };

  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleHideShow = (check) => {
    setCardData({ ...cardData, hideFaqs: check });
  };

  return (
    <div className="w-[100%] mt-12">
      <div className="w-[15%] flex justify-between items-center">
        <p className="text-[#4C6156] text-[24px] font-[600] ">Faq</p>
        <CustomSwitch check={cardData?.hideFaqs} setCheck={handleHideShow} />
      </div>

      {faqs?.map((faq, i) => (
        <div key={i} className="w-[100%] mt-5 p-5 border rounded-md relative">
          {i !== 0 && (
            <MdCancel
              className="absolute right-[-8px] top-[-8px] text-2xl text-[#4C6156] cursor-pointer"
              onClick={() => removeSection(i)}
            />
          )}
          <div className="w-[100%] flex justify-between">
            <div className="w-[100%]">
              <p className="font-[600] text-[#4B5563] text-[15px]">Question</p>
              <input
                type="text"
                value={faq.question}
                onChange={(e) => handleQuestionChange(i, e.target.value)}
                className="outline-none w-[100%] h-[40px] rounded-[6px] border border-[#D1D5DB] p-2"
              />
            </div>
          </div>
          <div className="w-[100%] mt-3">
            <p className="font-[600] text-[#4B5563] text-[15px]">Answer</p>
            <textarea
              value={faq.answer}
              onChange={(e) => handleAnswerChange(i, e.target.value)}
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
          Faq background Image
        </p>
        {cardData?.faqImage ? (
          <div className="w-[606px] h-[300px] relative">
            <MdOutlineCancel
              className="text-3xl absolute right-[-10px] cursor-pointer top-[-10px] "
              onClick={() => setCardData({ ...cardData, faqImage: "" })}
            />
            <img
              src={cardData?.faqImage}
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

export default Faq;
