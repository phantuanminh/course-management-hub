import React from 'react';
import styles from './styles.module.scss';

import DEMO_1 from '../../assets/demo-1.png'

const LandingPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1 style={{fontSize : 40}}>Course Management Hub</h1>
                <p>Manage your courses easier with a few clicks</p>
            </div>
            <div className={styles.menu}>
                <div>
                    <a className={styles.button} href="/sign_in"><span>Sign in</span></a>
                </div>
                <div>
                    <a className={styles.button} href="/sign_up" style={{backgroundColor: "#353535"}}><span>Sign up</span></a>
                </div>
            </div>
            <div className={styles.demo}>
                <img className={styles.image} src={DEMO_1} alt="Demo 1"  />
            </div>
        </div>
    );
}

export default LandingPage;