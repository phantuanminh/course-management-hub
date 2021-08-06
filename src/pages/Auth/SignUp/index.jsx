import React, { useState } from 'react';
import styles from  './styles.module.scss';
import clsx from 'clsx';
import base64 from 'base-64';

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitClick = async (e) => {
    e.preventDefault();

    // Configure request options
    const requestOptions = {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    }

    const response = await fetch("http://localhost:5000/api/register", requestOptions);

    // If register success, console log the username and request access token
    if (response.ok) {
      const data = await response.json();
      console.log(data);

      const tokenRequestOptions = {
        headers: { Authorization: "Basic " + base64.encode(username + ":" + password) }
      }

      // Request and console log token
      const tokenResponse = await fetch("http://localhost:5000/api/token", tokenRequestOptions);
      if (tokenResponse.ok) {
        const token = await tokenResponse.json();
        console.log(token);
        sessionStorage.setItem('access_token', token.access_token);
      }
    }
    
  }

  return (
    <div className={clsx(styles.formComp, styles.center)}>
      <h1>Sign up</h1>
      <form action="#" className={clsx(styles.signUpForm, styles.center)}>
        <label>
          Username:
          <br/>
          <input name="username"
           value={username} 
           onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <br/>
          <input name="password"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br/>
        <button
          type="submit"
          onClick={onSubmitClick}
        >
          Sign Up!
        </button>
      </form>
    </div>
  );
}

export default SignUp;