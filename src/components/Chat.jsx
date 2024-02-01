import React, { useContext } from "react";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
import Navbar from "./Navbar";
import { signOut } from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import Sidebar from "./Sidebar";
import Search from "./Search";
import Chats from "./Chats";
const Chat = () => {
  const { data } = useContext(ChatContext);
  const { currentUser } = useContext(AuthContext)

  const [isOpen, setIsOpen] = React.useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
    console.log(isOpen)
  }

  return (
    <div className="chat">
      <div className="chatInfo">
        <section class="top-nav">

          <input id="menu-toggle" type="checkbox" />
          <label class='menu-button-container' for="menu-toggle">
            <div class='menu-button'></div>
          </label>
          <ul class="menu">

            <li><Navbar /></li>
            <li> <Search /></li>
            <li> <Chats /></li>
            <li><input id="menu-toggle" type="checkbox" />
              <label class='menu-button-container' for="menu-toggle">
                <div class='menu-button-cross'> Close</div>
              </label></li>
          </ul>
        </section>
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
