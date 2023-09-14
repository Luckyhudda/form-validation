import { useState } from "react";
import style from "./LoginForm.module.css";
import { emailValidation, PasswordValidation } from "../service/regEx";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onClickHandler = () => {
    let res = emailValidation(email),
      pass = PasswordValidation(password);
    console.log(res, pass);
    if (res && pass) {
      console.log(`${email}`, `${password}`);
      alert("Good Job : Your Email & Password Validate ❤");
    } else {
      alert("please enter valid email & password");
    }
  };
  return (
    <>
      <div className={style.formBox}>
        <h1>Log in</h1>
        <div className={style.inputBox}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Enter your Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter Your Password"
          />
        </div>
        <button onClick={onClickHandler} className={style.btn}>
          Log In
        </button>
      </div>
    </>
  );
};
export default LoginForm;
