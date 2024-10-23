import React, { useState } from "react";
import { HiMiniUsers } from "react-icons/hi2";
import { MdWindow } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { RiLogoutBoxFill } from "react-icons/ri";
import Allert from "./Modals/Allert";
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

const MobileSidebar = ({ drawerOpen, toggleDrawer }) => {
  const navigate = useNavigate();
  const [allertModal, setallertModal] = useState(false);

  const handleallertModal = () => {
    setallertModal(!allertModal);
  };

  const handleLogout = () => {
    localStorage.removeItem("weddId");
    navigate("/signin");
  };

  return (
    <>
      <Allert
        allertModal={allertModal}
        handleallertModal={handleallertModal}
        text="Are you sure to logout?"
        func={handleLogout}
      />
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}  // Allows the drawer to close when clicking outside
        PaperProps={{
          sx: { backgroundColor: "#4C6156", width: 260 },
        }}
      >
        <div style={{  padding: "16px", color: "#FFFFFF", fontSize: "26px", fontWeight: 400 }}>
          The Welcome Pass
        </div>

        <List>
          <ListItem button onClick={() => navigate("/")} style={{borderBottom:"1px solid #fff"}}>
            <ListItemIcon>
              <HiMiniUsers style={{ color: "#FFFFFF", fontSize: "24px" }} />
            </ListItemIcon>
            <ListItemText primary="All Users" primaryTypographyProps={{ style: { color: "#FFFFFF", fontSize: "17px" } }} />
          </ListItem>

          <ListItem button onClick={() => navigate("/event")} sx={{ mt: 2 }} style={{borderBottom:"1px solid #fff"}}>
            <ListItemIcon>
              <MdWindow style={{ color: "#FFFFFF", fontSize: "24px" }} />
            </ListItemIcon>
            <ListItemText primary="Events" primaryTypographyProps={{ style: { color: "#FFFFFF", fontSize: "17px" } }} />
          </ListItem>

          <ListItem button onClick={handleallertModal} sx={{ mt: 2 }} style={{borderBottom:"1px solid #fff"}}>
            <ListItemIcon>
              <RiLogoutBoxFill style={{ color: "#FFFFFF", fontSize: "24px" }} />
            </ListItemIcon>
            <ListItemText primary="Logout" primaryTypographyProps={{ style: { color: "#FFFFFF", fontSize: "17px" } }} />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default MobileSidebar;
