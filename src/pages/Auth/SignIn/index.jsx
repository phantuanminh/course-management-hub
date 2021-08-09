import React, { useState } from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";
import base64 from "base-64";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitClick = async (e) => {
    e.preventDefault();

    // Configure request options
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    };

    const response = await fetch(
      "http://localhost:5000/api/login",
      requestOptions
    );

    // If register success, console log the username and request access token
    if (response.ok) {
      const tokenRequestOptions = {
        headers: {
          Authorization: "Basic " + base64.encode(username + ":" + password),
        },
      };

      // Request and console log token
      const tokenResponse = await fetch(
        "http://localhost:5000/api/token",
        tokenRequestOptions
      );
      if (tokenResponse.ok) {
        const token = await tokenResponse.json();
        sessionStorage.setItem("access_token", token.access_token);
      }

      // Reload page with authentication stored
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
