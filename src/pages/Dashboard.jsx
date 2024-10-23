import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { CiSearch } from "react-icons/ci";
import { MdOutlineFileDownload } from "react-icons/md";
import { DataGrid } from "@mui/x-data-grid";
import { IoQrCodeOutline } from "react-icons/io5";
import { FiEye } from "react-icons/fi";
import { GoTrash } from "react-icons/go";
import axios from "axios";
import DownloadCsv from "../components/DownloadCsv";
import CircularProgress from "@mui/material/CircularProgress";
import Allert from "../components/Modals/Allert";
import toast, { Toaster } from "react-hot-toast";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import MobileSidebar from "../components/MobileSidebar";
import { IconButton } from "@mui/material";

const Dashboard = () => {
  let baseUrl = import.meta.env.VITE_BASE_URL;
  const token = localStorage.getItem("weddId");
  const [rsvps, setRsvps] = useState([]);
  const [loading, setloading] = useState(true);

  //-------------------------------getting rsvp data------------------------

  useEffect(() => {
    const gettingRsvpData = async () => {
      const response = await axios.get(`${baseUrl}/card/getRsvp`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.status === true) {
        console.log(response.data.data);
        setRsvps(response.data.data);
        setloading(false);
      } else {
        setloading(false);
      }
    };
    gettingRsvpData();
  }, []);

  console.log(rsvps);
  const [selectedIds, setSelectedIds] = useState([]);
  const [allertModal, setallertModal] = useState(false);
  const handleallertModal = () => {
    if (allertModal) {
      setSelectedIds([]);
    }
    setallertModal(!allertModal);
  };

  const columns = [
    { field: "fName", headerName: "Full Name", width: 130 },
    { field: "numberOfChilds", headerName: "Childs", width: 130 },
    { field: "mail", headerName: "Email", width: 130 },
    {
      field: "phone",
      headerName: "Phone",
      width: 130,
    },
    {
      field: "AttendingStatus",
      headerName: "Status",
      sortable: false,
      width: 130,
      renderCell: (params) => (
        <div className="h-[100%] flex items-center">
          <div
            className="h-[30px] w-[100px] bg-[#CAFFAA] rounded-[5px] flex justify-center items-center font-[600] text-[11px] text-[#20B408]"
            style={
              params.value === "Attending"
                ? { backgroundColor: "#CAFFAA", color: "#20B408" }
                : params.value === "NotAttending"
                ? { backgroundColor: "#FFDADA", color: "#FF3333" }
                : { backgroundColor: "#FFDDAA", color: "#FB9435" }
            }
          >
            {/* {params.value} */}
            {params.value === "NotAttending" ? "Not Attending" : params.value}
          </div>
        </div>
      ),
    },
    {
      field: "qr",
      headerName: "QR Code",
      width: 130,
      renderCell: (params) => (
        <div className="h-[100%] flex justify-center items-center w-[70%]">
          <IoQrCodeOutline className="text-2xl" />
        </div>
      ),
    },
    {
      field: "action",
      headerName: "Actions",
      width: 130,
      renderCell: (params) => (
        <div className="h-[100%] flex justify-between items-center w-[50%] ">
          <MdOutlineFileDownload className="text-[#9D9D9D] text-xl cursor-pointer" />
          {/* <FiEye className="text-[#9D9D9D] text-xl cursor-pointer" /> */}
          <GoTrash
            className="text-[#9D9D9D] hover:text-[red] text-xl cursor-pointer"
            onClick={() => {
              handleallertModal(),
                setSelectedIds([...selectedIds, params.row._id]);
            }}
          />
        </div>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      lastName: "Snow",
      fullName: "Jon",
      totalGuests: 35,
      email: "abc@gmail.com",
      selectedDish: "Chicken",
    },
    {
      id: 2,
      lastName: "Lannister",
      fullName: "Cersei",
      totalGuests: 42,
      email: "abc@gmail.com",
      selectedDish: "Chicken",
    },
    {
      id: 3,
      lastName: "Lannister",
      fullName: "Jaime",
      totalGuests: 45,
      email: "abc@gmail.com",
      selectedDish: "Chicken",
    },
    {
      id: 4,
      lastName: "Stark",
      fullName: "Arya",
      totalGuests: 16,
      email: "abc@gmail.com",
      selectedDish: "Chicken",
    },
    {
      id: 5,
      lastName: "Targaryen",
      fullName: "Daenerys",
      totalGuests: null,
      email: "abc@gmail.com",
      selectedDish: "Chicken",
    },
    {
      id: 6,
      lastName: "Melisandre",
      fullName: null,
      totalGuests: 150,
      email: "abc@gmail.com",
      selectedDish: "Chicken",
    },
    {
      id: 7,
      lastName: "Clifford",
      fullName: "Ferrara",
      totalGuests: 44,
      email: "abc@gmail.com",
      selectedDish: "Chicken",
    },
    {
      id: 8,
      lastName: "Frances",
      fullName: "Rossini",
      totalGuests: 36,
      email: "abc@gmail.com",
      selectedDish: "Chicken",
    },
    {
      id: 9,
      lastName: "Roxie",
      fullName: "Harvey",
      totalGuests: 65,
      email: "abc@gmail.com",
      selectedDish: "Chicken",
    },
  ];

  // ---------------------------------------Search functionality--------------------------------------------

  let [filtered, setfiltered] = useState([]);
  useEffect(() => {
    setfiltered(rsvps);
  }, [rsvps]);
  let [search, setsearch] = useState("");

  useEffect(() => {
    const result = rsvps?.filter((contact) => {
      return (
        contact?.fName.toLowerCase().match(search.toLowerCase()) ||
        contact?.lastName.toLowerCase().match(search.toLowerCase())
      );
    });

    setfiltered(result);
  }, [search]);

  console.log(selectedIds);

  const handleDelete = () => {
    setloading(true);
    axios
      .post(`${baseUrl}/card/deleteRsvp`, {
        ids: selectedIds,
      })
      .then((res) => {
        const remainingData = filtered?.filter((elem) => {
          return !selectedIds.includes(elem?._id);
        });
        setfiltered(remainingData);
        setloading(false);
        console.log(res.data.msg);
        toast.success(res.data.msg);
        setSelectedIds([]);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.msg);
        setSelectedIds([]);
      });
  };
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  let screenWidth=window.innerWidth
  return (
    <div className="w-[100%] h-[100vh] flex">
      <Toaster />
      <MobileSidebar drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
      {screenWidth> 440 ?
      <Sidebar />
      :
     ""}
      {loading ? (
        <div className="sm:w-[78%] w-[100%] h-[100%] border flex justify-center items-center text-[#4C6156]">
          <CircularProgress color="inherit" size={50} />{" "}
        </div>
      ) : (
        <div className="sm:w-[78%] w-[100%] h-[100%] border flex flex-col items-center overflow-y-scroll">
          <Allert
            allertModal={allertModal}
            handleallertModal={handleallertModal}
            text="Are you sure to delete the selected guest ?"
            func={handleDelete}
          />
          <div className="w-[100%] h-[80px] border-b flex justify-between items-center shadow-lg">
          {screenWidth< 440 && 
            <div style={{ textAlign: "center", padding: "16px", color: "#000", fontSize: "26px", fontWeight: 400 }}>
            The Welcome Pass
          </div>
          }
      {screenWidth< 440 &&
        <IconButton onClick={toggleDrawer}>
        <HiOutlineMenuAlt3 className="text-[#000] text-[30px]" />
      </IconButton>

      }
          
          </div>
          <div className="w-[93%] mt-8">
            <div className="w-[100%] flex flex-col sm:flex-row justify-between sm:items-center">
              <p className="font-[700] mb-2 sm:mb-0 sm:text-[30px] text-[20px] text-[#4C6156]">
                All Members
              </p>
              <div className="flex gap-4">
                <div className="sm:w-[210px] w-[58%] h-[42px] border border-[#C7C7C7] rounded-[7px] flex">
                  <div className="w-[20%] h-[100%] flex justify-center items-center">
                    <CiSearch className="text-[#868686] text-xl" />
                  </div>
                  <input
                    type="text"
                    className="h-[100%] w-[78%] outline-none"
                    placeholder="Search"
                    onChange={(e) => setsearch(e.target.value)}
                    value={search}
                  />
                </div>
                <div className="h-[42px] sm:w-[140px] w-[40%] rounded-[7px] text-[#FFFFFF] bg-[#4C6156] flex justify-center items-center gap-1 cursor-pointer">
                  <MdOutlineFileDownload className="text-xl" />
                  <p className="font-[500] text-[15px]">
                    <DownloadCsv data={filtered} />
                  </p>
                </div>
              </div>
            </div>

            <div className="w-[100%] mt-7">
              {filtered?.length > 0 ? (
                <DataGrid
                  rows={filtered}
                  getRowId={(row) => row?._id}
                  columns={columns}
                  disableRowSelectionOnClick
                  initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 5 },
                    },
                  }}
                  pageSizeOptions={[5, 10]}
                  checkboxSelection
                />
              ) : (
                <p className="text-center w-[100%]">No data found</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
