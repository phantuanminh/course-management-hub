import React, { useState } from 'react';
import styles from  './styles.module.scss';
import clsx from 'clsx';

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={clsx(styles.formComp, styles.center)}>
      <h1>Sign up</h1>
      <form className={clsx(styles.signUpForm, styles.center)}>
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
          onClick={async () => {
            // Configure request options
            const requestOptions = {
              crossDomain: true,
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ username, password })
            }

            const response = await fetch("http://localhost:5000/api/user", requestOptions);

            console.log(response);

            if (response.ok) {
              console.log("respond work");
              const data = await response.json();
              console.log(data);
            }
          }}
          >
          Sign Up!
        </button>
      </form>
    </div>
  );
}

export default SignUp;