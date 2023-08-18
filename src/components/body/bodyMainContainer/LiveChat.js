import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../../utils/store/chatSlice";
import {
  randomNameStringGenerator,
  randomMessageStringGenerator,
} from "../../../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");
  const chatSelector = useSelector((store) => store.chat.message);
  console.log(chatSelector);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addMessage({
        name: "Juhi Bhardwaj",
        message: liveMessage,
      })
    );
    setLiveMessage("");
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("API polling");
      //We need to pass the action

      dispatch(
        addMessage({
          name: randomNameStringGenerator(),
          message: randomMessageStringGenerator(20) + "🚀",
        })
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <div className="ml-4 p-2 border border-black h-[400px] w-[400px] rounded-lg bg-slate-100 overflow-y-scroll flex flex-col-reverse">
        {chatSelector.map((item, index) => {
          return (
            <ChatMessage name={item.name} key={index} message={item.message} />
          );
        })}
      </div>
      <form
        className=" mt-2 ml-4 rounded-sm"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          className="w-[300px] border-b-2 focus:outline-none border-blue-500 focus:outline-b- "
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="border w-20 ml-4 h-8 rounded-full px-3 text-blue-500 border-blue-600">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
