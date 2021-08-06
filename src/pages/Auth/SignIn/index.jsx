import React from 'react';
import styles from  './styles.module.scss';
import clsx from 'clsx';

const SignIn = () => {
  return (
    <div className={clsx(styles.formComp, styles.center)}>
      <h1>Sign In</h1>
      <form className={clsx(styles.signInForm, styles.center)}>
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
          Sign In!
        </button>
      </form>
    </div>
  );
}

export default SignIn;