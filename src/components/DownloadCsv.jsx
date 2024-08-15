import React from "react";
import { CSVLink } from "react-csv";

const DownloadCsv = ({ data }) => {
  console.log(data);
  const csvData = data?.map((item) => {
    return {
      Name: item?.fName,
      Email: item?.email,
      Total_Guests: item?.numberOfGuests,
      Status: item?.AttendingStatus,
      Job: item?.job,
      phone: item?.phone,
    };
  });

  return (
    <CSVLink
      data={csvData}
      filename={`pass.csv`}
      style={{ textDecoration: "none", color: "white" }}
    >
      Export CSV
    </CSVLink>
  );
};

export default DownloadCsv;
