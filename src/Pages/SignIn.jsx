import React from "react";
import { useRef } from "react";
import Sign from "./Sign.module.css";

const SignIn = (props) => {
  let input1 = useRef();
  let input2 = useRef();

  let signIn = async () => {
    let response = await fetch(
      "https://itcmedia-97c9e-default-rtdb.firebaseio.com/Accounts/Account.json"
    );
    let data = await response.json();
    for (let i in Object.values(data)) {
      if (
        Object.values(data)[i].password.trim() ===
          input2.current.value.trim() &&
        Object.values(data)[i].username.trim() === input1.current.value.trim()
      ) {
        props.loggedIn(input1.current.value);
        break;
      }
    }
  };

  let SignUp = () => {
    props.signUp();
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
        <button onClick={signIn} className={Sign.container__form__btn}>
          Sign In
        </button>
        <p className={Sign.container__p}>
          If you do not have an account click{" "}
          <span onClick={SignUp} className={Sign.container__p__span}>
            here.
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
