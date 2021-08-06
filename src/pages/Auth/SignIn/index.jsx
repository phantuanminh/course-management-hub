import React, {useState} from 'react';
import styles from  './styles.module.scss';
import clsx from 'clsx';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={clsx(styles.formComp, styles.center)}>
      <h1>Sign In</h1>
      <form className={clsx(styles.signInForm, styles.center)}>
        <label>
          Email:
          <br/>
          <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <br/>
          <input name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br/>
        <button
          onClick={async () => {
            const data = { email, password };
            const response = await fetch("/api/login", {
              crossDomain: true,
              method: "POST",
              mode: "cors",
              cache: "no-cache",
              credentials: "same-origin",
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "OPTIONS, GET, POST",
              },
              body: JSON.stringify(data),
            });

            if (response.ok) {
              console.log("respond work");
              const data = await response.json();
              console.log(data);
            }
          }}
        >
          Sign In!
        </button>
      </form>
    </div>
  );
}

export default SignIn;