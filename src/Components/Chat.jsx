import { useState } from "react";
import { useContext } from "react";
import PersonAdd from "../Context/Person";
import chat from "./Chat.module.css";
import Message from "./message";

const Chat = () => {
  let { Messages, Username, Display } = useContext(PersonAdd);
  let [input, setInput] = useState("");

  let content;

  if (Messages !== null) {
    content = Messages.map((item, index) => {
      return (
        <Message
          username={item.id}
          id={item.id === Username ? "mine" : "your"}
          key={index}
        >
          {item.message}
        </Message>
      );
    });
  } else {
    content = <p className={chat.Default}>Loading...</p>;
  }

  let SendingtoFireBase = async () => {
    let response = await fetch(
      `https://itcmedia-97c9e-default-rtdb.firebaseio.com/Accounts/Chat.json`,
      {
        method: "POST",
        body: JSON.stringify({ id: Username, message: input }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    Display();
    setInput("");
  };

  let WritingMessage = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className={chat.container}>
      <div className={chat.container__chatbox}>{content}</div>
      <div className={chat.container__inputbox}>
        <input
          onChange={WritingMessage}
          value={input}
          className={chat.container__inputbox__input}
          type="text"
        />
        <button
          onClick={SendingtoFireBase}
          className={chat.container__inputbox__btn}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Chat;
