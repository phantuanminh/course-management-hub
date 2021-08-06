import React from 'react';
import styles from  './styles.module.scss';
import clsx from 'clsx';

const SignUp = () => {

  return (
    <div className={clsx(styles.formComp, styles.center)}>
      <h1>Sign up</h1>
      <form className={clsx(styles.signUpForm, styles.center)}>
        <label>
          Username:
          <br/>
          <input />
        </label>
        <label>
          Email:
          <br/>
          <input />
        </label>
        <label>
          Password:
          <br/>
          <input />
        </label>
        <br/>
        <button>
          Sign Up!
        </button>
      </form>
    </div>
  );
}

export default SignUp;