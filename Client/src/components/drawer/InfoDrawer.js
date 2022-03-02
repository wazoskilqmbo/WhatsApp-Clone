import { Drawer, Box, Typography, makeStyles } from "@material-ui/core";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Profile from "./Profile";

const useStyles = makeStyles({
  header: {
    backgroundColor: "#00bfa5",
    height: 97,
    color: "#ffffff",
    display: "flex",
    "&>*": {
      marginTop: "auto",
      padding: 15,
      fontWeight: 600,
    },
  },
  component: {
    backgroundColor: "#ededed",
    height: "85%",
  },
});

const InfoDrawer = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  return (
    <Drawer open={open} onClose={handleClose}>
      <Box className={classes.header}>
        <ArrowBackIcon onClick={() => handleClose()} />
        <Typography>Profile</Typography>
      </Box>
      <Box className={classes.component}>
        <Profile />
      </Box>
    </Drawer>
  );
};

export default InfoDrawer;
