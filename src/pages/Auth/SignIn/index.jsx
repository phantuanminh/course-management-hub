import React, { useState } from "react";
import styles from "./styles.module.scss";
import { login } from "../../../utils/api";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmitClick = async (e) => {
    e.preventDefault();
    const response = await login(username, password);

    // If sign in success, save access token and reload page
    if (response.ok) {
      const data = await response.json();
      sessionStorage.setItem("access_token", data.access_token);
      window.location.reload();
    } else {
      // Set error message
      const message = await response.json();
      setError(message.error);
    }
  };

  return (
    <div action="#" className={styles.formComp}>
      <h1 className={styles.title}>Sign In</h1>
      <form className={styles.signInForm}>
        <label>Username</label>
        <input
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className={styles.error}>{error}</div>
        <br />
        <button className={styles.button} type="submit" onClick={onSubmitClick}>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
