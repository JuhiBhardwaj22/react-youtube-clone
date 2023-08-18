import React from "react";
import userIcon from "../../../assets/img/userIcon.png";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-md ">
      {" "}
      <img
        className="mt-1 ml-2 h-7 rounded-full"
        alt="user-icon"
        src={userIcon}
      />
      <span className="font-bold px-3">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
