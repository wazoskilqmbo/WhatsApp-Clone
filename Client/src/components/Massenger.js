import { AppBar, Toolbar, makeStyles, Box } from "@material-ui/core";
import Login from "./account/Login";
import { AccountContext } from "../context/AccountProvider";
import { useContext } from "react";
import ChatBox from "./account/ChatBox";

const useStyles = makeStyles({
  components: {
    background: "#DCDCDC",
    height: "100vh",
  },
  loginHeader: {
    height: 200,
    backgroundColor: "#00bfa5",
    boxShadow: "none",
  },
  header: {
    height: 115,
    backgroundColor: "#128C7E",
    boxShadow: "none",
  },
});

const Massenger = () => {
  const classes = useStyles();

  const { account } = useContext(AccountContext);

  return (
    <Box className={classes.components}>
      <AppBar className={account ? classes.header : classes.loginHeader}>
        <Toolbar></Toolbar>
      </AppBar>
      {account ? <ChatBox /> : <Login />}
    </Box>
  );
};

export default Massenger;
