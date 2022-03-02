import { Box, makeStyles } from "@material-ui/core";
import { useEffect, useState, useContext } from "react";
import { getUsers } from "../../service/api";

import Conversation from "./Conversation";
import { AccountContext } from "../../context/AccountProvider";

const useStyles = makeStyles({
  component: {
    overflow: "overlay",
    height: "81vh",
  },
  divider: {
    margin: "0 0 0 67px",
    backgroundColor: "#F2F2F2",
  },
});

function Conversations({ text }) {
  const [users, setUsers] = useState([]);
  const { account, socket, setActiveUsers } = useContext(AccountContext);

  useEffect(() => {
    const fetchData = async () => {
      let data = await getUsers();
      const filterData = data.filter((user) =>
        user.name.toLowerCase().includes(text.toLowerCase())
      );
      setUsers(filterData);
    };
    fetchData();
  }, [text]);

  //socket.io useEffect
  useEffect(() => {
    socket.current.emit("addUser", account.googleId);
    socket.current.on("getUsers", (users) => {
      setActiveUsers(users);
    });
  }, [account]);

  const classes = useStyles();
  return (
    <Box className={classes.component}>
      {users.map(
        (user) =>
          user.googleId !== account.googleId && <Conversation user={user} />
      )}
    </Box>
  );
}
export default Conversations;
