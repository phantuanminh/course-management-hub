import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { Redirect } from "react-router-dom";

const Auth = () => {
  const [welcome, setWelcome] = useState(false);
  const [logged, setLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const token = sessionStorage.getItem("access_token");

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    };

    // Verify user identity
    const verify = () => {
      fetch("http://localhost:5000/api/verify", requestOptions).then(
        (response) => {
          if (response.status === 201) {
            setLogged(true);
          }
          setIsLoading(false);
        }
      );
    };

    verify();
  }, [token]);

  // Wait until request handled
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Redirect to home if logged in
  if (logged) {
    return <Redirect to="/home" />;
  }

  const setBannerClass = () => {
    const classArr = [styles.banner];
    if (welcome) classArr.push(styles.sendRight);
    return classArr.join(" ");
  };

  const setFormClass = () => {
    const classArr = [styles.form];
    if (welcome) classArr.push(styles.sendLeft);
    return classArr.join(" ");
  };

  return (
    <div className={styles.container}>
      <div className={setBannerClass()}>
        {welcome ? <h2>Already have an account?</h2> : <h2>New to us?</h2>}

        <button onClick={() => setWelcome(!welcome)}>
          {welcome ? "Sign In" : "Create Account"}
        </button>
      </div>

      <div className={setFormClass()}>{welcome ? <SignUp /> : <SignIn />}</div>
    </div>
  );
};

export default Auth;
