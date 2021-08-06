import React, {useState} from 'react';
import styles from  './styles.module.scss';
import clsx from 'clsx';

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={clsx(styles.formComp, styles.center)}>
      <h1>Sign In</h1>
      <form className={clsx(styles.signInForm, styles.center)}>
        <label>
          Username:
          <br/>
          <input name="email" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <br/>
          <input name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br/>
        <button
          onClick={async () => {
            // Configure request options
            const requestOptions = {
              method: 'POST',
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ username, password })
            }

            const response = await fetch("http://localhost:5000/api/login", requestOptions);
            const data = await response.json();

            console.log(data);
          }}
        >
          Sign In!
        </button>
      </form>
    </div>
  );
}

export default SignIn;