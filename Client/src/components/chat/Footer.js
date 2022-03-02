import { Box, makeStyles, InputBase } from "@material-ui/core";

// icons
import MoodIcon from "@mui/icons-material/Mood";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import AttachFileIcon from "@mui/icons-material/AttachFile";

const useStyles = makeStyles((theme) => ({
  footer: {
    height: "55px",
    background: "#ededed",
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: "0 15px",
    "&>*": {
      margin: 5,
      color: "#919191",
    },
  },
  searchBox: {
    backgroundColor: "#ffffff",
    borderRadius: 18,
    width: `calc(95% - 100px)`,
  },
  clipIcon: {
    transform: " rotate(40deg)",
  },
  inputRoot: {
    width: "100%",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: 25,
    fontSize: 14,
    width: "100%",
    height: 20,
  },
}));

function Footer({ sendText, setValue, value }) {
  const classes = useStyles();
  return (
    <Box className={classes.footer}>
      <MoodIcon />
      <AttachFileIcon className={classes.clipIcon} />
      <Box className={classes.searchBox}>
        <InputBase
          placeholder="Type a message"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
          onKeyPress={(e) => sendText(e)}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </Box>
      <KeyboardVoiceIcon />
    </Box>
  );
}

export default Footer;
