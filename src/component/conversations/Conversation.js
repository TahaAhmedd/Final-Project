/* eslint-disable no-unused-vars */
import axios from "axios";
import "../../pages/messenger/messenger.css";
import logo from "../../images/Chat/helmet.png"
import { useEffect, useState } from "react";
// import "./conversation.css";

export default function Conversation({ conversation, currentUser }) {


    return (
        <>
            <div className=" left-ch">
                <div className="search-chat">
                    <i className="fa-solid fa-search"></i>
                    <input type="search" placeholder="ابحث هنا" />
                </div>
                <div className="scrols messages">
                    <div>
                        <img src={logo} alt="" />
                        <h3>على احمد </h3>
                        <p>السلام عليكم.....</p>
                        <div className="chatOnline"></div>
                    </div>
                    <div>
                        <img src={logo} alt="" />
                        <h3>على احمد </h3>
                        <p>السلام عليكم.....</p>
                    </div>
                    <div>
                        <img src={logo} alt="" />
                        <h3>على احمد </h3>
                        <p>السلام عليكم.....</p>
                    </div>
                    <div>
                        <img src={logo} alt="" />
                        <h3>على احمد </h3>
                        <p>السلام عليكم.....</p>
                    </div>
                    <div>
                        <img src={logo} alt="" />
                        <h3>على احمد </h3>
                        <p>السلام عليكم.....</p>
                    </div>
                    <div>
                        <img src={logo} alt="" />
                        <h3>على احمد </h3>
                        <p>السلام عليكم.....</p>
                    </div>
                </div>
            </div>
        </>
    );
}
