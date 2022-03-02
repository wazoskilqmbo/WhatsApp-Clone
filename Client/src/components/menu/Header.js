import { Box, makeStyles } from "@material-ui/core";
import ChatIcon from "@mui/icons-material/Chat";
import { useContext, useState } from "react";
import { AccountContext } from "../../context/AccountProvider";
import HeaderMenu from "./HeaderMenu";
import Drawer from "../drawer/InfoDrawer";

const useStyles = makeStyles({
  header: {
    height: 35,
    backgroundColor: "#ededed",
    padding: "10px 16px",
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    height: 37,
    width: 37,
    borderRadius: "50%",
  },
  icons: {
    marginLeft: "auto",
    "&>*": {
      marginLeft: 2,
      padding: 8,
      color: "#919191",
    },
  },
});

function Header() {
  const classes = useStyles();

  const { account } = useContext(AccountContext);
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(true);
  };
  return (
    <>
      <Box className={classes.header}>
        <img
          src={account.imageUrl}
          alt="display-pic"
          className={classes.avatar}
          onClick={() => toggleDrawer()}
        />
        <Box className={classes.icons}>
          <ChatIcon style={{ fontSize: 22, marginRight: 8 }} />
          <HeaderMenu />
        </Box>
      </Box>
      <Drawer open={open} setOpen={setOpen} />
    </>
  );
}

export default Header;
