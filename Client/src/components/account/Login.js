import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import {
  Dialog,
  withStyles,
  Box,
  Typography,
  makeStyles,
  List,
  ListItem,
} from "@material-ui/core";
import { GoogleLogin } from "react-google-login";
import { clientId } from "../../constants/data";

import { addUser } from "../../service/api";

const useStyles = makeStyles({
  component: {
    display: "flex",
  },
  leftComponent: {
    padding: "56px 0 56px 56px",
  },
  qrcode: {
    height: 264,
    width: 264,
    padding: "56px 0 0 56px",
  },
  title: {
    fontSize: 24,
    marginBottom: 25,
    color: "#525252",
    fontFamily:
      "Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif",
    fontWeight: 300,
  },
  list: {
    "&>*": {
      fontSize: 18,
      padding: 0,
      marginTop: 15,
      lineHeight: "28px",
      color: "#4a4a4a",
    },
  },
});

const style = {
  dialogPaper: {
    height: "95%",
    width: "60%",
    borderRadius: 0,
    marginTop: "12%",
    boxShadow: "none",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
};

const Login = ({ classes }) => {
  const classesname = useStyles();
  const qrurl = "https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg";

  const { setAccount } = useContext(AccountContext);

  const onLoginSuccess = async (res) => {
    console.log("Login Success", res.profileObj);
    setAccount(res.profileObj);
    await addUser(res.profileObj);
  };
  const onLoginFailure = () => {
    console.log("Login Failed");
  };
  return (
    <Dialog
      open={true}
      classes={{ paper: classes.dialogPaper }}
      // BackdropProps={{ style: { backgroundColor: "unset" } }}
    >
      <Box className={classesname.component}>
        <Box className={classesname.leftComponent}>
          <Typography className={classesname.title}>
            To use WhatsApp on your computer:
          </Typography>
          <List className={classesname.list}>
            <ListItem>1. Open WhatsApp on your phone</ListItem>
            <ListItem>
              2. Tap Menu or Settings and select Linked Devices
            </ListItem>
            <ListItem>
              3. Point your to this screen to capture the code
            </ListItem>
          </List>
        </Box>
        <Box style={{ position: "relative" }}>
          <img src={qrurl} alt="" className={classesname.qrcode} />
          <Box style={{ position: "absolute", left: "50%", top: "50%" }}>
            <GoogleLogin
              clientId={clientId}
              cookiePolicy={"single_host_origin"}
              buttonText={""}
              isSignedIn={true}
              onSuccess={onLoginSuccess}
              onFailure={onLoginFailure}
            />
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};
export default withStyles(style)(Login);
