/* eslint-disable no-unused-vars */
import "./messenger.css";
import logo from '../../images/Chat/helmet.png'
import Navpar from "../../component/navpar/Navpar";
import Conversation from "../../component/conversations/Conversation";
import Message from "../../component/message/Message";
// import ChatOnline from "../../component/chatOnline/ChatOnline.jsx";
import { useContext, useEffect, useRef, useState } from "react";
// import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
// import { io } from "socket.io-client";

export default function Messenger() {

  return (
    <>
      {/* <Navpar /> */}
      <div className="chats">
        <div className="container">
          <div className="res-wid">
            {/* Start right chat */}
            <Message  own="true"/>
            {/* End Right Chat */}
            {/* Start Left chat  */}
            <Conversation/>
            {/* End left chat */}
          </div>
        </div>
      </div>
    </>
  );
}
