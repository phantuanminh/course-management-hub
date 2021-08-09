import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Loading from "../../components/Loading";
import { Redirect } from "react-router-dom";
import { isAuthenticated } from "../../utils/api";

const Auth = () => {
  const [welcome, setWelcome] = useState(false);
  const [auth, setAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    isAuthenticated().then((response) => {
      if (response.status === 200) {
        setAuth(true);
      }
      setIsLoading(false);
    });
  });

  if (isLoading) {
    return <Loading />;
  }

  if (auth) {
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
