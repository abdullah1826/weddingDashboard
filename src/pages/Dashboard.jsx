import React from "react";
import Sidebar from "../components/Sidebar";
import { CiSearch } from "react-icons/ci";
import { MdOutlineFileDownload } from "react-icons/md";
import { DataGrid } from "@mui/x-data-grid";
import { IoQrCodeOutline } from "react-icons/io5";
import { FiEye } from "react-icons/fi";
import { GoTrash } from "react-icons/go";

const Dashboard = () => {
  const columns = [
    { field: "fullName", headerName: "Full Name", width: 130 },
    { field: "totalGuests", headerName: "Total Guests", width: 130 },
    { field: "email", headerName: "Email", width: 130 },
    {
      field: "selectedDish",
      headerName: "Selected Dish",
      width: 130,
    },
    {
      field: "status",
      headerName: "Status",
      sortable: false,
      width: 130,
      renderCell: (params) => (
        <div className="h-[100%] flex items-center">
          <div className="h-[30px] w-[100px] bg-[#CAFFAA] rounded-[5px] flex justify-center items-center font-[600] text-[11px] text-[#20B408]">
            {/* {params.value} */}
            ATTENDING
          </div>
        </div>
      ),
    },
    {
      field: "qrValue",
      headerName: "QR Code",
      width: 130,
      renderCell: (params) => (
        <div className="h-[100%] flex justify-center items-center w-[70%] ">
          <IoQrCodeOutline className="text-2xl" />
        </div>
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 130,
      renderCell: (params) => (
        <div className="h-[100%] flex justify-between items-center w-[70%] ">
          <MdOutlineFileDownload className="text-[#9D9D9D] text-xl cursor-pointer" />
          <FiEye className="text-[#9D9D9D] text-xl cursor-pointer" />
          <GoTrash className="text-[#9D9D9D] hover:text-[red] text-xl cursor-pointer" />
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

  return (
    <div className="w-[100%] h-[100vh] flex">
      <Sidebar />
      <div className="w-[78%] h-[100%] border flex flex-col items-center overflow-y-scroll">
        <div className="w-[100%] h-[80px] border-b shadow-lg"></div>
        <div className="w-[93%] mt-8">
          <div className="w-[100%] flex justify-between items-center">
            <p className="font-[700] text-[30px] text-[#4C6156]">All Members</p>
            <div className="flex gap-4">
              <div className="w-[210px] h-[42px] border border-[#C7C7C7] rounded-[7px] flex">
                <div className="w-[20%] h-[100%] flex justify-center items-center">
                  <CiSearch className="text-[#868686] text-xl" />
                </div>
                <input
                  type="text"
                  className="h-[100%] w-[78%] outline-none"
                  placeholder="Search"
                />
              </div>
              <div className="h-[42px] w-[120px] rounded-[7px] text-[#FFFFFF] bg-[#4C6156] flex justify-center items-center gap-1 cursor-pointer">
                <MdOutlineFileDownload className="text-xl" />
                <p className="font-[500] text-[15px]">Export</p>
              </div>
            </div>
          </div>

          <div className="w-[100%] mt-7">
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
