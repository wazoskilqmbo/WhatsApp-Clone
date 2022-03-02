import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState, useContext } from "react";
import { Menu, MenuItem } from "@mui/material";
import { GoogleLogout } from "react-google-login";
import { clientId } from "../../constants/data";

import { AccountContext } from "../../context/AccountProvider";
import Drawer from "../drawer/InfoDrawer";

const HeaderMenu = () => {
  const [open, setOpen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const { setAccount } = useContext(AccountContext);

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const onLogoutSuccess = () => {
    alert("You have Logged Out");
    console.clear();
    setAccount("");
  };

  const toggleDrawer = () => {
    setOpenDrawer(true);
  };
  return (
    <>
      <MoreVertIcon onClick={handleClick} />
      <Menu
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            toggleDrawer();
          }}
          style={{
            fontSize: 14,
            padding: "15px 60px 5px 24px",
            color: "#4A4A4A",
          }}
        >
          Profile
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          style={{
            boxShadow: "none!important",
            border: "none!important",
            "&>*": { padding: "0px!important" },
          }}
        >
          <GoogleLogout
            clientId={clientId}
            buttonText={"Logout"}
            onLogoutSuccess={onLogoutSuccess}
          ></GoogleLogout>
        </MenuItem>
      </Menu>
      <Drawer open={openDrawer} setOpen={setOpenDrawer} />
    </>
  );
};

export default HeaderMenu;
