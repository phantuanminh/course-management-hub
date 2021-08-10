import React, { useState } from "react";
import styles from "./styles.module.scss";
import { register } from "../../../utils/api";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmitClick = async (e) => {
    e.preventDefault();
    const response = await register(email, username, password);
    // If register success, save access token and reload page
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
    <div className={styles.formComp}>
      <h1 className={styles.title}>Sign Up</h1>
      <form className={styles.signUpForm}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

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
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
