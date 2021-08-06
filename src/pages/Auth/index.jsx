import React, { useState } from 'react';
import styles from './styles.module.scss';
import SignUp from './SignUp';
import SignIn from './SignIn';

const Auth = () => {
    const [welcome, setWelcome] = useState(false)

    const setBannerClass = () => {
      const classArr = [styles.banner]
      if (welcome) classArr.push(styles.sendRight)
      return classArr.join(' ')
    }
  
    const setFormClass = () => {
      const classArr = [styles.form] 
      if (welcome) classArr.push(styles.sendLeft)
      return classArr.join(' ')
    }
  
    return (
      <div className={styles.container}>
  
        <div className={setBannerClass()}> 
  
          {welcome ? 
            <h2>Already have an account?</h2>
              : <h2>New to us?</h2>}
  
          <button onClick={()=> setWelcome(!welcome)}>
            {welcome ?
              "Sign In"
                : "Create Account"}
          </button>
        </div>
  
        <div className={setFormClass()}> 
            {welcome ? 
              <SignUp /> 
                : <SignIn/>
            }
            
        </div>
      </div>
    );
}

export default Auth;