import React, { useState } from "react";
import styles from "./styles.module.scss";
import { register } from "../../../utils/api";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassWord, setConfirmPassWord] = useState("");
  const [error, setError] = useState("");

  const onSubmitClick = async (e) => {
    e.preventDefault();
    // Make sure password and confirm password match
    if (password !== confirmPassWord) {
      setError("Confirm password does not match");
      return;
    }
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
          placeholder="Example: course.management.hub@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Username</label>
        <input
          name="username"
          placeholder="Length: 4 - 32 characters"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Mininum: 8 characters, contains one letter and one number"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassWord}
          onChange={(e) => setConfirmPassWord(e.target.value)}
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
