import { Box, Typography, makeStyles } from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { UserContext } from "../../context/UserProvider";

import { getConversation, setConversation } from "../../service/api";

const useStyles = makeStyles({
  component: {
    height: 40,
    display: "flex",
    padding: "13px 0",
    cursor: "pointer",
  },
  displayPicture: {
    width: 50,
    height: 50,
    objectFit: "cover",
    borderRadius: "50%",
    padding: "0 14px",
  },
  container: {
    display: "flex",
  },
  timestamp: {
    fontSize: 12,
    marginLeft: "auto",
    color: "#00000099",
    marginRight: 20,
  },
  text: {
    display: "block",
    color: "rgba(0, 0, 0, 0.6)",
    fontSize: 14,
  },
});

function Conversation({ user }) {
  const url = user.imageUrl;

  const classes = useStyles();

  const { account, newMessageFlag } = useContext(AccountContext);
  const { setPerson } = useContext(UserContext);

  const [message, setMessage] = useState({});

  useEffect(() => {
    const getConversationMessage = async () => {
      const data = await getConversation({
        sender: account.googleId,
        receiver: user.googleId,
      });
      setMessage({ text: data.message, timestamp: data.updatedAt });
    };
    getConversationMessage();
  }, [newMessageFlag]);

  const getUser = async () => {
    setPerson(user);
    await setConversation({
      senderId: account.googleId,
      receiverId: user.googleId,
    });
  };

  const getTime = (time) => {
    return time < 10 ? "0" + time : time;
  };

  return (
    <Box className={classes.component} onClick={() => getUser()}>
      <Box>
        <img src={url} alt="dp" className={classes.displayPicture} />
      </Box>
      <Box style={{ width: "100%" }}>
        <Box className={classes.container}>
          <Typography>{user.name}</Typography>
          {message.text && (
            <Typography className={classes.timestamp}>
              {getTime(new Date(message.timestamp).getHours())}:
              {getTime(new Date(message.timestamp).getMinutes())}
            </Typography>
          )}
        </Box>
        <Box>
          <Typography className={classes.text}>{message.text}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Conversation;
