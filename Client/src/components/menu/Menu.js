import { useState } from "react";
// componenets
import Conversations from "./Conversations";
import Header from "./Header";
import Search from "./Search";

function Menu() {
  const [text, setText] = useState("");
  return (
    <>
      <Header />
      <Search setText={setText} />
      <Conversations text={text} />
    </>
  );
}

export default Menu;
