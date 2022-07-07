import React, { useState } from "react";
import logged from "./Logged.module.css";
import Chat from "../Components/Chat";
import PersonAdd from "../Context/Person";
import { useEffect } from "react";

const Logged = (props) => {
  let [messages, setMessages] = useState(null);

  useEffect(() => {
    fetch(
      `https://itcmedia-97c9e-default-rtdb.firebaseio.com/Accounts/Chat.json`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data === null) {
          setMessages(null);
        } else {
          setMessages(Object.values(data));
        }
      });
  });

  let display = () => {
    fetch(
      `https://itcmedia-97c9e-default-rtdb.firebaseio.com/Accounts/Chat.json`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data === null) {
          setMessages(null);
        } else {
          setMessages(Object.values(data));
        }
      });
  };

  return (
    <PersonAdd.Provider
      value={{
        Username: props.username,
        Messages: messages,
        Display: display,
      }}
    >
      <header className={logged.container__header}>
        <h1 className={logged.container__header__h1}>
          Welcome{" "}
          <span className={logged.container__header__h1__span}>
            {props.username}!
          </span>
        </h1>
      </header>
      <div className={logged.container__activity}>
        <Chat />
      </div>
    </PersonAdd.Provider>
  );
};

export default Logged;
