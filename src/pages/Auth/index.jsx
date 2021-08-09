import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Loading from "../../components/Loading";
import { Redirect } from "react-router-dom";
import base64 from "base-64";

const Auth = () => {
  const [welcome, setWelcome] = useState(false);
  const [logged, setLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const token = sessionStorage.getItem("access_token");

  // If authenticated, redirect to user's homepage
  useEffect(() => {
    const requestOptions = {
      headers: { Authorization: "Bearer " + base64.encode(token) },
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

  if (isLoading) {
    return <Loading />;
  }

  if (logged) {
    return <div>hello</div>;
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
