import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { IoAdd } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import Venue from "../components/Venue";
import Itinerary from "../components/Itinerary";
import TihingToDo from "../components/TihingToDo";
import Faq from "../components/Faq";
import Contact from "../components/Contact";
import Header from "../components/Header";
import SelectColor from "../components/SelectColor";
import SelectFonts from "../components/Selectfonts";
import { HiArrowsUpDown } from "react-icons/hi2";
import ChangeOrder from "../components/Modals/ChangeOrder";
import { FaEye } from "react-icons/fa";
import { storage } from "../firebase";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import PlacesWeLove from "../components/Transport";
import Accomodation from "../components/Accomodation";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import BridalParty from "../components/BridalParty";

const AddEvent = () => {
  let baseUrl = import.meta.env.VITE_BASE_URL;
  const [loading, setLoading] = useState(false);
  const [orderModal, setorderModal] = useState(false);
  const handleOrderModal = () => {
    setorderModal(!orderModal);
  };

  const [cardData, setCardData] = useState({
    brideName: "",
    groomName: "",
    welcomeText: "",
    eventDate: "",
    location: "",
    headerImage: "",
    venueName: "",
    venueLocation: "",
    venueDescription: "",
    venueImages: [],
    isAdmin: true,
    itinerary: {
      event1: {
        title: "",
        date: "",
        time: "",
        activities: [],
      },
      event2: {
        title: "",
        date: "",
        time: "",
        activities: [],
      },
      event3: {
        title: "",
        date: "",
        time: "",
        activities: [],
      },
      event4: {
        title: "",
        date: "",
        time: "",
        activities: [],
      },
    },
    accomodation: [],
    accomodationBackground: "",
    placesWeLove: [],
    placesBackground: "",
    faqs: [],
    contacts: [],
    bgColor: "#ffffff",
    font: "montaga",
    order: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    hidebanner: false,
    hideVenue: false,
    hideBridalParty: false,
    hideAccomodation: false,
    hidePlaces: false,
    hideItinerary: false,
    hideRsvp: false,
    hidefaqs: false,
    hideConactUs: false,
    hideRegistry: false,
    groomsMen: [],
    bridesMaids: [],
    bridalBgImg: "",
    itineraryBg: "",
    faqImage: "",
    contactBgImage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const returnIfHttps = (inputString) => {
    if (inputString && inputString !== "") {
      if (
        inputString.slice(0, 4) === "http" ||
        inputString.slice(0, 4) === "/src" ||
        inputString.slice(0, 7) === "/assets"
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  };

  //-------------------------------getting card data------------------------

  useEffect(() => {
    const gettingCardData = async () => {
      const response = await axios.get(`${baseUrl}/card/getCardById`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.status === true) {
        console.log(response.data.data);
        setCardData(response.data.data);
      }
    };
    gettingCardData();
  }, []);

  // --------------------------------------handle upload image--------------------------------

  const uploadImage = (img, cb) => {
    if (returnIfHttps(img) === false) {
      let date = new Date().getTime();
      let name = `welcomepass${date}`;
      const storageRef = ref(storage, name);
      uploadString(storageRef, img?.slice(23), "base64", {
        contentType: "image/png",
      })
        .then(() => {
          getDownloadURL(storageRef).then(async (URL) => {
            console.log("working..");
            console.log("myimgurl", URL);
            cb(URL);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  //---------------------------------------handle create card----------------------------------
  const token = localStorage.getItem("weddId");
  const handleCreate = async () => {
    setLoading(true);
    const response = await axios
      .post(`${baseUrl}/card/createCard`, cardData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setLoading(false);
        console.log(res);
        toast.success(res.data.msg);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-[100%] h-[100vh] flex">
      <Sidebar />
      <div className="w-[78%] h-[100%] border flex flex-col items-center overflow-y-scroll">
        <Toaster />
        <ChangeOrder
          orderModal={orderModal}
          handleOrderModal={handleOrderModal}
          cardData={cardData}
          setCardData={setCardData}
        />
        <div className="w-[100%] h-[80px] border-b shadow-lg"></div>
        <div className="w-[90%] h-[20px] mt-8">
          <div className="w-[100%] flex justify-between items-center">
            <h2 className="font-[700] text-[38px] text-[#4C6156]">Events</h2>
            <div className="w-[50%] flex gap-3 justify-end">
              <div
                className="w-[40%] h-[50px] rounded-full bg-[#4C6156] text-white flex justify-center items-center gap-3 cursor-pointer"
                onClick={() => handleOrderModal()}
              >
                Change Order
                <HiArrowsUpDown className="text-xl" />
              </div>

              <div
                className="w-[30%] h-[50px] rounded-full bg-[#4C6156] text-white flex justify-center items-center gap-3 cursor-pointer"
                // onClick={() => handleOrderModal()}
              >
                Preview
                <FaEye className="text-xl" />
              </div>
            </div>
          </div>

          <Header
            cardData={cardData}
            setCardData={setCardData}
            handleChange={handleChange}
            uploadImage={uploadImage}
          />
          <Venue
            cardData={cardData}
            setCardData={setCardData}
            handleChange={handleChange}
            uploadImage={uploadImage}
          />
          <BridalParty
            cardData={cardData}
            setCardData={setCardData}
            handleChange={handleChange}
            uploadImage={uploadImage}
          />
          <Itinerary
            cardData={cardData}
            setCardData={setCardData}
            handleChange={handleChange}
            uploadImage={uploadImage}
          />
          <Accomodation
            cardData={cardData}
            setCardData={setCardData}
            uploadImage={uploadImage}
          />
          <PlacesWeLove
            cardData={cardData}
            setCardData={setCardData}
            uploadImage={uploadImage}
          />
          {/* <TihingToDo /> */}
          <Faq
            cardData={cardData}
            setCardData={setCardData}
            uploadImage={uploadImage}
          />
          <Contact
            cardData={cardData}
            setCardData={setCardData}
            uploadImage={uploadImage}
          />
          <SelectColor cardData={cardData} setCardData={setCardData} />
          <SelectFonts cardData={cardData} setCardData={setCardData} />
          <div className="w-[100%] flex justify-end items-center mt-4">
            <div className="w-[50%] flex gap-3 justify-end">
              <div
                className="w-[40%] h-[50px] rounded-full bg-[#4C6156] text-white flex justify-center items-center gap-3 cursor-pointer"
                onClick={() => handleCreate()}
              >
                Save Changes
                {/* <HiArrowsUpDown className="text-xl" /> */}
              </div>

              <div
                className="w-[30%] h-[50px] rounded-full bg-[#4C6156] text-white flex justify-center items-center gap-3 cursor-pointer"
                // onClick={() => handleOrderModal()}
              >
                Preview
                <FaEye className="text-xl" />
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
