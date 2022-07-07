import React from "react";
import { useRef } from "react";
import Sign from "./Sign.module.css";

const SignUp = (props) => {
  let input1 = useRef();
  let input2 = useRef();

  let CreateNewAccount = async () => {
    let response = await fetch(
      "https://itcmedia-97c9e-default-rtdb.firebaseio.com/Accounts/Account.json",
      {
        method: "POST",
        body: JSON.stringify({
          username: input1.current.value,
          password: input2.current.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    props.signIn();
  };

  let SignIn = () => {
    props.signIn();
  };

  return (
    <div className={Sign.container}>
      <h1 className={Sign.container__h1}>ITCMedia</h1>
      <div className={Sign.container__form}>
        <input
          ref={input1}
          placeholder="Username"
          className={Sign.container__form__input}
          type="text"
        />
        <input
          ref={input2}
          placeholder="Password"
          className={Sign.container__form__input}
          type="password"
        />
        <button
          onClick={CreateNewAccount}
          className={Sign.container__form__btn}
        >
          Sign Up
        </button>
        <p className={Sign.container__p}>
          If you have an account click{" "}
          <span onClick={SignIn} className={Sign.container__p__span}>
            here.
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
