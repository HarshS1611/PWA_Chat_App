import React, { useContext, useState } from "react";
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

  const [selectedUser, setSelectedUser] = useState(null);
  console.log(selectedUser)
  const handleUserSelection = (userData) => {
    setSelectedUser(userData);
  };

  return (
    <div className="chat">
      <div className="chatInfo">
        <section className="top-nav">

          <input id="menu-toggle" type="checkbox" />
          <label className='menu-button-container' for="menu-toggle">
            <div className='menu-button'></div>
          </label>
          {!selectedUser ? (<ul className="menu">

            <li><Navbar /></li>
            <li> <Search onUserSelect={handleUserSelection} /></li>
            <li> <Chats /></li>
            <li><input id="menu-toggle" type="checkbox" />
              <label className='menu-button-container' for="menu-toggle">
                <div className='menu-button-cross'> Close</div>
              </label></li>
          </ul>) : (<></>)}
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