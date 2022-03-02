import { Box, makeStyles, Typography } from "@material-ui/core";
import { AccountContext } from "../../context/AccountProvider";
import { useContext } from "react";

const useStyles = makeStyles({
  displayPic: {
    width: 200,
    height: 200,
    borderRadius: "50%",
    padding: "18px 0",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
  },
  nameContainer: {
    background: "#ffffff",
    padding: "12px 30px 2px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
    "&:first-child": {
      fontSize: 14,
    },
  },
  description: {
    padding: "10px 20px 28px 30px",
    "& > *": {
      fontSize: 12,
      color: "rgba(0,0,0,0.45)",
    },
  },
});

const Profile = () => {
  const classes = useStyles();
  const { account } = useContext(AccountContext);
  return (
    <>
      <Box className={classes.imageContainer}>
        <img src={account.imageUrl} alt="dp" className={classes.displayPic} />
      </Box>

      <Box className={classes.nameContainer}>
        <Typography style={{ fontSize: 14, color: "#009688" }}>
          Your Name
        </Typography>
        <Typography style={{ color: "#4A4A4A", margin: "14px 0" }}>
          {account.name}
        </Typography>
      </Box>

      <Box className={classes.description}>
        <Typography>
          This is not your username or pin. This name will be visible to your
          WhatsApp contacts.
        </Typography>
      </Box>

      <Box className={classes.nameContainer}>
        <Typography style={{ fontSize: 14, color: "#009688" }}>
          About
        </Typography>
        <Typography style={{ color: "#4A4A4A", margin: "14px 0" }}>
          Bored Human being are the smartest.
        </Typography>
      </Box>
    </>
  );
};

export default Profile;
