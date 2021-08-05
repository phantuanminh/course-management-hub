import React from 'react';
import styles from './styles.module.scss';

const NavBar = () => {
    return (
        <nav className={styles.navBar}>
            <div className={styles.navTitle}>
                <h1 className={styles.navText}>Course Management Hub</h1>
            </div>
            <div className={styles.navItem} href='/home'>
                <i className='far fa-user-circle' />
            </div>
            <div className={styles.navItem} href='/home'>
                <i className='far fa-calendar-alt' />
            </div>
        </nav>
    );
};

export default NavBar;