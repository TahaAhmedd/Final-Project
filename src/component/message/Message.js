/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "../../pages/messenger/messenger.css"
import logo from "../../images/Chat/helmet.png"
// import axios from "axios";
import { format } from "timeago.js";

export default function Message({message, own}) {


    return (
        <>
            <li className={own ? "sent" : "replies"}>
                <img src={logo} alt="" />
                <p>
                    {message.text}
                    <small>{format(message.createdAt)}</small>
                </p>
            </li>

        </ >
    );
}
