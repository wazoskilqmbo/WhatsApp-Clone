import { Box, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  component: {
    background: "#f8f9fa",
    padding: "50px 0",
    textAlign: "center",
    height: "100%",
  },
});

const EmptyChat = () => {
  const classes = useStyle();

  const URL =
    "https://ik.imagekit.io/ag/wp-content/uploads/2015/01/QR-connected.png";
  return (
    <Box className={classes.component}>
      <img src={URL} alt="dp" />;
    </Box>
  );
};

export default EmptyChat;
