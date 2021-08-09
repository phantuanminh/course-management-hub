import React, { useState } from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { register } from "../../../utils/api";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitClick = async (e) => {
    e.preventDefault();
    const response = await register(username, password);
    // If register success, save access token and reload page
    if (response.ok) {
      const data = await response.json();
      sessionStorage.setItem("access_token", data.access_token);
      window.location.reload();
    }
  };

  return (
    <div className={clsx(styles.formComp, styles.center)}>
      <h1>Sign up</h1>
      <form action="#" className={clsx(styles.signUpForm, styles.center)}>
        <label>
          Username:
          <br />
          <input
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <br />
          <input
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit" onClick={onSubmitClick}>
          Sign Up!
        </button>
      </form>
    </div>
  );
};

export default SignUp;
