import React, { useState } from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { login } from "../../../utils/api";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitClick = async (e) => {
    e.preventDefault();
    const response = await login(username, password);

    // If sign in success, save access token and reload page
    if (response.ok) {
      const data = await response.json();
      sessionStorage.setItem("access_token", data.access_token);
      window.location.reload();
    }
  };

  return (
    <div action="#" className={clsx(styles.formComp, styles.center)}>
      <h1>Sign In</h1>
      <form className={clsx(styles.signInForm, styles.center)}>
        <label>
          Username:
          <br />
          <input
            name="email"
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
          Sign In!
        </button>
      </form>
    </div>
  );
};

export default SignIn;
